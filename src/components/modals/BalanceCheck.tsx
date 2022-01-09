import ModalContainer from '../modal/ModalContainer';
import ModalHeader from '../modal/ModalHeader';
import ModalContent from '../modal/ModalContent';
import Button from '../Button';
import { currentNetwork } from '../../costs/networks';
import useEthers from '../../hooks/useEthers';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getBalanceCheckFormData } from '../../utils/selectors';
import { ReduxState } from '../../types/types';
import { setFormAddress, setFormBalance } from '../../redux/actions';
import { useEffect } from 'react';
import useToastMessage from '../../hooks/useToastMessage';

type ReduxProps = {
    formData: ReduxState['balanceCheck']
};

type ActionsProps = {
    setFormAddress: (address: string) => void
    setFormBalance: (balance: string) => void
}

const BalanceCheck = (props: ReduxProps & ActionsProps) => {
    const { getBalance } = useEthers();
    const { show } = useToastMessage();

    const handleCalculateBalance = async () => {
        try {
            const balance = await getBalance(props.formData.address.toLowerCase());
            props.setFormBalance(balance);
        } catch (error) {
            show(`Something went wrong while getting the balance of ${props.formData.address}`, 'error');
        }
    }

    useEffect(() => {
        return () => {
            props.setFormAddress('')
            props.setFormBalance('')
        } // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ModalContainer>
            <ModalHeader text="Check balance by Address" />
            <ModalContent>
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        handleCalculateBalance()
                    }}
                    className='form'
                >
                    <div className="form-group">
                        <label htmlFor="address">Wallet address</label>
                        <input
                            onChange={(e) => {
                                props.setFormBalance('')
                                props.setFormAddress(e.target.value)
                            }}
                            value={props.formData.address}
                            type="text"
                            className="form-control"
                            name="address"
                            placeholder="Write address here"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Balance</label>
                        <div className='input-adorn'>
                            <input
                                readOnly
                                value={props.formData.balance}
                                type="text"
                                className="form-control"
                                name="balance"
                                placeholder="--"
                            />
                            <span>{currentNetwork.symbol}</span>
                        </div>
                    </div>
                    <Button text='Get balance' type='submit' />
                </form>
            </ModalContent>
        </ModalContainer>
    )
}

export default connect(
    createStructuredSelector<ReduxState, ReduxProps>({
        formData: getBalanceCheckFormData,
    }),
    {
        setFormAddress,
        setFormBalance
    }
)(BalanceCheck)
