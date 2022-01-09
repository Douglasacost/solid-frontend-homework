import ModalContainer from '../modal/ModalContainer';
import ModalHeader from '../modal/ModalHeader';
import ModalContent from '../modal/ModalContent';
import Button from '../Button';
import useMetamask from '../../hooks/useMetamask';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setModalVisibility, setModalName } from '../../redux/actions';

type Props = { setModalVisibility: (isVisible: boolean) => void, setModalName: (name: string) => void }

const MetamaskForm = ({ setModalName }: Props) => {
    const { connect, isMetaMaskInstalled, connected, loading } = useMetamask()

    useEffect(() => {
        if (connected) {
            setModalName('balance-check')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
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

