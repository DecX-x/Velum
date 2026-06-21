# Velum

Velum helps DAOs and on-chain treasuries allocate capital confidentially using [iExec Nox](https://iex.ec/) and Confidential Tokens on [Arbitrum Sepolia](https://arbitrum.io/).

It provides a private treasury allocation management system for on-chain capital.

## Features

- **Confidential Treasury Management**: Real-time treasury positions with privacy controls.
- **Strategy Allocation**: Allocate capital securely and privately.
- **Decrypted Views**: Authorized users can securely view decrypted treasury balances and activities.
- **Arbitrum Sepolia Integration**: Built on top of Arbitrum Sepolia utilizing iExec Nox for confidential computing.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (React 19)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Web3 Interaction**: [viem](https://viem.sh/), [wagmi](https://wagmi.sh/), and [RainbowKit](https://www.rainbowkit.com/)
- **Data Fetching**: [React Query](https://tanstack.com/query/latest)
- **Confidentiality**: `@iexec-nox/handle`

## Getting Started

### Prerequisites

- Node.js (v20+ recommended)
- npm, yarn, pnpm, or bun

### Installation

Clone the repository and install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Running the Development Server

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/` - Next.js App Router containing pages, components, and layouts.
  - `app/dashboard/` - Main dashboard views.
  - `app/strategies/` - Strategy allocation pages.
  - `app/treasury/` - Treasury management pages.
  - `app/disclosure/` - Disclosure operations.
  - `app/wrap/` - Token wrapping functionalities.

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [iExec Documentation](https://docs.iex.ec/) - learn about iExec Nox and Confidential Computing.
- [Arbitrum Documentation](https://docs.arbitrum.io/) - learn about Arbitrum networks.

