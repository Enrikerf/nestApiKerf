import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('city')
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
