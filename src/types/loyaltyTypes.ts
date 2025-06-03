export interface LoyaltyLevel {
  id: number;
  level_number: number;
  status: string;
  discount: number;
  spend_to_acquire: number;
  wholesale_price_available: boolean;
}
