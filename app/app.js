import Koa from 'koa'
import fs from 'fs'
import path from 'path'
import KoaStatic from 'koa-static'
import React, { Component } from 'react'
import { renderToString }  from 'react-dom/server'
import styles from '../client/index.css'

const app = new Koa()

class Foo extends Component {

  componentDidMount () {
    console.log(11)
  }

  render () {
    return (
      <h1 className={styles.test}>{this.props.name}</h1>
    )
  }
}

app.use(async (ctx, next) => {
  await Promise.resolve(1)
  await next()
  ctx.body = renderToString(<Foo name='xiadd' />)
})

app.listen(3000)