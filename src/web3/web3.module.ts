import { Module } from '@nestjs/common';
import { Web3Service } from './web3.service';
import { Web3Controller } from './web3.controller';
import { Web3Provider } from './web3.provider';

@Module({
  controllers: [Web3Controller],
  providers: [Web3Service, Web3Provider],
  exports: [Web3Service],
})
export class Web3Module {}
