import useToastMessage from './useToastMessage';

const useMetamask = () => {
    const { show } = useToastMessage()
    const isMetaMaskInstalled = () => {
        const { ethereum } = window;
        return Boolean(ethereum && ethereum.isMetaMask);
    };

    const connect = async () => {
        try {
            await window.ethereum.enable()
            show("Connected to Metamask", 'success')
            return true
        } catch (error) {
            show("Something was wrong while connect your wallet", 'error')
        }
    }

    const isAlreadyConnected = async(onFinally: Function) => {
        const { ethereum } = window;
        try {
            const accounts = await ethereum.request({ method: 'eth_accounts' });
            show("Already connected to Metamask", 'success')
            console.log(accounts)
            return true
        } catch (error) {
            return false
        } finally {
            onFinally()
        }
    }
    return { isMetaMaskInstalled, connect, isAlreadyConnected }
}

export default useMetamask