import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { LearningSection } from '../components/LearningSection'
import { StatisticsSection } from '../components/StatisticsSection'
import { Header } from '../layout/Header'
import { asyncGetWords } from '../redux/learningSlice'

export function Home() {
    const dispatch = useDispatch()

    useEffect(() => {
        document.body.style.background = '#edeef0'
        dispatch(asyncGetWords())
    }, [dispatch])
    return (
        <>
            <Header />
            <main>
                <div className='container'>
                    <LearningSection />
                    <StatisticsSection />
                </div>
            </main>
        </>
    )
}
