import { HttpResponse } from '@/server/types/http'

export const successResponse = (data: any):HttpResponse => {
  return {
    status: true,
    data
  }
}
