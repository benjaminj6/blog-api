import marked from 'marked'
import { Post } from '~/models'

export default async (ctx, next) => {
  try {
    const id = ctx.params.id
    const opts = { runValidators: true, new: true }

    const updates = {}
    const { post, title } = ctx.request.body

    if (title) {
      updates.title = title
    }

    let html
    if (post) {
      html = await marked(post)

      updates.md = post
      updates.html = html
    }

    const updatedPost = await Post.findByIdAndUpdate(id, updates, opts).exec()

    ctx.status = 200
    ctx.body = updatedPost
    next()
  } catch (err) {
    err.status = err.status || 400
    ctx.app.emit('error', err, ctx)
  }
}