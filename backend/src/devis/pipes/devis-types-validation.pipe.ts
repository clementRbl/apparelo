import { BadRequestException, PipeTransform } from '@nestjs/common';
import { DevisType } from '../devis-type.enum';

export class DevisTypeValidationPipe implements PipeTransform {
  readonly allowStatuses = [DevisType.Standard, DevisType.Express];

  transform(value: any) {
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`"${value}" is a invalid type`);
    }

    return value;
  }

  private isStatusValid(type: any) {
    const idx = this.allowStatuses.indexOf(type);
    return idx !== -1;
  }
}
