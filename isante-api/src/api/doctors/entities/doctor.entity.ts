import { Entity,Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { Transform } from 'class-transformer';

@Entity({ name: 'doctors' })
export class Doctor {

    @PrimaryGeneratedColumn()
    id: number;
    //@ObjectIdColumn()
    //id: ObjectID;

    //@Column()
    //id: number;

    @Column()
    num: string;

    @Column()
    fullname: string;

    @Column()
    adress: string;

    @Column()
    zipcode: string;

    @Column()
    city: string;

    @Column()
    country: string;

    @Column()
    phone: string;

    @Column()
    isPhoneVerified: boolean;

    @Column()
    email: string;

    @Column()
    isEmailVerified: boolean;

    @CreateDateColumn({ type: 'date' })
    createdAt: Date;

    @Column({ type: 'date' })
    updateAt: Date;

    @Column({ type: 'date' })
    endDate: Date;

    @Column()
    isDeleted: boolean;

    @Column()
    usefulInfo: string;
    
    @Column()
    introduction: string;
    
    @Column()
    languages: string;
    
    @Column()
    graduationDate: string;
    
    @Column()
    diplomaLibelle: string;
    
    @Column()
    trainings: string;
    
    @Column()
    experiences: string;
    
    @Column()
    profilPicture: string;
    
    @Column()
    cabinetPic1: string;
    
    @Column()
    cabinetPic2: string;
    
    @Column()
    cabinetPic3: string;
    
    @Column()
    prices: string;
    
    @Column()
    timetable: string;
    
    @Column()
    emergencyContact: string;
    
    @Column()
    paymentMethods: string;
    
    @Column()
    specialty: string;
    
    @Column()
    expertise: string;
    
    @Column()
    refundsConvention: string;

    @Column()
    healthCardAccepted: boolean;

    @Column()
    password: string;

    @Column()
    confirmPassword: string;
    
    constructor(partial: Partial<Doctor>) {
        Object.assign(this, partial);
    }
}