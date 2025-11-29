# 🎵 Music NFT Marketplace — Web3 Project

## 📌 Overview
Music NFT Marketplace is a decentralized web application enabling users to connect their crypto wallet and interact with a music-based NFT ecosystem.  
The goal is to empower artists to tokenize their music and give collectors verifiable digital ownership.

This project was built as part of my transition from **Java Web Developer** to **Blockchain Developer**, focusing on practical Web3 workflows and secure smart-contract integration.

---

## 🎯 Objectives
- Learn and implement Web3 authentication using crypto wallets
- Build a secure NFT marketplace structure (Phase 1: Authentication & Protected Marketplace)
- Prepare for advanced NFT minting & trading (Phase 2)

---

## 🚩 Client Requirements (Derived from real project)
| Requirement | Status |
|------------|--------|
| Wallet authentication system | ✔ Completed |
| Marketplace skeleton & protected route | ✔ Completed |
| Cross-chain support (architecture) | ⏳ Planned |
| NFT mint/buy/sell/trade | ⏳ Phase-2 |
| DAO Governance & royalties | ⏳ Future roadmap |

---

## 🛠 Tech Stack
- **Next.js (App Router)** — Frontend framework
- **TypeScript** — Typed React
- **Wagmi & RainbowKit** — Wallet connection & Web3 hooks
- **WalletConnect v2 (Project ID)** — Wallet onboarding
- **TailwindCSS** — Styling
- **Hardhat** (planned) — Smart contract dev & deployment
- **IPFS / nft.storage / Pinata** (planned) — NFT metadata & media storage

---

## 🧠 Concept Mapping for Java Developers
| Web2 (Java) | Web3 Equivalent |
|------------|----------------|
| User login with email/password | Connect Wallet (MetaMask, WalletConnect) |
| Session / JWT Token | Wallet signature & address |
| Database (MySQL/MongoDB) | Blockchain ledger (smart contracts) |
| Spring Security | Wagmi + RainbowKit provider |
| REST API -> DB call | Smart contract call (transaction) |

This project demonstrates how wallets replace traditional authentication and how smart contracts replace backend state for ownership-related workflows.

---

## 🔐 Authentication Flow (Phase 1 — Completed)
1. User clicks **Connect Wallet** (RainbowKit modal appears).  
2. Wallet (MetaMask / WalletConnect) approves connection and signs messages.  
3. Wagmi stores connection state and account address.  
4. Protected pages (like `/marketplace`) check `useAccount()` and redirect non-connected users to `/`.  

**Java analogy:** This is equivalent to protecting `/dashboard` behind session-based auth in Spring Boot.

---

## 📂 Project Structure (key files)
```
music-nft-marketplace/
├─ app/
│  ├─ layout.tsx          → Global layout + Providers + Navbar
│  ├─ providers.tsx       → Wagmi + RainbowKit configuration
│  ├─ page.tsx            → Homepage with Connect Wallet
│  └─ marketplace/        → Protected marketplace route (page.tsx)
├─ .env.local             → NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=<id>
├─ package.json
└─ README.md
```

---

## ✅ What we implemented (Phase 1)
- Next.js app scaffold
- WalletConnect project setup and `.env.local` integration
- `Providers` for Wagmi + RainbowKit + React Query
- Connect Wallet UI using RainbowKit's `ConnectButton`
- Navbar showing wallet status (connected address & network)
- Protected `/marketplace` route that redirects if wallet is not connected
- Resolved TypeScript and package dependency issues for wagmi & rainbowkit compatibility

---

## 🖼 Screenshots
Add screenshots to `/screenshots` directory and reference them here:

```
![Connect Wallet](./screenshots/connect-wallet.png)
![Marketplace Connected](./screenshots/marketplace-connected.png)
```

---

## 🚀 How to run locally
1. Clone the repo
```bash
git clone https://github.com/HiralLadani/music-nft-marketplace.git
cd music-nft-marketplace
```

2. Install dependencies
```bash
npm install
```

3. Create `.env.local` in the project root and add WalletConnect Project ID
```
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id_here
```

4. Run the dev server
```bash
npm run dev
```

Open http://localhost:3000 and connect a wallet via the Connect Wallet button.

---

## 📈 Roadmap (Phase 2 & beyond)
- **Smart contract:** Create `MusicNFT.sol` (ERC-721) with metadata pointing to IPFS
- **Mint UI:** Upload audio + cover art, pin metadata, and call `mint()`
- **Marketplace:** List, buy, and sell NFTs; implement royalties
- **Cross-chain:** Deploy to Polygon Mumbai & Ethereum Sepolia; create bridging strategy
- **DAO governance:** Token-based voting for featured releases and revenue allocation
- **Testing & Security:** Unit tests, Hardhat-based tests, and security audits

---

## 🧩 Learning Outcomes
- Hands-on experience with Web3 authentication flows
- Knowledge of Wagmi + RainbowKit integration in Next.js App Router
- Understanding of how to protect routes in a dApp
- Preparedness to write and deploy smart contracts for NFT minting

---

## 👩‍💻 Author
**Hiral Ladani**  
Web Developer transitioning into Web3 Development  
📍 India  
🔗 LinkedIn: https://www.linkedin.com/in/hiral-l-03061987/  
🐙 GitHub: https://github.com/HiralLadani  
✉ Email: hiral.ladani87@gmail.com

---

## ⭐ Contributing
Contributions are welcome. Please open issues for bugs or feature requests. For code contributions, fork the repo and open a pull request.

---
