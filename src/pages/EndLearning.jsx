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
                        src='https://avatars.mds.yandex.net/get-zen_doc/1654267/pub_5fae89441064d30b6c27b59c_5fae8b2a70f5da1bda11f86f/scale_1200'
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
