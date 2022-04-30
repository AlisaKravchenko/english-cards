import { push } from 'connected-react-router'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Preloader } from '../layout/Preloader'
import {
    addLearnedToday,
    addRepeatWord,
    addToLearnedWords,
    deleteWord,
} from '../redux/learningSlice'
import { addToStatistics } from '../redux/statisticsSlice'
import { getCardWordContent, getRandom } from '../utils'

const API_KEY_YANDEX = process.env.REACT_APP_API_KEY

window.voiceTextInput = false
export function LearnCard(props) {
    const { currentWordObj, nextCard } = props
    const currentCategory = Object.keys(currentWordObj)[0]
    const currentWord = currentWordObj[currentCategory]
    const state = useSelector((state) => state.learning)
    const dispatch = useDispatch()
    const [countLocalLearned, setCountLocalLearned] = useState(0)
    const [loading, setLoading] = useState(true)
    const [attempts, setAttempts] = useState('3 попытки')
    const [random, setRandom] = useState(getRandom(1, 3))
    let transcription = useRef('')
    let translate = useRef('')
    let examples = useRef([])

    useEffect(() => {
        fetch(
            `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${API_KEY_YANDEX}&lang=en-ru&text=${currentWord}`
        )
            .then((response) => response.json())
            .then((data) => {
                try {
                    transcription.current = data.def[0]['ts']
                        ? '[' + data.def[0]['ts'] + ']'
                        : ''
                    const tr = []
                    data.def.forEach((el) => {
                        tr.push(el.tr[0].text.toString())
                    })
                    examples.current = [
                        (data.def[0].tr[0].ex &&
                            data.def[0].tr[0].ex[0] &&
                            data.def[0].tr[0].ex[0].text) ||
                            '',
                        (data.def[0].tr[0].ex &&
                            data.def[0].tr[0].ex[1] &&
                            data.def[0].tr[0].ex[1].text) ||
                            '',
                        (data.def[0].tr[0].ex &&
                            data.def[0].tr[0].ex[2] &&
                            data.def[0].tr[0].ex[2].text) ||
                            '',
                    ]
                    translate.current = tr.join(', ')
                    setLoading(false)
                } catch (err) {
                    nextCard(true)
                    console.error(err.message)
                }
            })

        return () => {
            if (!window.voiceTextInput) {
                speechSynthesis.cancel()
            }
            window.voiceTextInput = false
            // setCountLocalLearned(0)
            // setAttempts('3 попытки')
            // setLoading(true)
            // setRandom(getRandom(1, 3))
        }
    })

    return (
        <>
            {loading ? (
                <Preloader />
            ) : (
                <div>
                    <button
                        className='btn back-btn'
                        onClick={() => {
                            dispatch(push('/home'))
                        }}
                    >
                        Назад
                    </button>
                    <p style={{ marginBottom: '0.3rem', marginTop: '1rem' }}>
                        Выучено {state.learnedToday.count} из{' '}
                        {state.countLearnWords} слов
                    </p>
                    <div className='learn-block'>
                        {getCardWordContent(
                            currentCategory,
                            currentWord,
                            transcription,
                            translate,
                            examples,
                            setAttempts,
                            attempts,
                            state.firstShowLang,
                            random,
                            state.showTranscription,
                            state.voiceEnWord
                        )}

                        <div className='repeat-total'>
                            <button
                                onClick={() => {
                                    setLoading(true)
                                    nextCard(true)
                                    setAttempts('3 попытки')
                                    setCountLocalLearned(countLocalLearned + 1)
                                    dispatch(
                                        deleteWord({
                                            word: currentWord,
                                            category: currentCategory.slice(
                                                0,
                                                2
                                            ),
                                        })
                                    )
                                    dispatch(
                                        addRepeatWord({
                                            word: currentWord,
                                            category: currentCategory.slice(
                                                0,
                                                2
                                            ),
                                            time: Date.now(),
                                            repeatsCount: 0,
                                        })
                                    )
                                    dispatch(addLearnedToday())
                                    dispatch(addToStatistics('learned'))
                                    dispatch(
                                        addToLearnedWords({
                                            word: currentWord,
                                            category: currentCategory.slice(
                                                0,
                                                2
                                            ),
                                        })
                                    )
                                    setRandom(getRandom(1, 3))
                                }}
                                className='btn repeat-total-btn left-btn'
                            >
                                Я запомнил это слово, отложить для повтора
                            </button>
                            <button
                                onClick={() => {
                                    setLoading(true)
                                    nextCard(false)
                                    setAttempts('3 попытки')
                                    setRandom(getRandom(1, 3))
                                }}
                                className='btn repeat-total-btn right-btn'
                            >
                                Показывать это слово еще
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
