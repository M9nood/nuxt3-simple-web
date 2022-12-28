export default defineEventHandler((event) => {
  console.log('New request auth: ' + event.node.req.url)
  return {
    name: 'toei',
    email: 'toei@test.com'
  }
})
