import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Typewriter from 't-writer.js'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , AfterViewInit{

  @ViewChild('tw1') typewriterElement1: ElementRef;
  @ViewChild('tw3') typewriterElement3: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    const target1 = this.typewriterElement1.nativeElement;
    const target3 = this.typewriterElement3.nativeElement;

    const writer1 = new Typewriter(target1, {
      typeColor: 'white'
    })
    const writer3 = new Typewriter(target3, {
      typeColor: 'white'
    })

    writer1
    .type('We Sell ')
    .removeCursor()
    .then(writer1.start.bind(writer3))
    .start()

    writer3
      .type("Fruits")
      .rest(500)
      .clear()
      .type("Vegetables")
      .rest(500)
      .clear()
      .type("Snacks")
      .rest(500)
      .clear()
      .then(writer3.start.bind(writer1))
  }

}
