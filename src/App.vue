<script lang="ts">
import { computed, defineComponent, onMounted } from "vue"
import TaskList from "./components/TaskList.vue"
import { useStore } from "./store"
import { ActionTypes } from "./store/actions"

export default defineComponent({
  components: { TaskList },
  setup() {
    const store = useStore()

    const loading = computed(() => store.state.loading)
    onMounted(() => store.dispatch(ActionTypes.GetTaskItems))

    const completedCount = computed(() => store.getters.completedTaskCount)
    const totalCount = computed(() => store.getters.totalTaskCount)

    return { loading, completedCount, totalCount }
  },
})
</script>

<template>
  <div class="container mx-auto mt-3">
    <h1
      class="is-size-2 has-text-centered p-1 has-text-weight-bold has-text-info"
    >
      Vue 3 Task Management
      <sub class="is-size-4 has-text-dark"
        >Built with TypeScript and Vuex 4</sub
      >
    </h1>

    <div v-if="loading">
      <h3 class="has-text-centered mt-4 is-size-5">Loading...</h3>
    </div>
    <div v-else>
      <p class="has-text-centered mt-2 has-text-grey">
        {{ completedCount }} of {{ totalCount }} completed.
      </p>
      <TaskList />
    </div>
  </div>
</template>
<style>
@import "~bulma/css/bulma.css";

sub {
  display: block;
}
</style>
