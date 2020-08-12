<template>
  <div class="input-container">
    <h1>Wejapa Countries</h1>

    <select name="countries" id="country" @change="onCountry($event)" class="mb-3">
      <option>-- Select Country --</option>
      <option
        v-for="country in countries"
        :key="country.key"
        :v-model="selectedCountry"
        :value="country.key"
      >{{country.name}}</option>
    </select>

    <select name="states" id="state" @change="onState($event)" class="mb-3">
      <option>-- Select State --</option>
      <option
        v-for="state in states"
        :key="state.key"
        :v-model="selectedState"
        :value="state.key"
      >{{state.name}}</option>
    </select>

    <select name="cities" id="city" @change="onCity($event)" class="mb-3">
      <option>-- Select City --</option>
      <option
        v-for="city in cities"
        :key="city.key"
        :v-model="selectedCity"
        :value="city.key"
      >{{city.name}}</option>
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
      selectedCountryName: "",
      states: [],
      selectedState: "",
      selectedStateName: "",
      cities: [],
      selectedCity: "",
      selectedCityName: ""
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
      this.selectedCountryName = "";
      this.selectedCountry = event.target.value;
      this.selectedCountryName = this.countries[this.selectedCountry].name;
      let key = this.selectedCountry;
      this.getState(key);
    },
    getState(key) {
      let findCountry = world[key];
      findCountry.states.forEach((element, key) => {
        this.states.push({
          key: key,
          name: element.name,
        });
      });
    },
    onState(event) {
      this.cities = [];
      this.selectedCity = "";
      this.selectedState = event.target.value;
      this.selectedStateName = world[this.selectedCountry].states[this.selectedState].name;
      let key = this.selectedState;
      this.getCity(key);
    },
    getCity(key) {
      let findCity = world[this.selectedCountry].states[key];
      findCity.cities.forEach((element, key) => {
        this.cities.push({
          key: key,
          name: element.name,
        });
      });
    },
    onCity(event) {
      this.selectedCity = event.target.value;
      this.selectedCityName = world[this.selectedCountry].states[this.selectedState].cities[this.selectedCity].name;
    }
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

select {
  width: 300px;
  height: 50px;
  border: 1px solid #DDD;
  border-radius: 5px;
  padding: 5px 10px;
  text-transform: uppercase;
}
</style>