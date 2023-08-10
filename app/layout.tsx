'use client'
import { KitProvider } from "@nazeeh2000/comp-kit";
import "./globals.css";
import { Inter } from "next/font/google";
import { arbitrum, mainnet, polygon } from "viem/chains";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <KitProvider
          projectId="5a13f1a5297da2cd768519079890e4fe" // WallectConnect projectId
          supportedChains={[mainnet, polygon, arbitrum]}
        >
          {children}
        </KitProvider>
      </body>
    </html>
  );
}