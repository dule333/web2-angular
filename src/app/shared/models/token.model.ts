export class Token{
    Id :number | null = 0;
    Role:number | null =0; 

    constructor(id:number, role:number)
    {
        this.Id = id;
        this.Role = role
    }
}