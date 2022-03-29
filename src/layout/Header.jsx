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
                        src='https://avatars.mds.yandex.net/get-zen_doc/1654267/pub_5fae89441064d30b6c27b59c_5fae8b2a70f5da1bda11f86f/scale_1200'
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
