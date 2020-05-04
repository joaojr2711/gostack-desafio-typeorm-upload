import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';

import Transaction from '../models/Transaction';

import TransactionRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionRepository = getCustomRepository(TransactionRepository);

    const trasaction = await transactionRepository.findOne(id);

    if (!trasaction) {
      throw new AppError('Trnsaction does not exist');
    }

    await transactionRepository.remove(trasaction);
  }
}

export default DeleteTransactionService;
