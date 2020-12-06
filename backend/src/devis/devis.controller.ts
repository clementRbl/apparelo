import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  UsePipes,
  ValidationPipe,
  Query,
} from '@nestjs/common';
import { Devis } from './devis.entity';
import { DevisService } from './devis.service';
import { CreateDevisDto } from './dto/create-devis.dto';
import { GetDevisFilterDto } from './dto/get-devis-filter.dto';
import { v4 as uuid } from 'uuid';
@Controller('devis')
export class DevisController {
  constructor(private devisService: DevisService) {}

  @Get()
  async getDevis(@Query() filterDto: GetDevisFilterDto): Promise<Devis[]> {
    return await this.devisService.getDevis(filterDto);
  }

  @Get('/:id')
  async getDevisById(@Param('id') id: uuid): Promise<Devis> {
    return await this.devisService.getDevisById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createDevis(@Body() createDevisDto: CreateDevisDto): Promise<Devis> {
    return await this.devisService.createDevis(createDevisDto);
  }

  @Patch('/:id/update')
  async updateDevisById(
    @Param('id') id: uuid,
    @Body('message') message: string,
    @Body('logo') logo: string,
  ): Promise<Devis> {
    return await this.devisService.updateDevisById(id, message, logo);
  }

  @Delete('/:id')
  deleteDevisById(@Param('id') id: uuid): Promise<void> {
    return this.devisService.deleteDevis(id);
  }
}
