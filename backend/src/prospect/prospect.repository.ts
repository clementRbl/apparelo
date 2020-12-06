import { EntityRepository, Repository } from 'typeorm';
import { CreateProspectDto } from './dto/create-prospect.dto';
import { GetProspectFilterDto } from './dto/get-prospect-filter.dto';
import { Prospect } from './prospect.entity';

@EntityRepository(Prospect)
export class ProspectRepository extends Repository<Prospect> {
  async getProspect(filterDto: GetProspectFilterDto): Promise<Prospect[]> {
    const { organisation_type, search, prospectId } = filterDto;
    const query = this.createQueryBuilder('prospect');
    if (organisation_type) {
      query.andWhere('prospect.organisation_type = :organisation_type', {
        organisation_type,
      });
    }
    if (search) {
      query.andWhere(
        '(prospect.search LIKE :firstName OR :lastName OR :email OR :organisation_name)',
        {
          search: `%${search}%`,
        },
      );
    }
    if (prospectId) {
      query.andWhere('prospect.prospectId = :prospectId', { prospectId });
    }
    const prospect = await query.getMany();
    return prospect;
  }

  async createProspect(
    createProspectDto: CreateProspectDto,
  ): Promise<Prospect> {
    const {
      firstName,
      lastName,
      email,
      tel,
      organisationName,
      organisationType,
    } = createProspectDto;
    const prospect = new Prospect();

    prospect.firstName = firstName;
    prospect.lastName = lastName;
    prospect.email = email;
    prospect.tel = tel;
    prospect.organisationName = organisationName;
    prospect.organisationType = organisationType;
    await prospect.save();

    return prospect;
  }
}
