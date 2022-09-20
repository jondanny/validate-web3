import { registerAs } from '@nestjs/config';

export default registerAs('web3Config', () => ({
  testnetApiUrl: process.env.TESTNET_API_URL,
  alchemyApiKey: process.env.ALCHEMY_API_KEY,
  nftContractAddress: process.env.NFT_CONTRACT_ADDRESS,
  marketContractAddress: process.env.MARKET_CONTRACT_ADDRESS,
  privateKey: process.env.PRIVATE_KEY,
}));
