import { Category, Pie, PIZZA } from './pie';

export interface PizzaOrder extends Pie {
  size: 'small' | 'medium' | 'large';
  specialInstructions?: string | null;
  image: string;
  thumb: string;
  title: string;
  price: number;
  description: string;
  ingredients: string[];
  category: Category;
  id: string;
  quantity?: number;
}

export function createPizzaOrder({
  size,
  ingredients,
  specialInstructions,
}: {
  size: 'small' | 'medium' | 'large';
  ingredients: string[];
  specialInstructions?: string | null;
}): PizzaOrder {
  const basePrice = 19.99;
  const toppingPrice = 0.5;
  const price = basePrice + ingredients.length * toppingPrice;
  const id = `pizza-${Math.random().toString(36).slice(2, 10)}`;
  const description = `${size} pizza with ${ingredients.join(', ')}${specialInstructions ? ' - ' + specialInstructions : ''}`;

  return {
    id,
    size,
    ingredients,
    specialInstructions,
    price,
    category: PIZZA,
    description,
    image: '../../assets/images/pizza-2.jpg',
    thumb: '../../assets/images/pizza-2-thumb.jpg',
    title: 'Custom Pizza Pie',
  };
}

export const AVAILABLE_TOPPINGS = [
  'Extra cheese',
  'Pineapple',
  'Spinach',
  'Pickled ginger',
  'Fennel',
  'Roasted beets',
  'Zaatar spice',
  'Chickpeas',
  'Sliced pears',
  'Blue cheese',
  'Fresh figs',
  'Canned tuna',
  'Marshmallows',
  'Peanut butter',
  'Cucumber slices',
  'Lemon wedges',
];
