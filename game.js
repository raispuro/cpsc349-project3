let totalAi = 0
let totalHuman = 0

const btn1 = document.querySelector('.button1')
const id = document.querySelector('#hidden')
const id3 = document.querySelectorAll('#hidden3')
// const idIndexPage = document.querySelector('#indexPage')
// const idGamePage = document.querySelector('#gamePage')
// const idAboutPage = document.querySelector('#aboutPage')
// const idIndexPage1 = document.querySelector('#indexPage1')
// const idGamePage1 = document.querySelector('#gamePage1')
// const idAboutPage1 = document.querySelector('#aboutPage1')
const text1 = document.querySelector('.name')
const btn6 = document.querySelector('.btn')
const pName = document.querySelector('.playername')
const id2 = document.querySelectorAll('#hidden2')
const winMess4 = document.querySelector('.winMessage4')
const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissor = document.querySelector('.scissor')
const winMess = document.querySelector('.winMessage')
const winMess1 = document.querySelector('.winMessage1')
const winMess2 = document.querySelector('.winMessage2')
const winMess3 = document.querySelector('.winMessage3')
const aiScore = document.querySelector('.ai-score')
const winImage = document.querySelectorAll('img')
const btn3 = document.querySelector('#resetButton')
const btn4 = document.querySelector('.button3')
const hideBtn = document.querySelector('#hideButton')
const btn2 = document.querySelector('.button2')

//=====================================================================


//====================== slide over
function toggleSlideover(){
  document.getElementById('slideover-container').classList.toggle('invisible');
  document.getElementById('slideover-bg').classList.toggle('opacity-0');
  document.getElementById('slideover-bg').classList.toggle('opacity-50');
  document.getElementById('slideover').classList.toggle('-translate-x-full');

}

function toggleSlideoverR(){
  document.getElementById('slideover-containerR').classList.toggle('invisible');
  document.getElementById('slideover-bgR').classList.toggle('opacity-0');
  document.getElementById('slideover-bgR').classList.toggle('opacity-50');
  document.getElementById('slideoverR').classList.toggle('translate-x-full');

}

//====================== end of slide over

// btn1.addEventListener('click', () => {
//   idIndexPage.classList.remove('hidden')
//   idAboutPage.classList.add('hidden')
//   idGamePage.classList.add('hidden')

//   hideBtn.classList.remove('hidden')
//   btn3.classList.add('hidden')

//   idIndexPage1.classList.remove('hidden')
//   idAboutPage1.classList.add('hidden')
//   idGamePage1.classList.add('hidden')

// })

//=================================================================

// btn2.addEventListener('click', () => {
//   idIndexPage.classList.add('hidden')
//   idAboutPage.classList.remove('hidden')
//   idGamePage.classList.add('hidden')

//   hideBtn.classList.remove('hidden')
//   btn3.classList.add('hidden')

//   idIndexPage1.classList.add('hidden')
//   idAboutPage1.classList.remove('hidden')
//   idGamePage1.classList.add('hidden')
// })

//==================================================================

// btn4.addEventListener('click', () => 
// {
//   idIndexPage.classList.add('hidden')
//   idAboutPage.classList.add('hidden')
//   idGamePage.classList.remove('hidden')

//   hideBtn.classList.add('hidden')
//   btn3.classList.remove('hidden')

//   idIndexPage1.classList.add('hidden')
//   idAboutPage1.classList.add('hidden')
//   idGamePage1.classList.remove('hidden')

// })



//==========================================================================
/* try to use the local storage not working
when i check the DOM look like its storing 
the date. but one pulling the date 
with localStorage.getItem() will work on it on saturday 
see if you can fix the issue



const idContinue = document.querySelector('#continue')

idContinue.addEventListener('click', () =>{

      id.classList.remove('hidden')


  
    for(let i=0; i <id2.length; i++)
    {
      id2[i].classList.remove('hidden')
    }
    for(let i=0; i <id3.length; i++)
    {
      id3[i].classList.remove('hidden')
    }
  
    text1.value = localStorage.getItem('name')
    totalAi = localStorage.getItem('ai')
    totalHuman = localStorage.getItem('human')
  

})

*/



//===========================================================================


btn3.addEventListener('click', () => 
{


  id.classList.remove('hidden')

  if((totalAi > 0) && (totalHuman > 0))
  {
    for(let i=0; i <id2.length; i++)
    {
      id2[i].classList.add('hidden')
    }
    for(let i=0; i <id3.length; i++)
    {
      id3[i].classList.add('hidden')
    }
         totalAi = 0
         totalHuman = 0
         winMess2.textContent = ""
         winMess3.textContent = ""
         winMess1.textContent = ""
  }
  winMess4.textContent = "Please Enter"
  const li1 = document.createElement('li')
  li1.textContent = "Your Name"
  winMess4.appendChild(li1)
  const li2 = document.createElement('li')
  li2.textContent = "Then Click"
  winMess4.appendChild(li2)
  const li3 = document.createElement('li')
  li3.textContent = "The Submit Button"
  winMess4.appendChild(li3)
  const li4 = document.createElement('li')
  li4.textContent = "To Start New Game"
  winMess4.appendChild(li4)


})



