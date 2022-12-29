import { successResponse } from '@/server/utils/http'
export default defineEventHandler((event) => {
  console.log('New request auth: ' + event.node.req.url)
  const data = {
    name: 'toei',
    email: 'toei@test.com',
    _token: 'WLnPlblM_8R2-s3e20naPQhTgKMMpY2Rq8kkRC_7d-k.qhXvx4c3pL2XlW-SPDqkyWbJo8l2eAglNT1DJvNrbbI'
  }
  return successResponse(data)
})
