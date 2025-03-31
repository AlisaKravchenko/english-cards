import { useSelector } from 'react-redux'

export function Glossary() {
    const state = useSelector((state) => state)
    return (
        <>
            <div className='glossary'>
                {/* <p>
                    Важно! Лучше не смотреть повторенные и заученные слова в
                    интервалах между повторами, так как для этого и созданы сами
                    интервалы!
                </p> */}
                <div className='accordion' id='accordionPanelsStayOpenExample'>
                    {/* <div className='accordion-item'>
                        <h2
                            className='accordion-header'
                            id='panelsStayOpen-headingOne'
                        >
                            <button
                                className='accordion-button collapsed'
                                type='button'
                                data-bs-toggle='collapse'
                                data-bs-target='#panelsStayOpen-collapseOne'
                                aria-expanded='false'
                                aria-controls='panelsStayOpen-collapseOne'
                            >
                                Добавить свои слова
                            </button>
                        </h2>
                        <div
                            id='panelsStayOpen-collapseOne'
                            className='accordion-collapse collapse'
                            aria-labelledby='panelsStayOpen-headingOne'
                        >
                            <div className='accordion-body'>
                                Добавить свои слова
                            </div>
                        </div>
                    </div> */}
                    <div className='accordion-item'>
                        <h2
                            className='accordion-header'
                            id='panelsStayOpen-headingTwo'
                        >
                            <button
                                className='accordion-button collapsed'
                                type='button'
                                data-bs-toggle='collapse'
                                data-bs-target='#panelsStayOpen-collapseTwo'
                                aria-expanded='false'
                                aria-controls='panelsStayOpen-collapseTwo'
                            >
                                Заученные:
                            </button>
                        </h2>
                        <div
                            id='panelsStayOpen-collapseTwo'
                            className='accordion-collapse collapse'
                            aria-labelledby='panelsStayOpen-headingTwo'
                        >
                            <div className='accordion-body'>
                                <ul>
                                    {state.learning.learnedWords.map(
                                        (el, i) => (
                                            <li key={i}>
                                                {el.word.trim()} ({el.category})
                                            </li>
                                        )
                                    )}
                                    <li>
                                        Всего слов:{' '}
                                        {state.learning.learnedWords.length}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='accordion-item'>
                        <h2
                            className='accordion-header'
                            id='panelsStayOpen-headingThree'
                        >
                            <button
                                className='accordion-button collapsed'
                                type='button'
                                data-bs-toggle='collapse'
                                data-bs-target='#panelsStayOpen-collapseThree'
                                aria-expanded='false'
                                aria-controls='panelsStayOpen-collapseThree'
                            >
                                Повторенные хотя бы 1 раз:
                            </button>
                        </h2>
                        <div
                            id='panelsStayOpen-collapseThree'
                            className='accordion-collapse collapse'
                            aria-labelledby='panelsStayOpen-headingThree'
                        >
                            <div className='accordion-body'>
                                <ul>
                                    {state.learning.repeatedWords.map(
                                        (el, i) => (
                                            <li key={i}>
                                                {el.word.trim()} ({el.category})
                                            </li>
                                        )
                                    )}
                                    <li>
                                        Всего слов:{' '}
                                        {state.learning.repeatedWords.length}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='accordion-item'>
                        <h2
                            className='accordion-header'
                            id='panelsStayOpen-headingFour'
                        >
                            <button
                                className='accordion-button collapsed'
                                type='button'
                                data-bs-toggle='collapse'
                                data-bs-target='#panelsStayOpen-collapseFour'
                                aria-expanded='false'
                                aria-controls='panelsStayOpen-collapseFour'
                            >
                                Полностью выученные:
                            </button>
                        </h2>
                        <div
                            id='panelsStayOpen-collapseFour'
                            className='accordion-collapse collapse'
                            aria-labelledby='panelsStayOpen-headingFour'
                        >
                            <div className='accordion-body'>
                                <ul>
                                    {state.learning.fullyLearnedWords.map(
                                        (el, i) => (
                                            <li key={i}>
                                                {el.word.trim()} ({el.category})
                                            </li>
                                        )
                                    )}
                                    <li>
                                        Всего слов:{' '}
                                        {
                                            state.learning.fullyLearnedWords
                                                .length
                                        }
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
