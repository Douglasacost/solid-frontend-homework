import MenuLink from './MenuLink'
import Companies from './Companies'
import { connect } from 'react-redux';
import { setModalVisibility } from '../redux/actions';

type ReduxProps = {
  setModalVisibility: (isVisible: boolean) => void,
}

const DropdownMenu = ({ setModalVisibility }: ReduxProps) => (
  <div className='card dropdown dropdown__container'>
    <div className='dropdown__section'>
      <Companies />
    </div>

    <div className='dropdown__section'>
      <MenuLink
        text="Get the mobile app"
        icon="phone_iphone"
      />

      <MenuLink
        text="Community"
        icon="people"
      />

      <MenuLink
        text="Knowledge base"
        icon="book"
      />
    </div>

    <div className='dropdown__section'>
      <MenuLink
        text="Settings"
        icon="settings"
      />
      <MenuLink
        handleOnClick={() => setModalVisibility(true)}
        text="Connec to Wallet"
        icon="account_balance_wallet"
      />
      <MenuLink
        logout
        text="Log out"
        icon="exit_to_app"
      />
    </div>
  </div>
)


export default connect(
  null,
  { setModalVisibility }
)(DropdownMenu)
