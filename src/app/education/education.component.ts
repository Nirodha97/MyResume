import { Component, OnInit } from '@angular/core';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  animations:[
    trigger('fade',[
      transition('void => *',[
        style({opacity:0}),
        animate(4000)
      ])
    ]),

    trigger('load1',[
      transition('void => *',[
        animate('1s ease-in', keyframes([
          style({opacity:0,transform:'translateY(-55px)',offset:0}),
          style({opacity:0.5,transform:'translateY(35px)',offset:0.3}),
          style({opacity:1,transform:'translateY(0)',offset:1})
        ]))
      ])
    ]),

    trigger('load2',[
      transition('void => *',[
        animate('1.5s ease-in', keyframes([
          style({opacity:0,transform:'translateY(-55px)',offset:0}),
          style({opacity:0.5,transform:'translateY(35px)',offset:0.3}),
          style({opacity:1,transform:'translateY(0)',offset:1})
        ]))
      ])
    ]),

    trigger('bumpIn',[
      transition('void => *',[
        style({transform:'scale(0.5)',opacity:0}),
        animate('1s cubic-bezier(.8, -0.6,0.2,1.5)',
        style({transform: 'scale(1)',opacity:1})),
      ])
    ]),


  ]
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
