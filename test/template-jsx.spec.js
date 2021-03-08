import { mount } from '@vue/test-utils'

import TemplateJsx from '@/components/template-jsx.vue'

describe('TemplateJsx', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(TemplateJsx)
    expect(wrapper.vm).toBeTruthy()
  })
})
