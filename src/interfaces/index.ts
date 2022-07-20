export interface CardInterface {
  id: string;
  description: string;
}

export interface TransactionInterface {
  id: string;
  description: string;
  amount: number;
}

export interface CardsProps {
  setSelectedCard: (id: string) => void;
  selectedCard: boolean | string;
}
