module.exports = {
    assetPrefix: '/self/out',

    exportPathMap: function () {
      return {
        '/': { page: '/' },
        '/goals': { page: '/goals' },
        '/logs': { page: '/logs' },
        '/reference': { page: '/reference' }
      }
    }
  }