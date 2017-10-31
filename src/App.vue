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
      <distance-result :seconds="seconds" distance="42.195" distance-name="Marathon"></distance-result>
    </div>
    <div>
      <a v-on:click="setCustomDistanceState" v-if="!showCustomDistance" class="btn custom-btn">Add other distance</a>
      <div v-if="showCustomDistance" class="custom-distance">
        <div>
          <div>Unit</div>
          <input type="radio" id="radio-unit-km" name="unit-selector" value="k" v-model="customDistanceUnit" v-on:click="resetCustomDistance">
          <label for="radio-unit-km"><span></span>km</label>
          <input type="radio" id="radio-unit-m" name="unit-selector" value="m" v-model="customDistanceUnit" v-on:click="resetCustomDistance">
          <label for="radio-unit-m"><span></span>m</label>
        </div>
        <input type="range" min="{{customDistanceMinValue}}" max="{{customDistanceMaxValue}}" step="{{customDistanceStep}}" v-model="customDistance" class="custom-range">
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

const customDistanceDefaultUnitName = 'k'
const maximumDistanceInMeters = 1600
const maximumDistanceInKilometers = 160
const minimumDistanceInMeters = 0
const minimumDistanceInKilometers = 1
const stepInMeters = 50
const stepInKilometers = 1

export default {
  components: {
    Pace,
    DistanceResult
  },

  data () {
    return {
      seconds: 360,
      showCustomDistance: false,
      customDistance: 10,
      customDistanceUnit: customDistanceDefaultUnitName,
      customDistanceStep: 1,
      customDistanceOriginalMaxValue: maximumDistanceInKilometers,
      customDistanceMaxValue: this.customDistanceOriginalMaxValue,
      customDistanceMinValue: 1
    }
  },

  methods: {
    setCustomDistanceState () {
      this.showCustomDistance = true
    },

    resetCustomDistance () {
      if (this.customDistanceUnit === customDistanceDefaultUnitName) {
        if ((this.customDistance * 1000) < maximumDistanceInMeters) {
          this.customDistance = this.customDistance * 1000
        } else {
          this.customDistance = maximumDistanceInMeters
        }
      } else {
        this.customDistance = this.customDistance / 1000
      }
    }
  },

  computed: {
    customDistanceString () {
      return this.customDistanceUnit === customDistanceDefaultUnitName ? this.customDistance.toString() : (this.customDistance / 1000).toString()
    },

    customDistanceName () {
      return this.customDistance + this.customDistanceUnit
    },

    customDistanceMaxValue () {
      return this.customDistanceUnit === customDistanceDefaultUnitName ? maximumDistanceInKilometers : maximumDistanceInMeters
    },

    customDistanceMinValue () {
      return this.customDistanceUnit === customDistanceDefaultUnitName ? minimumDistanceInKilometers : minimumDistanceInMeters
    },

    customDistanceStep () {
      return this.customDistanceUnit === customDistanceDefaultUnitName ? stepInKilometers : stepInMeters
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

.custom-distance {
  margin-top: 1em;
}

input[type=range] {
  width: 100%;
}

.custom-distance input[type=range] {
  margin: 25px 0;
}

input[type="radio"] {
    display:none;
}

input[type="radio"] + label span {
    display: inline-block;
    width: 19px;
    height: 19px;
    margin: 0 6px 0 0;
    vertical-align: middle;
    cursor: pointer;
    border-radius:  50%;
    border: 1px solid rgba(10, 10, 10, 0.4);;
}

input[type="radio"] + label span {
     background-color: white;
}

input[type="radio"]:checked + label span{
     background-color: #f39c12;
}
</style>
