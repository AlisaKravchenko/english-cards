import { push } from 'connected-react-router'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_KEY_YANDEX } from '../config'
import { Header } from '../layout/Header'
import { Preloader } from '../layout/Preloader'
import { deleteWord } from '../redux/learningSlice'
import { voiceText } from '../utils'

export function LearnCard2(props) {
    const { currentWordObj, nextCard } = props
    const currentCategory = Object.keys(currentWordObj)[0]
    const currentWord = currentWordObj[currentCategory]
    const state = useSelector((state) => state)
    const dispatch = useDispatch()
    const [countLocalLearned, setCountLocalLearned] = useState(0)
    let transcription = useRef('')
    let translate = useRef('')
    let examples = useRef([])
    const [loading, setLoading] = useState(true)

    function translateInput() {
        const input = document.querySelector('[data-type="input-translate"]')
        const translateField = document.querySelector(
            '[data-type="translate-field"]'
        )
        input.style.borderRadius = '10px'
        input.style.border = 'none'
        if (input.value.trim() === translate.current.trim()) {
            input.style.background = '#9aeb9a' // green
        } else if (translate.current.split(',').includes(input.value)) {
            console.log(translate.current.split(','))
            input.style.background = '#ffc81e' // yellow
        } else if (input.value !== translate.current) {
            input.style.background = '#ff5422' // red
        }
        translateField.style.display = 'block'
    }

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
                    translate.current = tr.join(', ')
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
                <div className='container' data-word={currentWord}>
                    <button
                        className='btn back-btn'
                        onClick={() => {
                            dispatch(push('/home'))
                        }}
                    >
                        Назад
                    </button>
                    <p style={{ marginBottom: '0.3rem', marginTop: '1rem' }}>
                        Выучено {countLocalLearned} из{' '}
                        {state.learning.countLearnWords} слов
                    </p>
                    <div className='learn-block'>
                        <div>
                            <p style={{ marginBottom: '-1rem', color: 'grey' }}>
                                Oxford, {currentCategory.slice(0, 2)}
                            </p>
                            <h3>{currentWord}</h3>
                            <button
                                className='btn hear-btn'
                                onClick={() => {
                                    voiceText(currentWord)
                                }}
                            >
                                <span className='material-icons'>mic</span>
                            </button>
                            <p className='ts'>{transcription.current}</p>
                            <div className='repeat-sections'>
                                <div
                                    className='repeat-buttons'
                                    data-type='repeat-buttons'
                                >
                                    <button
                                        className='repeat-btn btn'
                                        onClick={(e) => {
                                            document.querySelector(
                                                '[data-type="repeat-buttons"]'
                                            ).style.display = 'none'
                                            document.querySelector(
                                                '[data-type="input-field"]'
                                            ).style.display = 'none'
                                            document.querySelector(
                                                '[data-type="translate-field"]'
                                            ).style.display = 'block'
                                        }}
                                    >
                                        <span className='material-icons'>
                                            visibility
                                        </span>
                                    </button>
                                    <button
                                        className='repeat-btn btn'
                                        onClick={(e) => {
                                            document.querySelector(
                                                '[data-type="repeat-buttons"]'
                                            ).style.display = 'none'
                                            document.querySelector(
                                                '[data-type="input-field"]'
                                            ).style.display = 'block'
                                            document.querySelector(
                                                '[data-type="translate-field"]'
                                            ).style.display = 'none'
                                        }}
                                    >
                                        <span className='material-icons'>
                                            keyboard
                                        </span>
                                    </button>
                                </div>
                                <div>
                                    <div
                                        className='repeat-section'
                                        data-type='input-field'
                                    >
                                        <div>
                                            <input
                                                type='text'
                                                placeholder='Введите перевод слова'
                                                data-type='input-translate'
                                            />
                                            <button
                                                type='submit'
                                                className='btn enter-done'
                                                onClick={() => translateInput()}
                                            >
                                                <span className='material-icons'>
                                                    done
                                                </span>
                                            </button>
                                            {/* <p className='label' data-type='input-attempts'>
                                                Осталось 3 попытки
                                            </p> */}
                                        </div>
                                    </div>
                                    <div
                                        className='repeat-section'
                                        data-type='translate-field'
                                    >
                                        <p style={{ marginBottom: '1rem' }}>
                                            {translate.current}
                                        </p>
                                        {examples.current.length ? (
                                            <ul className='examples'>
                                                {examples.current.map(
                                                    (el, i) => {
                                                        const index =
                                                            el.indexOf(
                                                                currentWord.trim()
                                                            )
                                                        const str1 = el.slice(
                                                            0,
                                                            index
                                                        )
                                                        const str2 = el.slice(
                                                            index,
                                                            index +
                                                                currentWord.trim()
                                                                    .length
                                                        )
                                                        const str3 = el.slice(
                                                            index +
                                                                currentWord.trim()
                                                                    .length
                                                        )
                                                        return el ? (
                                                            <li key={i}>
                                                                {i === 0 ? (
                                                                    <hr />
                                                                ) : null}
                                                                <p>
                                                                    <strong>
                                                                        {str1}
                                                                    </strong>
                                                                    {str2}
                                                                    <strong>
                                                                        {str3}
                                                                    </strong>
                                                                </p>
                                                                <hr />
                                                            </li>
                                                        ) : null
                                                    }
                                                )}
                                            </ul>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='repeat-total'>
                            <button
                                onClick={() => {
                                    setLoading(true)
                                    nextCard(true)
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
                                }}
                                className='btn repeat-total-btn left-btn'
                            >
                                Я запомнил это слово, отложить для повтора
                            </button>
                            <button
                                onClick={() => {
                                    setLoading(true)
                                    nextCard(false)
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
