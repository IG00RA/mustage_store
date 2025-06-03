import { LoyaltyLevel } from "./loyaltyTypes";

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  language_code: string;
  is_premium: boolean;
  registration_date: string;
  balance: number;
  loyalty_level: LoyaltyLevel | null;
}

export interface UsersState {
  users: User[];
  totalRows: number;
  currentUser: User | null;
  loading: boolean;
  error: string | null;
  initUser: (initData: string) => Promise<User>;
  fetchCurrentUser: () => Promise<User>;
}
