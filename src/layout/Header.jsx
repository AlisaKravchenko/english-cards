import { push } from 'connected-react-router'
import { useDispatch } from 'react-redux'

export function Header() {
    const dispatch = useDispatch()
    return (
        <>
            <div className='header'>
                <p className='logo'>English Cards</p>
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
