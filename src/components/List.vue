<template>
<div>
  <li  @dblclick="isEdit = true" @keyup.enter="isEdit = false" :class="['list-group-item d-flex justify-content-between align-items-center created',{'deleted':list.isDelete}]">
    <input type="text" v-if="isEdit" v-model="list.message" class="form-control form-control-lg me-2">
    <div v-else class=" form-check">
      <input class="form-check-input" type="checkbox" v-model="list.isDone" value="" :id="'formCheck'+list.id">
      <label :class="['form-check-label',{'done':list.isDone}]" :for="'formCheck'+list.id">
        {{list.message}}
      </label>
    </div>
    <i  @click="[del(list.id),isDelete =true]" class="fa fa-trash text-danger"></i>
  </li>
</div>
</template>

<script>
export default {
  name: "List",
  props : {
    list : {
      type : Object,
      required : true,
    }
  },
  data() {
    return {
      isEdit : false,
      isDelete : false,
    }
  },
  methods: {
    del(x) {
      this.$emit('del',x)
    }
  },
}
</script>

<style scoped>

</style>