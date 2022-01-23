const burgerBlock =  document.querySelector('.burger-opened')
const burgerCross = document.querySelector('.burger-cross')
const burgerList = document.querySelector('.burger__list')
let defaults

// tabs
let tabs = document.querySelectorAll('.how-we-work__btn')
let stepBlocks = document.querySelectorAll('.step-block')
tabs[0].classList.add('active-btn')
tabs.forEach(elem=> elem.addEventListener('click', function(e){
    tabs.forEach(el=>el.classList.remove('active-btn'))
    this.classList.toggle('active-btn')
    let dpath = e.currentTarget.dataset.path
    stepBlocks.forEach(el=> {
        if(el.dataset.target===dpath) {
            if(el.classList.contains('hidden')) {
                el.classList.remove('hidden')
            }
            
        }
        else {
                el.classList.add('hidden')
        }
    })
    

}))
// search block sript
const searchOpener = document.querySelector('.nav__search-opener')
const searchBtn = document.querySelector('.nav__search-btn')
const searchForm = document.querySelector('.nav__search-form')
const searchInput = document.querySelector('.nav__search-input')
const closureLink = document.querySelector('.nav__search_closure')
closureLink.addEventListener('keyup', function(event) {
    if(event.keyCode===13) {
        if(window.outerWidth > 769) {
            searchForm.classList.remove('search-op')
            searchForm.classList.remove('trans')
            setTimeout(function() {
            searchForm.classList.remove('nav__search-form_active')
                searchForm.classList.remove('search-block')
            }, 400)
            
        } 
        else {
            
                
            searchForm.classList.remove('search-op')
            
            searchForm.classList.remove('nav__search-form_min-active')
            searchForm.classList.remove('search-block')
        }
        
        searchInput.style.display = "none"
        closureLink.style.display = "none"
        searchOpener.innerHTML = defaultSearch
        searchBtn.style.display="none"
        searchForm.style.display="none"
        
        if(window.outerWidth < 770) {
            document.querySelector('.header-container__logo_burger').style.display = 'block'
            document.querySelector('.burger').style.display = 'flex'
        }
    }
})
defaultSearch = searchBtn.innerHTML
searchOpener.addEventListener('click', function(e) {
    // searchBtn.disabled = true
    e.preventDefault()
    if(window.outerWidth > 767) {
        searchForm.style.display="flex"
        searchForm.classList.add('search-block')
        searchForm.classList.add('nav__search-form_active')
        searchBtn.style.display="block"
        setTimeout(function() {
            searchForm.classList.add('trans')

            searchForm.classList.add('search-op')
        }, 400)

    } 
    else {
        searchForm.style.display="flex"
        searchBtn.style.display="block"
        searchOpener.style.display="none"

        searchForm.classList.toggle('nav__search-form_min-active')
        setTimeout(function() {
            searchForm.classList.add('search-op')
        }, 400)
        searchForm.classList.add('search-block')
    }
    
    searchInput.style.display = "block"
    
    closureLink.style.display = "block"
    if(window.outerWidth < 768) {
        document.querySelector('.header-container__logo_burger').style.display = 'none'
        document.querySelector('.burger').style.display = 'none' 
    }
    
    searchOpener.innerHTML=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="7.56126" height="1.89031" transform="matrix(0.713342 0.700816 -0.713342 0.700816 18.6062 17.3762)" fill="#FF9900"/>
    <path d="M20.9303 10.7726C20.9303 16.1533 16.4855 20.5452 10.9652 20.5452C5.44478 20.5452 1 16.1533 1 10.7726C1 5.39198 5.44478 1 10.9652 1C16.4855 1 20.9303 5.39198 20.9303 10.7726Z" stroke="#FF9900" stroke-width="2"/>
    </svg>`
})
closureLink.addEventListener('click', function() {
    if(window.outerWidth > 769) {
        searchForm.classList.remove('search-op')
        searchForm.classList.remove('trans')
        setTimeout(function() {
        searchForm.classList.remove('nav__search-form_active')
            searchForm.classList.remove('search-block')
        }, 400)
        searchBtn.style.display="none"
        searchForm.style.display="none"
    } 
    else {
        
            
        searchForm.classList.remove('search-op')
        
        searchForm.classList.remove('nav__search-form_min-active')
        searchForm.classList.remove('search-block')
        searchBtn.style.display="none"
        searchForm.style.display="none"
        searchOpener.style.display="block"

    }
    
    
    searchInput.style.display = "none"
    closureLink.style.display = "none"
    searchOpener.innerHTML = defaultSearch
    
    if(window.outerWidth < 770) {
        document.querySelector('.header-container__logo_burger').style.display = 'block'
        document.querySelector('.burger').style.display = 'flex'

    }
   
})
// burger closure 
const burger =  document.querySelector('.burger')
burger.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        burger.classList.add('burger-active')
        setTimeout(function() {
        
        burgerBlock.classList.add('burger-opened_active')
        }, 600)
        burgerBlock.classList.add('burger-block')
    
    }
})
burgerCross.addEventListener('click', function() {
    burger.classList.remove('burger-active')
    setTimeout(function() {
        
        burgerBlock.classList.remove('burger-block')
    },600)
    burgerBlock.classList.remove('burger-opened_active')
    
})
burgerCross.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        burger.classList.remove('burger-active')
        setTimeout(function() {
            
            burgerBlock.classList.remove('burger-block')
        },600)
        burgerBlock.classList.remove('burger-opened_active')
    }
})
burger.addEventListener('click', function() {
    burger.classList.add('burger-active')
    setTimeout(function() {
        
        burgerBlock.classList.add('burger-opened_active')
    }, 600)
    burgerBlock.classList.add('burger-block')
    
})

// freq questions animation 
document.querySelector('.top-block').addEventListener('click', function() {
    this.classList.toggle('is-active')
})

// qArr.forEach(element => function() {
//     element.addEventListener('click', function() {

//     })
// })