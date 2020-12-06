import { Prospect } from 'src/prospect/prospect.entity';
import { EntityRepository, Repository } from 'typeorm';
import { DevisType } from './devis-type.enum';
import { Devis } from './devis.entity';
import { DevisArticles } from './devisArticle.entity';
import { CreateDevisDto } from './dto/create-devis.dto';
import { GetDevisFilterDto } from './dto/get-devis-filter.dto';

@EntityRepository(Devis)
export class DevisRepository extends Repository<Devis> {
  async getDevis(filterDto: GetDevisFilterDto): Promise<Devis[]> {
    const { type, search, prospectId } = filterDto;
    const query = this.createQueryBuilder('devis');
    if (type) {
      query.andWhere('devis.type = :type', { type });
    }
    if (search) {
      query.andWhere('devis.search LIKE :message', { search: `%${search}%` });
    }
    if (prospectId) {
      query.andWhere('devis.prospectId = :prospectId', { prospectId });
    }
    const devis = await query.getMany();
    return devis;
  }

  async createDevis(createDevisDto: CreateDevisDto): Promise<Devis> {
    const {
      articles,
      firstName,
      lastName,
      email,
      tel,
      organisationName,
      organisationType,
      message,
      logo,
    } = createDevisDto;
    const prospect = new Prospect();
    const devis = new Devis();

    prospect.firstName = firstName;
    prospect.lastName = lastName;
    prospect.email = email;
    prospect.tel = tel;
    prospect.organisationName = organisationName;
    prospect.organisationType = organisationType;
    await prospect.save();

    if (!articles) {
      devis.type = DevisType.Express;
    } else {
      devis.type = DevisType.Standard;
      if (logo) {
        devis.logo = logo;
      }
    }

    if (articles) {
      devis.devisArticles = articles.map(article => {
        let d = new DevisArticles();
        d.articleId = article.articleId;
        d.quantity = article.quantity;
        return d;
      });
    }

    devis.prospectId = prospect.id;
    devis.message = message;
    await devis.save();

    return devis;
  }
}
