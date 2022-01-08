const useMetamask = () => {
    const isMetaMaskInstalled = () => {
        const { ethereum } = window;
        return Boolean(ethereum && ethereum.isMetaMask);
    };

    const connect = async () => {
        try {
            await window.ethereum.enable()
            return true
        } catch (error) {

        }
    }
    return { isMetaMaskInstalled, connect }
}

export default useMetamask