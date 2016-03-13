<template>
  <div id="app" class="main">
    <h1>Pace converter</h1>
    <div>
      <pace :seconds="seconds" unit="km"></pace>
      <span>equals</span>
      <pace :seconds="seconds" unit="mile"></pace>
    </div>
    <div class="drag-icon-container">
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
        <input type="range" min="1" max="160" step="1" v-model="customDistance" class="custom-range">
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

.distance-results {
  margin-top: 1em;
}

.custom-btn {
  margin-top: 1em;
}

.custom-range {
  margin: 1em 0;
}

input[type=range] {
  width: 100%;
}
</style>
