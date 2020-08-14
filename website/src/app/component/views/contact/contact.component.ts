import { Component, OnInit } from '@angular/core';
declare var M: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    $('#textarea1').val('New Text');
    M.textareaAutoResize($('#textarea1'));
  }

}
