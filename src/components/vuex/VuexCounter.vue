<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success">MyCounter</p>
        <p class="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium fuga impedit quae!
          Aspernatur cum,
          eveniet id iste minus provident quidem quo soluta? Amet blanditiis dicta enim, nostrum nulla quis sunt?</p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="card shadow-lg">
          <div class="card-body">
            <p class="h3 display-3">{{ counterState.count }}</p>
            <button class="btn btn-success m-1" @click="clickIncrement()">Increment</button>
            <button class="btn btn-warning m-1" @click="clickDecrement()">Decrement</button>
            <button class="btn btn-danger m-1" @click="clickIncrementBy(5)">Increment By</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "VuexCounter",
  methods: {
    clickIncrement: function () {
      this.$store.dispatch("counterModule/incrementCounter");
    },
    clickDecrement: function () {
      this.$store.dispatch("counterModule/decrementCounter");
    },
    clickIncrementBy: function (value) {
      this.$store.dispatch("counterModule/incrementCounterBy", {value: value});
    }
  },
  computed: mapGetters({
    counterState: "getCounterState"
  })
}
</script>

<style scoped>

</style>
