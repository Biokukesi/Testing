<template>
    <div>
       
        <div v-for="crud in crud" :key = "crud.id" class = "crud">
          <router-link :to = "{name:'manageCompany', params: {id: crud.id}}"> <h4>{{crud.id}}</h4></router-link>
        </div>
       
    </div>
</template>

<script>
    export default {
        data() {
            return {
                crud: [
                    {title: "Add insurance company",id: 'Add insurance company', details: "You need to enter the insurance company details"},
                    {title: "View insurance companies",id: 'View insurance companies', details: ""},
                    {title: "Update insurance company",id: 'Update insurance company', details: "You need to enter name"},
                    {title: "Delete insurance company",id: 'Delete insurance company', details: "You need to enter name"}


                ]
                
            }
        }
    }
</script>

<style>
    .crud h4{
        background: crimson;
        padding: 20px;
        border-radius: 20px;
        margin: 20px auto;
        max-width: 600px;
        cursor: pointer;
        color: white;
        padding: 10px;
        display: flex;
        width: 250px;
        align-items: center;
        justify-content: center;

    }

    .crud h4:hover{
        color: black;
        background: #ddd;
    }
    .crud a{
        text-decoration: none;
    }
</style>