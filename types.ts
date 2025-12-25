
export interface LogisticsService {
  id: string;
  name: string;
  type: string;
  image: string;
  startingPrice: string;
  tags: string[];
}

export interface Advantage {
  title: string;
  description: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
