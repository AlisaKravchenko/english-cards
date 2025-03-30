import Chart from 'chart.js' 
import { DARK_THEME_BACKGROUND, LIGHT_THEME_BACKGROUND } from './constants'
import { darkStyles } from './darkTheme'

export function changePageAnimation(){
    document
        .querySelector('[data-page="page"]')
        .classList.remove('animate__slideInLeft')
    document
        .querySelector('[data-page="page"]')
        .classList.add('animate__fadeOutRight')
}

export function voiceText(voiceEnWord, text, lang){
    if (voiceEnWord){
        lang = lang ? lang : 'en-US'
        const utterance = new SpeechSynthesisUtterance(text)
        const utteranceLang = window.speechSynthesis
        const voices = utteranceLang.getVoices()
        let voice = {}
        voices.forEach(el => {
            if (el.lang === lang){
                voice = el
            }
        })
        utterance.voice = voice
	    utterance.rate = 1
	    speechSynthesis.speak(utterance) 
    }
}

export function getWordsToLearn(state, wordsCount){
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
    for (let i = 0; i < wordsCount; i++){
        randCategories.push(categories[getRandom(0, categories.length)])
    }
    // randCategories = ['A2', 'A2' ]

    randCategories.forEach((el, i) => {
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

export function getRandom(min, max) {
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
            let flag = 0
            if (state.repeat[key][0] && flag === 0){
                flag = 1
                const interval = key - Date.now() + state.repeat[key][0].time
                if (+key >= 604800000){
                    timeLearning = Math.round(interval / 604800000) + ' нед.'
                } else if (+key >= 86400000){
                    timeLearning = Math.round(interval / 86400000) + ' дн.'
                } else if (+key >= 7200000) {
                    timeLearning = Math.round(interval / 3600000) + ' ч.'
                } else{
                    timeLearning = Math.round(interval / 60000) + ' мин.'
                }
            }
                
            
        }
    }
    return timeLearning
}


export function translateInput(translateWord, attempts, firstShowLang, voiceEnWord) {
    const input = document.querySelector('[data-type="input-translate"]')
    const translateField = document.querySelector(
        '[data-type="translate-field"]'
    )
    if (input.value.toLowerCase().trim() === translateWord.toLowerCase().trim()) {
        input.style.background = '#9aeb9a' // green
        translateField.style.display = 'block'
        if (firstShowLang === 'ru-RU'){
            voiceText(voiceEnWord, translateWord)
            window.voiceTextInput = true
        }
    } else if (translateWord.split(',').includes(input.value.toLowerCase())) {
        input.style.background = '#ffc81e' // yellow
        translateField.style.display = 'block'
        if (firstShowLang === 'ru-RU'){
            voiceText(voiceEnWord, translateWord)
            window.voiceTextInput = true
        }
    } else if (input.value.toLowerCase() !== translateWord.toLowerCase()) {
        input.style.background = '#ff5422' // red
        setTimeout(() => {
            input.style.background = 'transparent'
        }, 500)
        switch (+attempts.slice(0, 1)) {
            case 3:
                attempts = attempts.slice(0, 1) - 1 + ' попытки'
                break
            case 2:
                attempts = attempts.slice(0, 1) - 1 + ' попытка'
                break
            case 1:
                attempts = attempts.slice(0, 1) - 1 + ' попытка'
                translateField.style.display = 'block'
                if (firstShowLang === 'ru-RU'){
                    voiceText(voiceEnWord, translateWord)
                    window.voiceTextInput = true
                }
                break
            default:
                break
        }
    }
    return attempts
}

export function getCardWordContent(currentCategory, currentWord, transcription, translate, examples, setAttempts, attempts, firstShowLang, random, showTranscription, voiceEnWord ){
    const synonymsCount = 2
    
    currentWord = currentWord.split(',').slice(0,synonymsCount).join(',')
    let firstShowWord = currentWord
    let translateWord = translate.current
    switch(firstShowLang){
        case 'ru-RU': 
            firstShowWord = translate.current
            translateWord = currentWord
            break
        case 'random': 
            if (random === 1){
                firstShowWord = translate.current
                translateWord = currentWord
                firstShowLang = 'ru-RU'

            } else {
                firstShowLang = 'en-US'
                voiceText(voiceEnWord, currentWord)
            }
            break
        case 'en-US': 
         if (+attempts.slice(0,1) === 0 || +attempts.slice(0,1) === 3){
            voiceText(voiceEnWord, currentWord)
         }
            
            break
        default: break
    }
    const translateLang = firstShowLang === 'ru-RU' ? 'en-US' : 'ru-RU'
    return (
        <div>
            <div className='word-mic-section'>
                <div className='div-word'>
                    <p
                        style={{
                            marginBottom: '-1.2rem',
                            color: 'grey',
                        }}
                    >
                        Oxford, {currentCategory.slice(0, 2)}
                    </p>
                    <p className='word'>{firstShowWord.split(',').slice(0, synonymsCount).join(',')}</p>
                    <p className='ts' style={{display: firstShowLang === 'en-US' && showTranscription ? 'block' : 'none'}}>{transcription.current}</p>
                </div>
                {firstShowLang === "en-US" ? <div>
                    <button
                        className='btn hear-btn'
                        onClick={() => {
                            voiceText(true, firstShowWord.split(',').slice(0, synonymsCount).join(','), firstShowLang)
                        }}
                    >
                        <span className='material-icons'>mic</span>
                    </button>
                </div> : ""}
            </div>
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
                            if (firstShowLang === 'ru-RU'){
                                voiceText(voiceEnWord, translateWord)
                            }
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
                                            translateWord,
                                            attempts,
                                            firstShowLang, 
                                            voiceEnWord
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
                        <div className='translate-word-wrap'>
                        <p className='translate-word'>
                            
                            {translateWord.split(',').splice(0, synonymsCount).join(', ')}
                            <span className='ts' style={{display: firstShowLang === 'ru-RU' && showTranscription ? 'block' : 'none'}}>{transcription.current}</span>
                            
                        </p>
                        {translateLang === "en-US" ? 
                        <button
                                className='btn hear-btn'
                                onClick={() => {
                                    voiceText(true, translateWord.split(',').slice(0, synonymsCount).join(','), translateLang)
                                }}
                            >
                                <span className='material-icons'>mic</span>
                            </button> : ""}
                        </div>
                        
                        
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
export function createLineChart(id, state, statisticsPeriod){
    let labels = Array.from(
        new Set([
            ...Object.keys(state.learned),
            ...Object.keys(state.repeated),
            ...Object.keys(state.fullyLearned),
        ])
    )
    switch(statisticsPeriod){
        case 7: 
            labels = changeLengthLabels(labels, 7)
            break
        case 30:
            labels = changeLengthLabels(labels, 30)
            break
        default: break
    }
    let learnedData = Object.values(state.learned)
    let repeatedData = Object.values(state.repeated)
    let fullyLearnedData = Object.values(state.fullyLearned)
    learnedData = changeLengthData(learnedData, labels)
    repeatedData = changeLengthData(repeatedData, labels)
    fullyLearnedData = changeLengthData(fullyLearnedData, labels)
    const ctx = document.getElementById('statisticsChart').getContext('2d')
    new Chart(ctx, {
        type: 'line',
        data: {
            labels,
            datasets: [
                {
                    label: 'Заучено новых слов',
                    data: learnedData,
                    backgroundColor: 'rgb(255,234,10,0.2)',
                    borderColor: 'rgb(255,234,10,1)',
                    borderWidth: 1,
                },
                {
                    label: 'Повторено раз',
                    data: repeatedData,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                },
                {
                    label: 'Полностью выучено',
                    data: fullyLearnedData,
                    backgroundColor: 'rgb(154,235,154,0.2)',
                    borderColor: 'rgb(154,235,154,1)',
                    borderWidth: 1,
                },
            ],
        },
        options: {
            reverse: true,
            responsive: true,
            // maintainAspectRatio: false,
            scales: {
                yAxes: [
                    {
                        
                        ticks: {
                            stepSize: 5,
                            min: 0,
                            max: getMaxYChart([...learnedData, ...repeatedData,...fullyLearnedData]),
                        },
                        beginAtZero: true,
                    },
                ],
                xAxes: {
                    reverse: true,
                }
            },
                
        },
    })
    return {
        currentPeriod: statisticsPeriod,
        totalLearned: learnedData.reduce((total, item) => total + +item, 0),
        totalRepeated: repeatedData.reduce((total, item) => total + +item, 0),
        totalFullyLearned: fullyLearnedData.reduce((total, item) => total + +item, 0)
    }
}


function changeLengthData(data, labels){
    if (data.length > labels.length){
        data = data.slice(-labels.length)
    }
    if (data.length < labels.length){
        const length = data.length
        for (let i = 0; i < labels.length - length ; i++){
            data.unshift(0)
        }
    }
    return data
}
function getMaxYChart(data){
    let max = 0
    data.forEach(el => {
        if (el > max){
            max = el
        }
    })
    max = Math.ceil(max/5)*5 + 5;
    return max > 50 ? max : 50
}

function changeLengthLabels(labels, length){
    if (labels.length < length && labels.length){
        const arr = labels[0].split('.')
        const lastDate = new Date(arr[2], arr[1], arr[0])
        lastDate.setDate(lastDate.getDate())
        const labelsLength = labels.length
        for (let i = 1; i < length - labelsLength + 1; i++){
            const date = new Date(lastDate)
            date.setDate(date.getDate() - i)
            labels.unshift(`${('0' + date.getDate()).slice(-2)}.${('0' + date.getMonth()).slice(-2)}.${date.getFullYear()}`)
        }
    } else {
        labels = labels.slice(-length)
    }
    return labels
}

export function changeTheme(theme){
    if (theme === 'dark') {
        const style = document.createElement('style')
        document.head.appendChild(style)
        style.innerHTML = darkStyles
        style.dataset.type = 'style-theme'
    } else {
        const style = document.querySelector('[data-type="style-theme"]')
        if (style) {
            style.innerHTML = ''
            style.remove()
        }
    }
    document.body.style.background =
        theme === 'dark' ? DARK_THEME_BACKGROUND : LIGHT_THEME_BACKGROUND
}
export function getStatisticsBtnStyle(statisticsPeriod, value, state){
    return {
        background:
            statisticsPeriod === value
                ? state.home.theme === 'dark' ? '#bab7b2' : 'white'
                : 'transparent',
        color:
            statisticsPeriod === value &&
            state.home.theme === 'dark'
                ? 'black'
                : 'inherit',
    }
}

export function checkRemainingWords(state){
    const categories = state.categories
    let flag = 0
    categories.forEach((key) => {
        if (state.words[key].length){
            flag++
        }
    })
    return flag === 0 ? false : true
}

export function getChartHeight(){
    const scrollWidth = Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.body.clientWidth,
        document.documentElement.clientWidth
    )
    let chartHeight = 200
    if (scrollWidth <= 200){
        chartHeight = 600
    } else if (scrollWidth <= 300){
        chartHeight = 500
    } else if (scrollWidth <= 400) {
        chartHeight = 400
    } else if (scrollWidth <= 500) {
        chartHeight = 350
    } else if (scrollWidth <= 600) {
        chartHeight = 300
    }
    return chartHeight
}
