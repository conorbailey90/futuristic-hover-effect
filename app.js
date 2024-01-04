const hoverDiv = document.querySelector('.hover__div');
const menu = document.querySelector('.menu');
const links = [...document.querySelectorAll('li')];
console.log(links)

const randomLetters = 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('');

menu.addEventListener('mouseenter', () => {
    hoverDiv.classList.add('active');
})

menu.addEventListener('mouseleave', () => {
    hoverDiv.classList.remove('active');
})

class Link{
    constructor(el, idx){
        this.el = el;
        this.idx = idx;
        this.originalText = el.innerText;
        this.randomString = this.el.innerText.split('');
        this.frame = 0;
        this.addHoverEvent()
    }

    addHoverEvent(){
        this.el.addEventListener('mouseenter', () => {
            hoverDiv.style.transform = `translateX(${this.idx * 100}%)`
            this.animate();
        })

        this.el.addEventListener('mouseleave', () => {
            this.frame = 0;
            setTimeout(() => {
                this.frame = 0
            }, 1000)
        })
    }

    animate(){
        if(this.frame < 30){
            if(this.frame % 3 == 0){
                for(let i = 0; i < this.randomString.length; i++){
                    this.randomString[i] = randomLetters[Math.floor(Math.random() * randomLetters.length)];
                }
                this.el.innerText = this.randomString.join('');
            }
            this.frame++
            requestAnimationFrame(this.animate.bind(this))
        }else{
            this.el.innerText = this.originalText;
        }
    }
}

links.forEach((link, idx) => {
    new Link(link, idx)
})

