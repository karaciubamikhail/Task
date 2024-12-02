<template>
  <div class="has-text-centered create">
    <button class="button" @click="setModal">Create Task</button>
  </div>
  <table class="table">
    <thead>
      <tr>
        <th><abbr>Task Id</abbr></th>
        <th>Completed</th>
        <th>Task</th>
        <th><abbr>Created By</abbr></th>
        <th><abbr>Assigned To</abbr></th>
        <th><abbr>Actions</abbr></th>
      </tr>
    </thead>
    <tbody v-if="tasks">
      <tr v-for="task in tasks" :key="task.id">
        <TaskListItem v-bind="task" />
      </tr>
    </tbody>
    <tfoot>
      <CreateModal v-show="showCreateModal"></CreateModal>
    </tfoot>
  </table>
  <EditModal v-if="showEditModal" :id="editTaskId"></EditModal>
  <TaskItem v-if="showTaskModal" :id="showTaskId"></TaskItem>
</template>
<script>
import CreateModal from "./CreateModal"
import EditModal from "./EditModal"
import TaskItem from "./TaskItem"
import TaskListItem from "./TaskListItem"
import { defineComponent, computed } from "vue"
import { useStore } from "@/store"
import { MutationType } from "@/store/mutations"
export default defineComponent({
  name: "Table",
  components: {
    CreateModal,
    TaskListItem,
    TaskItem,
    EditModal,
  },
  setup() {
    const store = useStore()

    const setModal = () => {
      store.commit(MutationType.SetCreateModal, true)
    }

    const showCreateModal = computed(() => store.state.showCreateModal)
    const showEditModal = computed(() => store.state.showEditModal)
    const editTaskId = computed(() => store.state.editModalTaskId)
    const showTaskModal = computed(() => store.state.showTaskModal)
    const showTaskId = computed(() => store.state.showTaskId)

    const tasks = computed(() => store.state.tasks)
    return {
      showCreateModal,
      setModal,
      tasks,
      showEditModal,
      showTaskModal,
      editTaskId,
      showTaskId,
    }
  },
})
</script>
<style scoped>
table {
  width: 95%;
  margin: 0 auto;
}
.fa {
  font-size: 1.2rem;
  margin-left: 15px;
}
.fa:hover {
  font-size: 1.4rem;
}
.create {
  margin: 1.5rem;
}
</style>
