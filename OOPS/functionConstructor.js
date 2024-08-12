function Product(n,p,d){ // this is we called function constructor. so old code based we used like this
    this.name = n;
    this.price =p;
    this.desc = d;

    return this;

}

const p = new Product('iphone','70000','best camera in the segment');
console.log(p);