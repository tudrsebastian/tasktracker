import { Column, Entity, PrimaryGeneratedColumn,BaseEntity } from 'typeorm';
@Entity('user')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  full_name: string;

  @Column()
  password: string;
  
  @Column({unique: true,
          nullable: false })
  email: string;
  
}
