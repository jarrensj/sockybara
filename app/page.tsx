import ViewSockybara from './components/ViewSockybara';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-4">
      <h1 className="text-2xl font-bold">Sockybara</h1>
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <a 
          href={`https://etherscan.io/address/0x9779b3ef48f0bd3bcbf89a6037268767196369e0`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600 transition-colors"
        >
          0x9779b3ef48f0bd3bcbf89a6037268767196369e0
        </a>
      </div>
      <ViewSockybara />
    </div>
  );
}
