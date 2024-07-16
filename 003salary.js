function salaryCalculator() {
    // Get input values from HTML input fields
    let basicSalary = parseFloat(document.getElementById('basicSalary').value);
    let benefits = parseFloat(document.getElementById('benefits').value);

    // Calculate gross salary
    let grossSalary = basicSalary + benefits;

    // Calculate PAYE (Tax)
    let payee;

    if (grossSalary <= 24000) {
        payee = 0.1 * grossSalary;
    } else if (grossSalary <= 32333) {
        payee = 0.1 * 24000 + 0.15 * (grossSalary - 24000);
    } else if (grossSalary <= 500000) {
        payee = 0.1 * 24000 + 0.15 * 8333 + 0.25 * (grossSalary - 32333);
    } else if (grossSalary <= 800000) {
        payee = 0.1 * 24000 + 0.15 * 8333 + 0.25 * 467667 + 0.3 * (grossSalary - 500000);
    } else {
        payee = 0.1 * 24000 + 0.15 * 8333 + 0.25 * 467667 + 0.3 * 300000 + 0.35 * (grossSalary - 800000);
    }

    const nssfRate = 0.06;
    const payeeRelief = 2400;

    // Calculate PAYE (Tax)
    let netPayee = payee - payeeRelief;

    // Calculate NHIF Deductions
    let nhifAmount;

    if (grossSalary <= 5999) {
        nhifAmount = 150;
    } else if (grossSalary <= 7999) {
        nhifAmount = 300;
    } else if (grossSalary <= 11999) {
        nhifAmount = 400;
    } else if (grossSalary <= 14999) {
        nhifAmount = 500;
    } else if (grossSalary <= 19999) {
        nhifAmount = 600;
    } else if (grossSalary <= 24999) {
        nhifAmount = 750;
    } else if (grossSalary <= 29999) {
        nhifAmount = 850;
    } else if (grossSalary <= 34999) {
        nhifAmount = 900;
    } else if (grossSalary <= 39999) {
        nhifAmount = 950;
    } else if (grossSalary <= 44999) {
        nhifAmount = 1000;
    } else if (grossSalary <= 49999) {
        nhifAmount = 1100;
    } else if (grossSalary <= 59999) {
        nhifAmount = 1200;
    } else if (grossSalary <= 69999) {
        nhifAmount = 1300;
    } else if (grossSalary <= 79999) {
        nhifAmount = 1400;
    } else if (grossSalary <= 89999) {
        nhifAmount = 1500;
    } else if (grossSalary <= 99999) {
        nhifAmount = 1600;
    } else {
        nhifAmount = 1700;
    }

    // Calculate NSSF Deductions (both employee and employer contributions)
    let nssfDeductions = nssfRate * grossSalary;

    // Calculate Net Salary
    let netSalary = grossSalary - netPayee - nhifAmount - nssfDeductions;

    // Display results on HTML page
    let salaryElement = document.getElementById('salary');
    salaryElement.textContent = `Gross Salary: ${grossSalary.toFixed(2)}, PAYE (Tax): ${netPayee.toFixed(2)}, NHIF Deductions: ${nhifAmount.toFixed(2)}, NSSF Deductions: ${nssfDeductions.toFixed(2)}, Net Salary: ${netSalary.toFixed(2)}`;
}