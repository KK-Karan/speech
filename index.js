
const synth = window.speechSynthesis
const button = document.getElementById('button');
let inputText = document.getElementById('input')
const voiceSelect = document.getElementById('dropdown');
let rate = document.getElementById('rate')

let utterance =  new SpeechSynthesisUtterance(inputText.value)

const voiceSelector =()=>{
    const voices = synth.getVoices()
    for(let i=0; i<voices.length ; i++){
    let option = document.createElement('option')
    option.text = voices[i].name;
    option.value = voices[i].lang;
    voiceSelect.appendChild(option) 
}
}
synth.addEventListener('voiceschanged' , voiceSelector)

const speak = () => {
const voices = synth.getVoices()
    if(synth.speaking){
        synth.cancel()
    }

    let selectedOption = voiceSelect.options[voiceSelect.selectedIndex]

    for(let i = 0 ; i<voices.length ; i++){
        if(voices[i].name === selectedOption.text){
            utterance.voice = voices[i]
        }
    }

    utterance.rate = rate.value
    utterance.text = inputText.value
    synth.speak(utterance)
    
}





button.addEventListener('click' , speak)

