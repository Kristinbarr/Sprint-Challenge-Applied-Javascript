class Carousel {
  constructor (carousel) {
    // creating a copy of the carousel div to recieve cool extra functionality
    this.carousel = carousel
    // create selectors for left and right buttons (from carousel element)
    this.leftButton = this.carousel.querySelector('.left-button')
    this.rightButton = this.carousel.querySelector('.right-button')
    // select a Nodelist of the carousel images (from carousel element)
    this.images = this.carousel.querySelectorAll('img')
    // we're starting the index at 0. it will increment/decr when pic changes
    this.currentIndex = 0
    // default image set to 0th index in nodelist by making it visible
    this.images[this.currentIndex].style.display = 'inline-block'
    // event listeners set to activate methods in this class
    this.leftButton.addEventListener('click', () => this.previousSlide())
    this.rightButton.addEventListener('click', () => this.nextSlide())
    // example of explicit binding
    // this.leftButton.addEventListener('click', this.previousSlide.bind(this))
  }

  previousSlide() {
    // use current index to change current image styling to be hidden
    this.images[this.currentIndex].style.display = 'none'
    // decrement current index by 1 because we're going to the previous slide
    this.currentIndex -= 1
    // conditional if we are at the end of the list, start over
    if (this.currentIndex < 0) {
      // this.images.length-1 is more dynamic than saying '4'
      this.currentIndex = this.images.length-1
    }
    // change of image we want to show style to visible
    this.images[this.currentIndex].style.display = 'inline'

    // future animaion to be configured
    // TweenLite.to(curImg, 1.5, {
    //   ease: SlowMo.ease.config(0.5, 0.4, false),
    //   y: -500
    // })
  }

  nextSlide() {
    this.images[this.currentIndex].style.display = 'none'
    // for this method, increment the current index to go to next node/image
    this.currentIndex += 1
    if (this.currentIndex >= this.images.length) {
      this.currentIndex = 0
    }
    const curImg = this.images[this.currentIndex]
    curImg.style.display = 'inline'

    // TweenLite.to(curImg, 1.5, {
    //   ease: SlowMo.ease.config(0.5, 0.4, false),
    //   y: -500
    // })
  }

  autoNext() {
    // future method to be configured to call nextSlide() every 3 sec
    // return window.setTimeout(this.nextSlide(), 3000)
  }

}

// select the whole carousel element so we can add functionality
let carousel = document.querySelector('.carousel');
// instantiate the class constructor function and give our 'dumb' component
new Carousel(carousel)


/* If You've gotten this far, you're on your own! Although we will give you some hints:
  1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
  2. You will need to grab a reference to all of the images
  3. Create a current index
  4. Those buttons are gonna need some click handlers.
  5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
  6. Have fun!
*/
