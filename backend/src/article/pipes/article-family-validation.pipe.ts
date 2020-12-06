import { BadRequestException, PipeTransform } from '@nestjs/common';
import { ArticleFamily } from '../enum/article-family.enum';

export class ArticleFamilyValidationPipe implements PipeTransform {
  readonly allowFamily = [ArticleFamily];

  transform(value: any) {
    value = value.toUpperCase();

    if (!this.isFamilyValid(value)) {
      throw new BadRequestException(`"${value}" is a invalid family`);
    }

    return value;
  }

  private isFamilyValid(family: any) {
    const idx = this.allowFamily.indexOf(family);
    return idx !== -1;
  }
}
