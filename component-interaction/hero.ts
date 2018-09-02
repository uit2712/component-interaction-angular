export class Hero {
    constructor(
        public id: number,
        public name: string
    ){
        
    }
}

export const HEROES: Hero[] = [
    { id: 1, name: "Mr. IQ" },
    { id: 2, name: "Magenta" },
    { id: 3, name: "Bombasto" }
];
