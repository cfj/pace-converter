<template>
  <div class="pace">
    <!--<h3>{{seconds}} seconds</h3>-->
    <span>{{minutes}} per {{unit}}</span>
  </div>
</template>

<script>
  import secondsToMinutes from '../utils/secondsToMinutes'

  export default {
    props: {
      seconds: Number,
      unit: String
    },

    computed: {
      minutes () {
        if (this.unit === 'km') {
          return secondsToMinutes(this.seconds)
        }

        return secondsToMinutes(this.seconds * 1.609)
      }
    }
  }
</script>

<style>
  .pace {
    font-size: 2.15rem;
  }
</style>
