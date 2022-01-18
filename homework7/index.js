let utc = new Date().getFullYear()
console.log(utc)
class Student {
    constructor(name, surname, year){
        this.name = name
        this.surname = surname
        this.year = year
    }

    get FullName() {
        return `Name ${this.name} Surname ${this.surname}`
    }

    get Course() {
        return utc - `${this.year}` 
    }

    
}

let artur = new Student('Artur', 'Revtovich', 2019 )
let vlad = new Student('Vlad','Gapeev', 2018)
let artem = new Student('Artem', 'Hromov', 2020)
let maxim = new Student('Maxim', 'Kudraveac', 2021)
let dima = new Student('Maxim', 'Chaikovski', 2017)

console.log(artur.Course)
console.log(vlad.Course)
console.log(artem.Course)
console.log(maxim.Course)
console.log(dima.Course)