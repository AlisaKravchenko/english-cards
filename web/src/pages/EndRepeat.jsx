import { push } from 'connected-react-router'
import { useDispatch } from 'react-redux'
export function EndRepeat() {
    const dispatch = useDispatch()

    return (
        <>
            <div className='end-block learn-block'>
                <h4>Вы повторили все слова!</h4>
                <img
                    src='https://img.freepik.com/premium-photo/russian-federation-russia-vs-united-kingdom-great-britain-national-flag-from-textile-relationship-partnership-economic-two-european-countries_113767-5193.jpg'
                    alt=' '
                />
                <hr />
                <p className='repeat-info'>
                    Чтобы полностью выучить слово, его нужно повторить 7 раз.{' '}
                    <br /> Интервалы между повторениями увеличиваются от 30
                    минут до 9 месяцев.
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
