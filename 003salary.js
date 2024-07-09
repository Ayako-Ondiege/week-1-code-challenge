let basicSalary =525000;

let benefits = 100000;

    
// Calculate gross salary
    
let grossSalary = basicSalary + benefits;

let payee;//Declare payee and its related conditional statements

if (grossSalary <= 24000) {
    payee = 0.1*grossSalary;
} else if (grossSalary >= 24001 && grossSalary <= 32333) {
    payee = 0.1*24000+ 0.15(grossSalary-24000);
} else if (grossSalary >= 32334 && grossSalary <= 500000) {
    payee = 0.1*24000+ 0.15*8333+0.25(grossSalary-32333);
} else if (grossSalary >= 500001 && grossSalary<= 800000) {
    payee = 0.1*24000+ 0.15*8333+0.25*467667+0.3*(grossSalary-500000);
} else {
    payee = 0.1*24000+ 0.15*8333+0.25*467667*+0.3*300000+0.35(grossSalary-800000);
}


let nhifAmount//Declare nhifAmount and its related conditional statements

if (grossSalary<= 5999) {
    nhifAmount = 150;
} else if (grossSalary >= 6000 && grossSalary <= 7999) {
    nhifAmount = 300;
} else if (grossSalary >= 8000 && grossSalary <= 11999) {
    nhifAmount = 400;
} else if (grossSalary >= 12000 && grossSalary<= 14999) {
    nhifAmount = 500;
} else if (grossSalary >= 15000 && grossSalary <= 19999) {
    nhifAmount = 600;
} else if (grossSalary >= 20000 && grossSalary <= 24999) {
    nhifAmount = 750;
} else if (grossSalary >= 25000 && grossSalary<=  29999) {
    nhifAmount = 850;
} else if (grossSalary >= 30000 && grossSalary <= 34999) {
    nhifAmount = 900;
} else if (grossSalary >= 35000 && grossSalary <= 39999) {
    nhifAmount = 950;
} else if (grossSalary >= 40000 && grossSalary <= 44999) {
    nhifAmount = 1000;
} else if (grossSalary >= 45000 && grossSalary<=  49999) {
    nhifAmount = 1100;
} else if (grossSalary >= 50000 && grossSalary <= 59999) {
    nhifAmount = 1200;
} else if (grossSalary >= 60000 && grossSalary <= 69999) {
    nhifAmount= 1300;
} else if (grossSalary >= 70000 && grossSalary<= 79999) {
    nhifAmount = 1400;
} else if (grossSalary >= 80000 && grossSalary <= 89999) {
    nhifAmount = 1500;
} else if (grossSalary >= 90000 && grossSalary <= 99999) {
    nhifAmount = 1600;
} else {
    nhifAmount = 1700;
}

const nssfRate = 0.06;

const payeeRelief = 2400;

// Calculate PAYE (Tax)
let taxableIncome = grossSalary - payeeRelief; // Assuming personal relief of KSh 2,400
// let payee = calculatePayee(taxableIncome);

// Calculate NHIF Deductions
nhifAmount

// Calculate NSSF Deductions (both employee and employer contributions)
let nssfDeductions = nssfRate*grossSalary;

// Calculate Net Salary
let netSalary = grossSalary - payee - nhifAmount - nssfDeductions;

// Output results
console.log(`Basic Salary: ${basicSalary}`);
console.log(`Benefits: ${benefits}`);
console.log(`Gross Salary: ${grossSalary}`);
console.log(`PAYE (Tax): ${payee}`);
console.log(`NHIF Deductions: ${nhifAmount}`);
console.log(`NSSF Deductions: ${nssfDeductions}`);
console.log(`Net Salary: ${netSalary}`);
