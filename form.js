document.getElementById('inputForm').addEventListener('save', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the default way

    // Get user input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('mobile').value;

    // Create a 2D array to store the data
    const data = [
        ['Name', 'Email', 'Mobile'],
        [name, email, number]
    ];

    // Convert data to a worksheet
    const worksheet = XLSX.utils.aoa_to_sheet(data);

    // Create a new workbook and add the worksheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    // Save the workbook as an Excel file
    XLSX.writeFile(workbook, 'appu.xlsx');
});
