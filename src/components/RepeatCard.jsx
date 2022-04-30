import { push } from 'connected-react-router'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_KEY_YANDEX } from '../config.js'
import { Preloader } from '../layout/Preloader'
import {
    addRepeatWord,
    addToRepeatedWords,
    deleteWordFromRepeat,
} from '../redux/learningSlice'
import { addToStatistics, checkFullyLearned } from '../redux/statisticsSlice'
import { getCardWordContent, getRandom } from '../utils'

export function RepeatCard(props) {
    const state = useSelector((state) => state.learning)
    const { currentWordObj, nextCard } = props
    const currentCategory = currentWordObj.category
    const repeatsCount = currentWordObj.repeatsCount
    const currentWord = currentWordObj.word
    const dispatch = useDispatch()
    const [countLocalLearned, setCountLocalLearned] = useState(0)
    const [attempts, setAttempts] = useState('3 попытки')
    const [loading, setLoading] = useState(true)
    const [random, setRandom] = useState(getRandom(1, 3))
    const [forgotWords, setForgotWords] = useState([])
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
                    translate.current = tr.slice(0, 2).join(', ')
                    setLoading(false)
                } catch (err) {
                    nextCard(true)
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
            // setForgotWords([])
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
                        style={{ marginBottom: '1rem' }}
                    >
                        Назад
                    </button>
                    {/* <p style={{ marginBottom: '0.3rem', marginTop: '1rem' }}>
                        Повторено {countLocalLearned} из{' '}
                        {state.learning.countLearnWords} слов
                    </p> */}
                    <div className='learn-block'>
                        <p className='repeats-count'>
                            {repeatsCount + 1}-й повтор слова
                        </p>
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
                                        deleteWordFromRepeat({
                                            word: currentWord,
                                            repeatsCount,
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
                                            repeatsCount:
                                                repeatsCount +
                                                (forgotWords.includes(
                                                    currentWord
                                                )
                                                    ? repeatsCount === 0
                                                        ? +0
                                                        : -1
                                                    : +1),
                                        })
                                    )
                                    dispatch(addToStatistics('repeated'))
                                    dispatch(
                                        checkFullyLearned({
                                            repeatsCount,
                                            repeatsLength: Object.keys(
                                                state.repeat
                                            ).length,
                                        })
                                    )
                                    setRandom(getRandom(1, 3))
                                    dispatch(
                                        addToRepeatedWords({
                                            word: currentWord,
                                            category: currentCategory.slice(
                                                0,
                                                2
                                            ),
                                            repeatsCount,
                                        })
                                    )
                                }}
                                className='btn repeat-total-btn left-btn'
                            >
                                Я вспомнил это слово
                            </button>
                            <button
                                onClick={() => {
                                    setLoading(true)
                                    nextCard(false)
                                    setAttempts('3 попытки')
                                    setRandom(getRandom(1, 3))
                                    setForgotWords([
                                        ...forgotWords,
                                        currentWord,
                                    ])
                                }}
                                className='btn repeat-total-btn right-btn'
                            >
                                Я не вспомнил это слово
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
