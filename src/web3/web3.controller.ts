import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Web3Service } from './web3.service';
import { Wallet } from './types/wallet.interface';

@Controller('web3')
export class Web3Controller {
  constructor(private readonly web3Service: Web3Service) {}

  @Get('balance')
  async getBalance(@Query('address') address: string): Promise<number> {
    return this.web3Service.getMaticBalance(address);
  }

  @Post('create-wallet')
  async createWallet(): Promise<Wallet> {
    return this.web3Service.createWallet();
  }

  @Post('send-initial-matic')
  async sendInitialMatic(
    @Body('address') address: string,
    @Body('amount') amount: number,
  ): Promise<string | void> {
    return this.web3Service.sendInitialMatic(address, amount);
  }

  @Post('mint')
  async mint(
    @Body('metadataUri') metadataUri: string,
    @Body('amount') amount: number,
  ) {
    return this.web3Service.mint(metadataUri, amount);
  }

  @Post('burn')
  async burn(@Body('tokenId') tokenId: number, @Body('amount') amount: number) {
    return this.web3Service.burn(tokenId, amount);
  }

  @Post('buy-from-primary')
  async buyFromPrimaryMarket(
    @Body('buyer') buyer: string,
    @Body('tokenId') tokenId: number,
    @Body('amount') amount: number,
  ): Promise<void> {
    return this.web3Service.buyFromPrimaryMarket(buyer, tokenId, amount);
  }

  @Post('put-on-sale')
  async putOnSale(
    @Body('privateKey') privateKey: string,
    @Body('tokenId') tokenId: number,
    @Body('amount') amount: number,
    @Body('price') price: number,
  ): Promise<number> {
    return this.web3Service.putOnSale(privateKey, tokenId, amount, price);
  }

  @Post('put-off-sale')
  async putOffSale(
    @Body('privateKey') privateKey: string,
    @Body('itemId') itemId: number,
  ): Promise<void> {
    return this.web3Service.putOffSale(privateKey, itemId);
  }

  @Post('changePrice')
  async changePrice(
    @Body('privateKey') privateKey: string,
    @Body('itemId') itemId: number,
    @Body('price') price: number,
  ): Promise<void> {
    return this.web3Service.changePrice(privateKey, itemId, price);
  }

  @Post('buy-from-secondary')
  async buyFromSecondaryMarket(
    @Body('privateKey') privateKey: string,
    @Body('itemId') itemId: number,
    @Body('price') price: number,
  ): Promise<void> {
    return this.web3Service.buyFromSecondaryMarket(privateKey, itemId, price);
  }
}
