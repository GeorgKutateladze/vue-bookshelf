<template>
    <div class="card">
        <div class="card__image">
            <img src="https://via.placeholder.com/230x230/EEEEEE" alt=""/>
        </div>
        <div class="card__title">{{ book.title }}</div>
        <div class="card__author">{{ book.author }}</div>
        <div class="card__year">{{ book.year }}</div>
        <div class="options">
            <router-link 
                class="edit-book btn" 
                :to="{ 
                    name: 'edit-book', 
                    params: { 
                        title: book.title,
                        author: book.author,
                        year: book.year,
                        id: book.id,
                        } 
                    }">
                <p>Edit</p>
            </router-link>
            <div @click="deleteBook(book.id)" class="delete-book btn">
                Delete
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        book: Object
        },
    methods: {
        deleteBook(id) {
            this.$store.dispatch('DELETE_BOOK', id)
        }
    }
}
</script>

<style scoped>
    .card {
        width: 250px;
        height: 400px;
        display: flex;
        align-items: center;
        flex-direction: column;
        margin: 20px 15px;
        transition: 0.5s;
        border-radius: 10px;
        box-shadow: 0 1px 2px rgba(0,0,0,.2), 0 1px 2px rgba(0,0,0,.24);
    }

    .card:hover {
        transition: 0.5s;
        box-shadow: 0 25px 55px rgba(0,0,0,.2), 0 16px 28px rgba(0,0,0,.24);
    }

    .card__image {
        width: 230px;
        height: 230px;
        box-shadow: 0 1px 2px rgba(0,0,0,.2), 0 1px 2px rgba(0,0,0,.24);
    }
    .card>div {
        margin-top: 15px;
    }
    .options {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .btn {
        margin: 0 10px;
        cursor: pointer;
        width: 80px;
        height: 30px;
        border: 1px solid black;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.5s;
    }
    .delete-book:hover {
        border-color: crimson;
        color: crimson;
        transition: 0.5s;
        border-radius: 10px;
    }
    .edit-book:hover {
        border-color: teal;
        color: teal;
        transition: 0.5s;
        border-radius: 10px;
    }
    a {
        color: black;
        text-decoration: none;
    }
    
    
</style>