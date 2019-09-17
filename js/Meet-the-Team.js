  // Class for members and their corresponding bio cards

class MemberLink {
  constructor(tabElement){
    this.tabElement = tabElement;
     
    this.tabData = this.tabElement.dataset.tab;
    
    if(this.tabData === 'all'){
      this.bios = document.querySelectorAll('.bio');
    } else {
      this.bios = document.querySelectorAll(`.bio[data-tab="${this.tabData}"]`);
    }
    this.bios = Array.from(this.bios).map(element => new BioCard(element));

    this.tabElement.addEventListener('click', () => this.selectTab());
  }

  selectTab(){

    const members = document.querySelectorAll('.member');
    
    members.forEach(element => element.classList.remove('active-member'))

    const bios = document.querySelectorAll('.bio');

    bios.forEach(element => element.style.display = 'none')
    
    this.tabElement.classList.toggle('active-member');
  
    this.bios.forEach(bio => bio.selectCard());
  }
}

class BioCard {
  constructor(bioElement){
    this.bioElement = bioElement;
  }
  selectCard(){
    this.bioElement.style.display = 'flex';
  }
}
  
let members = document.querySelectorAll('.member')
members.forEach(memberLink => new MemberLink(memberLink));



  // Toggle Menu for 500px view

const toggleMenu = () => {
    menu.classList.toggle('menu--open')
  }
  
  const menu = document.querySelector('.menu');
  
  const menuButton = document.querySelector('.menu-button');
  
  menuButton.addEventListener('click', e => {
    toggleMenu() 
  })
