import { push } from 'connected-react-router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Header } from '../layout/Header'
import { asyncGetWords, setLearnedToday } from '../redux/learningSlice'
import { getRepeatPhrase } from '../utils'

export function Home() {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const [repeatTime, setRepeatTime] = useState(
        'Доступно 0 слов для повторения'
    )

    useEffect(() => {
        document.body.style.background = '#edeef0'
        dispatch(asyncGetWords())
        getRepeatPhrase(state.learning, setRepeatTime)
        if (new Date().getDate() !== state.learning.learnedToday.day) {
            dispatch(setLearnedToday())
        }
    }, [dispatch])
    return (
        <>
            <Header />
            <div className='container home'>
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
                                            {state.learning.categories.length}
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
                                                if (
                                                    state.learning.categories
                                                        .length
                                                ) {
                                                    dispatch(
                                                        push({
                                                            pathname:
                                                                '/learning',
                                                            state: 'state',
                                                        })
                                                    )
                                                } else {
                                                    alert(
                                                        'Выберите хотя бы одну категорию!'
                                                    )
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
                                            {state.learning.learnedToday.count}{' '}
                                            из {state.learning.countLearnWords}{' '}
                                            слов
                                        </p>
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

                {/* <p className='name-group'>Статистика</p>
                <div className='categories'>
                    <div className='category'></div>
                    <div className='category'></div>
                    <div className='category'></div>
                </div> */}
            </div>
        </>
    )
}
