<template>
  <div class="input-container">
    <h1>Wejapa Countries</h1>

    <select name="countries" id="country" @change="onCountry($event)">
      <option
        v-for="country in countries"
        :key="country.key"
        :v-model="selectedCountry"
        :value="country.key"
      >{{country.name}}</option>
    </select>
  </div>
</template>

<script>
var world = require("../assets/data.json");

export default {
  data() {
    return {
      countries: [],
      selectedCountry: "",
    };
  },
  mounted: function () {
    this.getCountry();
    console.log(world);
  },
  methods: {
    getCountry() {
      world.forEach((element, key) => {
        this.countries.push({
          key: key,
          name: element.name,
        });
      });
    },

    onCountry(event) {
      this.selectedCountry = event.target.value;
      console.log("Selected Country", event.target.value);
    },
  }
};
</script>

<style scoped>
.input-container {
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>