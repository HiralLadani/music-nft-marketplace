"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";

export default function Home() {
  return (
  <main className="flex flex-col items-center gap-5 mt-20">
      <h1 className="text-3xl font-bold">Music NFT Marketplace</h1>
      <ConnectButton />
    </main>
  );
}
