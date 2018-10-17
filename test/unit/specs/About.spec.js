import Vue from 'vue'
import About from '@/components/About'

describe('About.vue', () => {
  it ('has a created hook', () => {
    const Constructor = Vue.extend(About)
    const vm = new Constructor().$mount()
    expect(typeof About.created)
      .to.equal('function')
  })

  it('sets the correctly defaulted data', () => {
    expect(typeof About.data).to.equal('function')
    const defaultData = About.data()
    expect(defaultData.title)
      .to.equal('About')
  })

  it('should render About', () => {
    const Constructor = Vue.extend(About)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.About h1').textContent)
      .to.equal('About')
  })
})
