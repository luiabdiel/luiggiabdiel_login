import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("user")
export class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ name: "fullName", nullable: false })
  fullName: string;

  @Column({ name: "userName", nullable: false })
  userName: string;

  @Column({ name: "password", nullable: false })
  password: string;

  @Column({ name: "email", nullable: false })
  email: string;

  @Column({ name: "isTeacher", nullable: false })
  isTeacher: boolean;

  @CreateDateColumn({ name: "createdAt", nullable: false })
  createdAt: Date;

  @UpdateDateColumn({ name: "updatedAt", nullable: false })
  updatedAt: Date;
}
