import { BadRequestException, PipeTransform } from '@nestjs/common';
import { ArticleColor } from '../enum/article-color.enum';

export class ArticleColorValidationPipe implements PipeTransform {
  readonly allowColor = [
    ArticleColor.Noir,
    ArticleColor.Blanc,
    ArticleColor.Blanc,
    ArticleColor.Rouge,
    ArticleColor.Bleu,
    ArticleColor.Jaune,
    ArticleColor.Orange,
    ArticleColor.Vert,
    ArticleColor.Violet,
  ];

  transform(value: any) {
    value = value.toUpperCase();

    if (!this.isColorValid(value)) {
      throw new BadRequestException(`"${value}" is a invalid type`);
    }

    return value;
  }

  private isColorValid(type: any) {
    const idx = this.allowColor.indexOf(type);
    return idx !== -1;
  }
}
