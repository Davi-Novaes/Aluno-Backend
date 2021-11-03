import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('controller_cadas')
export  class cadastro{


 
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:100})
    name: string;
  
    @Column({length: 100})
    ra: string;

    @Column({length: 100})
    endereco: string;

    @Column({length: 100})
    idade: string;

    @Column({
        default: false
    })
    matricula: boolean

    @Column({length: 100})
    data_de_nascimento: string;

    @CreateDateColumn()
    creat_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

