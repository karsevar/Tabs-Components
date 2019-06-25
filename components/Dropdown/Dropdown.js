class Dropdown {
  constructor(element) {
    
    // Assign this.element to the dropdown element
    this.element = element;
    
    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector('.dropdown-button');
    
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.element.querySelector('.dropdown-content');
    
    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', this.toggleContent.bind(this));
  }

  toggleContent() {
    
    // Toggle the ".dropdown-hidden" class off and on
    this.content.classList.toggle('dropdown-hidden');
    // TweenMax.to('.dropdown-content', 6, {left: 600, 
    //                                 backgroundColor: 'red',
    //                                 padding: 20,
    //                                 borderColor: 'white',
    //                                 borderRadius: 26});

    // TweenMax.from('.dropdown-content', 6, {x:600, ease:Elastic.easeOut});
    TweenMax.staggerFrom('.dropdown-link', 0.5, {opacity:0, y:200, rotation:360, scale:2, delay: 0.5}, 0.2);
    TweenMax.to('.dropdown-content, .dropdown-link', 0.5, {opacity:0, delay:2, onComplete:complete})
    function complete() {
      alert('all done :)');
    }

  }
}

// Way did the developer use querySelectorAll() if there is only one .dropdown class in the html?
// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));
console.log(document.querySelectorAll('.dropdown'));