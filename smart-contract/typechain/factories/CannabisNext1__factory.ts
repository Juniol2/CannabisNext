/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CannabisNext1, CannabisNext1Interface } from "../CannabisNext1";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_tokenName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_tokenSymbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_cost",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxSupply",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxMintAmountPerTx",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_hiddenMetadataUri",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ApprovalCallerNotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "ApprovalQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "ApprovalToCurrentOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ApproveToCaller",
    type: "error",
  },
  {
    inputs: [],
    name: "BalanceQueryForZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "MintToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "MintZeroQuantity",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnerQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferCallerNotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferFromIncorrectOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToNonERC721ReceiverImplementer",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToZeroAddress",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "cost",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "hiddenMetadataUri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxMintAmountPerTx",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "merkleRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_mintAmount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_mintAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
    ],
    name: "mintForAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "revealed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_cost",
        type: "uint256",
      },
    ],
    name: "setCost",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_hiddenMetadataUri",
        type: "string",
      },
    ],
    name: "setHiddenMetadataUri",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_maxMintAmountPerTx",
        type: "uint256",
      },
    ],
    name: "setMaxMintAmountPerTx",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_merkleRoot",
        type: "bytes32",
      },
    ],
    name: "setMerkleRoot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_state",
        type: "bool",
      },
    ],
    name: "setPaused",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_state",
        type: "bool",
      },
    ],
    name: "setRevealed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_uriPrefix",
        type: "string",
      },
    ],
    name: "setUriPrefix",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_uriSuffix",
        type: "string",
      },
    ],
    name: "setUriSuffix",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_state",
        type: "bool",
      },
    ],
    name: "setWhitelistMintEnabled",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "uriPrefix",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "uriSuffix",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "walletOfOwner",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "whitelistClaimed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_mintAmount",
        type: "uint256",
      },
      {
        internalType: "bytes32[]",
        name: "_merkleProof",
        type: "bytes32[]",
      },
    ],
    name: "whitelistMint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "whitelistMintEnabled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040819052600060808190526200001b91600c91620001c1565b5060408051808201909152600580825264173539b7b760d91b60209092019182526200004a91600d91620001c1565b506012805462ffffff191660011790553480156200006757600080fd5b5060405162002a9338038062002a938339810160408190526200008a9162000334565b855186908690620000a3906002906020850190620001c1565b508051620000b9906003906020840190620001c1565b5050600160005550620000cc33620000f7565b6001600955600f84905560108390556011829055620000eb8162000149565b5050505050506200041e565b600880546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6008546001600160a01b03163314620001a85760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640160405180910390fd5b8051620001bd90600e906020840190620001c1565b5050565b828054620001cf90620003e1565b90600052602060002090601f016020900481019282620001f357600085556200023e565b82601f106200020e57805160ff19168380011785556200023e565b828001600101855582156200023e579182015b828111156200023e57825182559160200191906001019062000221565b506200024c92915062000250565b5090565b5b808211156200024c576000815560010162000251565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200028f57600080fd5b81516001600160401b0380821115620002ac57620002ac62000267565b604051601f8301601f19908116603f01168101908282118183101715620002d757620002d762000267565b81604052838152602092508683858801011115620002f457600080fd5b600091505b83821015620003185785820183015181830184015290820190620002f9565b838211156200032a5760008385830101525b9695505050505050565b60008060008060008060c087890312156200034e57600080fd5b86516001600160401b03808211156200036657600080fd5b620003748a838b016200027d565b975060208901519150808211156200038b57600080fd5b620003998a838b016200027d565b965060408901519550606089015194506080890151935060a0890151915080821115620003c557600080fd5b50620003d489828a016200027d565b9150509295509295509295565b600181811c90821680620003f657607f821691505b602082108114156200041857634e487b7160e01b600052602260045260246000fd5b50919050565b612665806200042e6000396000f3fe6080604052600436106102515760003560e01c806370a0823111610139578063b071401b116100b6578063d5abeb011161007a578063d5abeb011461069d578063db4bec44146106b3578063e0a80853146106e3578063e985e9c514610703578063efbd73f41461074c578063f2fde38b1461076c57600080fd5b8063b071401b1461060a578063b767a0981461062a578063b88d4fde1461064a578063c87b56dd1461066a578063d2cab0561461068a57600080fd5b806394354fd0116100fd57806394354fd01461059757806395d89b41146105ad578063a0712d68146105c2578063a22cb465146105d5578063a45ba8e7146105f557600080fd5b806370a0823114610504578063715018a6146105245780637cb64759146105395780637ec4a659146105595780638da5cb5b1461057957600080fd5b80633ccfd60b116101d2578063518302271161019657806351830227146104615780635503a0e8146104815780635c975abb1461049657806362b99ad4146104b05780636352211e146104c55780636caede3d146104e557600080fd5b80633ccfd60b146103bf57806342842e0e146103d4578063438b6300146103f457806344a0d68a146104215780634fdd43cb1461044157600080fd5b806316ba10e01161021957806316ba10e01461032b57806316c38b3c1461034b57806318160ddd1461036b57806323b872dd146103895780632eb4a7ab146103a957600080fd5b806301ffc9a71461025657806306fdde031461028b578063081812fc146102ad578063095ea7b3146102e557806313faede614610307575b600080fd5b34801561026257600080fd5b50610276610271366004611f79565b61078c565b60405190151581526020015b60405180910390f35b34801561029757600080fd5b506102a06107de565b6040516102829190611fee565b3480156102b957600080fd5b506102cd6102c8366004612001565b610870565b6040516001600160a01b039091168152602001610282565b3480156102f157600080fd5b50610305610300366004612036565b6108b4565b005b34801561031357600080fd5b5061031d600f5481565b604051908152602001610282565b34801561033757600080fd5b506103056103463660046120eb565b610942565b34801561035757600080fd5b50610305610366366004612143565b61098c565b34801561037757600080fd5b5061031d600154600054036000190190565b34801561039557600080fd5b506103056103a436600461215e565b6109c9565b3480156103b557600080fd5b5061031d600a5481565b3480156103cb57600080fd5b506103056109d4565b3480156103e057600080fd5b506103056103ef36600461215e565b610acf565b34801561040057600080fd5b5061041461040f36600461219a565b610aea565b60405161028291906121b5565b34801561042d57600080fd5b5061030561043c366004612001565b610c31565b34801561044d57600080fd5b5061030561045c3660046120eb565b610c60565b34801561046d57600080fd5b506012546102769062010000900460ff1681565b34801561048d57600080fd5b506102a0610c9d565b3480156104a257600080fd5b506012546102769060ff1681565b3480156104bc57600080fd5b506102a0610d2b565b3480156104d157600080fd5b506102cd6104e0366004612001565b610d38565b3480156104f157600080fd5b5060125461027690610100900460ff1681565b34801561051057600080fd5b5061031d61051f36600461219a565b610d4a565b34801561053057600080fd5b50610305610d98565b34801561054557600080fd5b50610305610554366004612001565b610dce565b34801561056557600080fd5b506103056105743660046120eb565b610dfd565b34801561058557600080fd5b506008546001600160a01b03166102cd565b3480156105a357600080fd5b5061031d60115481565b3480156105b957600080fd5b506102a0610e3a565b6103056105d0366004612001565b610e49565b3480156105e157600080fd5b506103056105f03660046121f9565b610f66565b34801561060157600080fd5b506102a0610ffc565b34801561061657600080fd5b50610305610625366004612001565b611009565b34801561063657600080fd5b50610305610645366004612143565b611038565b34801561065657600080fd5b5061030561066536600461222c565b61107c565b34801561067657600080fd5b506102a0610685366004612001565b6110cd565b6103056106983660046122a7565b61123d565b3480156106a957600080fd5b5061031d60105481565b3480156106bf57600080fd5b506102766106ce36600461219a565b600b6020526000908152604090205460ff1681565b3480156106ef57600080fd5b506103056106fe366004612143565b6114a2565b34801561070f57600080fd5b5061027661071e366004612325565b6001600160a01b03918216600090815260076020908152604080832093909416825291909152205460ff1690565b34801561075857600080fd5b5061030561076736600461234f565b6114e8565b34801561077857600080fd5b5061030561078736600461219a565b611588565b60006001600160e01b031982166380ac58cd60e01b14806107bd57506001600160e01b03198216635b5e139f60e01b145b806107d857506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600280546107ed90612372565b80601f016020809104026020016040519081016040528092919081815260200182805461081990612372565b80156108665780601f1061083b57610100808354040283529160200191610866565b820191906000526020600020905b81548152906001019060200180831161084957829003601f168201915b5050505050905090565b600061087b82611623565b610898576040516333d1c03960e21b815260040160405180910390fd5b506000908152600660205260409020546001600160a01b031690565b60006108bf82610d38565b9050806001600160a01b0316836001600160a01b031614156108f45760405163250fdee360e21b815260040160405180910390fd5b336001600160a01b038216148015906109145750610912813361071e565b155b15610932576040516367d9dca160e11b815260040160405180910390fd5b61093d83838361165c565b505050565b6008546001600160a01b031633146109755760405162461bcd60e51b815260040161096c906123ad565b60405180910390fd5b805161098890600d906020840190611eca565b5050565b6008546001600160a01b031633146109b65760405162461bcd60e51b815260040161096c906123ad565b6012805460ff1916911515919091179055565b61093d8383836116b8565b6008546001600160a01b031633146109fe5760405162461bcd60e51b815260040161096c906123ad565b60026009541415610a515760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161096c565b60026009556000610a6a6008546001600160a01b031690565b6001600160a01b03164760405160006040518083038185875af1925050503d8060008114610ab4576040519150601f19603f3d011682016040523d82523d6000602084013e610ab9565b606091505b5050905080610ac757600080fd5b506001600955565b61093d8383836040518060200160405280600081525061107c565b60606000610af783610d4a565b90506000816001600160401b03811115610b1357610b13612060565b604051908082528060200260200182016040528015610b3c578160200160208202803683370190505b50905060016000805b8482108015610b5657506010548311155b15610c2657600083815260046020908152604091829020825160608101845290546001600160a01b0381168252600160a01b81046001600160401b031692820192909252600160e01b90910460ff161580159282018390529091610bc3575080516001600160a01b031615155b15610bcd57805191505b876001600160a01b0316826001600160a01b03161415610c135783858481518110610bfa57610bfa6123e2565b602090810291909101015282610c0f8161240e565b9350505b83610c1d8161240e565b94505050610b45565b509195945050505050565b6008546001600160a01b03163314610c5b5760405162461bcd60e51b815260040161096c906123ad565b600f55565b6008546001600160a01b03163314610c8a5760405162461bcd60e51b815260040161096c906123ad565b805161098890600e906020840190611eca565b600d8054610caa90612372565b80601f0160208091040260200160405190810160405280929190818152602001828054610cd690612372565b8015610d235780601f10610cf857610100808354040283529160200191610d23565b820191906000526020600020905b815481529060010190602001808311610d0657829003601f168201915b505050505081565b600c8054610caa90612372565b6000610d43826118cc565b5192915050565b60006001600160a01b038216610d73576040516323d3ad8160e21b815260040160405180910390fd5b506001600160a01b03166000908152600560205260409020546001600160401b031690565b6008546001600160a01b03163314610dc25760405162461bcd60e51b815260040161096c906123ad565b610dcc60006119f3565b565b6008546001600160a01b03163314610df85760405162461bcd60e51b815260040161096c906123ad565b600a55565b6008546001600160a01b03163314610e275760405162461bcd60e51b815260040161096c906123ad565b805161098890600c906020840190611eca565b6060600380546107ed90612372565b80600081118015610e5c57506011548111155b610e785760405162461bcd60e51b815260040161096c90612429565b60105481610e8d600154600054036000190190565b610e979190612457565b1115610eb55760405162461bcd60e51b815260040161096c9061246f565b8180600f54610ec4919061249d565b341015610f095760405162461bcd60e51b8152602060048201526013602482015272496e73756666696369656e742066756e64732160681b604482015260640161096c565b60125460ff1615610f5c5760405162461bcd60e51b815260206004820152601760248201527f54686520636f6e74726163742069732070617573656421000000000000000000604482015260640161096c565b61093d3384611a45565b6001600160a01b038216331415610f905760405163b06307db60e01b815260040160405180910390fd5b3360008181526007602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b600e8054610caa90612372565b6008546001600160a01b031633146110335760405162461bcd60e51b815260040161096c906123ad565b601155565b6008546001600160a01b031633146110625760405162461bcd60e51b815260040161096c906123ad565b601280549115156101000261ff0019909216919091179055565b6110878484846116b8565b6001600160a01b0383163b151580156110a957506110a784848484611a5f565b155b156110c7576040516368d2bf6b60e11b815260040160405180910390fd5b50505050565b60606110d882611623565b61113c5760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b606482015260840161096c565b60125462010000900460ff166111de57600e805461115990612372565b80601f016020809104026020016040519081016040528092919081815260200182805461118590612372565b80156111d25780601f106111a7576101008083540402835291602001916111d2565b820191906000526020600020905b8154815290600101906020018083116111b557829003601f168201915b50505050509050919050565b60006111e8611b57565b905060008151116112085760405180602001604052806000815250611236565b8061121284611b66565b600d604051602001611226939291906124bc565b6040516020818303038152906040525b9392505050565b8260008111801561125057506011548111155b61126c5760405162461bcd60e51b815260040161096c90612429565b60105481611281600154600054036000190190565b61128b9190612457565b11156112a95760405162461bcd60e51b815260040161096c9061246f565b8380600f546112b8919061249d565b3410156112fd5760405162461bcd60e51b8152602060048201526013602482015272496e73756666696369656e742066756e64732160681b604482015260640161096c565b601254610100900460ff1661135f5760405162461bcd60e51b815260206004820152602260248201527f5468652077686974656c6973742073616c65206973206e6f7420656e61626c65604482015261642160f01b606482015260840161096c565b336000908152600b602052604090205460ff16156113bf5760405162461bcd60e51b815260206004820152601860248201527f4164647265737320616c726561647920636c61696d6564210000000000000000604482015260640161096c565b6040516bffffffffffffffffffffffff193360601b16602082015260009060340160405160208183030381529060405280519060200120905061143985858080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050600a549150849050611c63565b6114765760405162461bcd60e51b815260206004820152600e60248201526d496e76616c69642070726f6f662160901b604482015260640161096c565b336000818152600b60205260409020805460ff1916600117905561149a9087611a45565b505050505050565b6008546001600160a01b031633146114cc5760405162461bcd60e51b815260040161096c906123ad565b60128054911515620100000262ff000019909216919091179055565b816000811180156114fb57506011548111155b6115175760405162461bcd60e51b815260040161096c90612429565b6010548161152c600154600054036000190190565b6115369190612457565b11156115545760405162461bcd60e51b815260040161096c9061246f565b6008546001600160a01b0316331461157e5760405162461bcd60e51b815260040161096c906123ad565b61093d8284611a45565b6008546001600160a01b031633146115b25760405162461bcd60e51b815260040161096c906123ad565b6001600160a01b0381166116175760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161096c565b611620816119f3565b50565b600081600111158015611637575060005482105b80156107d8575050600090815260046020526040902054600160e01b900460ff161590565b60008281526006602052604080822080546001600160a01b0319166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b60006116c3826118cc565b80519091506000906001600160a01b0316336001600160a01b031614806116f1575081516116f1903361071e565b8061170c57503361170184610870565b6001600160a01b0316145b90508061172c57604051632ce44b5f60e11b815260040160405180910390fd5b846001600160a01b031682600001516001600160a01b0316146117615760405162a1148160e81b815260040160405180910390fd5b6001600160a01b03841661178857604051633a954ecd60e21b815260040160405180910390fd5b611798600084846000015161165c565b6001600160a01b038581166000908152600560209081526040808320805467ffffffffffffffff198082166001600160401b0392831660001901831617909255898616808652838620805493841693831660019081018416949094179055898652600490945282852080546001600160e01b031916909417600160a01b4290921691909102179092559086018083529120549091166118825760005481101561188257825160008281526004602090815260409091208054918601516001600160401b0316600160a01b026001600160e01b03199092166001600160a01b03909316929092171790555b5082846001600160a01b0316866001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45b5050505050565b604080516060810182526000808252602082018190529181019190915281806001111580156118fc575060005481105b156119da57600081815260046020908152604091829020825160608101845290546001600160a01b0381168252600160a01b81046001600160401b031692820192909252600160e01b90910460ff161515918101829052906119d85780516001600160a01b03161561196f579392505050565b5060001901600081815260046020908152604091829020825160608101845290546001600160a01b038116808352600160a01b82046001600160401b031693830193909352600160e01b900460ff16151592810192909252156119d3579392505050565b61196f565b505b604051636f96cda160e11b815260040160405180910390fd5b600880546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b610988828260405180602001604052806000815250611c79565b604051630a85bd0160e11b81526000906001600160a01b0385169063150b7a0290611a94903390899088908890600401612580565b602060405180830381600087803b158015611aae57600080fd5b505af1925050508015611ade575060408051601f3d908101601f19168201909252611adb918101906125bd565b60015b611b39573d808015611b0c576040519150601f19603f3d011682016040523d82523d6000602084013e611b11565b606091505b508051611b31576040516368d2bf6b60e11b815260040160405180910390fd5b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490505b949350505050565b6060600c80546107ed90612372565b606081611b8a5750506040805180820190915260018152600360fc1b602082015290565b8160005b8115611bb45780611b9e8161240e565b9150611bad9050600a836125f0565b9150611b8e565b6000816001600160401b03811115611bce57611bce612060565b6040519080825280601f01601f191660200182016040528015611bf8576020820181803683370190505b5090505b8415611b4f57611c0d600183612604565b9150611c1a600a8661261b565b611c25906030612457565b60f81b818381518110611c3a57611c3a6123e2565b60200101906001600160f81b031916908160001a905350611c5c600a866125f0565b9450611bfc565b600082611c708584611c86565b14949350505050565b61093d8383836001611cfa565b600081815b8451811015611cf2576000858281518110611ca857611ca86123e2565b60200260200101519050808311611cce5760008381526020829052604090209250611cdf565b600081815260208490526040902092505b5080611cea8161240e565b915050611c8b565b509392505050565b6000546001600160a01b038516611d2357604051622e076360e81b815260040160405180910390fd5b83611d415760405163b562e8dd60e01b815260040160405180910390fd5b6001600160a01b038516600081815260056020908152604080832080546fffffffffffffffffffffffffffffffff1981166001600160401b038083168c0181169182176801000000000000000067ffffffffffffffff1990941690921783900481168c01811690920217909155858452600490925290912080546001600160e01b031916909217600160a01b429092169190910217905580808501838015611df257506001600160a01b0387163b15155b15611e7b575b60405182906001600160a01b038916906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a4611e436000888480600101955088611a5f565b611e60576040516368d2bf6b60e11b815260040160405180910390fd5b80821415611df8578260005414611e7657600080fd5b611ec1565b5b6040516001830192906001600160a01b038916906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a480821415611e7c575b506000556118c5565b828054611ed690612372565b90600052602060002090601f016020900481019282611ef85760008555611f3e565b82601f10611f1157805160ff1916838001178555611f3e565b82800160010185558215611f3e579182015b82811115611f3e578251825591602001919060010190611f23565b50611f4a929150611f4e565b5090565b5b80821115611f4a5760008155600101611f4f565b6001600160e01b03198116811461162057600080fd5b600060208284031215611f8b57600080fd5b813561123681611f63565b60005b83811015611fb1578181015183820152602001611f99565b838111156110c75750506000910152565b60008151808452611fda816020860160208601611f96565b601f01601f19169290920160200192915050565b6020815260006112366020830184611fc2565b60006020828403121561201357600080fd5b5035919050565b80356001600160a01b038116811461203157600080fd5b919050565b6000806040838503121561204957600080fd5b6120528361201a565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b60006001600160401b038084111561209057612090612060565b604051601f8501601f19908116603f011681019082821181831017156120b8576120b8612060565b816040528093508581528686860111156120d157600080fd5b858560208301376000602087830101525050509392505050565b6000602082840312156120fd57600080fd5b81356001600160401b0381111561211357600080fd5b8201601f8101841361212457600080fd5b611b4f84823560208401612076565b8035801515811461203157600080fd5b60006020828403121561215557600080fd5b61123682612133565b60008060006060848603121561217357600080fd5b61217c8461201a565b925061218a6020850161201a565b9150604084013590509250925092565b6000602082840312156121ac57600080fd5b6112368261201a565b6020808252825182820181905260009190848201906040850190845b818110156121ed578351835292840192918401916001016121d1565b50909695505050505050565b6000806040838503121561220c57600080fd5b6122158361201a565b915061222360208401612133565b90509250929050565b6000806000806080858703121561224257600080fd5b61224b8561201a565b93506122596020860161201a565b92506040850135915060608501356001600160401b0381111561227b57600080fd5b8501601f8101871361228c57600080fd5b61229b87823560208401612076565b91505092959194509250565b6000806000604084860312156122bc57600080fd5b8335925060208401356001600160401b03808211156122da57600080fd5b818601915086601f8301126122ee57600080fd5b8135818111156122fd57600080fd5b8760208260051b850101111561231257600080fd5b6020830194508093505050509250925092565b6000806040838503121561233857600080fd5b6123418361201a565b91506122236020840161201a565b6000806040838503121561236257600080fd5b823591506122236020840161201a565b600181811c9082168061238657607f821691505b602082108114156123a757634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600019821415612422576124226123f8565b5060010190565b602080825260149082015273496e76616c6964206d696e7420616d6f756e742160601b604082015260600190565b6000821982111561246a5761246a6123f8565b500190565b6020808252601490820152734d617820737570706c792065786365656465642160601b604082015260600190565b60008160001904831182151516156124b7576124b76123f8565b500290565b6000845160206124cf8285838a01611f96565b8551918401916124e28184848a01611f96565b8554920191600090600181811c90808316806124ff57607f831692505b85831081141561251d57634e487b7160e01b85526022600452602485fd5b80801561253157600181146125425761256f565b60ff1985168852838801955061256f565b60008b81526020902060005b858110156125675781548a82015290840190880161254e565b505083880195505b50939b9a5050505050505050505050565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906125b390830184611fc2565b9695505050505050565b6000602082840312156125cf57600080fd5b815161123681611f63565b634e487b7160e01b600052601260045260246000fd5b6000826125ff576125ff6125da565b500490565b600082821015612616576126166123f8565b500390565b60008261262a5761262a6125da565b50069056fea2646970667358221220149af4c5edbf1771e9658d305643636ed9fd378f25d54751bb2d6409fb7f322264736f6c63430008090033";

