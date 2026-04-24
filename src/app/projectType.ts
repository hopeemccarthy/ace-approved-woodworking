export interface ProjectType {
  id: string;
  name: string;
  description?: string;
  date?: Date;
  primaryPhoto?: string;
  photos?: string[];
  difficulty?: 'Easy' | 'Medium' | 'Hard';
  time?: string;
  tools?: string[];
  supplies?: string[];
  cost?: number;
}