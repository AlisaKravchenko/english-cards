import { push } from 'connected-react-router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLearnedToday } from '../redux/learningSlice'
import { addDayToStatictics } from '../redux/statisticsSlice'
import { getRepeatPhrase } from '../utils'

export function LearningSection() {
    const state = useSelector((state) => state.learning)
    const dispatch = useDispatch()
    const [repeatTime, setRepeatTime] = useState(
        'Доступно 0 слов для повторения'
    )
    useEffect(() => {
        getRepeatPhrase(state, setRepeatTime)
        if (new Date().getDate() !== state.learnedToday.day) {
            dispatch(setLearnedToday())
            dispatch(addDayToStatictics())
        }
    }, [dispatch, state])
    return (
        <>
            <div className='home'>
                <p className='name-group'>Интервальное повторение</p>
                <div className='categories'>
                    <div className='category'>
                        <table>
                            <tbody>
                                <tr>
                                    <td className='td-icon'>
                                        <span
                                            className='material-icons'
                                            id='icon-categories'
                                        >
                                            class
                                        </span>
                                    </td>
                                    <td>
                                        <button
                                            className='btn'
                                            onClick={() => {
                                                dispatch(push('/categories'))
                                            }}
                                        >
                                            Выбранных категорий:{' '}
                                            {state.categories.length}
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='category'>
                        <table>
                            <tbody>
                                <tr>
                                    <td className='td-icon'>
                                        <span
                                            className='material-icons'
                                            id='icon-add'
                                        >
                                            add_circle_outline
                                        </span>
                                    </td>
                                    <td>
                                        <button
                                            className='btn'
                                            onClick={() => {
                                                if (state.categories.length) {
                                                    dispatch(
                                                        push({
                                                            pathname:
                                                                '/learning',
                                                        })
                                                    )
                                                } else {
                                                    const popup =
                                                        document.querySelector(
                                                            '[data-type="popupCategories"]'
                                                        )
                                                    popup.style.display =
                                                        'block'
                                                }
                                            }}
                                        >
                                            Учить новые слова
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        <p className='category-desc'>
                                            Заучено сегодня:{' '}
                                            {state.learnedToday.count} из{' '}
                                            {state.countLearnWords} слов
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className='popup-wrap' data-type='popupCategories'>
                        <div className='popup-count-words'>
                            <div
                                className='popup-close'
                                onClick={() => {
                                    const popup = document.querySelector(
                                        '[data-type="popupCategories"]'
                                    )
                                    popup.style.display = 'none'
                                }}
                            >
                                <span className='material-icons'>close</span>
                            </div>
                            <p>Выберите хотя бы одну категорию!</p>
                            <button
                                className='btn'
                                onClick={() => {
                                    const popup = document.querySelector(
                                        '[data-type="popupCategories"]'
                                    )
                                    popup.style.display = 'none'
                                }}
                            >
                                Хорошо
                            </button>
                        </div>
                    </div>

                    <div className='category'>
                        <table>
                            <tbody>
                                <tr>
                                    <td className='td-icon'>
                                        <span
                                            className='material-icons'
                                            id='icon-update'
                                        >
                                            update
                                        </span>
                                    </td>
                                    <td>
                                        <button
                                            className='btn'
                                            onClick={() => {
                                                dispatch(push('/repeat'))
                                            }}
                                        >
                                            Повторить слова
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        <p className='category-desc'>
                                            {repeatTime}
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
