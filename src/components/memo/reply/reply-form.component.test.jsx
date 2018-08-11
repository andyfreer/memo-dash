import React from 'react'
import { shallow } from 'enzyme'
import ReplyFormComponent from './reply-form.component'

describe('<ReplyFormComponent />', () => {
  let wrapper

  beforeEach(() => {
    const div = document.createElement('div')
    document.body.appendChild(div)
  })

  it('renders without crashing', () => {
    wrapper = shallow(
      <ReplyFormComponent
        values={{ message: 'replyMessage' }}
        errors={{ message: 'errorMessage' }}
        touched={{ message: 'touchedMessage' }}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})