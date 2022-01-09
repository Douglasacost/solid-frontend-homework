import { ReduxState } from '../types/types'

export const getIsDropdownMenuVisible = (state: ReduxState) =>
  state.ui.isDropdownMenuVisible

export const getIsModalVisible = (state: ReduxState) =>
  state.ui.isModalVisible

export const getModalName = (state: ReduxState) =>
  state.ui.modalName

export const companySelectedId = (state: ReduxState) => 
  state.selectedCompanyId

export const getSelectedCompany = (state: ReduxState) =>
  state.companies.find(company => company.id === state.selectedCompanyId)

export const getCompanies = (state: ReduxState) =>
  state.companies

export const getBalanceCheckFormData = (state: ReduxState) =>
  state.balanceCheck
