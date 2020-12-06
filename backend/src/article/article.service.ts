import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticleRepository } from './article.repository';
import { v4 as uuid } from 'uuid';
import { Article } from './article.entity';
import { GetArticleFilterDto } from './dto/get-article-filtre.dto';
import { CreateArticleDto } from './dto/create-article.dto';
import { ArticleType } from './enum/article-type.enum';
import { ArticleFamily } from './enum/article-family.enum';
import { ArticleColor } from './enum/article-color.enum';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(ArticleRepository)
    private articleRepository: ArticleRepository,
  ) {}

  async getArticle(filterDto: GetArticleFilterDto): Promise<Article[]> {
    return this.articleRepository.getArticle(filterDto);
  }

  async getArticleByType(type: string): Promise<Article[]> {
    return this.articleRepository.getArticleByType(type);
  }

  async getArticleByFamily(family: string): Promise<Article[]> {
    return this.articleRepository.getArticleByFamily(family);
  }

  async getArticleById(id: uuid): Promise<Article> {
    const found = await this.articleRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`article avec id ${id} introuvable`);
    }
    return found;
  }

  async createArticle(createArticleDto: CreateArticleDto): Promise<Article> {
    return this.articleRepository.createArticle(createArticleDto);
  }

  async updateArticleById(
    id: uuid,
    denomination: string,
    type: ArticleType,
    family: ArticleFamily,
    color: ArticleColor,
    description: string,
  ): Promise<Article> {
    const article_found = await this.getArticleById(id);
    article_found.denomination = denomination;
    article_found.type = type;
    article_found.family = family;
    article_found.color = color;
    article_found.description = description;
    await article_found.save();
    return article_found;
  }

  async deleteArticle(id: uuid): Promise<void> {
    const result = await this.articleRepository.delete(id);
    console.log(result);
    if (result.affected === 0) {
      throw new NotFoundException(`article avec id ${id} introuvable`);
    }
  }
}
