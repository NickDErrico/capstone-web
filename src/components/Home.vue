<template>
  <div id="home">
    <h1>{{ msg }}</h1>
    <p>Connecting you to your health</p>
  </div>
</template>

<script>

  export default {
    name: 'home',
    data () {
      return {
        msg: 'Healthy App Title'
      }
    }
  }
</script>

<style lang="scss">

#home {
  margin-top: 15%;
}

h1 {
  font-weight: normal;
}

</style>
