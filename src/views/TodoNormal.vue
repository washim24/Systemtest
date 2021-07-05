
<template>
  <div>
        <div class="columns is-mobile is-centered m-5 ">
            <div class="column is-half is-primary ">
              <form @submit.prevent="submit">
                <b-field label="Enter Todo Name">
                      <b-input v-model="todoname" maxlength="30"></b-input>
                </b-field>
                <b-field >
                  <b-button label="Submit" type="is-primary"  native-type="submit" />
                </b-field>
              </form>
            </div>
         </div>
          <div id="todolist" class="m-5" >
              <b-table
                          :data="data"
                          :paginated="isPaginated"
                          :per-page="perPage"
                          :current-page.sync="currentPage"
                          aria-current-label="Current page" >
                          <b-table-column field="id" label="id	"  sortable  v-slot="props">
                                {{ props.row.id }}           
                            </b-table-column> 
                          <b-table-column field="task_name" label="Task Name	"  sortable  v-slot="props">
                                {{ props.row.task_name }}           
                            </b-table-column> 

                            <b-table-column  width="200" field="delete" label="Delete 	"  sortable   v-slot="props" >
                                 <b-button @click="delet(props.row.id)"> Delete </b-button>   
                            </b-table-column>                                             
              </b-table>  
            </div>
  </div>
</template>
<script>
export default {
  name:'TodoNormal',

  data(){

    return{
      id:1,
      todoname:'',
      isPaginated: true,
      isPaginationSimple: false,
      isPaginationRounded: false,
      paginationPosition: 'bottom',
      defaultSortDirection: 'asc',
      sortIcon: 'arrow-up',
      sortIconSize: 'is-small',
      currentPage: 1,
      perPage: 4, 
      data:[],
    }
  },
  methods:{

        submit(){

          // alert(this.todoname);

          this.data.push({task_name:this.todoname,id:this.id++});
        },

       delet(id){

         this.data.splice(-1,id);
        //  alert(id);
        
       }

  }


}
</script>