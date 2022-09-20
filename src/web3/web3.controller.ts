import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Web3Service } from './web3.service';

@Controller('web3')
export class Web3Controller {
  constructor(private readonly web3Service: Web3Service) {}

  @Get('balance')
  async getBalance(@Query('address') address: string): Promise<number> {
    return this.web3Service.getMaticBalance(address);
  }

  @Post('send-initial-matic')
  async sendInitialMatic(
    @Body('address') address: string,
    @Body('amount') amount: number,
  ): Promise<string | void> {
    return this.web3Service.sendInitialMatic(address, amount);
  }
}
