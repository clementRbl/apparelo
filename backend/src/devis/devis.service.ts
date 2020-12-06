import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Devis } from './devis.entity';
import { v4 as uuid } from 'uuid';
import { DevisRepository } from './devis.repository';
import { CreateDevisDto } from './dto/create-devis.dto';
import { GetDevisFilterDto } from './dto/get-devis-filter.dto';
@Injectable()
export class DevisService {
  constructor(
    @InjectRepository(DevisRepository)
    private devisRepository: DevisRepository,
  ) {}

  async getDevis(filterDto: GetDevisFilterDto): Promise<Devis[]> {
    return this.devisRepository.getDevis(filterDto);
  }

  async getDevisById(id: uuid): Promise<Devis> {
    const found = await this.devisRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`devis avec id ${id} introuvable`);
    }
    return found;
  }

  async createDevis(createDevisDto: CreateDevisDto): Promise<Devis> {
    const devisCreated = await this.devisRepository.createDevis(createDevisDto);
    return devisCreated;
  }

  async updateDevisById(
    id: uuid,
    message: string,
    logo: string,
  ): Promise<Devis> {
    const devis_found = await this.getDevisById(id);
    devis_found.message = message;
    devis_found.logo = logo;
    await devis_found.save();
    return devis_found;
  }

  async deleteDevis(id: uuid): Promise<void> {
    const result = await this.devisRepository.delete(id);
    console.log(result);
    if (result.affected === 0) {
      throw new NotFoundException(`devis avec id ${id} introuvable`);
    }
  }
}
