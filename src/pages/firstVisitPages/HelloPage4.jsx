import { useDispatch } from 'react-redux'
import { finishFirstInit } from '../../redux/homeSlice'
import { asyncGetWords } from '../../redux/learningSlice'
import { changePageAnimation } from '../../utils'

export function HelloPage4(props) {
    const dispatch = useDispatch()
    return (
        <div className='container'>
            <div
                data-page='page'
                className='animate__animated animate__slideInLeft hellow-page1  hellow-page4 hellow-page'
            >
                <h3>Все готово!</h3>
                <button
                    className='btn'
                    data-page='4'
                    onClick={(e) => {
                        setTimeout(() => {
                            localStorage.setItem('first-visit', true)
                            dispatch(finishFirstInit(true))
                        }, 350)
                        changePageAnimation()
                        // dispatch(asyncGetWords())
                    }}
                >
                    Начать учить слова
                </button>
            </div>
        </div>
    )
}
