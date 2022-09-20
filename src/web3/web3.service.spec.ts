import { Test, TestingModule } from '@nestjs/testing';
import { TransactionReceipt } from '@alch/alchemy-web3';
import { PromiEvent, SignedTransaction } from 'web3-core-promievent';
import { AppModule } from '../app.module';
import { Web3Service } from './web3.service';
import { Account } from 'web3-core';

describe('Web3Service', () => {
  let web3Service: Web3Service;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    web3Service = module.get<Web3Service>(Web3Service);

    jest
      .spyOn(web3Service.web3.eth, 'estimateGas')
      .mockImplementation(async (): Promise<number> => 324000);
    jest
      .spyOn(web3Service.web3.eth, 'getBalance')
      .mockImplementation(async (): Promise<string> => '2000000000000000000');
    jest
      .spyOn(web3Service.web3.eth, 'sendSignedTransaction')
      .mockImplementation(async (): PromiEvent<TransactionReceipt> => ({}));
    jest
      .spyOn(web3Service.web3.eth, 'getTransactionCount')
      .mockImplementation(async (): Promise<number> => 1);
    jest
      .spyOn(web3Service.web3.eth.accounts, 'privateKeyToAccount')
      .mockImplementation((): Account => ({} as Account));
    jest
      .spyOn(web3Service.web3.eth.accounts, 'signTransaction')
      .mockImplementation(
        (): SignedTransaction => ({ transactionHash: '0xHash' }),
      );
    jest
      .spyOn(web3Service.web3.eth.accounts, 'create')
      .mockImplementation((): Account => ({} as Account));
    jest
      .spyOn(web3Service.blixNft1155Contract.methods, 'mint')
      .mockImplementation(() => ({ encodeABI: (): string => '0xEncodeABI' }));
    jest
      .spyOn(web3Service.blixNft1155Contract.methods, 'currentId')
      .mockImplementation(() => ({ call: (): number => 1 }));
    jest
      .spyOn(web3Service.blixNft1155Contract.methods, 'setApprovalForAll')
      .mockImplementation(() => ({ encodeABI: (): string => '0xEncodeABI' }));
    jest
      .spyOn(web3Service.blixMarketContract.methods, 'buyFromPrimaryMarket')
      .mockImplementation(() => ({ encodeABI: (): string => '0xEncodeABI' }));
    jest
      .spyOn(web3Service.blixMarketContract.methods, 'putOnSale')
      .mockImplementation(() => ({ encodeABI: (): string => '0xEncodeABI' }));
    jest
      .spyOn(web3Service.blixMarketContract.methods, 'currentItemId')
      .mockImplementation(() => ({ call: (): number => 1 }));
    jest
      .spyOn(web3Service.blixMarketContract.methods, 'putOffSale')
      .mockImplementation(() => ({ encodeABI: (): string => '0xEncodeABI' }));
    jest
      .spyOn(web3Service.blixMarketContract.methods, 'changePrice')
      .mockImplementation(() => ({ encodeABI: (): string => '0xEncodeABI' }));
    jest
      .spyOn(web3Service.blixMarketContract.methods, 'buyFromSecondaryMarket')
      .mockImplementation(() => ({ encodeABI: (): string => '0xEncodeABI' }));
  });

  it('should be defined', () => {
    expect(web3Service).toBeDefined();
  });

  it('get Matic balance from API', async () => {
    const mockAddress = '0x2bbcd0f0a76e01aa709a0bf1309bb0588c9af143';

    const result = await web3Service.getMaticBalance(mockAddress);

    expect(result).toEqual(2);
  });

  it('create wallet', async () => {
    const result = await web3Service.createWallet();

    expect(result).toHaveProperty('address');
    expect(result).toHaveProperty('privateKey');
  });

  it('mint Nft', async () => {
    const mockMetadataUri =
      'bafkreieare3klwfhhv6652id25opxwrdp5qrgo7bhmaflypjcprwvzx2iy';
    const mockAmount = 100;

    const result = await web3Service.mint(mockMetadataUri, mockAmount);

    expect(result).toEqual(1);
  });

  it('Send Initial Matic to user', async () => {
    const mockUserAddress = '0xF913354e8243A766387647495313d2a5247ec70f';
    const mockAmount = 0.02;

    expect(() =>
      web3Service.sendInitialMatic(mockUserAddress, mockAmount),
    ).not.toThrow();
  });

  it(`Set Marketplace contract approved for user's tokens`, async () => {
    const mockPrivateKey =
      'e5238703ba613ee7a9c06306c8c55b551c46bba181dc7787e0d65e2b32349181';

    expect(() => web3Service.setApproval(mockPrivateKey)).not.toThrow();
  });

  it('Put an item on sale', async () => {
    const mockPrivateKey =
      'e5238703ba613ee7a9c06306c8c55b551c46bba181dc7787e0d65e2b32349181';
    const mockTokenId = 1;
    const mockAmount = 10;
    const mockPrice = 100000;

    const result = await web3Service.putOnSale(
      mockPrivateKey,
      mockTokenId,
      mockAmount,
      mockPrice,
    );

    expect(result).toEqual(1);
  });

  it(`Buy from primary market`, async () => {
    const mockUserAddress = '0xF913354e8243A766387647495313d2a5247ec70f';
    const mockTokenId = 1;
    const mockAmount = 10;

    expect(() =>
      web3Service.buyFromPrimaryMarket(
        mockUserAddress,
        mockTokenId,
        mockAmount,
      ),
    ).not.toThrow();
  });

  it(`Buy from secondary market`, async () => {
    const mockPrivateKey =
      'e5238703ba613ee7a9c06306c8c55b551c46bba181dc7787e0d65e2b32349181';
    const mockItemId = 1;
    const mockPrice = 0.1;

    expect(() =>
      web3Service.buyFromSecondaryMarket(mockPrivateKey, mockItemId, mockPrice),
    ).not.toThrow();
  });
});
