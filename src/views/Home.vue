<template>
  <div class="home">
    <div>
  <h2>Example heading <b-badge>New</b-badge></h2>
  <h3>Example heading <b-badge>New</b-badge></h3>
  <h4>Example heading <b-badge>New</b-badge></h4>
  <h5>Example heading <b-badge>New</b-badge></h5>
  <b-form-tags noTagRemove="true" input-id="tags-limit" v-model="value" :limit="limit" remove-on-delete></b-form-tags>
</div>
  </div>
</template>

<script>
import { BBadge } from 'bootstrap-vue'

export default {
  name: 'Home',
  components: {
    BBadge
  }
}
</script>
