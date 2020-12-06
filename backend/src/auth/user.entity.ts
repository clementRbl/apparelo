import { BaseEntity, Column, Entity, PrimaryColumn, Unique } from 'typeorm';
import { v4 as uuid } from 'uuid';
import * as bcrypt from 'bcryptjs';

@Entity('user')
@Unique(['username'])
export class User extends BaseEntity {
  @PrimaryColumn({ name: 'id', type: 'uuid' })
  id: uuid = uuid();

  @Column({ name: 'username' })
  username: string;

  @Column({ name: 'password' })
  password: string;

  @Column({ name: 'salt' })
  salt: string;

  async validatePwd(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }
}
