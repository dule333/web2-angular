export class PostalDto{
    id:number | null = 0;
    name :string | null ="";
    email :string | null ="";
    fullName:string | null =""; 
    imageURI:string | null =""; 
    verificationProgress:number | null =0;
    isVerified:boolean | null =false;
}