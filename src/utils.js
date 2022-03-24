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
