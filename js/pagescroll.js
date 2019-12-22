const sections = $('.section');
const display = $('.maincontent');
let inScroll = false;

const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();

const performTransition = sectionEq => {
  if (inScroll) return;

    inScroll = true;
    const transitionIsOver = 1000;
    const mouseInertion = 300;

    const position = sectionEq * -100;
    if (isNaN(position)) console.error("Передано неверное значение в performtransition");

    sections
    .eq(sectionEq)
    .addClass('section--active')
    .siblings()
    .removeClass('section--active');

    $('.fixed-menu__item')
    .eq(sectionEq)
    .addClass('fixed-menu__item--active')
    .siblings()
    .removeClass('fixed-menu__item--active')
  
    display.css({
      transform :`translateY(${position}%)`
    });
    setTimeout(()=> {
      inScroll = false;
    }, transitionIsOver + mouseInertion);
};

const scroller = () => {
  const activeSection = sections.filter('.section--active');
  const nextSection = activeSection.next();
  const prevSection = activeSection.prev();

  return {
    next() {
      if (nextSection.length) performTransition(nextSection.index());
    },
    prev() {
      if (prevSection.length) performTransition(prevSection.index());
    }
  }
};

$(window).on("wheel", (e) => {
  const deltaY = e.originalEvent.deltaY;

  if (deltaY > 0) {
    scroller.next()
  }
  if (deltaY < 0) {
   scroller.prev()
  }
})

$(window).on("keydown", (e) => {
  const tagName = e.target.tagName.toLowerCase();
  const userTypingInInputs = tagName === "textarea" || tagName === "input";
  const windowScroller = scroller();

  if (userTypingInInputs) return;

  switch(e.key) {
    case "ArrowDown": 
    windowScroller.next(); 
    break;
    case "ArrowUp":
      windowScroller.prev(); 
    break;

  }
})

$('[data-scroll-to]').on("click", (e) => {
  e.preventDefault();
  const $this = $(e.currentTarget);
  const target = $this.attr("data-scroll-to");
  performTransition(target);
})

if (isMobile) {
  $("body").swipe( {
    swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
      const scrollDirection = direction === "up"? "next": "prev";
      scrollToSection(scrollDirection);
    }
  });
}