export class Quote {
    showInfo: boolean;
  // datePosted!: Date;
    constructor(public id:number,public name:string,public title:string,public quote:string,public author:string, public datePosted: Date,public likes:number, public dislikes:number){
        this.showInfo=false;
      }  
}



// <h6 class="card-subtitle mb-2 text-muted"> - {{quoty.author}} <span id="when">Posted: {{quoty.datePosted|datePipe}} days ago.</span> </h6>
// <div class="container-fluid" id="buttons">
//   <button class="btn btn-sm btn-success" (click)='upvote()'>{{quoty.likes}} <i class="fa fa-thumbs-up" id="like"></i></button> 
//   <button class="btn btn-sm hate" id="hate" (click)='downvote()'>{{quoty.dislikes}} <i class="fa fa-thumbs-down" id="dislike"></i></button> 
//   <button class="btn btn-sm btn-danger" id="del" (click)='deleteQuote(true)'><i class="fa fa-trash" id="delete"></i></button> 
// </div>

