import { parse } from "csv-parse";
import fs from "fs";

import { ICategoryRepository } from "../../../repositories/ICategoriesRepository";

class ImportCategoriesUseCase {
  constructor(private categoriesRepository: ICategoryRepository) {}

  execute(file: Express.Multer.File): void {
    const stream = fs.createReadStream(file.path);
    const parseFile = parse({ delimiter: "," });

    stream
      .pipe(parseFile)
      .on("data", async (line) => {
        const [name, description] = line;
        const category = this.categoriesRepository.create({
          name,
          description,
        });
      })
      .on("end", () => {
        fs.promises.unlink(file.path);
      });
  }
}

export { ImportCategoriesUseCase };
