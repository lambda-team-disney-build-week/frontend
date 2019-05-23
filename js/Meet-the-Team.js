class MemberLink {
  constructor(tabElement){
    // assign this.tabElement to the tabElement DOM reference
    this.tabElement = tabElement;
    
    // Get the `data-tab` value from this.tabElement and store it here
     
    this.tabData = this.tabElement.dataset.tab;
    // console.log(this.tabElement.dataset.tab);
    
    // Check to see if this.tabData is equal to 'all'
    if(this.tabData === 'all'){
      // If `all` is true, select all bios regardless of their data attribute values
      this.bios = document.querySelectorAll('.bio');
    } else {
      // else if `all` is false, only select the cards with matching this.tabData values
      this.bios = document.querySelectorAll(`.bio[data-tab="${this.tabData}"]`);
    }

     // Map over the newly converted NodeList we just created in our if statement above.  
    this.bios = Array.from(this.bios).map(element => new BioCard(element));

    // Add a click event that invokes this.selectTab
    this.tabElement.addEventListener('click', () => this.selectTab());
  }


  selectTab(){

    // Select all elements with the .member class on them
    const members = document.querySelectorAll('.member');
    
    // Iterate through the NodeList removing the .active-member class from each element
    members.forEach(element => element.classList.remove('active-member'))

    // Select all of the elements with the .bio class on them
    const bios = document.querySelectorAll('.bio');

    // Iterate through the NodeList setting the display style each one to 'none'
    bios.forEach(element => element.style.display = 'none')
    
    // Add a class of ".active-member" to this.tabElement
    this.tabElement.classList.toggle('active-member');
  
    
    this.bios.forEach(bio => bio.selectCard());
  }
}

class BioCard {
  constructor(cardElement){
    // Assign this.cardElement to the cardElement DOM reference
    this.cardElement = cardElement;
  }
  selectCard(){
    // Update the style of this.cardElement to display = "flex"
    this.cardElement.style.display = 'flex';
  }

}

let members = document.querySelectorAll('.member')
members.forEach(memberLink => new MemberLink(memberLink));


const toggleMenu = () => {
    menu.classList.toggle('menu--open')
  }
  
  const menu = document.querySelector('.menu');
  
  const menuButton = document.querySelector('.menu-button');
  
  menuButton.addEventListener('click', e => {
    toggleMenu() 
  })

  //text size for button
  