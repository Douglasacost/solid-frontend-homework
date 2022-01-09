import { shallow } from 'enzyme'
import DropdownMenu from '../components/DropdownMenu'

describe('<DropdownMenu />', () => {
  it('renders menu', () => {
    expect(shallow(<DropdownMenu setModalVisibility={() => null} />)).toMatchSnapshot()
  })
})
