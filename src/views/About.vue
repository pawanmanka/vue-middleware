<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div v-if="isAuth">
      {{isAuth.name}} {{isAuth._role}}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters([
      'isAuth',    
    ])
  }
};
</script>
