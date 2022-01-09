import {
  getIsDropdownMenuVisible,
  companySelectedId,
  getCompanies,
} from '../utils/selectors'

describe('getIsDropdownMenuVisible()', () => {
  const state = {
    ui: { isDropdownMenuVisible: true }
  }

  it('returns value from state', () => {
    expect(getIsDropdownMenuVisible(state)).toBe(true)
  })
})

describe('isCompanySelected()', () => {
  const state = { selectedCompanyId: 1 }

  it('returns the selected company ID - selectedCompanyId', () => {
    expect(companySelectedId(state)).toBe(1)
  })
})

describe('getCompanies()', () => {
  const state = { companies: [{ id:1, name: 'Dummy company' }] }

  it('returns value from state', () => {
    expect(getCompanies(state)).toEqual([{ id: 1, name: 'Dummy company' }])
  })
})