//====================================rock=============================


rock.addEventListener('click', () => {
  const computer = Math.floor(Math.random() * 3) + 1
  
  winImage[1].src= '/rock.png'

  if (id3[0].classList.contains('hidden')){
  for(let i=0; i <id3.length; i++)
 {
  id3[i].classList.remove('hidden')
 }}
    
  if (computer === 1) {
    totalAi += 1
    totalHuman += 1
    winMess1.textContent = ""
    winMess.textContent = 'Its a Draw'
    winMess2.textContent = totalHuman
    winMess3.textContent = totalAi
    winImage[2].src= '/rock.png'
  } else if (computer === 2) {
    totalHuman += 2
    winMess1.textContent = text1.value
    winMess.textContent = 'you win'
    winMess2.textContent = totalHuman
    winMess3.textContent = totalAi
    winImage[2].src= '/scissor.png'
  } else if (computer === 3) {
    totalAi += 2
    winMess1.textContent = ""
    winMess.textContent = 'AI wins'
    winMess2.textContent = totalHuman
    winMess3.textContent = totalAi
    winImage[2].src= '/paper.png'
  }

  localStorage.setItem('Ai', totalAi)
  localStorage.setItem('human', totalHuman)
  

})



//=========================paper===========================================


paper.addEventListener('click', () => {
  const computer = Math.floor(Math.random() * 3) + 1

  winImage[1].src= '/paper.png'

  if (id3[0].classList.contains('hidden')){
  for(let i=0; i <id3.length; i++)
  {
    id3[i].classList.remove('hidden')
  }}

  if (computer === 2) {
    totalAi += 2
    winMess1.textContent = ""
    winMess.textContent = 'Ai Wins'
    winMess2.textContent = totalHuman
    winMess3.textContent = totalAi
    winImage[2].src= '/scissor.png'
  } else if (computer === 1) {
    totalHuman += 2
    winMess1.textContent = text1.value
    winMess.textContent = 'you win'
    winMess2.textContent = totalHuman
    winMess3.textContent = totalAi
    winImage[2].src= '/rock.png'
  } else if (computer === 3) {
    totalAi += 1
    totalHuman += 1
    winMess1.textContent = ""
    winMess.textContent = 'its a Draw'
    winMess2.textContent = totalHuman
    winMess3.textContent = totalAi
    winImage[2].src= '/paper.png'
  }

   localStorage.setItem('Ai', totalAi)
   localStorage.setItem('human', totalHuman)
})


//========================================scissor============================

scissor.addEventListener('click', () => {
  const computer = Math.floor(Math.random() * 3) + 1

  winImage[1].src= '/scissor.png'

  if (id3[0].classList.contains('hidden')){
  for(let i=0; i <id3.length; i++)
  {
    id3[i].classList.remove('hidden')
  }}

  if (computer === 3) {
    totalHuman += 2
    winMess1.textContent = ""
    winMess.textContent = 'You win'
    winMess2.textContent = totalHuman
    winMess3.textContent = totalAi
    winImage[2].src= '/paper.png'
  } else if (computer === 2) {
    totalHuman += 1
    totalAi += 1
    winMess.textContent = 'Its a Draw'
    winMess1.textContent = text1.value
    winMess2.textContent = totalHuman
    winMess3.textContent = totalAi
    winImage[2].src= '/scissor.png'
  } else if (computer === 1) {
    totalAi += 2
    winMess1.textContent = ""
    winMess.textContent = 'AI wins'
    winMess2.textContent = totalHuman
    winMess3.textContent = totalAi
    winImage[2].src= '/rock.png'
  }

  localStorage.setItem('Ai', totalAi)
  localStorage.setItem('human', totalHuman)
})


//=======================================================================



const btn = document.querySelector('.button4')

function random (number) {
  return Math.floor(Math.random() * (number + 1))
}

btn.addEventListener('click', () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`
  document.body.style.backgroundColor = rndCol
})




//===========================================================================

btn6.addEventListener('click', () =>
{
 pName.innerHTML = text1.value 
 
 localStorage.setItem('name', text1.value)

 for(let i=0; i <id2.length; i++)
 {
 id2[i].classList.remove('hidden')
 }


 id.classList.add('hidden')
 winMess4.textContent = 'Please Select'
 const li1 = document.createElement('li')
 li1.textContent = "ROCK"
 winMess4.appendChild(li1)
 const li2 = document.createElement('li')
 li2.textContent = "PAPER"
 winMess4.appendChild(li2)
 const li3 = document.createElement('li')
 li3.textContent = "SCISSOR"
 winMess4.appendChild(li3)
})

