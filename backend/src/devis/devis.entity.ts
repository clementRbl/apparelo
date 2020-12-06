import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { DevisType } from './devis-type.enum';
import { v4 as uuid } from 'uuid';
import { DevisArticles } from './devisArticle.entity';

@Entity('devis')
export class Devis extends BaseEntity {
  @PrimaryColumn({ name: 'id', type: 'uuid' })
  id: uuid = uuid();

  @Column({ name: 'prospectId', type: 'uuid' })
  prospectId: uuid;

  @OneToMany(
    () => DevisArticles,
    devisArticles => devisArticles.devis,
    { eager: true, cascade: true },
  )
  devisArticles: DevisArticles[];

  @Column({ name: 'message' })
  message: string;

  @Column({ name: 'type' })
  type: DevisType;

  @Column({ name: 'logo', nullable: true })
  logo: string;

  @CreateDateColumn({ name: 'createdOn', nullable: false })
  createdOn: Date;

  @UpdateDateColumn({ name: 'lastModifiedOn', nullable: true })
  lastModifiedOn: Date;
}
