import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from './reducer'
import { ReduxState } from '../types/types'

const initialState: ReduxState = {
  ui: {
    isDropdownMenuVisible: false,
    isModalVisible: false,
    modalName: 'metamask'
  },
  balanceCheck: {
    isLoading: false,
    isError: false,
    errorMessage: '',
    balance: '',
    address: '',
  },
  selectedCompanyId: 1,
  companies: [
    { id: 1, name: 'Viljatootja AS' },
    { id: 2, name: 'Tartu Agro OÜ' },
  ],
}

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(reducer, initialState, composedEnhancer)

export default store
