<template>
  <div class="distance">
    <div class="col s6 right-align">
      <span class="distance-name">{{distanceName}}</span>
    </div>
    <div class="col s6 left-align">
      <time>{{time}}</time>
    </div>
  </div>
</template>

<script>
  import clocktime from '../utils/clocktime'

  export default {
    props: {
      seconds: Number,
      distance: String,
      distanceName: String
    },

    computed: {
      time () {
        return clocktime(this.seconds * this.distance)
      }
    }
  }
</script>

<style>
  .distance {
    font-size: 1.35rem;
  }

  time {
    /*color: blue;*/
  }
</style>
