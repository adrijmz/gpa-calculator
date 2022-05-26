export class Grade{
    _id?:number;
    course:string;
    ects:number;
    grade:number;

    constructor(course:string, ects:number, grade:number){
        this.course = course;
        this.ects = ects;
        this.grade = grade;
    }
}