export class CannabisNext1__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _tokenName: string,
    _tokenSymbol: string,
    _cost: BigNumberish,
    _maxSupply: BigNumberish,
    _maxMintAmountPerTx: BigNumberish,
    _hiddenMetadataUri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CannabisNext1> {
    return super.deploy(
      _tokenName,
      _tokenSymbol,
      _cost,
      _maxSupply,
      _maxMintAmountPerTx,
      _hiddenMetadataUri,
      overrides || {}
    ) as Promise<CannabisNext1>;
  }
  getDeployTransaction(
    _tokenName: string,
    _tokenSymbol: string,
    _cost: BigNumberish,
    _maxSupply: BigNumberish,
    _maxMintAmountPerTx: BigNumberish,
    _hiddenMetadataUri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _tokenName,
      _tokenSymbol,
      _cost,
      _maxSupply,
      _maxMintAmountPerTx,
      _hiddenMetadataUri,
      overrides || {}
    );
  }
  attach(address: string): CannabisNext1 {
    return super.attach(address) as CannabisNext1;
  }
  connect(signer: Signer): CannabisNext1__factory {
    return super.connect(signer) as CannabisNext1__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CannabisNext1Interface {
    return new utils.Interface(_abi) as CannabisNext1Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CannabisNext1 {
    return new Contract(address, _abi, signerOrProvider) as CannabisNext1;
  }
}
