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
  
export const selectedCompanyId = createReducer<number | null, Action>(null)
  .handleAction(actions.setSelectedCompanyId, (_, action) => action.payload)
  
export const companies = createReducer<Array<Company>, Action>([])

export default combineReducers({
  ui,
  selectedCompanyId,
  companies,
})
