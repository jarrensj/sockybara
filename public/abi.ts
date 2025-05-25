export const abi = [
  {
    name: 'getTraits',
    type: 'function',
    stateMutability: 'view',
    inputs: [
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' }
    ],
    outputs: [
      { internalType: 'string', name: 'frontLeftSock', type: 'string' },
      { internalType: 'string', name: 'frontRightSock', type: 'string' },
      { internalType: 'string', name: 'backLeftSock', type: 'string' },
      { internalType: 'string', name: 'backRightSock', type: 'string' },
      { internalType: 'string', name: 'leftEye', type: 'string' },
      { internalType: 'string', name: 'rightEye', type: 'string' },
      { internalType: 'string', name: 'leftEar', type: 'string' },
      { internalType: 'string', name: 'rightEar', type: 'string' },
      { internalType: 'string', name: 'nose', type: 'string' }
    ],
  }
] as const;