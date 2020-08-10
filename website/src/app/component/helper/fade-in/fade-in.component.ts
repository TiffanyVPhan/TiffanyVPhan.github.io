import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fade-in',
  templateUrl: './fade-in.component.html',
  styleUrls: ['./fade-in.component.css']
})
export class FadeInComponent implements OnInit {
  @Input() duration: string;

  fadeClass: string[] = ['fader', 'start']

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
    setTimeout(() => {
      this.fadeClass.splice(1, 1);
    }, 100);
  }

}
