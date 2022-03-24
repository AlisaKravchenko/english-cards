import { changePageAnimation } from '../../utils'

export function HelloPage1(props) {
    const { changePage } = props
    return (
        <div className='container'>
            <div
                data-page='page'
                className='animate__animated animate__slideInLeft hellow-page1  hellow-page1 hellow-page'
            >
                <p>Учите английские слова быстро, легко и просто!</p>
                <p>
                    Уделяя всего лишь по 10 минут в день, можно легко выучить
                    несколько тысяч английских слов!
                </p>
                <p>
                    Это приложение полностью беслпатное, никаких ограничений и
                    подписок!
                </p>
                <button
                    className='btn'
                    data-page='1'
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
