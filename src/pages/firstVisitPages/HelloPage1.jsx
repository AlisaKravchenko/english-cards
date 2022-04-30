import { changePageAnimation } from '../../utils'

export function HelloPage1(props) {
    const { changePage } = props
    return (
        <div
            data-page='page'
            className='animate__animated animate__slideInLeft hellow-page1  hellow-page1 hellow-page'
        >
            <p>Учите английские слова быстро, легко и эффективно!</p>
            <p>
                Это приложение полностью бесплатное, никаких ограничений и
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
    )
}
