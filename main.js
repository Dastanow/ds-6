const root = document.getElementById('root')



const btnModal = document.createElement('button')
root.append(btnModal)
btnModal.textContent = 'show modal'
btnModal.style.cssText = `
background-color: red;
color: white;
font-size: 1rem;
margin: 0 auto;
margin-left: 20px;
display: block;
padding: 8px 10px;
border-radius: 5px;
border: none;
cursor: pointer;    
`
btnModal.addEventListener('mouseover', () => {
    btnModal.style.backgroundColor = 'green'
})

btnModal.addEventListener('mouseout', () => {
    btnModal.style.backgroundColor = 'red'
})

// const modal = document.createEvent('div')
const modal = document.createElement('div')
const newLocal = modal.style.cssText = `
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100vh;
background-color: grey;
display: flex;
justify-content: center;
align-items: center;
`

const modalWindow = document.createElement('div')
modalWindow.style.cssText = `
width: 700px;
height: 400px;
background-color: #fff;


position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
color: #000;

padding: 20px;
font-size: 1.5rem;

`

// modalWindow.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi recusandae sequi assumenda nobis blanditiis fugit delectus quo consequatur nulla doloremque! '
modal.append(modalWindow)

btnModal.addEventListener('click', () => {
    // console.log('clicked');
    root.append(modal)
})
const closModal = document.createElement('button')

closModal.textContent = 'x'
modalWindow.append(closModal)
closModal.style.cssText =`
position: absolute;
top: 0;
right: 0;
background-color: brown;
width: 30px;
height: 30px;color: aliceblue;
border: none;
`
closModal.addEventListener('click', () => {
    modal.remove()
})

// modal.addEventListener('click', (event) => {
//     if(event.target === modal){
//         modal.remove()
//     }
// })
const leftBtn = document.createElement('button')


leftBtn.textContent = 'ACCEPT'
modalWindow.append(leftBtn)
leftBtn.style.cssText = `
position: absolute;
bottom: 40px;
left: 40px;
background-color: brown;
width: 100px;
height: 50px;
border: none;
border-radius: 20%;
`
const raitBtn = document.createElement('button')
raitBtn.textContent = 'DECLINE'
modalWindow.append(raitBtn)
raitBtn.style.cssText = `
position: absolute;
bottom: 40px;
left: 190px;
background-color: green;
width: 100px;
height: 50px;
border: none;
border-radius: 20%;
`

const h1 = document.createElement('h1')
h1.textContent = 'Warning'
modalWindow.append(h1)
h1.style.cssText = `
position: absolute;
display: flex;
justify-content: center;
align-items: center;

`

const p = document.createElement('p')
p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi recusandae sequi assumenda nobis blanditiis fugit delectus quo consequatur nulla doloremque!'
modalWindow.append(p)
p.style.cssText = `
margin-top: 100px;

`





