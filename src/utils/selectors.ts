import { ReduxState } from '../types/types'

export const getIsDropdownMenuVisible = (state: ReduxState) =>
  state.isDropdownMenuVisible

export const companySelectedId = (state: ReduxState) => 
  state.selectedCompanyId

export const getCompanies = (state: ReduxState) =>
  state.companies
