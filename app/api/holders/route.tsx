import { NextResponse } from 'next/server';
import { createPublicClient, http } from 'viem';
import { mainnet } from 'viem/chains';
import { abi } from '../../../public/abi';

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;

if (!contractAddress) {
  throw new Error('NEXT_PUBLIC_CONTRACT_ADDRESS environment variable is not set');
}

export async function GET() {
  try {
    
    const client = createPublicClient({
      chain: mainnet,
      transport: http()
    });

    // Get total supply first
    const totalSupply = await client.readContract({
      address: contractAddress as `0x${string}`,
      abi,
      functionName: 'totalSupply',
    });
    
    const maxTokenId = Number(totalSupply) - 1;
    const holders: { tokenId: number; address: string }[] = [];
    const uniqueAddresses = new Set<string>();

    // Fetch owners for all token IDs from 0 to maxTokenId
    for (let tokenId = 0; tokenId <= maxTokenId; ++tokenId) {
      try {
        const owner = await client.readContract({
          address: contractAddress as `0x${string}`,
          abi,
          functionName: 'ownerOf',
          args: [BigInt(tokenId)]
        });

        const address = owner.toLowerCase();
        holders.push({
          tokenId,
          address
        });
        uniqueAddresses.add(address);
      } catch (error) {
        console.error(`Error fetching owner for token ${tokenId}:`, error);
        continue;
      }
    }

    // Sort by token ID
    holders.sort((a, b) => a.tokenId - b.tokenId);

    const uniqueAddressesArray = Array.from(uniqueAddresses);

    return NextResponse.json({
      uniqueAddresses: uniqueAddressesArray,
      uniqueAddressCount: uniqueAddressesArray.length,
      holders,
    });
  } catch (error) {
    console.error('Error fetching holders:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch holders' },
      { status: 500 }
    );
  }
}