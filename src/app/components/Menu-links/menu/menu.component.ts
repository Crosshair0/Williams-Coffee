import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(){

  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const screenWidth = window.innerWidth;
    let marginTop = '';
    let marginBottom = '';

    if (screenWidth >= 320 && screenWidth <= 424) {
      marginTop = '15%';
      console.log(screenWidth)
    } else if (screenWidth >= 425 && screenWidth <= 767) {
      marginTop = '10%';
    } else if (screenWidth >= 768 && screenWidth <= 990) {
      marginTop = '10%';
    } else {
      marginTop = '0';
    }

    document.body.style.marginTop = marginTop;
    document.body.style.marginBottom = marginBottom;
  }

  ngOnInit() {
    this.onResize(null);
  }

}
