class Human {
    constructor(name='Alfred', sex='male', age=23) {
        this.name = name
        this.sex = sex
        this.age = age
    }
    getName() {return this.name}
    getSex() {return this.sex}
    getAge() {return this.age}
}

class Asian extends Human {
    constructor(name='young', NAT_ID=24443, sex='male') {
        super()
        this.NAT_ID = NAT_ID
        this.sex = sex
        this.name = name
    }

    getID() {return this.NAT_ID}
}

class African extends Human {
        constructor(name='young', NAT_ID=24443, sex='male') {
        super()
        this.NAT_ID = NAT_ID
        this.sex = sex
        this.name = name
    }

    getID() {return this.NAT_ID}
}

let sapien = new Human("fish", "male", 33)

console.log(sapien.age)