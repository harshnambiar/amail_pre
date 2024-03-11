import { ContractPromise } from '@polkadot/api-contract';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { BN, BN_ONE } from '@polkadot/util';
import type { WeightV2 } from '@polkadot/types/interfaces';

import amailMetadata from '../metadata/amail.json';

import {
    web3Enable,
    web3Accounts,
  } from "@polkadot/extension-dapp";

const APP_PROVIDER_URL = "wss://ws.test.azero.dev";

const wsProvider = new WsProvider(APP_PROVIDER_URL);
const api = await ApiPromise.create({ provider: wsProvider });
const address = '5FD5srm77hfrsE9K79Fot7LxPpVzBnVM3JbnjuC2b2AHCtcf';


const contract = new ContractPromise(
    api,
    amailMetadata,
    address
  );

  const MAX_CALL_WEIGHT = new BN(5_000_000_000_000).isub(BN_ONE);

  const readOnlyGasLimit = api.registry.createType('WeightV2', {
      refTime: new BN(1_000_000_000_000),
      proofSize: MAX_CALL_WEIGHT,
    }) as WeightV2;


    const caller = '5CfEVT4RFuCrhYYPBvCVwgFGMukwwvJGFhwLbTecvoVf6Uvz' ;

    

    
        const {
            gasConsumed,
            gasRequired,
            storageDeposit,
            result,
            output,
            debugMessage,
          } = await contract.query.getReceivedMail(
            caller, // caller address
            {
              gasLimit: readOnlyGasLimit,
            }
            
          );
          console.log(contract.query);
          if (result.isOk && output) {
            console.log(output.toHuman());
          }
          if (result.isErr) {
            console.log(result.toHuman());
          }


          const res2 = await contract.query.getAlgosAndMask(
            caller,
            {
              gasLimit: readOnlyGasLimit,
            },
            ['mail01']
          );
          if (res2.result.isOk && res2.output) {
            console.log(res2.output.toHuman());
          }
          if (res2.result.isErr) {
            console.log(res2.result.toHuman());
          }
    
    
      
      


      