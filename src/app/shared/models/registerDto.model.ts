export class RegisterDto{
        id:number | null = 0;
        name :string | null ="";
        email :string | null ="";
        password:string | null =""; 
        fullName:string | null =""; 
        birthDate:string | null =""; 
        address:string | null =""; 
        userType:number | null =0;
        imageURI:string | null =""; 
        isVerified:boolean | null =false;
        repeatedPassword:string | null = "";
}