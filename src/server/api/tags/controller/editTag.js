import { Tag } from '~/server/models'

export default async (ctx, next) => {
  try {
    const id = ctx.params.id
    const opts = { runValidators: true, new: true }

    const updates = {}
    const { name, color } = ctx.request.body

    if (name) {
      updates.name = name
    }

    if (color) {
      updates.color = color
    }

    const updatedTag = await Tag.findByIdAndUpdate(id, updates, opts).exec()
    console.log(updatedTag)
    ctx.status = 200
    ctx.body = updatedTag
  } catch (err) {
    err.status = err.status || 400
    ctx.app.emit('error', err, ctx)
  }
}
