// create random number
const getRandomNumber = (num) => {
  return Math.floor(Math.random()*num);
};

const literaryWisdom = {
  mood: ['sad', 'happy', 'angry', 'anxious'],
  advice: ['stay away from', 'obsessively read', 'try to read', 'talk to the ghost of'],
  writer: ['Thomas Ligotti', 'Mircea Cartarescu', 'Mary Shelley', 'Emily Bronte']
};

// store the message in an empty array
let personalWisdom = [];

// iterate over the object
for (let property in literaryWisdom) {
  let index = getRandomNumber(literaryWisdom[property].length);
  switch(property) {
    case 'mood':
    personalWisdom.push(`If you are feeling ${literaryWisdom[property][index]},`)
    break
  case 'advice':
    personalWisdom.push(`you should ${literaryWisdom[property][index]}`)
    break
  case 'writer':
    personalWisdom.push(`${literaryWisdom[property][index]}.`)
    break
  default:
    personalWisdom.push(`Read any book you like.`)
  }
}


const formatWisdom = wisdom => {
  const message = personalWisdom.join(' ')
  console.log (message);
  let visibleMessage = document.querySelector('p');
  visibleMessage.innerHTML = message;
};

formatWisdom(personalWisdom);
