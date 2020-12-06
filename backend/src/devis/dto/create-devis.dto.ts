import {
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { ProspectTypeOrga } from 'src/prospect/prospect-orga-type.enum';
import { DevisArticleDto } from './devisArticles.dto';
export class CreateDevisDto {
  @IsOptional()
  articles: DevisArticleDto[];

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
    message: 'organisationName is too long',
  })
  organisationName: string;

  @IsNotEmpty()
  @IsIn([
    ProspectTypeOrga.Entreprise,
    ProspectTypeOrga.Ecole,
    ProspectTypeOrga.Association,
    ProspectTypeOrga.Particulier,
    ProspectTypeOrga.Profession,
  ])
  @MaxLength(60, {
    message: 'organisationType name is too long',
  })
  organisationType: ProspectTypeOrga;

  @IsOptional()
  @IsString()
  @MaxLength(1000, {
    message: 'message is too long',
  })
  message: string;

  @IsOptional()
  @IsString()
  @MaxLength(1000, {
    message: 'logo route is too long',
  })
  logo: string;
}
