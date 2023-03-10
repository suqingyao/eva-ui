import { EButton } from '../../button'

import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'

const Button_Content = 'Test Button'

describe('e-button', () => {
  test('button render test', () => {
    const wrapper = mount(EButton, {
      slots: {
        default: Button_Content
      }
    })

    expect(wrapper.text()).toBe(Button_Content)
  })
})
