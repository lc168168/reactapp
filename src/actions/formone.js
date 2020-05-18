import { Formdata } from  '@/constants/actionTypes'
import { get } from '@/utils/request'
import api from '@/services/api'

export function getformdata (options) {
  return {
    type: Formdata,
    payload: get(api.formone)
  }
}