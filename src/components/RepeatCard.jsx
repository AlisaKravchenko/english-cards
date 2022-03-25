import { push } from 'connected-react-router'
import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { API_KEY_YANDEX } from '../config'
import { Header } from '../layout/Header'
import { Preloader } from '../layout/Preloader'
import { addRepeatWord, deleteWordFromRepeat } from '../redux/learningSlice'
import { getCardWordContent } from '../utils'

export function RepeatCard(props) {
    const { currentWordObj, nextCard } = props
    const currentCategory = currentWordObj.category
    const repeatsCount = currentWordObj.repeatsCount
    const currentWord = currentWordObj.word
    const dispatch = useDispatch()
    const [countLocalLearned, setCountLocalLearned] = useState(0)
    let transcription = useRef('')
    let translate = useRef('')
    let examples = useRef([])
    const [attempts, setAttempts] = useState('3 попытки')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const utterance = new SpeechSynthesisUtterance(currentWord)
        fetch(
            `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${API_KEY_YANDEX}&lang=en-ru&text=${currentWord}`
        )
            .then((response) => response.json())
            .then((data) => {
                try {
                    transcription.current = '[' + data.def[0]['ts'] + ']'
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
                    translate.current = tr.slice(0, 1).join(', ')
                    setLoading(false)

                    utterance.lang = 'en-US'
                    utterance.rate = 1
                    speechSynthesis.speak(utterance)
                } catch (err) {
                    nextCard(true)
                }
            })
        return () => {
            speechSynthesis.cancel()
        }
    })

    return (
        <>
            <Header />
            {loading ? (
                <Preloader />
            ) : (
                <div className='container'>
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
                            attempts
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
                                            repeatsCount: repeatsCount + 1,
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
