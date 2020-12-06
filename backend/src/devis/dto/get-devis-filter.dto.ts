import { DevisType } from '../devis-type.enum';
import { v4 as uuid } from 'uuid';
export class GetDevisFilterDto {
  type: DevisType;
  search: string;
  prospectId: uuid;
}
