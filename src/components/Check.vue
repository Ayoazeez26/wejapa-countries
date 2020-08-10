<template>
  <div class="input-container">
    <h1>Wejapa Countries</h1>

    <b-form-group
      id="fieldset-horizontal"
      label-cols-sm="4"
      label-cols-lg="3"
      description="Let us know your name."
      label="Enter your name"
      label-for="input-horizontal"
    >
      <b-form-select v-model="selected" :options="options" class="mb-3 mt-3">
        <!-- This slot appears above the options from 'options' prop -->
        <template v-slot:first>
          <b-form-select-option :value="null" disabled>-- Please select an option --</b-form-select-option>
        </template>

        <!-- These options will appear after the ones from 'options' prop -->
        <b-form-select-option value="C">Option C</b-form-select-option>
        <b-form-select-option value="D">Option D</b-form-select-option>
      </b-form-select>
    </b-form-group>
  </div>
</template>

<script>
import * as Data from "../assets/data.json";

export default {
  data() {
    return {
      selected: null,
      options: [
        { value: "A", text: "Option A (from options prop)" },
        { value: "B", text: "Option B (from options prop)" },
      ],
    };
  },
  mounted: function () {
    console.log(Data);
  },
};
</script>

<style scoped>
.input-container {
  /* background: red !important; */
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>