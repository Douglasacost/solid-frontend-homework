import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'

import { Action, Company } from '../types/types'
import * as actions from './actions'

export const ui = createReducer<{
  isDropdownMenuVisible: boolean,
  isModalVisible: boolean,
  modalName: string,
}, Action>({ isDropdownMenuVisible: false, isModalVisible: false, modalName: '' })
  .handleAction(actions.toggleDropdownMenuVisibility, (state) => ({
    ...state,
    isDropdownMenuVisible: !state.isDropdownMenuVisible,
  }))
  .handleAction(actions.setModalVisibility, (state, action) => ({
    ...state,
    isModalVisible: action.payload,
  }))
  .handleAction(actions.setModalName, (state, action) => ({
    ...state,
    modalName: action.payload,
  }))

export const balanceCheck = createReducer<{
  isLoading: boolean
  isError: boolean
  errorMessage: string
  balance: string
  address: string
}, Action>({
  isLoading: false,
  isError: false,
  errorMessage: '',
  balance: '',
  address: '',
}).handleAction(actions.setFormAddress, (state, action) => ({
  ...state,
  address: action.payload,
})).handleAction(actions.setFormBalance, (state, action) => ({
  ...state,
  balance: action.payload,
})).handleAction(actions.setFormError, (state, action) => ({
  ...state,
  isError: action.payload,
})).handleAction(actions.setFormErrorMessage, (state, action) => ({
  ...state,
  errorMessage: action.payload,
})).handleAction(actions.setFormIsLoading, (state, action) => ({
  ...state,
  isLoading: action.payload,
}))

export const selectedCompanyId = createReducer<number | null, Action>(null)
  .handleAction(actions.setSelectedCompanyId, (_, action) => action.payload)

export const companies = createReducer<Array<Company>, Action>([])

export default combineReducers({
  ui,
  selectedCompanyId,
  companies,
  balanceCheck
})
