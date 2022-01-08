import { ActionType } from 'typesafe-actions'

import * as actions from '../redux/actions'

export type ReduxState = {
  ui: {
    isDropdownMenuVisible: boolean,
    isModalVisible: boolean,
  }
  companies: Array<Company>,
  selectedCompanyId: number | null,
}

export type Action = ActionType<typeof actions>

export type Company = {
  id: number,
  name: string,
}
