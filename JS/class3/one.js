class Account{
    acc_Id;
    acc_Name;
    acc_Bal;
    constructor(id,name,amount){
       this.acc_Id=id;
      this.acc_Name=name;
      this.acc_Bal=amount;
    }
}

let a1=new Account(1,"Divya",300)
let a2=new Account(2,"Mani",400)
let a3=new Account(3,"Ayaan",500)

console.log(a1)
console.log(a2)
console.log(a3)