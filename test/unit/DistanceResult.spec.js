/* global describe, it, expect */

import Vue from 'vue'
import DistanceResult from 'src/components/DistanceResult'

describe('DistanceResult.vue', () => {
  it('should render correct 5k time for a given pace', () => {
    const vm = new Vue({
      template: '<div><distance-result :seconds="360" distance="5" distance-name="5k"></distance-result></pace></div>',
      components: { DistanceResult }
    }).$mount()
    expect(vm.$el.querySelector('.left-align time').textContent).toBe('30:00')
  })

  it('should render correct 10k time for a given pace', () => {
    const vm = new Vue({
      template: '<div><distance-result :seconds="360" distance="10" distance-name="10k"></distance-result></pace></div>',
      components: { DistanceResult }
    }).$mount()
    expect(vm.$el.querySelector('.left-align time').textContent).toBe('1:00:00')
  })

  it('should render correct half marathon time for a given pace', () => {
    const vm = new Vue({
      template: '<div><distance-result :seconds="360" distance="21.098" distance-name="Half marathon"></distance-result></pace></div>',
      components: { DistanceResult }
    }).$mount()
    expect(vm.$el.querySelector('.left-align time').textContent).toBe('2:06:35')
  })

  it('should render correct marathon time for a given pace', () => {
    const vm = new Vue({
      template: '<div><distance-result :seconds="360" distance="42.195" distance-name="Full marathon"></distance-result></pace></div>',
      components: { DistanceResult }
    }).$mount()
    expect(vm.$el.querySelector('.left-align time').textContent).toBe('4:13:10')
  })

  it('should render correct time for a custom distance for a given pace', () => {
    const vm = new Vue({
      template: '<div><distance-result :seconds="360" distance="62" distance-name="62k"></distance-result></pace></div>',
      components: { DistanceResult }
    }).$mount()
    expect(vm.$el.querySelector('.left-align time').textContent).toBe('6:12:00')
  })
})
