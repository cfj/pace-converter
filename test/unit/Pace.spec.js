/* global describe, it, expect */

import Vue from 'vue'
import Pace from 'src/components/Pace'

describe('Pace.vue', () => {
  it('should render correct pace', () => {
    const vm = new Vue({
      template: '<div><pace :seconds="360" unit="km"></pace></div>',
      components: { Pace }
    }).$mount()
    expect(vm.$el.querySelector('.pace span strong').textContent).toBe('6:00')
  })

  it('should render correct pace when seconds have changed', () => {
    const vm = new Vue({
      template: '<div><pace :seconds="180" unit="km"></pace></div>',
      components: { Pace }
    }).$mount()
    expect(vm.$el.querySelector('.pace span strong').textContent).toBe('3:00')
  })

  it('should render correct pace for miles', () => {
    const vm = new Vue({
      template: '<div><pace :seconds="180" unit="mile"></pace></div>',
      components: { Pace }
    }).$mount()
    expect(vm.$el.querySelector('.pace span strong').textContent).toBe('4:50')
  })
})

// also see example testing a component with mocks at
// https://github.com/vuejs/vue-loader-example/blob/master/test/unit/a.spec.js#L24-L49
