import * as actions from '../redux/actions'
import { ui, selectedCompanyId } from '../redux/reducer'

const doesNotUpdateState = (reducer, initialState) => {
  it('does not update state on a random action', () => {
    expect(reducer(initialState, { type: 'random' })).toEqual(initialState)
  })
}

describe('isDropdownMenuVisible()', () => {
  it('toggles state on actions.toggleDropdownMenuVisibility', () => {
    expect(ui({ isDropdownMenuVisible: false, isModalVisible: false, modalName: '' }, actions.toggleDropdownMenuVisibility()))
    .toStrictEqual({ isDropdownMenuVisible: true, isModalVisible: false, modalName: '' })
  })

  it('set modal name on actions.setModalName', () => {
    expect(ui({ isDropdownMenuVisible: false, isModalVisible: false, modalName: '' }, actions.setModalName('test')))
    .toStrictEqual({ isDropdownMenuVisible: false, isModalVisible: false, modalName: 'test' })
  })

  it('set isModalVisible on actions.setModalVisibility', () => {
    expect(ui({ isDropdownMenuVisible: false, isModalVisible: false, modalName: '' }, actions.setModalVisibility(true)))
    .toStrictEqual({ isDropdownMenuVisible: false, isModalVisible: true, modalName: '' })
  })

  doesNotUpdateState(ui, { isDropdownMenuVisible: false, isModalVisible: false, modalName: '' })
})

describe('selectedCompanyId()', () => {
  it('sets given value to state on actions.setSelectedCompanyId', () => {
    expect(selectedCompanyId(null, actions.setSelectedCompanyId(123))).toBe(123)
  })

  doesNotUpdateState(selectedCompanyId, null)
})
