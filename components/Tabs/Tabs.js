// TabItem needs to be above TabLink because TabLink is calling TabItem 
// and class syntax is not hoisted.

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    // this.element;
    this.element = element;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    // const items;
    const items = document.querySelectorAll('.tabs-item');

    // Remove the class "tabs-item-selected" from each element
    items.forEach(item => item.classList.remove('tabs-item-selected'))
    
    // Add a class named "tabs-item-selected" to this element
    //this.element;
    this.element.classList.add('tabs-item-selected')
  }
}


class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    // this.element;
    this.element = element;
    
    // Get the custom data attribute on the Link
    // this.data;
    this.data = this.element.dataset.tab;
    // console.log(this.data) // returning back the proper strings (1, 2, 3, 4)
    // Using the custom data attribute get the associated Item element
    // this.itemElement;
    this.itemElement = document.querySelector(`div.tabs-item[data-tab="${this.data}"]`)
    // console.log(this.itemElement);
    
    // Using the Item element, create a new instance of the TabItem class
    // this.tabItem;
    this.tabItem = new TabItem(this.itemElement);
    // console.log(this.tabItem) // Output seems to be displaying the proper object configuration.
    
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', (event) => {
      this.tabItem.select();
    });

    this.element.addEventListener('click', this.select.bind(this));
  };

  select() {
    // Get all of the elements with the tabs-link class
    // const links;
    const links = document.querySelectorAll('.tabs-link');

    // console.log('click fired', this.itemElement); // Event listener works perfectly.

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    // Array.from(links).forEach();
    links.forEach(link => link.classList.remove('tabs-link-selected'));
    console.log(links);

    // Add a class named "tabs-link-selected" to this link
    // this.element;
    this.element.classList.add('tabs-link-selected');
    
    // Call the select method on the item associated with this link


  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

links = document.querySelectorAll('.tabs-link');

links.forEach(link => new TabLink(link));



