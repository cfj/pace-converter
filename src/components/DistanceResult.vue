<template>
  <div class="distance">
    <span class="distance-name">{{distanceName}}</span> in <time>{{time}}</time>
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
    /*color: red;*/
    font-size: 1.5rem;
  }

  time {
    /*color: blue;*/
  }
</style>
