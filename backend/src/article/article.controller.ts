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
import { v4 as uuid } from 'uuid';
import { Article } from './article.entity';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { GetArticleFilterDto } from './dto/get-article-filtre.dto';
import { ArticleColor } from './enum/article-color.enum';
import { ArticleFamily } from './enum/article-family.enum';
import { ArticleType } from './enum/article-type.enum';

@Controller('article')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Get()
  async getArticle(
    @Query() filterDto: GetArticleFilterDto,
  ): Promise<Article[]> {
    return this.articleService.getArticle(filterDto);
  }

  @Get('/by-type/:type')
  async getArticleByType(@Param('type') type: string): Promise<Article[]> {
    return this.articleService.getArticleByType(type);
  }

  @Get('/by-family/:family')
  async getArticleByFamily(
    @Param('family') family: string,
  ): Promise<Article[]> {
    return this.articleService.getArticleByFamily(family);
  }

  @Get('/:id')
  async getArticleById(@Param('id') id: uuid): Promise<Article> {
    return this.articleService.getArticleById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createArticle(
    @Body() createArticleDto: CreateArticleDto,
  ): Promise<Article> {
    return this.articleService.createArticle(createArticleDto);
  }

  @Patch('/:id/update')
  async updateArticleById(
    @Param('id') id: uuid,
    @Body('denomination') denomination: string,
    @Body('type') type: ArticleType,
    @Body('family') family: ArticleFamily,
    @Body('color') color: ArticleColor,
    @Body('description') description: string,
  ): Promise<Article> {
    return this.articleService.updateArticleById(
      id,
      denomination,
      type,
      family,
      color,
      description,
    );
  }

  @Delete('/:id')
  deleteArticleById(@Param('id') id: uuid): Promise<void> {
    return this.articleService.deleteArticle(id);
  }
}
