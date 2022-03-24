import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    countLearnWords: '5',
    words: {},
    categories: []
}

export const asyncGetWords = createAsyncThunk('GET_ASYNC_WORDS', async function() {
    const response = await fetch('https://english-words-api.vercel.app/')
    const data = await response.json()
    return data
})
const learningSlice = createSlice({
    name: 'learning',
    initialState,
    reducers: {
        getCountLearnWords(state, action){
            state.countLearnWords = action.payload
        },
        deleteWord(state, action){
            state.words[action.payload.category] = current(state).words[action.payload.category].filter(el => el !== action.payload.word)
        },
        addCategory(state, action){
            if (!current(state).categories.includes(action.payload)){
                state.categories.push(action.payload)
            }
        },
        removeCategory(state, action){
            state.categories = current(state).categories.filter(el => el !== action.payload)
        },

    },
    extraReducers: {
        [asyncGetWords.fulfilled]: (state, action) => {
            state.words = action.payload
        }
    }
})

export default learningSlice.reducer
export const {getCountLearnWords, deleteWord, addCategory, removeCategory} = learningSlice.actions