<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-4">
        <div class="my-5">
          <Title title="Vue Js Todo Project"></Title>
          <ListCreate @create="create" ></ListCreate>
          <div class="d-flex justify-content-between mt-3">
            <p class="mb-0 fw-bold">
              <BaseText>Job List{{lists.length > 1 ? "s" : ""}}</BaseText>
            </p>
            <p v-if="lists.length>0 && doneTotal == lists.length" class="badge bg-success rounded-pill">
              All Done <i class="fa fa-check-circle"></i>
            </p>
            <p v-else class="badge bg-primary rounded-pill">Done {{doneTotal}}</p>
          </div>
          <ul class="list-group">
            <li v-if="lists.length === 0"  class="list-group-item text-center">
              This is nothing
            </li>
            <List v-for="list in lists" :key="list.id" :list="list" @del="del"></List>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>


 import Title from "./components/Title.vue";
 import List from "./components/List.vue";
 import ListCreate from "./components/ListCreate.vue";
import BaseText from "./components/BaseText.vue";
 export default {
   name: "App",
   components: { ListCreate, List, Title, BaseText },
   data(){
     return{
       currentId : 0,
       lists: [

       ]
     }
   },
   computed:{
     doneTotal(){
       return this.lists.filter(el=> el.isDone ===true).length
     }
   },
   methods:{
     create(x){
       this.currentId++,
           this.lists.push(
               {
                 id : this.currentId,
                 message : x,
                 isDone : false,

               }
           )

     },
     del(x){
       setTimeout(()=>this.lists = this.lists.filter(el=>el.id !== x),500)
     }
   }
 }
</script>
<style>
.done{
  text-decoration: line-through;
  
}

.created{
  animation: 0.5s fadeInDown;
}
.deleted{
  animation: 0.75s zoomOut;
}
</style>