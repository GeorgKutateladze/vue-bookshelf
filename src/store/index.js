import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        books: [],
        filter: ''
    },
    mutations: {
        GET_BOOKS(state, payload) {
            state.books = payload
        },
        ADD_BOOK(state, payload) {
            state.books.push(payload)

        },
        EDIT_BOOK(state, payload) {
            const index = state.books.map(book => book.id).indexOf(payload.id)
            state.books[index] = {...state.books[index], ...payload}
        },
        DELETE_BOOK(state, payload) {
            state.books = state.books.filter(book => {
                return book.id !== payload
            })
        },
        FILTER_BOOKS(state, payload) {
            state.filter = payload
        }
    },
    actions: {
        GET_BOOKS({commit}) {
            const db = JSON.parse(localStorage.getItem('db'))
            commit("GET_BOOKS", db)
        },
        ADD_BOOK({commit}, payload) {
            const db = JSON.parse(localStorage.getItem('db'))
            db.push(payload)
            localStorage.setItem('db', JSON.stringify(db))
            commit("ADD_BOOK", payload)
        },
        EDIT_BOOK({commit}, payload) {
            const db = JSON.parse(localStorage.getItem('db'))
            const index = db.map(book => book.id).indexOf(payload.id)
            db[index] = {...db[index], ...payload}
            localStorage.setItem('db', JSON.stringify(db))
            commit("EDIT_BOOK", payload)
        },
        DELETE_BOOK({commit}, payload) {
            const db = JSON.parse(localStorage.getItem('db'))
            const newDB = db.filter(el => {
                return el.id !== payload
            });
            localStorage.setItem('db', JSON.stringify(newDB))
            commit("DELETE_BOOK", payload)
        },
        FILTER_BOOKS({commit}, payload) {
            commit("FILTER_BOOKS", payload)
        }
    }
})
