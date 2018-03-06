const Vue = require('vue')
const server = require('express')()
const fs = require('fs')
const renderer = require('vue-server-renderer').createRenderer({
  template: fs.readFileSync('./index.template.html', 'utf-8')
})

const context = {
  title: 'hello',
  meta: `
    <meta charset="utf-8">
  `
}
const app = new Vue({
  template: `<div>访问的 URL 是</div>`
})
// server.get('*', context, (req, res) => {
//   const app = new Vue({
//     data: {
//       url: req.url
//     },
//     template: `<div>访问的 URL 是： {{ url }}</div>`
//   })
//   renderer.renderToString(app, (err, html) => {
//     if (err) {
//       res.status(500).end('Internal Server Error')
//       return
//     }
//     res.end(html)
//   })
// })
// server.listen(8080)

renderer.renderToString(app, context, (err, html) => {
  console.log(html)
})
