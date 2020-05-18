import { Formdata } from '@/constants/actionTypes'

const defaultState = {
  data: []
}

export default function (state = defaultState, action) {
  
  switch (action.type) {
      
    case Formdata:
        return { ...state, data: action.payload.users }
  
    default:
      return state
  }
} 