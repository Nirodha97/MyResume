import { Component, OnInit } from '@angular/core';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  animations:[
    trigger('fade',[
      transition('void => *',[
        style({opacity:0}),
        animate(4000)
      ])
    ]),

    trigger('load',[
      transition('void => *',[
        animate('1s ease-in', keyframes([
          style({opacity:0,transform:'translateY(-55px)',offset:0}),
          style({opacity:0.5,transform:'translateY(35px)',offset:0.3}),
          style({opacity:1,transform:'translateY(0)',offset:1})
        ]))
      ])
    ]),

    trigger('bumpIn1',[
      transition('void => *',[
        style({transform:'scale(0.5)',opacity:0}),
        animate('0.5s cubic-bezier(.3, -0.6,0.2,0.5)',
        style({transform: 'scale(1)',opacity:1})),
      ])
    ]),

    trigger('bumpIn2',[
      transition('void => *',[
        style({transform:'scale(0.5)',opacity:0}),
        animate('0.6s cubic-bezier(.3, -0.6,0.2,0.5)',
        style({transform: 'scale(1)',opacity:1})),
      ])
    ]),

    trigger('bumpIn3',[
      transition('void => *',[
        style({transform:'scale(0.5)',opacity:0}),
        animate('0.6s cubic-bezier(.3, -0.6,0.2,0.5)',
        style({transform: 'scale(1)',opacity:1})),
      ])
    ]),

    trigger('bumpIn4',[
      transition('void => *',[
        style({transform:'scale(0.5)',opacity:0}),
        animate('0.6s cubic-bezier(.3, -0.6,0.2,0.5)',
        style({transform: 'scale(1)',opacity:1})),
      ])
    ]),

    


  ]
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
