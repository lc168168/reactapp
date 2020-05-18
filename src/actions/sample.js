import { SAMPLE_DATA } from '@/constants/actionTypes'
import { post } from '@/utils/request'
import api from '@/services/api'

export function Sampledata (options) {
  return {
    type: SAMPLE_DATA,
    payload: post(api.sample,{page:options})
  }
}
