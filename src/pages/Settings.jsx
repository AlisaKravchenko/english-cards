import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { stateChangeTheme } from '../redux/homeSlice'
import {
    changeFirstShowLang,
    setShowTranscription,
    setCountLearnWords,
    setVoiceEnWord,
} from '../redux/learningSlice'
export function Settings() {
    const state = useSelector((state) => state)
    const [countWords, setCountWords] = useState(state.learning.countLearnWords)
    const [firstShowLang, setFirstShowLang] = useState(
        state.learning.firstShowLang
    )
    const dispatch = useDispatch()

    useEffect(() => {
        document.querySelector('[data-type="switch-ts"] input').checked =
            state.learning.showTranscription

        document.querySelector(
            '[data-type="switch-voiceEnWord"] input'
        ).checked = state.learning.voiceEnWord

        document.querySelector('[data-type="switch-theme"] input').checked =
            state.home.theme === 'light' ? false : true
        //eslint-disable-next-line
    }, [])

    function getFirstShowLang() {
        let phrase = ''
        switch (state.learning.firstShowLang) {
            case 'en-US':
                phrase = 'Только английский'
                break
            case 'ru':
                phrase = 'Только русский'
                break
            case 'random':
                phrase = 'Случайно'
                break
            default:
                break
        }
        return phrase
    }
    return (
        <>
            <div className='settings'>
                <div className='categories'>
                    <p className='name-group'>ВНЕШНИЙ ВИД</p>
                    <div className='category'>
                        <p className='switch-p'>Темная тема</p>
                        <div className='switch' data-type='switch-theme'>
                            <label>
                                <input
                                    type='checkbox'
                                    onChange={(e) => {
                                        const theme = e.target.checked
                                            ? 'dark'
                                            : 'light'
                                        dispatch(stateChangeTheme(theme))
                                    }}
                                />
                                <span className='lever'></span>
                            </label>
                        </div>
                    </div>
                    <p className='name-group'>ИЗУЧЕНИЕ СЛОВ</p>
                    <div className='category'>
                        <p>
                            На каком языке показывать сначала новое слово при
                            заучивании и повторении
                        </p>
                        <button
                            onClick={() => {
                                const popup = document.querySelector(
                                    '[data-type="popupFirstShowLang"]'
                                )
                                popup.style.display = 'block'
                            }}
                        >
                            <span style={{ fontSize: '1.1rem' }}>
                                {getFirstShowLang()}
                            </span>
                            <span className='material-icons edit-icon'>
                                edit
                            </span>
                        </button>
                        <hr />

                        <p className='switch-p'>Показывать транскрипцию</p>
                        <div className='switch' data-type='switch-ts'>
                            <label>
                                <input
                                    type='checkbox'
                                    onChange={(e) => {
                                        dispatch(
                                            setShowTranscription(
                                                e.target.checked
                                            )
                                        )
                                    }}
                                />
                                <span className='lever'></span>
                            </label>
                        </div>
                        <hr />

                        <p>Ежедневная цель (запонить новых слов)</p>
                        <button
                            className='edit-button'
                            onClick={() => {
                                const popup = document.querySelector(
                                    '[data-type="popupCountWords"]'
                                )
                                popup.style.display = 'block'
                            }}
                        >
                            <span>{state.learning.countLearnWords}</span>
                            <span className='material-icons edit-icon'>
                                edit
                            </span>
                        </button>
                    </div>
                    <div className='popup-wrap' data-type='popupFirstShowLang'>
                        <div className='popup-count-words'>
                            <div
                                className='popup-close'
                                onClick={() => {
                                    const popup = document.querySelector(
                                        '[data-type="popupFirstShowLang"]'
                                    )
                                    popup.style.display = 'none'
                                }}
                            >
                                <span className='material-icons'>close</span>
                            </div>
                            <select
                                defaultValue='Выберите язык'
                                onChange={(e) => {
                                    setFirstShowLang(e.target.value)
                                }}
                                className='form-select'
                                aria-label='Default select example'
                            >
                                <option disabled>Выберите язык</option>
                                <option value='ru'>Только русский</option>
                                <option value='en-US'>Только английский</option>
                                <option value='random'>Случайно</option>
                            </select>
                            <button
                                className='btn'
                                onClick={() => {
                                    const popup = document.querySelector(
                                        '[data-type="popupFirstShowLang"]'
                                    )
                                    popup.style.display = 'none'
                                    dispatch(changeFirstShowLang(firstShowLang))
                                }}
                            >
                                Готово
                            </button>
                        </div>
                    </div>
                    <div className='popup-wrap' data-type='popupCountWords'>
                        <div className='popup-count-words'>
                            <div
                                className='popup-close'
                                onClick={() => {
                                    const popup = document.querySelector(
                                        '[data-type="popupCountWords"]'
                                    )
                                    popup.style.display = 'none'
                                }}
                            >
                                <span className='material-icons'>close</span>
                            </div>
                            <select
                                defaultValue='Выберите количество слов в день'
                                onChange={(e) => {
                                    setCountWords(e.target.value)
                                }}
                                className='form-select'
                                aria-label='Default select example'
                            >
                                <option disabled>
                                    Выберите количество слов в день
                                </option>
                                <option value='5'>5</option>
                                <option value='7'>7</option>
                                <option value='10'>10</option>
                                <option value='15'>15</option>
                                <option value='20'>20</option>
                                <option value='25'>25</option>
                                <option value='30'>30</option>
                                <option value='40'>40</option>
                                <option value='50'>50</option>
                                <option value='60'>60</option>
                                <option value='70'>70</option>
                                <option value='80'>80</option>
                                <option value='90'>90</option>
                                <option value='100'>100</option>
                                {/* <option value='much'>&#8734;</option> */}
                            </select>
                            <button
                                className='btn'
                                onClick={() => {
                                    const popup = document.querySelector(
                                        '[data-type="popupCountWords"]'
                                    )
                                    popup.style.display = 'none'
                                    dispatch(setCountLearnWords(countWords))
                                }}
                            >
                                Готово
                            </button>
                        </div>
                    </div>

                    <p className='name-group'>ПРОИЗНОШЕНИЕ</p>
                    <div className='category'>
                        <p className='switch-p'>
                            Озвучивать английское слово при показе
                        </p>
                        <div className='switch' data-type='switch-voiceEnWord'>
                            <label>
                                <input
                                    type='checkbox'
                                    onChange={(e) => {
                                        dispatch(
                                            setVoiceEnWord(e.target.checked)
                                        )
                                    }}
                                />
                                <span className='lever'></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
