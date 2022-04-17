import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCountLearnWords } from '../../redux/learningSlice'
import { changePageAnimation } from '../../utils'

export function HelloPage3(props) {
    const dispatch = useDispatch()
    const { changePage } = props
    const [countWords, setCountWords] = useState(10)

    function changeCountWords(e) {
        setCountWords(e.target.value)
    }
    function sendCountWords() {
        dispatch(getCountLearnWords(countWords))
    }

    return (
        <div className='container'>
            <div
                data-page='page'
                className='animate__animated animate__slideInLeft hellow-page hellow-page3'
            >
                <p>
                    Сколько слов Вы хотите учить в день? <br />
                    (Это можно будет потом изменить в настройках)
                </p>
                <div className='words-count'>
                    <label>
                        <input
                            name='wordsCount'
                            type='radio'
                            value='5'
                            onChange={changeCountWords}
                        />
                        <span>5 слов</span>
                    </label>
                    <label>
                        <input
                            name='wordsCount'
                            type='radio'
                            value='10'
                            checked
                            onChange={changeCountWords}
                        />
                        <span>10 слов</span>
                    </label>
                    <label>
                        <input
                            name='wordsCount'
                            type='radio'
                            value='15'
                            onChange={changeCountWords}
                        />
                        <span>15 слов</span>
                    </label>
                    <label>
                        <input
                            name='wordsCount'
                            type='radio'
                            value='20'
                            onChange={changeCountWords}
                        />
                        <span>20 слов</span>
                    </label>
                    <label>
                        <input
                            name='wordsCount'
                            type='radio'
                            value='25'
                            onChange={changeCountWords}
                        />
                        <span>25 слов</span>
                    </label>
                </div>
                <button
                    className='btn'
                    data-page='3'
                    onClick={(e) => {
                        sendCountWords()
                        setTimeout(() => {
                            changePage(e.target.dataset.page)
                        }, 350)
                        changePageAnimation()
                    }}
                >
                    Далее
                </button>
            </div>
        </div>
    )
}
