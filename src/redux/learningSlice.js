import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { allWords } from "../allWords";
import { getRepeatTime } from "../utils";
const initialState = localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')).learning :  {
    countLearnWords: '5',
    firstShowLang: 'ru',
    words: allWords,
    categories: [],
    repeat: {
        // '1800000': [],
        // '7200000': [],
        // '43200000': [],
        // '86400000': [],
        // '604800000': [],
        // '5256000000': []
        '1000': [],
        '1001': [],
    },
    learnedToday: {
        day: null,
        count: 0,
    },
    fullyLearnedWords: [],
    repeatedWords: [],
    learnedWords: [],
    showTranscription: true,
    voiceEnWord: true

}

// export const asyncGetWords = createAsyncThunk('GET_ASYNC_WORDS', async function() {
//     const response = await fetch('https://english-words-api.vercel.app/')
//     const data = await response.json()
//     return data
// })
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
        addRepeatWord(state, action){
            if (action.payload.repeatsCount < Object.keys(initialState.repeat).length){
                let repeatTime = getRepeatTime(action.payload.repeatsCount, current(state))
                state.repeat[repeatTime].push(action.payload)
            } else {
                state.fullyLearnedWords.push(action.payload)
            }
        },
        deleteWordFromRepeat(state, action){
            const key = Object.keys(state.repeat)[action.payload.repeatsCount]
            state.repeat[key] = current(state).repeat[key].filter(el => el.word !== action.payload.word)
        },
        addLearnedToday(state){
            state.learnedToday.count++
        },
        setLearnedToday(state){
            state.learnedToday = {
                day: new Date().getDate(),
                count: 0
            }
        },
        setCountLearnWords(state, action){
            state.countLearnWords = action.payload
        },
        addToLearnedWords(state, action){
            const wordObj = {word: action.payload.word, category: action.payload.category}
            state.learnedWords.push(wordObj)
            
        },
        addToRepeatedWords(state, action){
            const wordObj = {word: action.payload.word, category: action.payload.category}
            if (action.payload.repeatsCount === 0){
                state.repeatedWords.push(wordObj)
            }
        },
        changeFirstShowLang(state, action){
            state.firstShowLang = action.payload
        },
        setShowTranscription(state, action){
            state.showTranscription = action.payload
        },
        setVoiceEnWord(state, action){
            state.voiceEnWord = action.payload
        }


    },
    // extraReducers: {
    //     [asyncGetWords.fulfilled]: (state, action) => {
    //         state.words = action.payload
    //     }
    // }
})

export default learningSlice.reducer
export const {getCountLearnWords, setCountLearnWords, changeFirstShowLang,setVoiceEnWord,setShowTranscription,addToRepeatedWords, addToLearnedWords, addLearnedToday, setLearnedToday, deleteWord, deleteWordFromRepeat, addRepeatWord, addCategory, removeCategory} = learningSlice.actions