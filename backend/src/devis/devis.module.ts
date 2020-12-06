import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DevisController } from './devis.controller';
import { DevisRepository } from './devis.repository';
import { DevisService } from './devis.service';

@Module({
  imports: [TypeOrmModule.forFeature([DevisRepository])],
  controllers: [DevisController],
  providers: [DevisService],
})
export class DevisModule {}
