import { Inject, Injectable } from '@nestjs/common';
import { AbiItem } from 'web3-utils';
import { AlchemyWeb3 } from '@alch/alchemy-web3';
import { ConfigService } from '@nestjs/config';
import { BlixNft1155ContractAbi } from './abi/BlixNft1155ContractAbi';
import { blixMarketContractAbi } from './abi/BlixMarketContractAbi';
import { Wallet } from './types/wallet.interface';
import { WEB3_PROVIDER_TOKEN } from './web3.types';

@Injectable()
export class Web3Service {
  public blixNft1155Contract;
  public blixMarketContract;
  private companyAccount;
  private nftContractAddress;
  private marketContractAddress;

  constructor(
    @Inject(WEB3_PROVIDER_TOKEN) public web3: AlchemyWeb3,
    private readonly configService: ConfigService,
  ) {
    this.blixNft1155Contract = new web3.eth.Contract(
      BlixNft1155ContractAbi as AbiItem[],
      this.configService.get('web3Config.nftContractAddress'),
    );
    this.blixMarketContract = new web3.eth.Contract(
      blixMarketContractAbi as AbiItem[],
      this.configService.get('web3Config.marketContractAddress'),
    );
    this.companyAccount = this.web3.eth.accounts.privateKeyToAccount(
      this.configService.get('web3Config.privateKey'),
    );
    this.nftContractAddress = this.configService.get(
      'web3Config.nftContractAddress',
    );
    this.marketContractAddress = this.configService.get(
      'web3Config.marketContractAddress',
    );
  }

  async getMaticBalance(address: string): Promise<number> {
    try {
      const res = this.web3.utils.fromWei(
        await this.web3.eth.getBalance(address),
      );

      return Number.parseFloat(res);
    } catch (error) {
      throw error;
    }
  }

  async mint(metadataUri: string, amount: number): Promise<number> {
    try {
      const txnData = this.blixNft1155Contract.methods
        .mint(metadataUri, amount)
        .encodeABI();

      const estimatedGas = await this.web3.eth.estimateGas({
        to: this.nftContractAddress,
        from: this.companyAccount.address,
        data: txnData,
      });

      const signedTransaction = await this.web3.eth.accounts.signTransaction(
        {
          to: this.nftContractAddress,
          from: this.companyAccount.address,
          gas: estimatedGas,
          gasPrice: 100000000000,
          data: txnData,
        },
        this.companyAccount.privateKey,
      );

      await this.web3.eth.sendSignedTransaction(
        signedTransaction.rawTransaction,
      );

      const currentId = await this.blixNft1155Contract.methods
        .currentId()
        .call();

      return currentId;
    } catch (error) {
      throw error;
    }
  }

  async mintBatch(metadataUris: string[], amounts: number[]): Promise<void> {
    try {
      const txnData = this.blixNft1155Contract.methods
        .mintBatch(metadataUris, amounts)
        .encodeABI();

      const estimatedGas = await this.web3.eth.estimateGas({
        to: this.blixNft1155Contract,
        from: this.companyAccount.address,
        data: txnData,
      });

      const signedTransaction = await this.web3.eth.accounts.signTransaction(
        {
          to: this.blixNft1155Contract,
          from: this.companyAccount.address,
          gas: estimatedGas,
          gasPrice: 100000000000,
          data: txnData,
        },
        this.companyAccount.privateKey,
      );

      await this.web3.eth.sendSignedTransaction(
        signedTransaction.rawTransaction,
      );
    } catch (error) {
      throw error;
    }
  }

  async burn(tokenId: number, amount: number): Promise<void> {
    try {
      const txnData = this.blixNft1155Contract.methods
        .burn(tokenId, amount)
        .encodeABI();

      const estimatedGas = await this.web3.eth.estimateGas({
        to: this.nftContractAddress,
        from: this.companyAccount.address,
        data: txnData,
      });

      const signedTransaction = await this.web3.eth.accounts.signTransaction(
        {
          to: this.nftContractAddress,
          from: this.companyAccount.address,
          gas: estimatedGas,
          gasPrice: 100000000000,
          data: txnData,
        },
        this.companyAccount.privateKey,
      );

      await this.web3.eth.sendSignedTransaction(
        signedTransaction.rawTransaction,
      );
    } catch (error) {
      throw error;
    }
  }

  async createWallet(): Promise<Wallet> {
    try {
      const { address, privateKey } = await this.web3.eth.accounts.create();

      return {
        address: address,
        privateKey: privateKey,
      };
    } catch (error) {
      throw error;
    }
  }

  async sendInitialMatic(address: string, amount: number): Promise<void> {
    try {
      const nonce = await this.web3.eth.getTransactionCount(
        this.companyAccount.address,
        'latest',
      );

      const estimatedGas = await this.web3.eth.estimateGas({
        to: address,
        from: this.companyAccount.address,
        value: this.web3.utils.toWei(`${amount}`, 'ether'),
      });

      const signedTransaction = await this.web3.eth.accounts.signTransaction(
        {
          to: address,
          value: this.web3.utils.toWei(`${amount}`, 'ether'),
          gas: estimatedGas,
          maxFeePerGas: 2500000000,
          nonce: nonce,
        },
        this.companyAccount.privateKey,
      );

      await this.web3.eth.sendSignedTransaction(
        signedTransaction.rawTransaction,
      );
    } catch (error) {
      throw error;
    }
  }

