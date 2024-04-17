class Account{
    acc_bal=500;
    constructor(id,name,amount){
        this.acc_Id=id
        this.acc_Name=name
        this.acc_Bal=amount
    }
    open_Account(){
        console.log("Account opened succussfully")
    }
    deposit_Amount(Amount){
        this.acc_Bal=this.acc_Bal + Amount
    }
    withdraw(Amount){
        this.acc_Bal=this.acc_Bal - Amount
    }
    get_Bal(){
        return this.acc_Bal

    }
    close_Account(){}

    }

    let a1=new Account(101,"Ayaan",500)
    let a2=new Account(102,"Mani",700)

    console.log(a1)

   a1.deposit_Amount(200)
   console.log(a1)

   a1.withdraw(350)
   console.log(a1)

   console.log(a1.get_Bal())
console.log(a1)
a1.deposit_Amount(25)
a1.withdraw(30)

console.log(a1.get_Bal())




            


