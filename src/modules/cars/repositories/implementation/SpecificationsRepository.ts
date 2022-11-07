import { getRepository, Repository } from "typeorm";
import { SpecificationsModel } from "../../entities/SpecificationsModel";
import {
  ISpecificationsRepository,
  ICreateSpecificationsDTO,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {

  private repository: Repository<SpecificationsModel>;

  constructor() {
    try {
      this.repository = getRepository(SpecificationsModel);
    } catch (error) {
      console.log(`Erro: ${error}`);
    }
  }

  async create({ name, description }: ICreateSpecificationsDTO): Promise<SpecificationsModel> {

    const Specifications = this.repository.create({
      name,
      description,
    });

    await this.repository.save(Specifications);

    return Specifications;
  }

  async list(): Promise<SpecificationsModel[]> {
    const Specifications = await this.repository.find();
    return Specifications;
  }

  async findByName(name: string): Promise<SpecificationsModel> {
    const Specifications: SpecificationsModel = await this.repository.findOne({ name }) as SpecificationsModel;
    return Specifications;
  }
}

export { SpecificationsRepository };
