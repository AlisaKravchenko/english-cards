import { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { EndLearning } from './EndLearning'
import { EndLearningCategories } from './EndLearningCategories'
import { LearnCard } from '../components/LearnCard'
import { checkRemainingWords, getWordsToLearn } from '../utils'
import { NewCard } from '../components/NewCard'

export function Learn() {
    const state = useSelector((state) => state.learning)
    const practiseWordsRef = useRef(
        getWordsToLearn(state, state.countLearnWords)
    )
    practiseWordsRef.current = getWordsToLearn(state, 1)
    const words = []

    const nextCard = (lastLearned) => {
        console.log(lastLearned)
        practiseWordsRef.current = getWordsToLearn(state, 1)
        const currentWordObj = {
            [Object.keys(practiseWordsRef.current)[0]]: Object.values(
                practiseWordsRef.current
            )[0],
        }
        if (words.length + 1 < state.countLearnWords) {
            if (lastLearned) {
                const card = (
                    <NewCard
                        currentWordObj={currentWordObj}
                        nextCard={nextCard}
                    />
                )
                setCurrentCard(card)
            } else {
                const card = (
                    <NewCard
                        currentWordObj={currentWordObj}
                        nextCard={nextCard}
                    />
                )
                words.push(currentWordObj)
                setCurrentCard(card)
            }
        } else {
            if (words.length + 1 === +state.countLearnWords) {
                words.push(currentWordObj)
                cards = words.map((el) => (
                    <LearnCard currentWordObj={el} nextCard={nextCard} />
                ))
            }
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
    }
    let cards = [
        <NewCard
            currentWordObj={{
                [Object.keys(practiseWordsRef.current)[0]]: Object.values(
                    practiseWordsRef.current
                )[0],
            }}
            nextCard={nextCard}
        />,
    ]

    const [currentCard, setCurrentCard] = useState(cards[0])
    console.log(currentCard)
    return (
        <>
            {currentCard && state.learnedToday.count < state.countLearnWords ? (
                currentCard
            ) : checkRemainingWords(state) ? (
                <EndLearning />
            ) : (
                <EndLearningCategories />
            )}
        </>
    )
}
