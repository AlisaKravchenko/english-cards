import { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { RepeatCard } from '../components/RepeatCard'
import { EndRepeat } from './EndRepeat'

export function Repeat() {
    const state = useSelector((state) => state.learning)
    const repeatWords = useRef(state.repeat)

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
    for (let key in repeatWords.current) {
        repeatWords.current[key].forEach((el) => {
            if (Date.now() - key > el.time) {
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
