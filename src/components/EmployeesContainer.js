import React from "react";
import EmployeesCard from "./EmployeesCard";


function EmployeesContainer ({employees}) {

   return (
    <main className="main"> 
       <ul className = "employees-container">
           {employees.map(employee => (
               <EmployeesCard 
               key = {employee.id} 
               employee = {employee} />
           ))}
       </ul>
    </main>
   )
}


export default EmployeesContainer;

