import { ethers } from "ethers";

const provider = new ethers.providers.Web3Provider(window.ethereum)

async function getBalance(wallet: string) {
  const balance = await provider.getBalance(wallet);
  // we use the code below to convert the balance from wei to eth
  return ethers.utils.formatEther(balance);
}

const useEthers = () => {
    return {
        getBalance,
    }
}

export default useEthers;