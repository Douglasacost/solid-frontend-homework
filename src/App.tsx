import './stylesheets/index.scss'

import DropdownLink from './components/DropdownLink'
import MetamaskForm from './components/Metamask'
import Modal from './components/modal/Modal';
import { getIsModalVisible, getModalName } from './utils/selectors';
import { createStructuredSelector } from 'reselect';
import { ReduxState } from './types/types';
import { connect } from 'react-redux';

const modals = {
  'metamask': <MetamaskForm />,
  'balance-check': <div>Balance</div>,
}

type ReduxProps = {
  isModalOpen: boolean,
  modalName: keyof typeof modals,
}

const App = ({ isModalOpen, modalName }: ReduxProps) => (
  <nav className="nav">
    <DropdownLink />
    <Modal open={isModalOpen} >
      {modals[modalName]}
    </Modal>
  </nav>
)

export default connect(
  createStructuredSelector<ReduxState, ReduxProps>({
    isModalOpen: getIsModalVisible,
    modalName: getModalName,
  }),
)(App)

