import { shallow } from 'enzyme'
import CompanyLink from '../components/CompanyLink'
import configureMockStore from "redux-mock-store";
import { Provider } from 'react-redux';

const mockStore = configureMockStore();
const store = mockStore({})

describe('<CompanyLink />', () => {
  const companySelectedId = 1
  const setSelectedCompanyId = jest.fn()

  it('renders link', () => {
    expect(shallow(
    <Provider store={store}>
      <CompanyLink 
        companySelectedId={companySelectedId}
        setSelectedCompanyId={setSelectedCompanyId} 
        id={1} 
        name="Dummy company" 
      />  
    </Provider> 
    )).toMatchSnapshot()
  })
})
