import { Card, Transaction } from '../interfaces/index';

import cards from '../data/cards.json';
import transactions from '../data/transactions.json';

export async function getCards(): Promise<Card[]> {
  return cards;
}

export async function getTransactions(cardId: string): Promise<Card[]> {
  const getTransactions: Record<string, Transaction[]> = transactions;

  if (getTransactions[cardId]) {
    return getTransactions[cardId];
  }

  throw new Error('cardId not found');
}
