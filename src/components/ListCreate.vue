<template>
<div>
  <div class="form-row d-flex">
    <div class="col-10 pe-3">
      <input type="text" class="form-control form-control-lg" v-model="newMessage" @keyup="showError=false" @keyup.enter="create()" placeholder="Say Something" autofocus>
    </div>
    <div class="col-2">
      <button class="btn btn-outline-primary w-100 btn-lg" @click="create()">
        <i class="fa fa-plus-circle"></i>
      </button>
    </div>
  </div>
  <div class="col-12">
    <small v-if="showError" class="text-danger">{{errorMessage}}</small>
  </div>
</div>
</template>

<script>
export default {
  name: "ListCreate",
  data() {
    return {
      newMessage: "",
      showError : false,
      errorMessage : ""
    }
  },
  methods: {
    create() {
      if(this.newMessage.length){
        this.$emit('create',this.newMessage),
            this.newMessage = ''
      }else{
        this.showError = true;
        this.errorMessage = "Say Something"
      }

    }
  },
}
</script>

<style scoped>

</style>