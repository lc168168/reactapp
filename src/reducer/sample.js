import { SAMPLE_DATA } from '@/constants/actionTypes'

const defaultState = {
  sample: [],
  count:''
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case SAMPLE_DATA:
      console.log(action.payload.result)
      return {
        ...state,
        sample: action.payload.result.list,
        count:  action.payload.result.count
      }
    default:
      return state
  }
} 