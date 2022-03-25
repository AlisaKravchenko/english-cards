import { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { EndLearning } from './EndLearning'
import { EndLearningCategories } from './EndLearningCategories'
import { LearnCard } from '../components/LearnCard'
import { getWordsToLearn } from '../utils'

export function Learn() {
    const state = useSelector((state) => state.learning)
    const practiseWordsRef = useRef(getWordsToLearn(state))

    const nextCard = (lastLearned) => {
        if (lastLearned) {
            cards.splice(0, 1)
            setCurrentCard(cards[0])
        } else {
            const el = cards[0]
            cards.splice(0, 1)
            cards.push(el)
            setCurrentCard(cards[0])
        }
    }
    const cards = []
    for (let key in practiseWordsRef.current) {
        cards.push(
            <LearnCard
                currentWordObj={{ [key]: practiseWordsRef.current[key] }}
                nextCard={nextCard}
            />
        )
    }

    const [currentCard, setCurrentCard] = useState(cards[0])
    return (
        <>
            {currentCard ? (
                currentCard
            ) : Object.keys(practiseWordsRef.current).length >=
              +state.countLearnWords ? (
                <EndLearning />
            ) : (
                <EndLearningCategories />
            )}
        </>
    )
}
