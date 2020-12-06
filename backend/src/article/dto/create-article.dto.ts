import {
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { ArticleColor } from '../enum/article-color.enum';
import { ArticleFamily } from '../enum/article-family.enum';
import { ArticleType } from '../enum/article-type.enum';

export class CreateArticleDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(60, {
    message: 'denomination is too long',
  })
  denomination: string;

  @IsNotEmpty()
  @IsIn([ArticleType.Textile, ArticleType.Objet, ArticleType.Pack])
  @MaxLength(320, {
    message: 'article type is too long',
  })
  type: ArticleType;

  @IsOptional()
  @IsIn([
    ArticleFamily.Bodywarmer,
    ArticleFamily.Bonnet,
    ArticleFamily.Bracelet,
    ArticleFamily.Briquet,
    ArticleFamily.Campagne,
    ArticleFamily.Casquette,
    ArticleFamily.Chemise,
    ArticleFamily.Debardeur,
    ArticleFamily.Diplome,
    ArticleFamily.Eco,
    ArticleFamily.Festival,
    ArticleFamily.Gobelet,
    ArticleFamily.Gourde,
    ArticleFamily.Hygiene,
    ArticleFamily.Kakemono,
    ArticleFamily.Masque,
    ArticleFamily.Mug,
    ArticleFamily.Polo,
    ArticleFamily.Soiree,
    ArticleFamily.Sport,
    ArticleFamily.Sticker,
    ArticleFamily.Startup,
    ArticleFamily.Stylo,
    ArticleFamily.Sweat,
    ArticleFamily.Tshirt,
    ArticleFamily.Wei,
  ])
  @MaxLength(320, {
    message: 'article family is too long',
  })
  family: ArticleFamily;

  @IsNotEmpty()
  @IsIn([
    ArticleColor.Noir,
    ArticleColor.Blanc,
    ArticleColor.Bleu,
    ArticleColor.Vert,
    ArticleColor.Violet,
    ArticleColor.Jaune,
    ArticleColor.Orange,
    ArticleColor.Rouge,
  ])
  @MaxLength(320, {
    message: 'article color is too long',
  })
  color: ArticleColor;

  @IsOptional()
  @IsString()
  @MaxLength(1000, {
    message: 'decription is too long',
  })
  description: string;
}
