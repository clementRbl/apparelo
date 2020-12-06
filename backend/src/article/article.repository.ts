import { EntityRepository, Repository } from 'typeorm';
import { Article } from './article.entity';
import { CreateArticleDto } from './dto/create-article.dto';
import { GetArticleFilterDto } from './dto/get-article-filtre.dto';

@EntityRepository(Article)
export class ArticleRepository extends Repository<Article> {
  async getArticle(filterDto: GetArticleFilterDto): Promise<Article[]> {
    const { articleId, search, type, family, color } = filterDto;
    const query = this.createQueryBuilder('article');
    if (type) {
      query.andWhere('article.type = :type', {
        type,
      });
    }
    if (family) {
      query.andWhere('article.family = :family', {
        family,
      });
    }
    if (color) {
      query.andWhere('article.color = :color', {
        color: `%${color}%`,
      });
    }
    if (search) {
      query.andWhere(
        '(article.search LIKE :firstName OR :lastName OR :email OR :organisation_name)',
        {
          search: `%${search}%`,
        },
      );
    }
    if (articleId) {
      query.andWhere('article.articleId = :articleId', { articleId });
    }
    const article = await query.getMany();
    return article;
  }

  async getArticleByType(type: string): Promise<Article[]> {
    const query = this.createQueryBuilder('article');
    type = type[0].toUpperCase() + type.substring(1);
    if (type) {
      query.andWhere('article.type  = :type', {
        type,
      });
    }
    const article = await query.getMany();
    return article;
  }

  async getArticleByFamily(family: string): Promise<Article[]> {
    const query = this.createQueryBuilder('article');
    family = family[0].toUpperCase() + family.substring(1);
    if (family) {
      query.andWhere('article.family  = :family', {
        family,
      });
    }
    const article = await query.getMany();
    return article;
  }

  async createArticle(createArticleDto: CreateArticleDto): Promise<Article> {
    const { denomination, type, family, color, description } = createArticleDto;
    const article = new Article();
    article.denomination =
      denomination[0].toUpperCase() + denomination.substring(1);
    article.type = type;
    article.family = family;
    article.color = color;
    article.description = description;
    await article.save();
    return article;
  }
}
