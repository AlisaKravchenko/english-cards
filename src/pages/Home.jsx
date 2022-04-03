import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LearningSection } from '../components/LearningSection'
import { StatisticsSection } from '../components/StatisticsSection'
import { DARK_THEME_BACKGROUND, LIGHT_THEME_BACKGROUND } from '../constants'
import { asyncGetWords } from '../redux/learningSlice'

export function Home() {
    const state = useSelector((state) => state.home)
    const dispatch = useDispatch()

    useEffect(() => {
        document.body.style.background =
            state.theme === 'light'
                ? LIGHT_THEME_BACKGROUND
                : DARK_THEME_BACKGROUND
        dispatch(asyncGetWords())
    }, [dispatch, state.theme])
    return (
        <>
            <LearningSection />
            <StatisticsSection />
        </>
    )
}
