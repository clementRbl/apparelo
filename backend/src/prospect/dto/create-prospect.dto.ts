import { IsIn, IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { ProspectTypeOrga } from '../prospect-orga-type.enum';

export class CreateProspectDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(320, {
    message: 'firstName is too long',
  })
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(320, {
    message: 'lastName is too long',
  })
  lastName: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(320, {
    message: 'email is too long',
  })
  email: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(320, {
    message: 'tel is too long',
  })
  tel: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255, {
    message: 'organisation_name is too long',
  })
  organisationName: string;

  @IsNotEmpty()
  @IsNotEmpty()
  @IsIn([
    ProspectTypeOrga.Entreprise,
    ProspectTypeOrga.Ecole,
    ProspectTypeOrga.Association,
    ProspectTypeOrga.Particulier,
    ProspectTypeOrga.Profession,
  ])
  @MaxLength(60, {
    message: 'organisation_type name is too long',
  })
  organisationType: ProspectTypeOrga;
}
