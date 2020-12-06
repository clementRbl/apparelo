import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Prospect } from './prospect.entity';
import { ProspectRepository } from './prospect.repository';
import { v4 as uuid } from 'uuid';
import { CreateProspectDto } from './dto/create-prospect.dto';
import { GetProspectFilterDto } from './dto/get-prospect-filter.dto';
import { ProspectTypeOrga } from './prospect-orga-type.enum';
@Injectable()
export class ProspectService {
  constructor(
    @InjectRepository(ProspectRepository)
    private prospectRepository: ProspectRepository,
  ) {}

  async getProspect(filterDto: GetProspectFilterDto): Promise<Prospect[]> {
    return this.prospectRepository.getProspect(filterDto);
  }

  async getProspectById(id: uuid): Promise<Prospect> {
    const found = await this.prospectRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`prospect avec id ${id} introuvable`);
    }
    return found;
  }

  async createProspect(
    createProspectDto: CreateProspectDto,
  ): Promise<Prospect> {
    return this.prospectRepository.createProspect(createProspectDto);
  }

  async updateProspectById(
    id: uuid,
    firstName: string,
    lastName: string,
    email: string,
    tel: string,
    organisationName: string,
    organisationType: ProspectTypeOrga,
  ): Promise<Prospect> {
    const prospect_found = await this.getProspectById(id);

    prospect_found.firstName = firstName;
    prospect_found.lastName = lastName;
    prospect_found.email = email;
    prospect_found.tel = tel;
    prospect_found.organisationName = organisationName;
    prospect_found.organisationType = organisationType;
    await prospect_found.save();
    return prospect_found;
  }

  async deleteProspect(id: uuid): Promise<void> {
    const result = await this.prospectRepository.delete(id);
    console.log(result);
    if (result.affected === 0) {
      throw new NotFoundException(`prospect avec id ${id} introuvable`);
    }
  }
}
