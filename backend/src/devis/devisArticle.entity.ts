import { Entity, ManyToOne, Column, BaseEntity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Devis } from './devis.entity';

@Entity('devis_articles')
export class DevisArticles extends BaseEntity {
  @PrimaryColumn({ name: 'id', type: 'uuid', nullable: false })
  id: uuid = uuid();

  @ManyToOne(
    () => Devis,
    devis => devis.devisArticles,
  )
  devis: Devis;

  @Column({ name: 'articleId', type: 'uuid' })
  articleId: uuid;

  @Column({ name: 'quantity', type: 'integer' })
  quantity: number;
}
