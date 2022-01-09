import { shallow } from 'enzyme'
import MenuLink from '../components/MenuLink'

describe('<MenuLink />', () => {
  it('renders link', () => {
    expect(shallow(<MenuLink icon="phone" text="Call me" />)).toMatchSnapshot()
  })
})
