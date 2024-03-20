<template>
  <div class="connect-network">
    <div class="connect-header">
      <div class="row">
        <div class="col-md-4">
          <h3 class="h3" v-if="messaging === true">Messaging</h3>
          <h3 class="h3" v-else>{{ title }}</h3>
        </div>
        <div class="col-md-8">
          <div class="form">
            <div class="form-group">
              <input
                type="search"
                class="form-control"
                placeholder="Please Enter Name to search "
                v-model="filterVal"
              />
              <a href="#" class="btn-style black" v-if="searches === true"
                >Search</a
              >
              <a href="#" class="btn-style black" v-else @click="findPerson"
                >Find Person</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineComponent, ref, defineProps, defineEmits } from "vue";

const props = defineProps(["messaging", "searches", "title"]);
const emit = defineEmits("filter");
const isMenuActive = ref(false);
const filterVal = ref(null);

const findPerson = () => {
  emit("filter", filterVal.value);
};
</script>
