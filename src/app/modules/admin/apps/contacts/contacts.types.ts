export interface Contact {
    id: string;
    avatar?: string | null;
    background?: string | null;
    /*name: string;*/
    firstname:string;
    lastname:string;
    emails?: {
        email: string;
        label: string;
    }[];
    phoneNumbers?: {
        country: string;
        phoneNumber: string;
        label: string;
    }[];
    title?: string;
    company?: string;
    birthday?: string | null;
    address?: string | null;
    notes?: string | null;
    tags: string[];
    role?: string;

}

export interface Country {
    id: string;
    iso: string;
   /* name: string;*/
   firstname:string;
   lastname:string;
    code: string;
    flagImagePos: string;
}

export interface Tag {
    id?: string;
    title?: string;
}
