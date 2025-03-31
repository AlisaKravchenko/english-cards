import { push } from 'connected-react-router'
import { useDispatch } from 'react-redux'

export function PageNotFound(props) {
    const { path } = props
    const dispatch = useDispatch()

    return (
        <>
            <div className='container page-not-found' data-type={path}>
                <p className='number'>404</p>
                <p className='text'>Oh no! Page not found!</p>
                <button
                    className='btn'
                    onClick={() => {
                        dispatch(push(path))
                    }}
                >
                    BACK
                </button>
            </div>
        </>
    )
}
