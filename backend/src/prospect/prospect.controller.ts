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
import { Prospect } from './prospect.entity';
import { ProspectService } from './prospect.service';
import { CreateProspectDto } from './dto/create-prospect.dto';
import { GetProspectFilterDto } from './dto/get-prospect-filter.dto';
import { v4 as uuid } from 'uuid';
import { ProspectTypeOrga } from './prospect-orga-type.enum';

@Controller('prospect')
export class ProspectController {
  constructor(private prospectService: ProspectService) {}

  @Get()
  async getProspect(
    @Query() filterDto: GetProspectFilterDto,
  ): Promise<Prospect[]> {
    return this.prospectService.getProspect(filterDto);
  }

  @Get('/:id')
  async getProspectById(@Param('id') id: uuid): Promise<Prospect> {
    return this.prospectService.getProspectById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createProspect(
    @Body() createProspectDto: CreateProspectDto,
  ): Promise<Prospect> {
    return this.prospectService.createProspect(createProspectDto);
  }

  @Patch('/:id/update')
  async updateProspectById(
    @Param('id') id: uuid,
    @Body('firstName') firstName: string,
    @Body('lastName') lastName: string,
    @Body('email') email: string,
    @Body('tel') tel: string,
    @Body('organisationName') organisationName: string,
    @Body('organisationType') organisationType: ProspectTypeOrga,
  ): Promise<Prospect> {
    return this.prospectService.updateProspectById(
      id,
      firstName,
      lastName,
      email,
      tel,
      organisationName,
      organisationType,
    );
  }

  @Delete('/:id')
  deleteProspectById(@Param('id') id: uuid): Promise<void> {
    return this.prospectService.deleteProspect(id);
  }
}
