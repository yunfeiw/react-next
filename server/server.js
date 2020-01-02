const Koa = require('koa')
const next = require('next')
const Router = require('koa-router')
const httpProxy = require('http-proxy-middleware')
const k2c = require('koa2-connect');
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = new Koa()
    const router = new Router()
    //配置代理中间件
    server.use(async (ctx, next) => {
        if (ctx.url.startsWith('/api')) { //匹配有api字段的请求url
            ctx.respond = false // 绕过koa内置对象response ，写入原始res对象，而不是koa处理过的response
            return await k2c(httpProxy({
                target: 'https://extension-ms.juejin.im',
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    '^/api': ''
                }
            }
            ))(ctx, next);
        }
        await next()
    })
    router.all('*', async ctx => {
        await handle(ctx.req, ctx.res)
        ctx.respond = false
    })

    server.use(async (ctx, next) => {
        ctx.res.statusCode = 200
        await next()
    })

    server.use(router.routes())
    server.listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`)
    })
})