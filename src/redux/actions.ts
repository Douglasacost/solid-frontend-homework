import { createAction } from 'typesafe-actions'

export const toggleDropdownMenuVisibility = createAction('TOGGLE_DROPDOWN_MENU_VISIBILITY')()

export const setSelectedCompanyId = createAction('SET_SELECTED_COMPANY_ID')<number>()

export const setModalVisibility = createAction('SET_MODAL_VISIBILITY')<boolean>()

export const setModalName = createAction('SET_MODAL_NAME')<string>()

export const setFormAddress = createAction('SET_FORM_ADDRESS')<string>()
export const setFormBalance = createAction('SET_FORM_BALANCE')<string>()
export const setFormError = createAction('SET_FORM_ERROR')<boolean>()
export const setFormIsLoading = createAction('SET_FORM_IS_LOADING')<boolean>()
export const setFormErrorMessage = createAction('SET_FORM_ERROR_MESSAGE')<string>()
