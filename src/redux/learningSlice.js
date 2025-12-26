import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { allWords } from "../allWords";
import { predict } from "../AI/model";



export const changeIntervalsAsync = createAsyncThunk(
  'learning/changeIntervals',
  async ({ repeatsCount, flag, word }, { getState }) => {
    const state = getState().learning;
    const length = state.lastRepeats[repeatsCount].length
    let count = 0;
    for (let i=0;i<length;i++){
        count+=state.lastRepeats[repeatsCount][i];
    }
    let newK;
    if (!state.forgotWordsNow.includes(word) && (count/length > 0.95 || count/length < 0.8)){
        newK = await predict(state.coefficients[repeatsCount], repeatsCount, flag);
    } else {
        newK = state.coefficients[repeatsCount]
    }
    
    console.log(newK)
    return {repeatsCount, newK};
  }
);


const initialState = localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')).learning :  {
    countLearnWords: '5',
    firstShowLang: 'ru-RU',
    words: allWords,
    categories: [],
    //intervals: [1,2,3,4,5,6,7],
    coefficients: [1,1,1,1,1,1,1],
    intervals: [1800000,7200000,43200000,172800000,604800000,5259600000,23668200000],
    repeat: [
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ],
    lastRepeats: [
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ],
    forgotWordsNow: [],
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
                state.repeat[action.payload.repeatsCount].push(action.payload)
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
            let f=0;
            state.repeatedWords.forEach(el => {
                if (el.word === wordObj.word){
                    f=1;
                }
            })
            if (action.payload.repeatsCount === 0 && f===0){
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
        },
        addToLastRepeats(state, action){
            const repeat = action.payload.repeatsCount
            if (!state.forgotWordsNow.includes(action.payload.word)){
                state.lastRepeats[repeat].unshift(action.payload.flag)
                if (state.lastRepeats[repeat].length >= 99){
                    state.lastRepeats[repeat].pop()
                } 
            }
            
        },
        checkForgotWord(state, action){
            const word = action.payload.word
            const flag = action.payload.flag
            if (flag === 0){
                if (!state.forgotWordsNow.includes(word)){
                    state.forgotWordsNow.push(word)
                }
            } else {
                state.forgotWordsNow = state.forgotWordsNow.filter((el) => el !== word);
            }
        }


    },
    extraReducers: (builder) => {
        builder.addCase(changeIntervalsAsync.fulfilled, (state, action) => {
            const { repeatsCount, newK } = action.payload;
            // Тут можно обновлять coefficients или другие состояния
            state.coefficients[repeatsCount] = newK;
        });
    }
    // extraReducers: {
    //     [asyncGetWords.fulfilled]: (state, action) => {
    //         state.words = action.payload
    //     }
    // }
})

export default learningSlice.reducer
export const {checkForgotWord, addToLastRepeats, getCountLearnWords, setCountLearnWords, changeFirstShowLang,setVoiceEnWord,setShowTranscription,addToRepeatedWords, addToLearnedWords, addLearnedToday, setLearnedToday, deleteWord, deleteWordFromRepeat, addRepeatWord, addCategory, removeCategory} = learningSlice.actions