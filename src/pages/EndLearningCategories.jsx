import { push } from 'connected-react-router'
import { useDispatch } from 'react-redux'
import { Header } from '../layout/Header'

export function EndLearningCategories() {
    const dispatch = useDispatch()
    return (
        <>
            <Header />
            <div className='container'>
                <div className='end-block learn-block'>
                    <h4>
                        Поздравляем! <br /> Вы заучили все слова из выбранных
                        вами категорий!
                    </h4>
                    <img
                        src='https://avatars.mds.yandex.net/get-zen_doc/1654267/pub_5fae89441064d30b6c27b59c_5fae8b2a70f5da1bda11f86f/scale_1200'
                        alt=' '
                    />
                    <p>
                        Выберите другие категории, чтобы выучить еще больше
                        слов!
                    </p>
                    <button
                        className='btn'
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
