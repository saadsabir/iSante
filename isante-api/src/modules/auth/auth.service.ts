import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly userService: UsersService,
    ){ }

    async validateUser(username: string, pass: string){
        //find if user exist with this email
        const user = await this.userService.findOneByEmail(username);
        if(!user){
            return null;
        }

        //find if user password match
        const match = await this.comparePassword(pass, user.password);

        if(!match){
            return null;
        }

        const { password, ...result } = user['dataValues'];
        return result;
    }

    public async login(user) {
        const token = await this.generateToken(user);
        return { user, token };
    }

    public async create(user) {
        //hash the password
        const pass = await this.hashPassword(user.password);

        //create the user
        const newUser = await this.userService.create({ ...user, pass });

        // tslint:disable-next-line: no-string-literal
        const { password, ...result } = newUser['dataValues'];

        //generate token
        const token = await this.generateToken(result);

        //return the user and the token
        return { user: result, token };
    }

    private async generateToken(user) {
        const token = await this.jwtService.signAsync(user);
        return token;
    }

    private async hashPassword(password) {
        const hash = await  bcrypt.hash(password,10);
        return hash;
    }

    private async comparePassword(enteredPassword, dbPassword) {
        const match = await bcrypt.comparePassword(enteredPassword, dbPassword);
        return match; 
    }  

    
}
