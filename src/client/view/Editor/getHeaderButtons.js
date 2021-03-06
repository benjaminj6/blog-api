import { h } from 'hyperapp' // eslint-disable-line

import { Close, Save, SaveCheck, Tag, Trash } from '../Icons'
import AddTagsMenu from './AddTagsMenu'
import Toggler from '../Toggler'

const createSaveClickHandler = (newContent, actions) => {
  const savable = newContent.title && newContent.md
  const isNewPost = /create/.test(window.location.pathname)
  const isUpdatedPost = /posts/.test(window.location.pathname)

  return ev => {
    if (savable && isNewPost) {
      actions.saveNewPost({ ...newContent })
    }

    if (savable && isUpdatedPost) {
      actions.saveUpdatedPost(newContent)
    }
  }
}

const SaveButton = ({ saved, newContent, actions }) => (
  <button>
    {
      saved
      ? <SaveCheck />
      : <Save
        onclick={createSaveClickHandler(newContent, actions)}
        style={{
          color: newContent.title && newContent.md
            ? ''
            : 'rgba(0, 0, 0, 0.05)'
        }} />
    }
  </button>
)

const AddTagsToggler = ({ actions, selected }) => (
  <Toggler
    id='info-toggler'
    className='add-tags-toggler'>
    <Tag />
    <AddTagsMenu
      actions={actions}
      post={selected || ''} />
  </Toggler>
)

const CancelButton = ({ actions }) => (
  <button onclick={_ => actions.router.go('/dashboard')}>
    <Close />
  </button>
)

const DeleteButton = ({ id, actions }) => (
  <button onclick={_ => actions.deletePost(id)}>
    <Trash />
  </button>
)

export default (model, actions, selected) => {
  const buttons = [
    <SaveButton
      actions={actions}
      newContent={model.newContent}
      saved={model.newContentSaved} />,
    <AddTagsToggler
      actions={actions}
      selected={selected} />
  ]

  if (/create/.test(window.location.pathname)) {
    buttons.push(<CancelButton actions={actions} />)
    return buttons
  }

  buttons.push(
    <DeleteButton
      actions={actions}
      id={model.newContent._id} />
  )

  return buttons
}
