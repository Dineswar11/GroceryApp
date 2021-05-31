import { animate, keyframes, style, transition, trigger } from '@angular/animations';

export let opacity=trigger('opacity',[
    transition(':enter',[
        style({ opacity:0 }),
        animate(750)
    ])
])

export let popup=trigger('popup',[
    transition(':enter',[
        style({ transform:'translateY(10px)' , opacity:0 }),
        animate(250)
    ]),
    transition(':leave',[
        style({ transform:'translateY(10px)' , opacity:0 }),
        animate(250)
    ])
])