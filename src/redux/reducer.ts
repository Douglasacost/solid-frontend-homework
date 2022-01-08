import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'

import { Action, Company } from '../types/types'
import * as actions from './actions'

export const ui = createReducer<{
  isDropdownMenuVisible: boolean,
  isModalVisible: boolean,
}, Action>({ isDropdownMenuVisible: false, isModalVisible: false })
  .handleAction(actions.toggleDropdownMenuVisibility, (state) => ({
    ...state,
    isDropdownMenuVisible: !state.isDropdownMenuVisible,
  }))
  .handleAction(actions.setModalVisibility, (state, action) => ({
    ...state,
    isModalVisible: action.payload,
  }))
  
export const selectedCompanyId = createReducer<number | null, Action>(null)
  .handleAction(actions.setSelectedCompanyId, (_, action) => action.payload)
  
export const companies = createReducer<Array<Company>, Action>([])

export default combineReducers({
  ui,
  selectedCompanyId,
  companies,
})
