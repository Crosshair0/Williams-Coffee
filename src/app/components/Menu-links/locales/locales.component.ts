import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-locales',
  templateUrl: './locales.component.html',
  styleUrls: ['./locales.component.css']
})
export class LocalesComponent {
  constructor(){

  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const screenWidth = window.innerWidth;
    let marginTop = '';

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
  }

  ngOnInit() {
    this.onResize(null);
  }

}
