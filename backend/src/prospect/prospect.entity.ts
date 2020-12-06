import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { ProspectTypeOrga } from './prospect-orga-type.enum';

@Entity('prospect')
export class Prospect extends BaseEntity {
  @PrimaryColumn({ name: 'id', type: 'uuid' })
  id: uuid = uuid();

  @Column({ name: 'firstName' })
  firstName: string;

  @Column({ name: 'lastName' })
  lastName: string;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'tel' })
  tel: string;

  @Column({ name: 'organisationName' })
  organisationName: string;

  @Column({ name: 'organisationType' })
  organisationType: ProspectTypeOrga;

  @CreateDateColumn({ name: 'createdOn', nullable: false })
  createdOn: Date;

  @UpdateDateColumn({ name: 'lastModifiedOn', nullable: true })
  lastModifiedOn: Date;
}
