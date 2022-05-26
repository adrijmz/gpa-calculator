import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  userForm: FormGroup

  constructor(private fb:FormBuilder, private router:Router){
    this.userForm = this.fb.group({
      email:['', Validators.required],
      name:['', Validators.required],
      surname:['', Validators.required],
      collegue:['', Validators.required],
      password:['', Validators.required],
    })
  }

  

  ngOnInit(): void {
  }

  addNewUser(){
        
    const USER: User={
      email: this.userForm.get('email')?.value,
      name: this.userForm.get('name')?.value,
      surname: this.userForm.get('surname')?.value,
      collegue: this.userForm.get('collegue')?.value,
      password: this.userForm.get('password')?.value,
    }
    
    this.router.navigate(['/'])
  }

}
