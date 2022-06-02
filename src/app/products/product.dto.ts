// DTO = Data Transfer Object
import { Product } from './product.model';

interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

// type example = Pick<Product, 'color'| 'description'>

interface UpdateProductDto extends Partial<Omit <CreateProductDto, 'createdAt'> > {}

// type example2 = Required<Product>;

interface FindProductDto extends Readonly<Partial<Omit <Product, 'category'> >> {
  categoryId?: string;
}

export {
  CreateProductDto,
  UpdateProductDto,
  FindProductDto,
}
