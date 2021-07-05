<template>
  <div id="UserList" class="m-5" >
      <b-table
                  :data="data"
                  :paginated="isPaginated"
                  :per-page="perPage"
                  :current-page.sync="currentPage"
                  aria-current-label="Current page">
              
                   <b-table-column field="data[0].first_name" label="First Name"  width="140" sortable  v-slot="props">
                        {{ props.row.first_name }}
                    </b-table-column>

                   <b-table-column field="data[0].last_name" label="Last Name"  width="140" sortable  v-slot="props">
                        {{ props.row.last_name }}
                    </b-table-column>

                   <b-table-column field="data[0].email" label="Email"  width="140" sortable  v-slot="props">
                        {{ props.row.email }}
                    </b-table-column>

                   <b-table-column field="data[0].avatar" label="Avatar"  width="140" sortable  v-slot="props">
                        <img :src="  props.row.avatar " alt="">
                    </b-table-column>
                      

      </b-table>
  </div>
</template>
<script>
const axios = require('axios');
export default {
  name: 'UserList',
  data() {
            return {
                isPaginated: true,
                  isPaginationSimple: false,
                  isPaginationRounded: false,
                  paginationPosition: 'bottom',
                  defaultSortDirection: 'asc',
                  sortIcon: 'arrow-up',
                  sortIconSize: 'is-small',
                  currentPage: 1,
                  perPage: 5,
                  data: [],
            }
            },
    mounted (){
          this.getuserdata();
    },

    methods:{
      getuserdata() {
        
        axios.get('https://reqres.in/api/users?page=' + this.currentPage).then(res => {
             this.data = res.data.data;
        })
      },
     

    
    }
}
</script>