  async setApproval(privateKey: string): Promise<void> {
    try {
      const account = await this.web3.eth.accounts.privateKeyToAccount(
        privateKey,
      );

      const txnData = this.blixNft1155Contract.methods
        .setApprovalForAll(this.marketContractAddress, true)
        .encodeABI();

      const estimatedGas = await this.web3.eth.estimateGas({
        to: this.nftContractAddress,
        from: account.address,
        data: txnData,
      });

      const signedTransaction = await this.web3.eth.accounts.signTransaction(
        {
          to: this.nftContractAddress,
          from: account.address,
          gas: estimatedGas,
          gasPrice: 100000000000,
          data: txnData,
        },
        account.privateKey,
      );

      await this.web3.eth.sendSignedTransaction(
        signedTransaction.rawTransaction,
      );
    } catch (error) {
      throw error;
    }
  }

  async buyFromPrimaryMarket(
    buyer: string,
    tokenId: number,
    amount: number,
  ): Promise<void> {
    try {
      const txnData = this.blixMarketContract.methods
        .buyFromPrimaryMarket(buyer, tokenId, amount)
        .encodeABI();

      const estimatedGas = await this.web3.eth.estimateGas({
        to: this.marketContractAddress,
        from: this.companyAccount.address,
        data: txnData,
      });

      const signedTransaction = await this.web3.eth.accounts.signTransaction(
        {
          to: this.marketContractAddress,
          from: this.companyAccount.address,
          gas: estimatedGas,
          gasPrice: 100000000000,
          data: txnData,
        },
        this.companyAccount.privateKey,
      );

      await this.web3.eth.sendSignedTransaction(
        signedTransaction.rawTransaction,
      );
    } catch (error) {
      throw error;
    }
  }

  async putOnSale(
    privateKey: string,
    tokenId: number,
    amount: number,
    price: number,
  ): Promise<number> {
    try {
      this.setApproval(privateKey);

      const seller = await this.web3.eth.accounts.privateKeyToAccount(
        privateKey,
      );

      const txnData = this.blixMarketContract.methods
        .putOnSale(tokenId, amount, this.web3.utils.toWei(`${price}`))
        .encodeABI();

      const estimatedGas = await this.web3.eth.estimateGas({
        to: this.marketContractAddress,
        from: seller.address,
        data: txnData,
      });

      const signedTransaction = await this.web3.eth.accounts.signTransaction(
        {
          to: this.marketContractAddress,
          from: seller.address,
          gas: estimatedGas,
          gasPrice: 100000000000,
          data: txnData,
        },
        seller.privateKey,
      );

      await this.web3.eth.sendSignedTransaction(
        signedTransaction.rawTransaction,
      );

      const marketItemId = await this.blixMarketContract.methods
        .currentItemId()
        .call();

      return marketItemId;
    } catch (error) {
      throw error;
    }
  }

  async putOffSale(privateKey: string, itemId: number): Promise<void> {
    try {
      const seller = await this.web3.eth.accounts.privateKeyToAccount(
        privateKey,
      );

      const txnData = this.blixMarketContract.methods
        .putOffSale(itemId)
        .encodeABI();

      const estimatedGas = await this.web3.eth.estimateGas({
        to: this.marketContractAddress,
        from: seller.address,
        data: txnData,
      });

      const signedTransaction = await this.web3.eth.accounts.signTransaction(
        {
          to: this.marketContractAddress,
          from: seller.address,
          gas: estimatedGas,
          gasPrice: 100000000000,
          data: txnData,
        },
        seller.privateKey,
      );

      await this.web3.eth.sendSignedTransaction(
        signedTransaction.rawTransaction,
      );
    } catch (error) {
      throw error;
    }
  }

  async changePrice(
    privateKey: string,
    itemId: number,
    price: number,
  ): Promise<void> {
    try {
      const seller = await this.web3.eth.accounts.privateKeyToAccount(
        privateKey,
      );

      const txnData = this.blixMarketContract.methods
        .changePrice(itemId, this.web3.utils.toWei(`${price}`))
        .encodeABI();

      const estimatedGas = await this.web3.eth.estimateGas({
        to: this.marketContractAddress,
        from: seller.address,
        data: txnData,
      });

      const signedTransaction = await this.web3.eth.accounts.signTransaction(
        {
          to: this.marketContractAddress,
          from: seller.address,
          gas: estimatedGas,
          gasPrice: 100000000000,
          data: txnData,
        },
        seller.privateKey,
      );

      await this.web3.eth.sendSignedTransaction(
        signedTransaction.rawTransaction,
      );
    } catch (error) {
      throw error;
    }
  }

  async buyFromSecondaryMarket(
    privateKey: string,
    itemId: number,
    price: number,
  ): Promise<void> {
    try {
      const buyer = await this.web3.eth.accounts.privateKeyToAccount(
        privateKey,
      );

      const txnData = await this.blixMarketContract.methods
        .buyFromSecondaryMarket(itemId)
        .encodeABI();

      const estimatedGas = await this.web3.eth.estimateGas({
        to: this.marketContractAddress,
        from: buyer.address,
        data: txnData,
        value: this.web3.utils.toWei(`${price}`, 'ether'),
      });

      const signedTransaction = await this.web3.eth.accounts.signTransaction(
        {
          to: this.marketContractAddress,
          from: buyer.address,
          gas: estimatedGas,
          gasPrice: 100000000000,
          data: txnData,
          value: this.web3.utils.toWei(`${price}`, 'ether'),
        },
        buyer.privateKey,
      );

      await this.web3.eth.sendSignedTransaction(
        signedTransaction.rawTransaction,
      );
    } catch (error) {
      throw error;
    }
  }
}
