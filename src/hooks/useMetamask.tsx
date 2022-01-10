import useToastMessage from './useToastMessage';
import { useEffect, useState } from 'react';
import { currentNetwork } from '../costs/networks';
import { useDispatch } from 'react-redux';
import { setModalName, setModalVisibility } from '../redux/actions';

const { ethereum } = window;
const useMetamask = () => {
    const dispatch = useDispatch();
    const { show } = useToastMessage();
    const [loading, setLoading] = useState(true);
    const [connected, setConnected] = useState(false);
    const isMetaMaskInstalled = () => {
        return Boolean(ethereum && ethereum.isMetaMask);
    };

    const connect = async () => {
        try {
            await ethereum.enable()
            show("Connected to Metamask", 'success')
            setConnected(true)
            return true
        } catch (error) {
            show("Something was wrong while connect your wallet", 'error')
        }
    }

    const isAlreadyConnected = async (onFinally: Function) => {
        try {
            const accounts = await ethereum.request({ method: 'eth_accounts' });
            if (accounts?.length) {
                show("Already connected to Metamask", 'success')
                return true
            }
            throw new Error('No accounts found')
        } catch (error) {
            return false
        } finally {
            onFinally()
        }
    }

    const showNetworkError = () => {
        dispatch(setModalName('wrong-network'))
        dispatch(setModalVisibility(true))
    }

    useEffect(() => {
        if (ethereum) {
            if (ethereum.chainId !== currentNetwork.chainId) {
                showNetworkError()
            }
            ethereum.on('chainChanged', (chainId: string) => {
                if (chainId !== currentNetwork.chainId) {
                    showNetworkError()
                } else if(!connected) {
                    dispatch(setModalName('metamask'))
                } else {
                    dispatch(setModalVisibility(false))
                }
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        (async () => {
            if (await isAlreadyConnected(() => setLoading(false))) {
                setConnected(true)
            }
        })()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return { isMetaMaskInstalled, connect, isAlreadyConnected, connected, loading }
}

export default useMetamask