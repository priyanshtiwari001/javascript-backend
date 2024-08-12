class Product{
    #name;  // private data memeber
    price;
    discount;// no need to use var/let/const
    desc;

    // We can create only one constructor in class. so overloading is not possible

    constructor(name,price,discount,desc){ // in javascript, we create this way a constructor
        this.#name=name;
        this.price=price;
        this.discount=discount;
        this.desc=desc;

        // return 10  --> inside constructor if we returned at primitive value --> no effect why coz constructor meant to be work with object

        // return {x:10} --> object --> works
        // return this  --> if we are not returning anything it means that we are returning RETURN this.
    }

    set name(n){
        if( typeof(n) != 'string') return ;
       return  this.#name=n;
    }

    get getName(){
        return this.#name;
    }
    display(){
        // no need to use func keyword

    }


}

const p = new Product("Iphone 13",70000,'20%','best camera ever in the smartphone'); // new keyword creates a plain empty object in javascript
p.name ='priyanshu';
console.log(p);
console.log(p.getName)