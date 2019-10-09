const base = require('../../.fusumarc')

const url = ''
const title = ''

module.exports = {
  meta: {
    ...base.meta,
    url: `${url}/${title}`,
    title,
    name: title,
    description: '',
    thumbnail: '',
  },
  slide: {
    loop: false,
    sidebar: true,
    targetBlank: true,
    showIndex: false,
    isVertical: false,
    code: {
      languages: ['javascript', 'json', 'bash', 'bash', 'shell-session'],
      plugins: ['line-numbers'],
      theme: 'solarizedlight',
    },
  },
  extends: {
    css: 'style.css',
  },
}
