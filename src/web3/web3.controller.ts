import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { Web3Service } from './web3.service';
import { Wallet } from './types/wallet.interface';

@Controller('web3')
export class Web3Controller {
  constructor(private readonly web3Service: Web3Service) {}

  @EventPattern('got_balance')
  @Get('balance')
  async getBalance(@Query('address') address: string): Promise<number> {
    return this.web3Service.getMaticBalance(address);
  }

  @EventPattern('wallet_created')
  @Post('create-wallet')
  async createWallet(): Promise<Wallet> {
    return this.web3Service.createWallet();
  }

  @EventPattern('initial_matic_sent')
  @Post('send-initial-matic')
  async sendInitialMatic(
    @Body('address') address: string,
    @Body('amount') amount: number,
  ): Promise<string | void> {
    return this.web3Service.sendInitialMatic(address, amount);
  }

  @EventPattern('minted')
  @Post('mint')
  async mint(
    @Body('metadataUri') metadataUri: string,
    @Body('amount') amount: number,
  ) {
    return this.web3Service.mint(metadataUri, amount);
  }

  @EventPattern('burned')
  @Post('burn')
  async burn(@Body('tokenId') tokenId: number, @Body('amount') amount: number) {
    return this.web3Service.burn(tokenId, amount);
  }

  @EventPattern('bought_from_primary')
  @Post('buy-from-primary')
  async buyFromPrimaryMarket(
    @Body('buyer') buyer: string,
    @Body('tokenId') tokenId: number,
    @Body('amount') amount: number,
  ): Promise<void> {
    return this.web3Service.buyFromPrimaryMarket(buyer, tokenId, amount);
  }

  @EventPattern('put_on_sale')
  @Post('put-on-sale')
  async putOnSale(
    @Body('privateKey') privateKey: string,
    @Body('tokenId') tokenId: number,
    @Body('amount') amount: number,
    @Body('price') price: number,
  ): Promise<number> {
    return this.web3Service.putOnSale(privateKey, tokenId, amount, price);
  }

  @EventPattern('put_off_sale')
  @Post('put-off-sale')
  async putOffSale(
    @Body('privateKey') privateKey: string,
    @Body('itemId') itemId: number,
  ): Promise<void> {
    return this.web3Service.putOffSale(privateKey, itemId);
  }

  @EventPattern('price_changed')
  @Post('change-price')
  async changePrice(
    @Body('privateKey') privateKey: string,
    @Body('itemId') itemId: number,
    @Body('price') price: number,
  ): Promise<void> {
    return this.web3Service.changePrice(privateKey, itemId, price);
  }

  @EventPattern('bought_from_secondary')
  @Post('buy-from-secondary')
  async buyFromSecondaryMarket(
    @Body('privateKey') privateKey: string,
    @Body('itemId') itemId: number,
    @Body('price') price: number,
  ): Promise<void> {
    return this.web3Service.buyFromSecondaryMarket(privateKey, itemId, price);
  }
}
