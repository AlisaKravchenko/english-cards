import { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { RepeatCard } from '../components/RepeatCard'
import { EndRepeat } from './EndRepeat'

export function Repeat() {
    const state = useSelector((state) => state.learning)
    const repeatWords = useRef(state.repeat)
    const intervals = useRef(state.intervals)
    const coefficients = useRef(state.coefficients)

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
    for (let i = 0; i < intervals.current.length; i++) {
        repeatWords.current[i].forEach((el) => {
            if (
                Date.now() - intervals.current[i] * coefficients.current[i] >
                el.time
            ) {
                cards.push(
                    <RepeatCard
                        currentWordObj={{
                            category: el.category,
                            word: el.word,
                            time: el.time,
                            repeatsCount: +el.repeatsCount,
                        }}
                        nextCard={nextCard}
                    />
                )
            }
        })
    }

    const [currentCard, setCurrentCard] = useState(cards[0])
    return <>{currentCard ? currentCard : <EndRepeat />}</>
}
