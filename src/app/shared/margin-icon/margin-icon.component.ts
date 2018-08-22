import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-margin-icon',
  templateUrl: './margin-icon.component.html',
  styleUrls: ['./margin-icon.component.scss']
})
export class MarginIconComponent implements OnInit {
  @Input()
  iconName: string;
  
  constructor() { }

  ngOnInit() {
  }

}
