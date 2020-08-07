import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DoctorApp';
  count=0;
  doctorsname=["sandeep","mounic","vinay","krishna","kriti"];
  docName:string='';
  addFirst(name)
  {
    console.log(name);
    this.doctorsname.unshift(name);
    this.docName='';
  }
  addLast(name)
  {
  console.log(name);
  this.doctorsname.push(name);
  this.docName='';
  }
  moveUp(i)
  {
    console.log(i);
    var swap='';
  }
  moveDown(i){
    console.log(i);
    var swap1="";
    var swap2="";
  }
  delete(i)
  {
    this.doctorsname.splice(i,1);
  }
  sortElerev()
  {
    this.doctorsname.reverse();
  }
  sortEle()
  {
    this.doctorsname.sort();
  }
}
