import Test from '@/components/Test'
import Vue from 'vue'

describe('App.vue', () => {
  it('displays items from the list', () => {
    const Constructor = Vue.extend(Test)
    const TestComponent = new Constructor().$mount()

    expect(TestComponent.$el.textContent).to.contain('play games')
  })
})
