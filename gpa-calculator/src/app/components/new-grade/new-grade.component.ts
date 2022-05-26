import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Grade } from 'src/app/models/grade';

@Component({
  selector: 'app-new-grade',
  templateUrl: './new-grade.component.html',
  styleUrls: ['./new-grade.component.css']
})
export class NewGradeComponent implements OnInit {

  gradeForm: FormGroup


  constructor(private fb: FormBuilder, private router: Router) { 
    this.gradeForm = this.fb.group({
      course: ['', Validators.required],
      ects: ['', Validators.required],
      grade: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  addNewGrade(){

    const GRADE: Grade={
      course:this.gradeForm.get('course')?.value,
      ects: this.gradeForm.get('ects')?.value,
      grade: this.gradeForm.get('grade')?.value
    }
    this.router.navigate(['/list'])
    // cuando anado el nuevo grade voy a lista
  }


}
