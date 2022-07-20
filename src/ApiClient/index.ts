import { CardInterface, TransactionInterface } from '../interfaces/index';

import cards from '../data/cards.json';
import transactions from '../data/transactions.json';

export async function getCards(): Promise<CardInterface[]> {
  return cards;
}

export async function getTransactions(
  cardId: string,
): Promise<CardInterface[]> {
  const getTransactions: Record<string, TransactionInterface[]> = transactions;

  if (getTransactions[cardId]) {
    return getTransactions[cardId];
  }
  throw new Error('cardId not found');
}
