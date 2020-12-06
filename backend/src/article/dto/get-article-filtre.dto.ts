import { v4 as uuid } from 'uuid';
import { ArticleType } from '../enum/article-type.enum';
import { ArticleFamily } from '../enum/article-family.enum';
import { ArticleColor } from '../enum/article-color.enum';
export class GetArticleFilterDto {
  articleId: uuid;
  type: ArticleType;
  family: ArticleFamily;
  color: ArticleColor;
  search: string;
}
