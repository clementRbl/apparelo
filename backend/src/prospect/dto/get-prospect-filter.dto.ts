import { ProspectTypeOrga } from '../prospect-orga-type.enum';
import { v4 as uuid } from 'uuid';
export class GetProspectFilterDto {
  organisation_type: ProspectTypeOrga;
  search: string;
  prospectId: uuid;
}
