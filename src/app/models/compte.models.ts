export class Compte {
    partenaire:{
        rc:string,
        ninea:string,
        users:[{
            username: string;
            password: string;
            nom: string;
            prenom: string,
            email:string

        }]
    }
    depots:[{
        montant:number
    }]
    
}