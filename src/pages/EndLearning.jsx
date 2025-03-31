import { push } from 'connected-react-router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRepeatPhrase } from '../utils'

export function EndLearning() {
    const state = useSelector((state) => state.learning)
    const [repeatTime, setRepeatTime] = useState(
        'Доступно 0 слов для повторения'
    )

    useEffect(() => {
        getRepeatPhrase(state, setRepeatTime)
    }, [state])

    const dispatch = useDispatch()
    return (
        <>
            <div>
                <div className='end-block learn-block'>
                    <h4>Вы выполнили свою цель на сегодня!</h4>
                    <img
                        src='https://img.freepik.com/premium-photo/russian-federation-russia-vs-united-kingdom-great-britain-national-flag-from-textile-relationship-partnership-economic-two-european-countries_113767-5193.jpg'
                        alt=' '
                    />
                    <p>{repeatTime}</p>
                    <hr />
                    <p className='repeat-info'>
                        Чтобы полностью выучить слово, его нужно повторить 6
                        раз. <br /> Интервалы между повторениями увеличиваются
                        от 30 минут до 2 месяцев.
                    </p>
                    <button
                        className='btn back-btn'
                        onClick={() => {
                            dispatch(push('/home'))
                        }}
                    >
                        Вернуться назад
                    </button>
                </div>
            </div>
        </>
    )
}
