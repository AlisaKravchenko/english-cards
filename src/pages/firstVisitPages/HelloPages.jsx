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
                    src='https://avatars.mds.yandex.net/get-zen_doc/1654267/pub_5fae89441064d30b6c27b59c_5fae8b2a70f5da1bda11f86f/scale_1200'
                    alt=' '
                />
            </div>
            {currentPage}
        </>
    )
}
