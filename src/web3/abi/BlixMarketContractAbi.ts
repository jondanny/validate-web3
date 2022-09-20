export const blixMarketContractAbi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_blixNftContract',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'seller',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'buyer',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'Trade',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'buyer',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'buyFromPrimaryMarket',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_itemId',
        type: 'uint256',
      },
    ],
    name: 'buyFromSecondaryMarket',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'itemId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'price',
        type: 'uint256',
      },
    ],
    name: 'changePrice',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'currentItemId',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'getItemsByOwner',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'price',
            type: 'uint256',
          },
          {
            internalType: 'address payable',
            name: 'seller',
            type: 'address',
          },
          {
            internalType: 'enum BlixMarket.itemStatusEnum',
            name: 'status',
            type: 'uint8',
          },
        ],
        internalType: 'struct BlixMarket.MarketItemStruct[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'from',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'to',
        type: 'uint256',
      },
    ],
    name: 'getLatestItemsByIndex',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'price',
            type: 'uint256',
          },
          {
            internalType: 'address payable',
            name: 'seller',
            type: 'address',
          },
          {
            internalType: 'enum BlixMarket.itemStatusEnum',
            name: 'status',
            type: 'uint8',
          },
        ],
        internalType: 'struct BlixMarket.MarketItemStruct[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    name: 'onERC1155BatchReceived',
    outputs: [
      {
        internalType: 'bytes4',
        name: '',
        type: 'bytes4',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    name: 'onERC1155Received',
    outputs: [
      {
        internalType: 'bytes4',
        name: '',
        type: 'bytes4',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'itemId',
        type: 'uint256',
      },
    ],
    name: 'putOffSale',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'price',
        type: 'uint256',
      },
    ],
    name: 'putOnSale',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

