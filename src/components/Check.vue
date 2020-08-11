<template>
  <div class="input-container">
    <h1>Wejapa Countries</h1>

    <select name="countries" id="country" @change="onCountry($event)">
      <option>-- Select Country --</option>
      <option
        v-for="country in countries"
        :key="country.key"
        :v-model="selectedCountry"
        :value="country.key"
      >{{country.name}}</option>
    </select>

    <select name="states" id="state" @change="onState($event)">
      <option
        v-for="state in states"
        :key="state.key"
        :v-model="selectedState"
        :value="state.key"
      >{{state.name}}</option>
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
      selectedState: "",
      states: [],
    };
  },
  mounted: function () {
    this.getCountry();
    // console.log(world);
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
      this.states = [];
      this.selectedState = "";
      this.selectedCountry = event.target.value;
      this.selectedState = this.countries[this.selectedCountry].name;
      let key = this.selectedCountry;
      this.getState(key);
    },
    getState(key) {
      let findCountry = world[key];
      console.log(findCountry);
      findCountry.states.forEach((element, key) => {
        this.states.push({
          key: key,
          name: element.name,
        });
      });
    },
    onState(event) {
      this.selectedState = event.target.value;
      console.log(this.selectedState);
    },
  },
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