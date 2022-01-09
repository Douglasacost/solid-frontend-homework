import ModalContainer from './modal/ModalContainer';
import ModalHeader from './modal/ModalHeader';
import ModalContent from './modal/ModalContent';
import Button from './Button';
import useMetamask from '../hooks/useMetamask';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setModalVisibility, setModalName } from '../redux/actions';

type Props = { setModalVisibility: (isVisible: boolean) => void, setModalName: (name: string) => void }

const MetamaskForm = ({ setModalName }: Props) => {
    const [loading, setLoading] = useState(true);
    const [connected, setConnected] = useState(false);
    const { connect, isMetaMaskInstalled, isAlreadyConnected } = useMetamask()

    useEffect(() => {
        (async () => {
            if (await isAlreadyConnected(() => setLoading(false))) {
                setConnected(true)
            }
        })()
        // eslint-disable-react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if(connected) {
            setModalName('balance-check')
        }
    }, [connected])

    return (
        <ModalContainer>
            <ModalHeader text="Connect to Metamask" />
            <ModalContent>
                {loading ? (
                    <>Loading</>
                ) : (
                    <>
                        {isMetaMaskInstalled() ? <Button handleOnClick={connect} text='Connect with Metamask' /> : "Please install Metamask"}
                    </>
                )}
            </ModalContent>
        </ModalContainer>
    )
}

export default connect(
  null,
  { setModalVisibility, setModalName }
)(MetamaskForm)

