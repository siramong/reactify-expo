// Core data types for the application

export interface Coin {
  id: string;
  username: string;
  userId: string;
  curso: string;
  amount: number;
}

export interface Achievement {
  id: string;
  icon: string;
  title: string;
  description: string;
  color: string;
  unlocked: boolean;
}

export interface CourseStats {
  curso: string;
  totalCoins: number;
  studentCount: number;
  averageCoins: number;
}
