import { Post } from '~/server/models'

export default async (ctx, next) => {
  console.log('here')
  try {
    const posts = await Post.find().sort('-date').populate('tags')
    ctx.status = 200
    ctx.body = posts
  } catch (err) {
    err.status = err.status || 404
    ctx.app.emit('error', err, ctx)
  }
}
