import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ArticleType } from './enum/article-type.enum';
import { v4 as uuid } from 'uuid';
import { ArticleFamily } from './enum/article-family.enum';
import { ArticleColor } from './enum/article-color.enum';

@Entity('article')
export class Article extends BaseEntity {
  @PrimaryColumn({ name: 'id', type: 'uuid' })
  id: uuid = uuid();

  @Column({ name: 'denomination' })
  denomination: string;

  @Column({ name: 'family' })
  family: ArticleFamily;

  @Column({ name: 'type' })
  type: ArticleType;

  @Column({ name: 'color' })
  color: ArticleColor;

  @Column({ name: 'description', nullable: true })
  description: string;

  @CreateDateColumn({ name: 'createdOn', nullable: false })
  createdOn: Date;

  @UpdateDateColumn({ name: 'lastModifiedOn', nullable: true })
  lastModifiedOn: Date;
}
