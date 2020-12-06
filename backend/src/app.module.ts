import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from 'src/config/typeorm.config';
import { DevisModule } from './devis/devis.module';
import { ProspectModule } from './prospect/prospect.module';
import { ArticleModule } from './article/article.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(TypeOrmConfig),
    DevisModule,
    ProspectModule,
    ArticleModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
