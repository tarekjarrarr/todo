export class Todo {
   private id:number ;
   private name : String ;
   private content : String ;

   constructor ( name:String , content:String ){
       this.name=name;
       this.content=content;
   }
}