import { Tag } from '~/server/models'
import { createError } from '~/server/utils'

export default async (ctx, next) => {
  try {
    const deletedTag = await Tag.findByIdAndRemove(ctx.params.id)

    if (!deletedTag) {
      throw createError(404, 'No tags with the specified id were found')
    }

    ctx.status = 200
    ctx.body = deletedTag
    next()
  } catch (err) {
    err.status = err.status
    ctx.app.emit('error', err, ctx)
  }
}
