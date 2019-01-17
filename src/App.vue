<template>
  <div id="app">
    <Grid :style="{height: '200px'}"
          :data-items="dataItems"
          :columns="columns">
    </Grid>
  </div>
</template>

<script>

export default {
  name: 'app',
  data: function () {
    return {
      dataItems: [
      {
        "name": "Ruxanda",
        "surname": "Corbea",
        "gender": "female",
        "region": "Romania"
      },
      {
        "name": "Paula",
        "surname": "Acevedo",
        "gender": "female",
        "region": "Mexico"
      },
      {
        "name": "David",
        "surname": "Dediu",
        "gender": "male",
        "region": "Romania"
      },
      {
        "name": "Urmila",
        "surname": "Belbase",
        "gender": "female",
        "region": "Nepal"
      }],
      columns: [
        { field: 'name'},
        { field: 'surname'},
        { field: 'gender'},
        { field: 'region' }
      ],
    };
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
