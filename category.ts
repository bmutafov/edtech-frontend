import { IProduct } from './product';

/**
 * Model definition for Category
 */
export interface ICategory {
  id: string;
  name?: string;
  products: IProduct[];
}