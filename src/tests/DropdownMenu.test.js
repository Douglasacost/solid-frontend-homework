import { shallow } from 'enzyme'
import DropdownMenu from '../components/DropdownMenu'
import configureMockStore from "redux-mock-store";
import { Provider } from 'react-redux';

const mockStore = configureMockStore();
const store = mockStore({})

describe('<DropdownMenu />', () => {
  it('renders menu', () => {
    expect(shallow( <Provider store={store}><DropdownMenu setModalVisibility={() => null} /></Provider>)).toMatchSnapshot()
  })
})
