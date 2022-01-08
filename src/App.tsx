import './stylesheets/index.scss'

import DropdownLink from './components/DropdownLink'
import MetamaskForm from './components/Metamask'
import Modal from './components/Modal';
import { getIsModalVisible } from './utils/selectors';
import { createStructuredSelector } from 'reselect';
import { ReduxState } from './types/types';
import { connect } from 'react-redux';

type ReduxProps = {
  isModalOpen: boolean,
}

const App = ({ isModalOpen }: ReduxProps) => (
  <nav className="nav">
    <DropdownLink />
    <Modal open={isModalOpen} >
      <MetamaskForm />
    </Modal>
  </nav>
)

export default connect(
  createStructuredSelector<ReduxState, ReduxProps>({
    isModalOpen: getIsModalVisible,
  }),
)(App)

