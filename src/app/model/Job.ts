export class Job{
    id:number;
    title:string;
    location:string;
    salary:number;
    description:string;
    type:string;

    constructor(){
        this.id=0;
        this.title="";
        this.location="";
        this.salary=0;
        this.description="";
        this.type="";
    }
}