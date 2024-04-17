let employees=[{id:101,name:'Divya',sal:45000},
               {id:102,name:'Ayaan',sal:55000}]
let createEmployee=(emp)=>{
console.log("Executing First")
setTimeout(()=>{
   employees.push(emp)
}, 4000)
console.log(employees.length)
}

let displayEmployee=(emp)=>{
    console.log("Executing second")
    setTimeout(()=>{
        let row=""
        for(emp of employees){
            rows=row + <tr>
                        <td>${emp.id}</td>
                        <td>${emp.name}</td>
                        <td>${emp.sal}</td>
              </tr>
        }
        document.getElementById('emp_Data').innerhtml=row

    }, 2000)
}
createEmployee=({id:103,name:'Raj',sal:2500})
displayEmployee()