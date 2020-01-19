<template>
    <div class="navigation">
        <router-link class="logo" :to="{ name: 'home'}">
            <p>Bookshelf</p>
        </router-link>
        <router-link 
            v-if="!$route.params.id"
            class="add-button" 
            :to="{ name: 'edit-book'}">
            <p>Add Book</p>
        </router-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.navigation {
    background-color: teal;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 30px;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    padding: 0 20px;
}
a {
    color: #eee;
    text-decoration: none;
}

.add-button {
    border: 1px solid #eee;
    border-radius: 10px;
    padding: 10px;
    transition: 0.5s;
}

.add-button:hover {
    border-radius: 20px;
    transition: 0.5s;
}


</style>