// Task 1: Creating an Employee Class
class Employee {
    constructor(name, id, department, salary) {
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
    }

    getDetails() {
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`;
    }

    calculateAnnualSalary() {
        return this.salary * 12;
    }
}

// Test for Employee Class
const emp1 = new Employee("Musa Malhi", 101, "Sales", 5000);
console.log(emp1.getDetails()); 
console.log(emp1.calculateAnnualSalary());

// Task 2: Creating a Manager Class (Inheritance & Method Overriding)
class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary);
        this.teamSize = teamSize;
    }

    getDetails() {
        return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
    }

    calculateBonus() {
        return this.calculateAnnualSalary() * 0.10; // 10% of annual salary
    }
}

// Test for Manager Class
const mgr1 = new Manager("Lana Rose", 201, "IT", 8000, 5);
console.log(mgr1.getDetails()); 
console.log(mgr1.calculateBonus());

// Task 3: Creating a Company Class
class Company {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    listEmployees() {
        this.employees.forEach(emp => {
            console.log(emp.getDetails());
        });
    }
}

// Test for Company Class
const company = new Company("TechCorp");
company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees();

// Task 4: Implementing a Payroll System
Company.prototype.calculateTotalPayroll = function() {
    return this.employees.reduce((total, emp) => {
        return total + (emp.salary * 12) + (emp instanceof Manager ? emp.calculateBonus() : 0);
    }, 0);
};

// Test for Payroll System
console.log(company.calculateTotalPayroll());

// Task 5: Implementing Promotions
Company.prototype.promoteToManager = function(employee, teamSize) {
    const manager = new Manager(employee.name, employee.id, employee.department, employee.salary, teamSize);
    this.employees = this.employees.map(emp => (emp.id === employee.id ? manager : emp));
};

// Promote emp1 to Manager
company.promoteToManager(emp1, 3);
company.listEmployees();
