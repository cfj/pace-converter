<template>
  <div class="pace">
    <!--<h3>{{seconds}} seconds</h3>-->
    <span><strong>{{minutes}}</strong> <small>/ {{unit}}</small></span>
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

  strong {
    font-size: 2.5rem;
  }

  small {
    font-size: 1.5rem;
    font-weight: 300;
  }
</style>
