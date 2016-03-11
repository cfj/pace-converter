<template>
  <div id="app" class="main">
    <h1>Pace converter</h1>
    <div>
      <pace :seconds="seconds" unit="km"></pace>
      <span>equals</span>
      <pace :seconds="seconds" unit="mile"></pace>
    </div>
    <input type="range" min="180" max="540" step="1" v-model="seconds">
    <div class="distance-results">
      <distance-result :seconds="seconds" distance="5" distance-name="5k"></distance-result>
      <distance-result :seconds="seconds" distance="10" distance-name="10k"></distance-result>
      <distance-result :seconds="seconds" distance="21.098" distance-name="Half marathon"></distance-result>
      <distance-result :seconds="seconds" distance="42.195" distance-name="Full marathon"></distance-result>
    </div>
    <div>
      <button v-on:click="setCustomDistanceState" v-if="!showCustomDistance">Add custom distance</button>
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
</style>
