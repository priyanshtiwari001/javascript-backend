let user = {
    name:'Priyanshu',
    class:'12th-A',
    occupation:'Student',
    address :{
        flat:'108',
        buildingNo:'KM4',
        Society:'Jaypee Kosmos, sector 134',
        show : ()=>{
            console.log(this);
        }
    }
}

// console.log(user.display());

user.address.show();