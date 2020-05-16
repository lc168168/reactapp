import { FETCH_Table_LIST } from '@/constants/actionTypes'

const defaultState = {
  users: []
}

export default function (state = defaultState, action) {
  let { users } = state
  switch (action.type) {
    case FETCH_Table_LIST:
      const { users } = action.payload
      return {
        ...state,
        users
      }
  
    default:
      return state
  }
} 