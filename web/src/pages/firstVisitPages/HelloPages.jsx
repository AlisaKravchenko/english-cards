import { useEffect, useState } from 'react'
import { BASE_BACKGROUND } from '../../constants'
import { HelloPage1 } from './HelloPage1'
import { HelloPage2 } from './HelloPage2'
import { HelloPage3 } from './HelloPage3'
import { HelloPage4 } from './HelloPage4'

export function HelloPages() {
    const [currentPage, setCurrentPage] = useState(
        <HelloPage1 changePage={changePage} />
    )
    const pages = [
        <HelloPage1 changePage={changePage} />,
        <HelloPage2 changePage={changePage} />,
        <HelloPage3 changePage={changePage} />,
        <HelloPage4 changePage={changePage} />,
    ]
    function changePage(pageNum) {
        setCurrentPage(pages[pageNum])
    }
    useEffect(() => {
        document.body.style.background = BASE_BACKGROUND
    }, [])
    return (
        <>
            <div className='hellow-page animate__animated animate__fadeInDown'>
                <h1>Добро пожаловать в English Cards!</h1>
                <img
                    src='https://img.freepik.com/premium-photo/russian-federation-russia-vs-united-kingdom-great-britain-national-flag-from-textile-relationship-partnership-economic-two-european-countries_113767-5193.jpg'
                    alt=' '
                />
            </div>
            {currentPage}
        </>
    )
}
