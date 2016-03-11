<template>
  <div>
    <h4><span class="distance">{{distanceName}}</span> in <time>{{time}}</time></h4>
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
  }

  time {
    /*color: blue;*/
  }
</style>
