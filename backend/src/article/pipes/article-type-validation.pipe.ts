import { BadRequestException, PipeTransform } from '@nestjs/common';
import { ArticleType } from '../enum/article-type.enum';

export class ArticleTypeValidationPipe implements PipeTransform {
  readonly allowTypes = [
    ArticleType.Textile,
    ArticleType.Objet,
    ArticleType.Pack,
  ];

  transform(value: any) {
    value = value.toUpperCase();

    if (!this.isTypeValid(value)) {
      throw new BadRequestException(`"${value}" is a invalid type`);
    }

    return value;
  }

  private isTypeValid(type: any) {
    const idx = this.allowTypes.indexOf(type);
    return idx !== -1;
  }
}
