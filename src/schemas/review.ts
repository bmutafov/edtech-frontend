import { IProduct } from './product';

/**
 * Model definition for Review
 */
export interface IReview {
  id: string;
  title?: string;
  rating?: number;
  body?: string;
  user?: any;
  product?: IProduct;
}