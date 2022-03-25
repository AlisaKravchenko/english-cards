export function changePageAnimation(){
    document
        .querySelector('[data-page="page"]')
        .classList.remove('animate__slideInLeft')
    document
        .querySelector('[data-page="page"]')
        .classList.add('animate__fadeOutRight')
}

export function voiceText(text){
    const utterance = new SpeechSynthesisUtterance(text)
	utterance.lang = 'en-US'
	utterance.rate = 1
	speechSynthesis.speak(utterance)
    setTimeout(() => {
        speechSynthesis.cancel()
    }, 100)
}

export function getWordsToLearn(state){
    const categories = state.categories

    let  wordsWithCategories = {}
    categories.forEach((el) => {
        wordsWithCategories[el] = state.words[el]
    })
    // wordsWithCategories = {
    //     A1: ['word'],
    //     A2: ['learn']
    // }

    let randWords = {}

    let randCategories = []
    for (let i = 0; i < state.countLearnWords; i++){
        randCategories.push(categories[getRandom(0, categories.length)])
    }
    // randCategories = ['A2', 'A2' ]

    randCategories.forEach((el, i) => {
        // console.log(wordsWithCategories);
            const word = wordsWithCategories[el][getRandom(0, wordsWithCategories[el].length)] || ''
            wordsWithCategories[el] = wordsWithCategories[el].filter(el => el !== word)
            if (word) {
                randWords[el + '_' + i] = word
            } else {
                Object.keys(wordsWithCategories).forEach(key => {
                    if (wordsWithCategories[key].length){
                        randWords[key + '_' + i] = wordsWithCategories[key][0]   
                    }
                })
            }
    })
    for (let key in randWords){
        for (let key2 in randWords){
            if (randWords[key] === randWords[key2] && key !== key2){
                delete randWords[key]
            }
        }
    }
    return randWords
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export function getRepeatTime(repeatsCount, state){
    let time = 0
    const keys = Object.keys(state.repeat)
    for (let i = 0; i < keys.length; i++){
        if (repeatsCount === i){
            time = keys[i]
        }
    }
    return time
}

export function getRepeatTimeEnding(state){
    let timeLearning = 0
    for (let key in state.repeat) {
        if (state.repeat[key].length) {
            if (+key >= 7200000) {
                timeLearning = Math.floor(key / 3600000) + ' час(ов/а)'
            } else if (+key >= 3600000) {
                timeLearning = '1 час'
            } else if (+key >= 300000) {
                timeLearning = Math.floor(key / 60000) + ' минут(ы)'
            } else {
                timeLearning = 'несколько минут'
            }
        }
    }
    return timeLearning
}

export function translateInput(translate, attempts) {
    const input = document.querySelector('[data-type="input-translate"]')
    const translateField = document.querySelector(
        '[data-type="translate-field"]'
    )
    console.log('a')
    if (input.value.trim() === translate.current.trim()) {
        input.style.background = '#9aeb9a' // green
        translateField.style.display = 'block'
    } else if (translate.current.split(',').includes(input.value)) {
        input.style.background = '#ffc81e' // yellow
        translateField.style.display = 'block'
    } else if (input.value !== translate.current) {
        input.style.background = '#ff5422' // red
        setTimeout(() => {
            input.style.background = 'transparent'
        }, 500)
        switch (+attempts.slice(0, 1)) {
            case 3:
                attempts = attempts.slice(0, 1) - 1 + ' попытки'
                break
            case 2:
                attempts = attempts.slice(0, 1) - 1 + ' попытки'
                break
            case 1:
                attempts = attempts.slice(0, 1) - 1 + ' попытка'
                translateField.style.display = 'block'
                break
            default:
                break
        }
    }
    return attempts
}

export function getCardWordContent(currentCategory, currentWord, transcription, translate, examples, setAttempts, attempts){
    return (
        <div>
            <p
                style={{
                    marginBottom: '-1rem',
                    color: 'grey',
                }}
            >
                Oxford, {currentCategory.slice(0, 2)}
            </p>
            <h3>{currentWord}</h3>
            <button
                className='btn hear-btn'
                onClick={() => {
                    voiceText(currentWord)
                }}
            >
                <span className='material-icons'>mic</span>
            </button>
            <p className='ts'>{transcription.current}</p>
            <div className='repeat-sections'>
                <div
                    className='repeat-buttons'
                    data-type='repeat-buttons'
                >
                    <button
                        className='repeat-btn btn'
                        onClick={(e) => {
                            document.querySelector(
                                '[data-type="repeat-buttons"]'
                            ).style.display = 'none'
                            document.querySelector(
                                '[data-type="input-field"]'
                            ).style.display = 'none'
                            document.querySelector(
                                '[data-type="translate-field"]'
                            ).style.display = 'block'
                        }}
                    >
                        <span className='material-icons'>
                            visibility
                        </span>
                    </button>
                    <button
                        className='repeat-btn btn'
                        onClick={(e) => {
                            document.querySelector(
                                '[data-type="repeat-buttons"]'
                            ).style.display = 'none'
                            document.querySelector(
                                '[data-type="input-field"]'
                            ).style.display = 'block'
                            document.querySelector(
                                '[data-type="translate-field"]'
                            ).style.display = 'none'
                        }}
                    >
                        <span className='material-icons'>
                            keyboard
                        </span>
                    </button>
                </div>
                <div>
                    <div
                        className='repeat-section'
                        data-type='input-field'
                    >
                        <div>
                            <input
                                type='text'
                                placeholder='Введите перевод слова'
                                data-type='input-translate'
                            />
                            <button
                                type='submit'
                                className='btn enter-done'
                                onClick={() => {
                                    setAttempts(
                                        translateInput(
                                            translate,
                                            attempts
                                        )
                                    )
                                }}
                            >
                                <span className='material-icons'>
                                    done
                                </span>
                            </button>
                            <p
                                className='label'
                                data-type='input-attempts'
                                style={{
                                    display:
                                        +attempts.slice(
                                            0,
                                            1
                                        ) > 0
                                            ? 'block'
                                            : 'none',
                                }}
                            >
                                Осталось {attempts}
                            </p>
                        </div>
                    </div>
                    <div
                        className='repeat-section'
                        data-type='translate-field'
                    >
                        <p style={{ marginBottom: '1rem' }}>
                            {translate.current}
                        </p>
                        {examples.current.length ? (
                            <ul className='examples'>
                                {examples.current.map(
                                    (el, i) => {
                                        const index =
                                            el.indexOf(
                                                currentWord.trim()
                                            )
                                        const str1 =
                                            el.slice(
                                                0,
                                                index
                                            )
                                        const str2 =
                                            el.slice(
                                                index,
                                                index +
                                                    currentWord.trim()
                                                        .length
                                            )
                                        const str3 =
                                            el.slice(
                                                index +
                                                    currentWord.trim()
                                                        .length
                                            )
                                        return el ? (
                                            <li key={i}>
                                                {i === 0 ? (
                                                    <hr />
                                                ) : null}
                                                <p>
                                                    <strong>
                                                        {
                                                            str1
                                                        }
                                                    </strong>
                                                    {str2}
                                                    <strong>
                                                        {
                                                            str3
                                                        }
                                                    </strong>
                                                </p>
                                                <hr />
                                            </li>
                                        ) : null
                                    }
                                )}
                            </ul>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export function getRepeatPhrase(state, setRepeatTime){
    let wordsCount = 0
    for (let key in state.repeat) {
        for (let i = 0; i < state.repeat[key].length; i++) {
            const el = state.repeat[key][i]
            if (Date.now() - key > el.time) {
                wordsCount++
            } else {
                setRepeatTime(
                    'Слова для повторения появятся через ' +
                        getRepeatTimeEnding(state)
                )
            }
        }
    }
    if (wordsCount) {
        setRepeatTime(`Слов для повтора: ${wordsCount}`)
    }
}
