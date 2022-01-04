import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Citys {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}