import vue from '@vitejs/plugin-vue'
const path = require('path')

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

// https://vitejs.dev/config/
export default ({ command, mode }) => {
  return {
    server: {
      proxy: {
        '/ofy': {
          target: 'http://localhost:8080',
        },
      }
    },
    plugins: [vue()],
    resolve: {
      alias: {
        "@": resolve("src"),
        "@utils": resolve("src/utils"),
      }
    },
  }
}
