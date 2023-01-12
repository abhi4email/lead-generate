import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { appendFile } from 'fs';

@Component({
  selector: 'app-step-first',
  templateUrl: './step-first.component.html',
  styleUrls: ['./step-first.component.css']
})
export class StepFirstComponent implements OnInit {
  @ViewChild('div') div: ElementRef | any ;
  isReact:boolean = false;
  constructor (private renderer: Renderer2){
 
  }
  courselist = ['a', 'b', 'c']
  selectedcourselist:any = []
  ngOnInit(): void {
  }
 
  reactToggle(){
    this.isReact = !this.isReact
    console.log('---------------------',this.isReact);
    if(this.isReact){
      const span: HTMLParagraphElement = this.renderer.createElement('span');
      span.innerHTML = "<i class='fa-solid fa-check tick-icon'></i>"
      this.renderer.appendChild(this.div.nativeElement, span)
    }else{
      this.renderer.removeChild(this.div.nativeElement, '')

    }
    
  }
  // submitcourse(val:string){
  //  this.selectedcourselist.push(val);
  //  console.log(this.selectedcourselist);
   
  //  const p: HTMLParagraphElement = this.renderer.createElement('p');
  //   p.innerHTML = "add new"
  //   this.renderer.appendChild(this.div.nativeElement, p)
  // }
  submitcourse(){
    //  this.selectedcourselist.push(val);
    // //  console.log(this.selectedcourselist);   
      const span: HTMLParagraphElement = this.renderer.createElement('span');
      span.innerHTML = "<i class='fa-solid fa-check tick-icon'></i>"
      this.renderer.appendChild(this.div.nativeElement, span)
    }
// getItems(data){
//     console.log(data);
// }
}
