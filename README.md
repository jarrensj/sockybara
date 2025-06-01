# Sockybara

## Features
- view traits of any Sockybara

## Getting Started

```bash
cp .env.example .env
```

```bash
npm install
```

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## API endpoints

### GET /api/holders
Returns information about Sockybara holders.

Response:
```ts
{
  "uniqueWallets": string[],      // Array of unique wallet addresses
  "uniqueWalletCount": number,    // Total number of unique wallets
  "holders": {                    // Array of all token holders
    "tokenId": number,            // Token ID
    "address": string             // Owner's wallet address
  }[]
}
```

## Contributing

We welcome contributions! Please see our [CONTRIBUTING.md](CONTRIBUTING.md) file for terms and guidelines on how to contribute to this project.

## Disclaimer

All trait data is user-submitted and permanently stored on-chain. The project and its owners, maintainers, and developers are not responsible for any content submitted by users. Responsibility for all submitted content lies solely with the token holder who submitted the data while in possession of the token.