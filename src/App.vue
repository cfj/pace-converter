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
    <div class="distance-results">
      <distance-result :seconds="seconds" distance="5" distance-name="5k"></distance-result>
      <distance-result :seconds="seconds" distance="10" distance-name="10k"></distance-result>
      <distance-result :seconds="seconds" distance="21.098" distance-name="Half marathon"></distance-result>
      <distance-result :seconds="seconds" distance="42.195" distance-name="Full marathon"></distance-result>
    </div>
    <div>
      <a v-on:click="setCustomDistanceState" v-if="!showCustomDistance" class="waves-effect waves-light light-green btn custom-btn">Add custom distance</a>
      <div v-if="showCustomDistance" class="custom-distance">
        <input type="range" min="1" max="160" step="1" v-model="customDistance">
        <distance-result :seconds="seconds" :distance="customDistanceString" :distance-name="customDistanceName"></distance-result>
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
html {
  height: 100%;
}

body {
  display: flex;
  justify-content: center;
  height: 100%;
}

h1 {
  font-size: 3.2rem;
}

.main {
  width: 100%;
  max-width: 600px;
  font-family: Helvetica, sans-serif;
  text-align: center;
}

.distance-results {
  //text-align: left;
}

input[type=range] {
  width: 100%;
}

.custom-btn {
  margin-top: 30px;
}

input[type=range]::-webkit-slider-thumb{
  background-color: #8bc34a;
  width: 30px;
  height: 30px;
  margin-top: -13px;
}
</style>
