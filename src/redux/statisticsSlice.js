import { createSlice, current } from "@reduxjs/toolkit";

const initialState = localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')).statistics : {
    learned: {
        // '1.03.2022': 1,'2.03.2022': 2,'3.03.2022': 3,'4.03.2022': 4,'5.03.2022': 5,'6.03.2022': 6,'7.03.2022': 7,'8.03.2022': 8,'9.03.2022': 9,'10.03.2022': 10,'11.03.2022': 11,'12.03.2022': 12,'13.03.2022': 13,'14.03.2022': 14,'15.03.2022': 15,'16.03.2022': 16,'17.03.2022': 17,'18.03.2022': 18,'19.03.2022': 19,'20.03.2022': 20,'21.03.2022': 21,'22.03.2022': 22,'23.03.2022': 23,'24.03.2022': 24,'25.03.2022': 25,'26.03.2022': 26,'27.03.2022': 27,'28.03.2022': 28,'29.03.2022': 29,'30.03.2022': 30,'31.03.2022': 31,'32.03.2022': 29,'33.03.2022': 30,'34.03.2022': 31
        // '1.03.2022': 1,'2.03.2022': 2,'3.03.2022': 3,
    },
    repeated: {
        // '1.03.2022': 1,'2.03.2022': 2,'3.03.2022': 3,'4.03.2022': 4,'5.03.2022': 5,'6.03.2022': 6,'7.03.2022': 7,'8.03.2022': 8,'9.03.2022': 9,'10.03.2022': 10,'11.03.2022': 11,'12.03.2022': 12,'13.03.2022': 13,'14.03.2022': 14,'15.03.2022': 15,'16.03.2022': 16,'17.03.2022': 17,'18.03.2022': 18,'19.03.2022': 19,'20.03.2022': 20,'21.03.2022': 21,'22.03.2022': 22,'23.03.2022': 23,'24.03.2022': 24,'25.03.2022': 25,'26.03.2022': 26,'27.03.2022': 27,'28.03.2022': 28,'29.03.2022': 29,'30.03.2022': 30,'31.03.2022': 31,'32.03.2022': 29,'33.03.2022': 30,'34.03.2022': 31
        // '1.03.2022': 1,'2.03.2022': 2,'3.03.2022': 3,
    },
    fullyLearned: {
        // '1.03.2022': 1,'2.03.2022': 2,'3.03.2022': 3,'4.03.2022': 4,'5.03.2022': 5,'6.03.2022': 6,'7.03.2022': 7,'8.03.2022': 8,'9.03.2022': 9,'10.03.2022': 10,'11.03.2022': 11,'12.03.2022': 12,'13.03.2022': 13,'14.03.2022': 14,'15.03.2022': 15,'16.03.2022': 16,'17.03.2022': 17,'18.03.2022': 18,'19.03.2022': 19,'20.03.2022': 20,'21.03.2022': 21,'22.03.2022': 22,'23.03.2022': 23,'24.03.2022': 24,'25.03.2022': 25,'26.03.2022': 26,'27.03.2022': 27,'28.03.2022': 28,'29.03.2022': 29,'30.03.2022': 30,'31.03.2022': 31,'32.03.2022': 29,'33.03.2022': 30,'34.03.2022': 31
        // '1.03.2022': 1,'2.03.2022': 2,'3.03.2022': 3,
    }
}

const statisticsSlice = createSlice({
    name: 'statistics',
    initialState,
    reducers: {
        addToStatistics(state, action){
            const date = new Date().toLocaleDateString();
            state[action.payload] = {
                ...current(state)[action.payload],
                [date]: (current(state)[action.payload][date] || 0) + 1
            }
        },
        checkFullyLearned(state, action){
            if (action.payload.repeatsCount + 1 >= action.payload.repeatsLength){
                const date = new Date().toLocaleDateString();
                state.fullyLearned = {
                    ...current(state).fullyLearned,
                    [date]: (current(state).fullyLearned[date] || 0) + 1
                }
            }
        },
        addDayToStatictics(state){
            const date = new Date()
            const key = [('0' + date.getDate()).slice(-2),('0' + (date.getMonth() + 1)).slice(-2), date.getFullYear()].join('.')
            if ( !state.learned[key]){
                state.learned = {...state.learned, [key]: 0}
                state.repeated = {...state.repeated, [key]: 0}
                state.fullyLearned = {...state.fullyLearned, [key]: 0}
            }
        }
    }
})

export default statisticsSlice.reducer
export const {addToStatistics, checkFullyLearned, addDayToStatictics} = statisticsSlice.actions