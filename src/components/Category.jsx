import { useDispatch, useSelector } from 'react-redux'
import { addCategory, removeCategory } from '../redux/learningSlice'

export function Category(props) {
    const { name, id, words } = props
    const state = useSelector((state) => state.learning)
    const iconStyleDisplay = state.categories.includes(name)
        ? 'inline-block'
        : 'none'
    const dispatch = useDispatch()
    return (
        <>
            <div className='accordion-item'>
                <h2
                    className='accordion-header'
                    id={`panelsStayOpen-headingOne${id}`}
                >
                    <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target={`#panelsStayOpen-collapse${id}`}
                        aria-expanded='false'
                        aria-controls={`panelsStayOpen-collapse${id}`}
                    >
                        {name}
                        <span
                            className='material-icons category-add'
                            data-type='category-icon'
                            style={{ display: iconStyleDisplay }}
                        >
                            done
                        </span>
                    </button>
                </h2>
                <div
                    id={`panelsStayOpen-collapse${id}`}
                    className='accordion-collapse collapse'
                    aria-labelledby={`panelsStayOpen-heading${id}`}
                >
                    <div className='accordion-body'>
                        <button
                            className='btn categories-select'
                            onClick={(e) => {
                                const icon = document.querySelectorAll(
                                    '[data-type="category-icon"]'
                                )[+id - 1]
                                icon.style.display = 'inline-block'
                                dispatch(addCategory(name))
                            }}
                        >
                            Добавить
                        </button>
                        <button
                            className='btn categories-select'
                            onClick={() => {
                                const icon = document.querySelectorAll(
                                    '[data-type="category-icon"]'
                                )[+id - 1]
                                icon.style.display = 'none'
                                dispatch(removeCategory(name))
                            }}
                        >
                            Удалить
                        </button>
                        <p
                            style={{
                                display: state.words[name].length
                                    ? 'none'
                                    : 'block',
                            }}
                        >
                            Вы выучили все слова из этой категории!
                        </p>
                        <hr />
                        <ul>
                            {words[name].map((el, i) => (
                                <li key={i}>{el}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
