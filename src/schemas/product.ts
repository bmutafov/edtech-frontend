import { ICategory } from './category';
import { IReview } from './review';

/**
 * Model definition for Product
 */
export interface IProduct {
  id: string;
  name?: string;
  description?: string;
  website?: string;
  rating?: number;
  images: any[];
  categories: ICategory[];
  user?: any;
  reviews: IReview[];
}