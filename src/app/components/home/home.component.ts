import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  buttons = ['All courses', 'Project Management', 'Business Management', 'Employability Skills', 'Employability Skills', 'Hr & Leadership', 'Employability Skills', 'Employability Skills', 'Hr & Leadership', 'Employability Skills'];
  startIndex = 0;
  endIndex = 4;
  visibleButtons: string[] = this.buttons.slice(this.startIndex, this.endIndex);
  isSlidingLeft = false;
  isSlidingRight = false;
  buttonLimit = 5; // Default limit for visible buttons
  isMobileView = false;

  constructor() {
    this.checkMobileView(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkMobileView(window.innerWidth);
  }

  checkMobileView(width: number) {
    this.isMobileView = width < 520;
    this.updateVisibleButtons();
  }

  prev() {
    if (this.startIndex > 0) {
      this.isSlidingLeft = true;
      this.isSlidingRight = false;

      setTimeout(() => {
        this.startIndex -= this.buttonLimit;
        this.endIndex -= this.buttonLimit;
        this.updateVisibleButtons();
        this.isSlidingLeft = false; 
      }, 500); 
    }
  }

  next() {
    if (this.endIndex < this.buttons.length) {
      this.isSlidingRight = true;
      this.isSlidingLeft = false;

      setTimeout(() => {
        this.startIndex += this.buttonLimit;
        this.endIndex += this.buttonLimit;
        this.updateVisibleButtons();
        this.isSlidingRight = false; 
      }, 500); 
    }
  }

  updateVisibleButtons() {
    this.buttonLimit = this.isMobileView ? 2 : 5; // 2 buttons for mobile view, 5 for desktop
    this.visibleButtons = this.buttons.slice(this.startIndex, this.endIndex);
  }

  isPopupVisible = false;

  openPopup(event: Event): void {
    event.preventDefault();
    this.isPopupVisible = true;
  }

  closePopup(): void {
    this.isPopupVisible = false;
  }
}








