import { push } from 'connected-react-router'
import { useDispatch } from 'react-redux'
export function EndRepeat() {
    const dispatch = useDispatch()

    return (
        <>
            <div className='end-block learn-block'>
                <h4>Вы повторили все слова!</h4>
                <img
                    src='https://avatars.mds.yandex.net/get-zen_doc/1654267/pub_5fae89441064d30b6c27b59c_5fae8b2a70f5da1bda11f86f/scale_1200'
                    alt=' '
                />
                <hr />
                <p className='repeat-info'>
                    Чтобы полностью выучить слово, его нужно повторить 6 раз.{' '}
                    <br /> Интервалы между повторениями увеличиваются от 30
                    минут до 2 месяцев.
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
        </>
    )
}