export const bytecode =
  '0x60806040526101f46003556127106004553480156200001d57600080fd5b50604051620026943803806200269483398181016040528101906200004391906200013e565b600160008190555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505062000170565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200010682620000d9565b9050919050565b6200011881620000f9565b81146200012457600080fd5b50565b60008151905062000138816200010d565b92915050565b600060208284031215620001575762000156620000d4565b5b6000620001678482850162000127565b91505092915050565b61251480620001806000396000f3fe60806040526004361061009c5760003560e01c806385ed31b51161006457806385ed31b5146101aa578063920bf9f9146101c6578063b3de019c146101ef578063bc197c8114610218578063dfe0a9b114610255578063f23a6e61146102805761009c565b806301ffc9a7146100a1578063121c5e91146100de578063155fa8a31461010757806324f9d08d146101445780632c67a8e51461016d575b600080fd5b3480156100ad57600080fd5b506100c860048036038101906100c39190611654565b6102bd565b6040516100d5919061169c565b60405180910390f35b3480156100ea57600080fd5b50610105600480360381019061010091906116ed565b610337565b005b34801561011357600080fd5b5061012e60048036038101906101299190611740565b610533565b60405161013b919061195e565b60405180910390f35b34801561015057600080fd5b5061016b60048036038101906101669190611980565b6107c5565b005b34801561017957600080fd5b50610194600480360381019061018f91906119eb565b610af0565b6040516101a1919061195e565b60405180910390f35b6101c460048036038101906101bf9190611980565b610e2a565b005b3480156101d257600080fd5b506101ed60048036038101906101e89190611a18565b61121c565b005b3480156101fb57600080fd5b5061021660048036038101906102119190611740565b6112b4565b005b34801561022457600080fd5b5061023f600480360381019061023a9190611c79565b611403565b60405161024c9190611d57565b60405180910390f35b34801561026157600080fd5b5061026a611418565b6040516102779190611d81565b60405180910390f35b34801561028c57600080fd5b506102a760048036038101906102a29190611d9c565b611429565b6040516102b49190611d57565b60405180910390f35b60007f4e2312e0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610330575061032f8261143e565b5b9050919050565b6002600054141561037d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161037490611e90565b60405180910390fd5b6002600081905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f242432a333086866040518563ffffffff1660e01b81526004016103e69493929190611ef6565b600060405180830381600087803b15801561040057600080fd5b505af1158015610414573d6000803e3d6000fd5b5050505061042260056114a8565b6040518060a001604052808481526020018381526020018281526020013373ffffffffffffffffffffffffffffffffffffffff1681526020016000600281111561046f5761046e6117fc565b5b8152506006600061048060056114be565b815260200190815260200160002060008201518160000155602082015181600101556040820151816002015560608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060808201518160030160146101000a81548160ff0219169083600281111561051e5761051d6117fc565b5b02179055509050506001600081905550505050565b60606000600184846105459190611f7d565b61054f9190611fb1565b67ffffffffffffffff81111561056857610567611a81565b5b6040519080825280602002602001820160405280156105a157816020015b61058e611591565b8152602001906001900390816105865790505b509050600080600060016105b560056114be565b6105bf9190611f7d565b90505b6000811015806105d25750858211155b156107b857600060028111156105eb576105ea6117fc565b5b6006600083815260200190815260200160002060030160149054906101000a900460ff166002811115610621576106206117fc565b5b14801561069057503373ffffffffffffffffffffffffffffffffffffffff166006600083815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614155b156107a55786821061079657600660008281526020019081526020016000206040518060a00160405290816000820154815260200160018201548152602001600282015481526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016003820160149054906101000a900460ff166002811115610753576107526117fc565b5b6002811115610765576107646117fc565b5b8152505084848151811061077c5761077b612007565b5b6020026020010181905250828061079290612036565b9350505b81806107a190612036565b9250505b80806107b09061207f565b9150506105c2565b5082935050505092915050565b6002600054141561080b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161080290611e90565b60405180910390fd5b6002600081905550806006600082815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146108b8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108af9061211b565b60405180910390fd5b600060028111156108cc576108cb6117fc565b5b6006600084815260200190815260200160002060030160149054906101000a900460ff166002811115610902576109016117fc565b5b14610942576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161093990612187565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff166006600084815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146109e6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109dd90612219565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f242432a3033600660008781526020019081526020016000206000015460066000888152602001908152602001600020600101546040518563ffffffff1660e01b8152600401610a739493929190611ef6565b600060405180830381600087803b158015610a8d57600080fd5b505af1158015610aa1573d6000803e3d6000fd5b5050505060016006600084815260200190815260200160002060030160146101000a81548160ff02191690836002811115610adf57610ade6117fc565b5b021790555050600160008190555050565b60606000805b610b0060056114be565b811015610be65760006002811115610b1b57610b1a6117fc565b5b6006600083815260200190815260200160002060030160149054906101000a900460ff166002811115610b5157610b506117fc565b5b148015610bbf57508373ffffffffffffffffffffffffffffffffffffffff166006600083815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b15610bd3578180610bcf90612036565b9250505b8080610bde90612036565b915050610af6565b5060008167ffffffffffffffff811115610c0357610c02611a81565b5b604051908082528060200260200182016040528015610c3c57816020015b610c29611591565b815260200190600190039081610c215790505b5090506000805b610c4d60056114be565b811015610e1e5760006002811115610c6857610c676117fc565b5b6006600083815260200190815260200160002060030160149054906101000a900460ff166002811115610c9e57610c9d6117fc565b5b148015610d0c57508573ffffffffffffffffffffffffffffffffffffffff166006600083815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b15610e0b57600660008281526020019081526020016000206040518060a00160405290816000820154815260200160018201548152602001600282015481526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016003820160149054906101000a900460ff166002811115610dc857610dc76117fc565b5b6002811115610dda57610dd96117fc565b5b81525050838381518110610df157610df0612007565b5b60200260200101819052508180610e0790612036565b9250505b8080610e1690612036565b915050610c43565b50819350505050919050565b6006600082815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610ecf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ec690612285565b60405180910390fd5b60006002811115610ee357610ee26117fc565b5b6006600083815260200190815260200160002060030160149054906101000a900460ff166002811115610f1957610f186117fc565b5b14610f59576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f50906122f1565b60405180910390fd5b610fc86040518060400160405280600281526020017f31310000000000000000000000000000000000000000000000000000000000008152506004546003546006600086815260200190815260200160002060020154610fb99190612311565b610fc3919061239a565b6114cc565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc600454600354600660008681526020019081526020016000206002015461102b9190612311565b611035919061239a565b9081150290604051600060405180830381858888f19350505050158015611060573d6000803e3d6000fd5b506006600082815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6004546003546004546110c49190611f7d565b60066000868152602001908152602001600020600201546110e59190612311565b6110ef919061239a565b9081150290604051600060405180830381858888f1935050505015801561111a573d6000803e3d6000fd5b5060026006600083815260200190815260200160002060030160146101000a81548160ff02191690836002811115611155576111546117fc565b5b0217905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f242432a3033600660008681526020019081526020016000206000015460066000878152602001908152602001600020600101546040518563ffffffff1660e01b81526004016111e79493929190611ef6565b600060405180830381600087803b15801561120157600080fd5b505af1158015611215573d6000803e3d6000fd5b5050505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f242432a338585856040518563ffffffff1660e01b815260040161127d9493929190611ef6565b600060405180830381600087803b15801561129757600080fd5b505af11580156112ab573d6000803e3d6000fd5b50505050505050565b816006600082815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611359576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113509061211b565b60405180910390fd5b6000600281111561136d5761136c6117fc565b5b6006600085815260200190815260200160002060030160149054906101000a900460ff1660028111156113a3576113a26117fc565b5b146113e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113da90612417565b60405180910390fd5b816006600085815260200190815260200160002060020181905550505050565b600063bc197c8160e01b905095945050505050565b600061142460056114be565b905090565b600063f23a6e6160e01b905095945050505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6001816000016000828254019250508190555050565b600081600001549050919050565b61156482826040516024016114e29291906124ae565b6040516020818303038152906040527f9710a9d0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611568565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b6040518060a00160405280600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600060028111156115e2576115e16117fc565b5b81525090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611631816115fc565b811461163c57600080fd5b50565b60008135905061164e81611628565b92915050565b60006020828403121561166a576116696115f2565b5b60006116788482850161163f565b91505092915050565b60008115159050919050565b61169681611681565b82525050565b60006020820190506116b1600083018461168d565b92915050565b6000819050919050565b6116ca816116b7565b81146116d557600080fd5b50565b6000813590506116e7816116c1565b92915050565b600080600060608486031215611706576117056115f2565b5b6000611714868287016116d8565b9350506020611725868287016116d8565b9250506040611736868287016116d8565b9150509250925092565b60008060408385031215611757576117566115f2565b5b6000611765858286016116d8565b9250506020611776858286016116d8565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6117b5816116b7565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006117e6826117bb565b9050919050565b6117f6816117db565b82525050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6003811061183c5761183b6117fc565b5b50565b600081905061184d8261182b565b919050565b600061185d8261183f565b9050919050565b61186d81611852565b82525050565b60a08201600082015161188960008501826117ac565b50602082015161189c60208501826117ac565b5060408201516118af60408501826117ac565b5060608201516118c260608501826117ed565b5060808201516118d56080850182611864565b50505050565b60006118e78383611873565b60a08301905092915050565b6000602082019050919050565b600061190b82611780565b611915818561178b565b93506119208361179c565b8060005b8381101561195157815161193888826118db565b9750611943836118f3565b925050600181019050611924565b5085935050505092915050565b600060208201905081810360008301526119788184611900565b905092915050565b600060208284031215611996576119956115f2565b5b60006119a4848285016116d8565b91505092915050565b60006119b8826117bb565b9050919050565b6119c8816119ad565b81146119d357600080fd5b50565b6000813590506119e5816119bf565b92915050565b600060208284031215611a0157611a006115f2565b5b6000611a0f848285016119d6565b91505092915050565b600080600060608486031215611a3157611a306115f2565b5b6000611a3f868287016119d6565b9350506020611a50868287016116d8565b9250506040611a61868287016116d8565b9150509250925092565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611ab982611a70565b810181811067ffffffffffffffff82111715611ad857611ad7611a81565b5b80604052505050565b6000611aeb6115e8565b9050611af78282611ab0565b919050565b600067ffffffffffffffff821115611b1757611b16611a81565b5b602082029050602081019050919050565b600080fd5b6000611b40611b3b84611afc565b611ae1565b90508083825260208201905060208402830185811115611b6357611b62611b28565b5b835b81811015611b8c5780611b7888826116d8565b845260208401935050602081019050611b65565b5050509392505050565b600082601f830112611bab57611baa611a6b565b5b8135611bbb848260208601611b2d565b91505092915050565b600080fd5b600067ffffffffffffffff821115611be457611be3611a81565b5b611bed82611a70565b9050602081019050919050565b82818337600083830152505050565b6000611c1c611c1784611bc9565b611ae1565b905082815260208101848484011115611c3857611c37611bc4565b5b611c43848285611bfa565b509392505050565b600082601f830112611c6057611c5f611a6b565b5b8135611c70848260208601611c09565b91505092915050565b600080600080600060a08688031215611c9557611c946115f2565b5b6000611ca3888289016119d6565b9550506020611cb4888289016119d6565b945050604086013567ffffffffffffffff811115611cd557611cd46115f7565b5b611ce188828901611b96565b935050606086013567ffffffffffffffff811115611d0257611d016115f7565b5b611d0e88828901611b96565b925050608086013567ffffffffffffffff811115611d2f57611d2e6115f7565b5b611d3b88828901611c4b565b9150509295509295909350565b611d51816115fc565b82525050565b6000602082019050611d6c6000830184611d48565b92915050565b611d7b816116b7565b82525050565b6000602082019050611d966000830184611d72565b92915050565b600080600080600060a08688031215611db857611db76115f2565b5b6000611dc6888289016119d6565b9550506020611dd7888289016119d6565b9450506040611de8888289016116d8565b9350506060611df9888289016116d8565b925050608086013567ffffffffffffffff811115611e1a57611e196115f7565b5b611e2688828901611c4b565b9150509295509295909350565b600082825260208201905092915050565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b6000611e7a601f83611e33565b9150611e8582611e44565b602082019050919050565b60006020820190508181036000830152611ea981611e6d565b9050919050565b611eb9816119ad565b82525050565b600082825260208201905092915050565b50565b6000611ee0600083611ebf565b9150611eeb82611ed0565b600082019050919050565b600060a082019050611f0b6000830187611eb0565b611f186020830186611eb0565b611f256040830185611d72565b611f326060830184611d72565b8181036080830152611f4381611ed3565b905095945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611f88826116b7565b9150611f93836116b7565b925082821015611fa657611fa5611f4e565b5b828203905092915050565b6000611fbc826116b7565b9150611fc7836116b7565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611ffc57611ffb611f4e565b5b828201905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000612041826116b7565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561207457612073611f4e565b5b600182019050919050565b600061208a826116b7565b9150600082141561209e5761209d611f4e565b5b600182039050919050565b7f4f6e6c7920746f6b656e2073656c6c65722063616e2063616c6c20746869732060008201527f66756e6374696f6e210000000000000000000000000000000000000000000000602082015250565b6000612105602983611e33565b9150612110826120a9565b604082019050919050565b60006020820190508181036000830152612134816120f8565b9050919050565b7f4974656d2073686f756c64206265206f6e2073616c6521000000000000000000600082015250565b6000612171601783611e33565b915061217c8261213b565b602082019050919050565b600060208201905081810360008301526121a081612164565b9050919050565b7f43616c6c6572206973206e6f7420746865206f776e6572206f66206d61726b6560008201527f74206974656d0000000000000000000000000000000000000000000000000000602082015250565b6000612203602683611e33565b915061220e826121a7565b604082019050919050565b60006020820190508181036000830152612232816121f6565b9050919050565b7f43616e6e6f742062757920796f7572206f776e204e4654210000000000000000600082015250565b600061226f601883611e33565b915061227a82612239565b602082019050919050565b6000602082019050818103600083015261229e81612262565b9050919050565b7f4974656d206973206e6f74206f6e2073616c6521000000000000000000000000600082015250565b60006122db601483611e33565b91506122e6826122a5565b602082019050919050565b6000602082019050818103600083015261230a816122ce565b9050919050565b600061231c826116b7565b9150612327836116b7565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156123605761235f611f4e565b5b828202905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006123a5826116b7565b91506123b0836116b7565b9250826123c0576123bf61236b565b5b828204905092915050565b7f4974656d206973206e6f74206f6e2073616c6500000000000000000000000000600082015250565b6000612401601383611e33565b915061240c826123cb565b602082019050919050565b60006020820190508181036000830152612430816123f4565b9050919050565b600081519050919050565b60005b83811015612460578082015181840152602081019050612445565b8381111561246f576000848401525b50505050565b600061248082612437565b61248a8185611e33565b935061249a818560208601612442565b6124a381611a70565b840191505092915050565b600060408201905081810360008301526124c88185612475565b90506124d76020830184611d72565b939250505056fea2646970667358221220850f658ad3c50dceaaf8d6c86c4dbde7657c3e6fb69cefacdf907fa65acdd1bc64736f6c63430008090033';
