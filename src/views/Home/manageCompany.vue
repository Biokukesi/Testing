<template>
<div class = "page">
    <h3>Manage insuarance companies</h3>
    <p>{{$route.params.id}}</p>
</div>
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