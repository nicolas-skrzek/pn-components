// https://stackoverflow.com/a/61935344
import { component } from 'vue'

const files = require.context('./', true, /\.vue$/i)

files.keys().forEach((key) => {
  component(files(key).default.name ?? key.split('/').pop().split('.')[0], files(key).default)
})
