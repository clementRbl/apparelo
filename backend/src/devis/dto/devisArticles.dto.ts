import { IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';
import { v4 as uuid } from 'uuid';

export class DevisArticleDto {
  @IsNotEmpty()
  articleId: uuid;

  @IsOptional()
  @IsNumber()
  quantity: number = 0;
}
