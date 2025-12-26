import { useEffect, useState } from 'react'
import {
    createLineChart,
    getChartHeight,
    getIntervalTime,
    getStatisticsBtnStyle,
    getSuccesRepeatsPercent,
} from '../utils'
import { useDispatch, useSelector } from 'react-redux'
import { setCountLearnWords } from '../redux/learningSlice'

export function StatisticsSection() {
    const state = useSelector((state) => state)
    const [statisticsPeriod, setStatisticsPeriod] = useState(7)
    const [totalWords, setTotalWords] = useState({})
    const [countWords, setCountWords] = useState(state.learning.countLearnWords)
    const dispatch = useDispatch()
    useEffect(() => {
        const total = createLineChart(
            'statisticsChart',
            state.statistics,
            statisticsPeriod
        )
        setTotalWords(total)
    }, [statisticsPeriod, state.statistics])
    return (
        <div className='home statistics'>
            <p className='name-group'>Статистика</p>
            <div className='categories'>
                <div className='category'>
                    <p className='learned-today'>
                        Заучено сегоня <br />
                    </p>
                    <p>
                        <span style={{ fontSize: '1.8rem' }}>
                            {state.learning.learnedToday.count}
                        </span>
                        <span style={{ color: 'grey', fontSize: '1.2rem' }}>
                            /{state.learning.countLearnWords}
                        </span>
                        <button
                            onClick={() => {
                                const popup = document.querySelector(
                                    '[data-type="popupCountWords"]'
                                )
                                popup.style.display = 'block'
                            }}
                        >
                            <span className='material-icons edit-icon'>
                                edit
                            </span>
                        </button>
                    </p>
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
                <div className='category'>
                    <div className='period-buttons'>
                        <ul>
                            <li>
                                <button
                                    style={getStatisticsBtnStyle(
                                        statisticsPeriod,
                                        7,
                                        state
                                    )}
                                    onClick={() => {
                                        setStatisticsPeriod(7)
                                    }}
                                >
                                    7 дней
                                </button>
                                |
                            </li>
                            <li>
                                <button
                                    style={getStatisticsBtnStyle(
                                        statisticsPeriod,
                                        30,
                                        state
                                    )}
                                    onClick={() => {
                                        setStatisticsPeriod(30)
                                    }}
                                >
                                    30 дней
                                </button>
                                |
                            </li>
                            <li>
                                <button
                                    style={getStatisticsBtnStyle(
                                        statisticsPeriod,
                                        'all',
                                        state
                                    )}
                                    onClick={() => {
                                        setStatisticsPeriod('all')
                                    }}
                                >
                                    Все время
                                </button>
                            </li>
                        </ul>
                    </div>
                    <canvas
                        id='statisticsChart'
                        height={getChartHeight()}
                    ></canvas>
                    <div className='statistics-total-words'>
                        <ul>
                            <li>
                                <b>
                                    Всего за{' '}
                                    {totalWords.currentPeriod === 'all'
                                        ? 'все время'
                                        : `${totalWords.currentPeriod} дней`}
                                    :
                                </b>
                            </li>
                            <li>
                                <b>{totalWords.totalLearned}</b> заучено
                            </li>
                            <li>
                                <b>{totalWords.totalRepeated}</b> раз(a)
                                повторено
                            </li>
                            <li>
                                <b>{totalWords.totalFullyLearned}</b> полностью
                                выучено
                            </li>
                        </ul>
                    </div>
                    <div className='statistics-total-words'>
                        <ul>
                            <li>
                                <b>Ваши интервалы:</b>
                            </li>
                            <li>
                                <b>1</b> - {getIntervalTime(state, 0)}, успешных
                                повторений: {getSuccesRepeatsPercent(state, 0)}
                            </li>
                            <li>
                                <b>2</b> - {getIntervalTime(state, 1)}, успешных
                                повторений: {getSuccesRepeatsPercent(state, 1)}
                            </li>
                            <li>
                                <b>3</b> - {getIntervalTime(state, 2)}, успешных
                                повторений: {getSuccesRepeatsPercent(state, 2)}
                            </li>
                            <li>
                                <b>4</b> - {getIntervalTime(state, 3)}, успешных
                                повторений: {getSuccesRepeatsPercent(state, 3)}
                            </li>
                            <li>
                                <b>5</b> - {getIntervalTime(state, 4)}, успешных
                                повторений: {getSuccesRepeatsPercent(state, 4)}
                            </li>
                            <li>
                                <b>6</b> - {getIntervalTime(state, 5)}, успешных
                                повторений: {getSuccesRepeatsPercent(state, 5)}
                            </li>
                            <li>
                                <b>7</b> - {getIntervalTime(state, 6)}, успешных
                                повторений: {getSuccesRepeatsPercent(state, 6)}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
