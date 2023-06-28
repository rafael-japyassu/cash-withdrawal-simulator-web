import { AuthenticateDto } from "@/services/auth";

export type UserLoggedInfo = {
  name: string;
  email: string;
  balance: number;
}

export interface AuthContextProps {
  user: UserLoggedInfo;
  signIn(data: AuthenticateDto): Promise<void>;
  signOut(): void;
  updateUserBalance(balance: number): void;
}