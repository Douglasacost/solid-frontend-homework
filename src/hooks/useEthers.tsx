import { ethers } from "ethers";
import { contractAddress } from "../costs/constracts";
import { abi } from '../costs/ERC20-abi';

const provider = new ethers.providers.Web3Provider(window.ethereum)
const contract = new ethers.Contract(contractAddress, abi, provider);

const useEthers = () => {
    const getBalance = async (wallet: string) => {
      const balance = await contract.balanceOf(wallet);
      // we use the code below to convert the balance from wei to eth
      console.log(balance.toString())
      return ethers.utils.formatEther(balance);
    }

    return {
        getBalance,
    }
}

export default useEthers;