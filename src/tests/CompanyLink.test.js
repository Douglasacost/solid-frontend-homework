import { shallow } from 'enzyme'
import CompanyLink from '../components/CompanyLink'

describe('<CompanyLink />', () => {
  it('renders link', () => {
    expect(shallow(<CompanyLink 
      companySelectedId={1}
      setSelectedCompanyId={() => null} 
      id={1} 
      name="Dummy company" 
    />)).toMatchSnapshot()
  })
})
