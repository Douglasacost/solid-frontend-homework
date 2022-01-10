import ModalContainer from '../modal/ModalContainer';
import ModalHeader from '../modal/ModalHeader';
import ModalContent from '../modal/ModalContent';
import { currentNetwork } from '../../costs/networks';

const WrongNetwork = () => {

    return (
        <ModalContainer>
            <ModalHeader text="Wrong network" />
            <ModalContent>
                <h3>{`You need to set up the ${currentNetwork.name} network in Metamask`}</h3>
            </ModalContent>
        </ModalContainer>
    )
}

export default WrongNetwork

