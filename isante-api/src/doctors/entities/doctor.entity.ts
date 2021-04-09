import { Entity,Column, PrimaryGeneratedColumn, CreateDateColumn} from 'typeorm';

@Entity({ name: 'doctors' })
export class Doctor {

    @PrimaryGeneratedColumn()
    id: number;

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

    @CreateDateColumn({ type: 'date' })
    startDate: Date;

    @CreateDateColumn({ type: 'date' })
    lastModificationDate: Date;

    @CreateDateColumn({ type: 'date' })
    endDate: Date;

    constructor(partial: Partial<Doctor>) {
        Object.assign(this, partial);
    }
}
