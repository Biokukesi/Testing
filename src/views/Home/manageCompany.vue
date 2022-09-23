<template>
    <h3>Manage insuarance companies</h3>
    <p>{{$route.params.id}}</p>
</template>

<script>
export default{
    data(){
        return {
            id: this.$route.params.id
        }
    }
    
}

</script>

<style>

</style>