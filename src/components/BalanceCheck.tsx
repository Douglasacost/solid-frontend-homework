import ModalContainer from './modal/ModalContainer';
import ModalHeader from './modal/ModalHeader';
import ModalContent from './modal/ModalContent';
import Button from './Button';

const BalanceCheck = () => {

    return (
        <ModalContainer>
            <ModalHeader text="Check balance by Address" />
            <ModalContent>
                <form className='form'>
                    <div className="form-group">
                        <label htmlFor="address">Wallet address</label>
                        <input type="text" className="form-control" id="address" placeholder="0x..." />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Balance</label>
                        <input readOnly type="text" className="form-control" id="balance" placeholder="--" />
                    </div>
                    <Button text='Get balance' type='submit' />
                </form>
            </ModalContent>
        </ModalContainer>
    )
}

export default BalanceCheck
