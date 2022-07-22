import { Component } from '@angular/core';
import { retry } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   newMemberName = ""; 
   members: string[] = [];
   errorMessage="";
   numberOfTeams: number | ""= "";
   teams : string[][]= [];
   

   getTeamsNumber(number : string ){
    this.numberOfTeams=Number(number);
    console.log(this.numberOfTeams);

   }

   getInputName(member :string){
    this.newMemberName=member;
    console.log(this.getInputName);
  }

   addMember(){
    if(!this.newMemberName){
      this.errorMessage="Name can't be empty."
      return;
    }
    this.errorMessage="";
    this.members.push(this.newMemberName);
    this.newMemberName = "";  
   }
   generateTeams(){
    this.teams=[];
    if(!this.numberOfTeams || this.numberOfTeams <= 0){
      this.errorMessage="Invalid number of teams";
      return;
    }
    this.errorMessage="";
    var allMembers = [...this.members]


    if(this.members.length < this.numberOfTeams){
      this.errorMessage="Number of teams can't be bigger than the number of members"
      return;
    }
    this.errorMessage="";

  while(allMembers.length){
    for(let i = 0;i< this.numberOfTeams;i++){
      const randomIndex = Math.floor(Math.random() * allMembers.length)
      const member =allMembers.splice(randomIndex,1)[0];
      if(!member){break;}
     

      if(this.teams[i]){
        this.teams[i].push(member);
      }else
      this.teams[i] = [member];
      
    }
    

  }
  
  
  console.log(this.teams);
  this.numberOfTeams= ""
  this.members=[];
  
  
  
   }
   

   
}
