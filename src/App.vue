<template>
  <div id="app" class="main">
    <h1>Pace converter</h1>
    <div>
      <pace :seconds="seconds" unit="km"></pace>
      <span>equals</span>
      <pace :seconds="seconds" unit="mile"></pace>
    </div>
    <div>
      <i class="medium material-icons drag-indicator" id="indicator">swap_horiz</i>
    </div>
    <input type="range" min="180" max="540" step="1" v-model="seconds">
    <div class="distance-results row">
      <distance-result :seconds="seconds" distance="5" distance-name="5k"></distance-result>
      <distance-result :seconds="seconds" distance="10" distance-name="10k"></distance-result>
      <distance-result :seconds="seconds" distance="21.098" distance-name="Half marathon"></distance-result>
      <distance-result :seconds="seconds" distance="42.195" distance-name="Full marathon"></distance-result>
    </div>
    <div>
      <a v-on:click="setCustomDistanceState" v-if="!showCustomDistance" class="btn custom-btn">Add other distance</a>
      <div v-if="showCustomDistance" class="custom-distance">
        <input type="range" min="1" max="160" step="1" v-model="customDistance">
        <div class="row">
          <distance-result :seconds="seconds" :distance="customDistanceString" :distance-name="customDistanceName"></distance-result>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pace from './components/Pace'
import DistanceResult from './components/DistanceResult'

export default {
  components: {
    Pace,
    DistanceResult
  },

  data () {
    return {
      seconds: 360,
      showCustomDistance: false,
      customDistance: 10
    }
  },

  methods: {
    setCustomDistanceState () {
      this.showCustomDistance = true
    }
  },

  computed: {
    customDistanceString () {
      return this.customDistance.toString()
    },

    customDistanceName () {
      return this.customDistance + 'k'
    }
  }
}
</script>

<style>
h1 {
  font-size: 3.2rem;
  margin: 0.2em 0;
  font-weight: 300;
}

.custom-btn {
  margin-top: 2em;
}

input[type=range] {
  width: 100%;
}

input[type=range]::-webkit-slider-thumb{
  background-color: #8bc34a;
  width: 30px;
  height: 30px;
  margin-top: -13px;
}
</style>
