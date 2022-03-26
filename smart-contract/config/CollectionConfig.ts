import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import { ethereumTestnet, ethereumMainnet } from '../lib/Networks';
import { openSea } from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: ethereumTestnet,
  mainnet: ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  // truffle dashboad
  // yarn deploy --network truffle  
  // yarn reveal --network truffle 
  contractName: 'CannabisNextTest',
  tokenName: 'CannabisNextTest',
  tokenSymbol: 'CBNT',
  hiddenMetadataUri: 'ipfs://QmVn7zswRnDbV9Y8wBUsyN9AK7LH2fnYDypmDZAJMXpeXj/hidden.json',
  maxSupply: 5555,
  whitelistSale: {
    price: 0.05,
    maxMintAmountPerTx: 20,
  },
  preSale: {
    price: 0.07,
    maxMintAmountPerTx: 30,
  },
  publicSale: {
    price: 0.01,
    maxMintAmountPerTx: 40,
  },
  contractAddress: "0x4E5Bb872173966Dc14EC41F8fa4b0Fabbf726846",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: openSea,
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
