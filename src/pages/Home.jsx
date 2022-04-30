import { useEffect } from 'react'
import { LearningSection } from '../components/LearningSection'
import { StatisticsSection } from '../components/StatisticsSection'

export function Home() {
    useEffect(() => {
        document.querySelector('.scroll').style.overflowY = 'scroll'
    })
    return (
        <>
            <LearningSection />
            <StatisticsSection />
        </>
    )
}
