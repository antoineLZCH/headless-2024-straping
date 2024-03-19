export default {
  routes: [
    {
      method: 'POST',
      path: '/create-players',
      handler: 'player.createMany'
    }
  ]
}
