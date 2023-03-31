const MenuControl = document.querySelector('#MenuControl');
const menuNav = document.querySelector('#menuNav');
const header = document.querySelector('#header')


const tamanho_mudança = () => {
    header.classList.toggle('tamanho_menor')
}

MenuControl.addEventListener('click', (()=>{
    if(menuNav.hasAttribute('hidden')) {
        tamanho_mudança(); //remove a class tamanho_menor do header
        console.log(header.clientHeight)
        setTimeout(()=> {
            if(header.clientHeight == '335') {
                    //clienHeight verifica o tamanho do elemento, nesse caso, se 335 for o height do header então é removido o attribute hidden de menuNav

                    menuNav.removeAttribute('hidden') //remove o attribute hidden de manuNav
                }
        },600) 
        
    } else {
        menuNav.setAttribute('hidden', 'hidden'); //adiciona o attribute hidden ao menuNav
        if(menuNav.hasAttribute('hidden')){
            tamanho_mudança(); //atribui a class tamanho_menor para header
        }
        
    }
}))



/* */

const logo_alef = document.querySelector('.logo-alef')

const alfs = [...document.querySelectorAll('.alfs')]

const alfs2 = [...document.querySelectorAll('.alfs2')]

const phrase = document.querySelector('.phrase')

function load() {

    alfs.map((el)=>{
        el.classList.add('logoAlef-center')
    })

    setTimeout(()=>{
        alfs.map((el)=>{
            el.classList.add('alfbtsYamin')
        })
    }, 1700)

    setTimeout(()=>{
        alfs.map((el, i)=>{
            if(i == 2 || i == 3) {
                el.classList.add('alfbtfi')
            }
        })
    },2800)

    setTimeout(()=>{
        alfs.map((el, i)=>{
            if(i == 3) {
                el.classList.add('alfbtlf')
                el.classList.remove('logoAlef-center')
            }
        })
    }, 3800)

    setTimeout(()=>{
        alfs2.map((el)=>{

            el.classList.add('opacityOn')

        })
    },4600)

    setTimeout(()=>{
        phrase.classList.add('fromYamintoSmola')

    },5200)





    /* */

    const me = document.querySelector('.name')



    const typeWriter = (elementText) => {
        const textArray = elementText.innerHTML.split('')
        elementText.innerHTML = ''
        setTimeout(()=>{
            textArray.map((el, i)=>{
                setTimeout(()=>
                    elementText.innerHTML += el, 90 * i)
                
            })
        },2250)

    }

    typeWriter(me)


    /* */

    const logoBlank = document.querySelector('.logoBlank')

    const typeWriterIfinity = (element, textElement)=>{
        
        const elementQuant = textElement.length
        
        textElement.map((el, i) => {
            
            setTimeout(()=>{
                element.innerText = el
            }, 750 * i)
            
        })

        setInterval(() => {
            textElement.map((el, i) => {
                
                setTimeout(()=>{
                    
                    element.innerText = el
                }, 750 * i)
            }) 
        }, elementQuant*751);
        
        
    }

    const typeWriterS = (element, infinite)=>{
        
        if(infinite == true) {
            const textArray = element.innerText.split('')
            element.innerText = ''
            typeWriterIfinity(element, textArray)
        } else if(infinite == false){
            const textElement = element.innerText.split('')
            element.innerText = ''
            

                textElement.map((el, i)=>{
                    setTimeout(()=>{
                        element.innerText = el
                    }, 800 * i)
                })
                
            
        }
        
        
    }

    typeWriterS(logoBlank, true)
    /* */

    const imgs = [...document.querySelectorAll('.imgs')]

    const textToImgs = ()=>{
        map.imgs((el) =>{
            el.addEventListener('click', (()=>{
                const information = document.createElement('div')
            }) )
        })
    }
}