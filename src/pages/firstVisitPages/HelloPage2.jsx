import { changePageAnimation } from '../../utils'

export function HelloPage2(props) {
    const { changePage } = props
    return (
        <div className='container'>
            <div
                data-page='page'
                className='hellow-page2 hellow-page animate__animated animate__slideInLeft'
            >
                <p>
                    Каждое слово имеет свою карточку с транскрипцией и
                    переводом:
                </p>
                <div className='card'>
                    <div className='front'>
                        Example <br />
                        [iɡˈzampəl]
                    </div>
                    <div className='back'>Пример</div>
                </div>
                <p className='card-description'>(Наведите на карточку)</p>
                <button
                    className='btn'
                    data-page='2'
                    onClick={(e) => {
                        setTimeout(() => {
                            changePage(e.target.dataset.page)
                        }, 350)
                        changePageAnimation()
                    }}
                >
                    Далее
                </button>
            </div>
        </div>
    )
}
