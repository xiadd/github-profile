import Koa from 'koa'
import fs from 'fs'
import path from 'path'
import KoaStatic from 'koa-static'

const app = new Koa()

app.use(KoaStatic(path.resolve('./dist/public')))

app.use(ctx => {
  const file = fs.createReadStream(path.resolve('./dist/public/index.html'))
  ctx.set('Content-type', 'text/html')
  ctx.body = file
})

app.listen(3000)