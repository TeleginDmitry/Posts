const path = require('path')

const resolvePath = (p) => path.resolve(__dirname, p)

module.exports = {
  webpack: {
    alias: {
      '@components': resolvePath('src/components'),
      '@interfaces': resolvePath('src/interfaces'),
      '@services': resolvePath('src/services'),
      '@config': resolvePath('src/config'),
      '@assets': resolvePath('src/assets'),
      '@utils': resolvePath('src/utils'),
      '@store': resolvePath('src/store'),
    }
  }
}
