const {randomInt} = require('crypto')
const prompts = require('prompts')

async function main(){
    while(true){
        const firstNumber = getFirstNumber();
        const secondNumber = getSecondNumber();
        const result = firstNumber*secondNumber
        let number
        while(number !== result){
            number = await getNumber(firstNumber, secondNumber);
            console.log(number);
            if(number === result){
                console.log('Vous avez trouvé la bonne reponse');
                break
            }
            else{
                console.log('Faux, ce n\'est pas la bonne reponse');
            }
        }
        const restart = await getRestart();
        if(restart === false){
            break
        }
    }
}

function getFirstNumber(){
    const number = randomInt(0, 10+1)
    return number
}
function getSecondNumber(){
    const number = randomInt(0, 10+1)
    return number
}

async function getNumber(firstNumber, secondNumber){
    const number = await prompts({
        type: 'number',
        name: 'value',
        message: `Combien fait ${firstNumber}*${secondNumber} :`
    })
    return number.value
}
async function getRestart(){
    const restart = await prompts({
        type: 'toggle',
        name: 'value',
        message: 'Can you confirm?',
        initial: true,
        active: 'yes',
        inactive: 'no'
    })
    return restart.value
}
main();