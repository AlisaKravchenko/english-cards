export let data = []

// const peopleCount = 10000;
const peopleCount = 10000;
const speed = 5; 
const intervalsAmount = 7; 
let people = []

function randomFromTo(a,b){
    return Math.random() * (b - a) + a
}

export function generateData(){
    for (let i=0;i<peopleCount;i++){
        let person = [randomFromTo(0.2, 2)];
        for (let j=1;j<intervalsAmount;j++){
            person[j]=Math.max(0.2, Math.min(person[j-1]*randomFromTo(0.5,1.5), 3))
        }
        people.push(person)
    }

    people.forEach(person => {
        for (let j=0;j<intervalsAmount;j++){
            let k = 1;
            const k_f = person[j];
            for (let i=0;i<speed;i++){
                const f = k > k_f ? -1 : 1
                // if (k > k_f){
                //     f = randomFromTo(0,1) >= Math.pow((Math.exp((k-k_f)/(2-1))), 3) - 1 ? 1 : -1;
                // } else {
                //     f = randomFromTo(0,1) >= 0.05 ? 1 : -1;
                // }
            
                //let delta = 0
                // if (k_f > 1){
                //     delta = Math.max(0.1, k_f - 1)/speed;
                // } else {
                //     delta = -Math.max(0.1, 1-k_f)/speed;
                // }
                const delta = (k_f - 1)/speed;
                data.push([k,j,f,k+delta])
                k += delta;
            }
        }
    })
}




