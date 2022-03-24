import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCountLearnWords } from '../../redux/learningSlice'
import { changePageAnimation } from '../../utils'

export function HelloPage3(props) {
    const dispatch = useDispatch()
    const { changePage } = props
    const [countWords, setCountWords] = useState(10)

    function changeCountWords(e) {
        setCountWords(e.target.dataset.value)
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
                    (Это можно изменить в настройках)
                </p>
                <div className='words-count'>
                    <p>
                        <label>
                            <input
                                name='wordsCount'
                                type='radio'
                                data-value='5'
                                onClick={changeCountWords}
                            />
                            <span>5 слов</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                name='wordsCount'
                                type='radio'
                                data-value='10'
                                required
                                onClick={changeCountWords}
                            />
                            <span>10 слов</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                name='wordsCount'
                                type='radio'
                                data-value='15'
                                onClick={changeCountWords}
                            />
                            <span>15 слов</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                name='wordsCount'
                                type='radio'
                                data-value='20'
                                onClick={changeCountWords}
                            />
                            <span>20 слов</span>
                        </label>
                    </p>
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
                {/* </form> */}
            </div>
        </div>
    )
}
