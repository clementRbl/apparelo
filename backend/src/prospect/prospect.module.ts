import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProspectController } from './prospect.controller';
import { ProspectRepository } from './prospect.repository';
import { ProspectService } from './prospect.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProspectRepository])],
  controllers: [ProspectController],
  providers: [ProspectService],
})
export class ProspectModule {}
