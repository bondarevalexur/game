export interface Category {
  name: string;
  values: Array<{
    question: string;
    answer: string;
    value: number;
    inGame: boolean;
  }>;
}
