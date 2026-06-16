let employee = {
    name: "Rahul",
    salary: 50000,
    department: "IT"
};

const displayEmployee = emp => {
    console.log(emp.name);
};

displayEmployee(employee);

employee.salary = 60000;

console.log(employee);