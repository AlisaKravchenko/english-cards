import { push } from 'connected-react-router'
import { useDispatch } from 'react-redux'

export function Header() {
    const dispatch = useDispatch()
    return (
        <>
            <div className='header'>
                <div className='logo'>
                    <p>English Cards</p>
                    <img
                        // src='%PUBLIC_URL%/flags.avif'
                        src='https://img.freepik.com/premium-photo/russian-federation-russia-vs-united-kingdom-great-britain-national-flag-from-textile-relationship-partnership-economic-two-european-countries_113767-5193.jpg'
                        alt=' '
                    />
                </div>
                <div className='nav-content'>
                    <ul className='tabs tabs-transparent'>
                        <li className='tab'>
                            <button
                                className='btn'
                                onClick={() => {
                                    dispatch(push('/home'))
                                }}
                            >
                                Учить слова
                            </button>
                        </li>
                        <li className='tab'>
                            <button
                                className='btn'
                                onClick={() => {
                                    dispatch(push('/glossary'))
                                }}
                            >
                                Словарь
                            </button>
                        </li>
                        <li className='tab'>
                            <button
                                className='btn'
                                onClick={() => {
                                    dispatch(push('/settings'))
                                }}
                            >
                                Настройки
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
