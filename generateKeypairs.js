const { Keypair } = require('@solana/web3.js');
const fs = require('fs');

// Step 1: Generate a new keypair
const newKeypair = Keypair.generate();
console.log('Generated Public Key:', newKeypair.publicKey.toString());

// Step 2: Save it to a file
const keypairData = {
  publicKey: newKeypair.publicKey.toString(),
  secretKey: Buffer.from(newKeypair.secretKey).toString('base64')
};
fs.writeFileSync('keypair.json', JSON.stringify(keypairData));
console.log('Keypair saved to keypair.json');

// Step 3: Load it back
const loadedData = JSON.parse(fs.readFileSync('keypair.json', 'utf8'));
const secretKey = Buffer.from(loadedData.secretKey, 'base64');
const loadedKeypair = Keypair.fromSecretKey(secretKey);
console.log('Loaded Public Key:', loadedKeypair.publicKey.toString());