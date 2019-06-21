class Carousel {
  constructor (carousel) {
    this.carousel = carousel
    this.leftButton = this.carousel.querySelector('.carousel .left-button')
    this.rightButton = this.carousel.querySelector('.carousel .right-button')
    this.images = this.carousel.querySelectorAll('.carousel img')
    this.currentIndex = 0

    this.images[this.currentIndex].style.display = 'inline-block'
    if (this.currentIndex > this.images.length) {
      console.log(this.currentIndex, this.images.length)
      this.currentIndex = 0
    }

    this.leftButton.addEventListener('click', () => this.previousSlide())
    this.rightButton.addEventListener('click', () => this.nextSlide())
  }

  previousSlide() {
    // subtract 1 from index
    this.currentIndex--
    if (this.currentIndex > this.images.length) {
      // console.log(this.currentIndex, this.images.length)
      this.currentIndex = 0
    }
    // change previous index to invisble
    this.images[this.currentIndex+1].style.display = 'none'
    // change style to visible
    this.images[this.currentIndex].style.display = 'inline-block'
    // add animation here, will need to configure but can't see anything atm
    // this.images[this.currentIndex].style.TweenLite.to(graph, 1.5, {
    //   ease: SlowMo.ease.config(0.5, 0.4, false),
    //   y: -500
    // })
  }

  nextSlide() {
    // add 1 to index
    this.currentIndex++
    this.images[this.currentIndex-1].style.display = 'none'
    this.images[this.currentIndex].style.display = 'inline-block'
    // this.images[this.currentIndex].style.TweenLite.to(graph, 1.5, {
    //   ease: SlowMo.ease.config(0.5, 0.4, false),
    //   y: -500
    // })
  }

  autoNext() {
    // increment index by 1 every 3 sec
    window.setTimeout(this.nextSlide(), 3000)
  }

}

let carousel = document.querySelector('.carousel');
new Carousel(carousel)
/* If You've gotten this far, you're on your own! Although we will give you some hints:
  1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
  2. You will need to grab a reference to all of the images
  3. Create a current index
  4. Those buttons are gonna need some click handlers.
  5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
  6. Have fun!
*/

// let myCarousel = document.querySelector('.carousel')
// let carousel = new Carousel(carousel)
