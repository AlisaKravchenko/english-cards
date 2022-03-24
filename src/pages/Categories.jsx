import { push } from 'connected-react-router'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Category } from '../components/Category'
import { Header } from '../layout/Header'
import { Preloader } from '../layout/Preloader'

export function Categories() {
    const [words, setWords] = useState([])
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    const categories = {
        1: 'A1',
        2: 'A2',
        3: 'B1',
        4: 'B2',
        5: 'C1',
    }

    useEffect(() => {
        fetch('https://english-words-api.vercel.app/')
            .then((response) => response.json())
            .then((data) => {
                setWords(data)
                setLoading(false)
            })
    }, [])
    return (
        <>
            <Header />
            {!loading ? (
                <div className='container'>
                    <button
                        className='btn back-btn'
                        onClick={() => {
                            dispatch(push('/home'))
                        }}
                    >
                        Назад
                    </button>
                    <div className='categories-block'>
                        <div
                            className='accordion'
                            id='accordionPanelsStayOpenExample'
                        >
                            {Object.keys(categories).map((key) => {
                                return (
                                    <Category
                                        key={key}
                                        name={categories[key]}
                                        id={key}
                                        words={words}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            ) : (
                <Preloader />
            )}
        </>
    )
}
