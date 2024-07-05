document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const farmerName = document.getElementById('farmerName').value;
    const serviceProvider = document.getElementById('serviceProvider').value;
    const serviceType = document.getElementById('serviceType').value;
    const appointmentDate = document.getElementById('appointmentDate').value;
    const appointmentTime = document.getElementById('appointmentTime').value;

    const bookingDetails = {
        farmerName,
        serviceProvider,
        serviceType,
        appointmentDate,
        appointmentTime
    };

    // Save bookingDetails to local storage
    let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    bookings.push(bookingDetails);
    localStorage.setItem('bookings', JSON.stringify(bookings));

    alert('Appointment booked successfully!');
    document.getElementById('bookingForm').reset();
});

document.getElementById('generateReportBtn').addEventListener('click', function() {
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const reportContainer = document.getElementById('reportContainer');
    reportContainer.innerHTML = '';

    if (bookings.length === 0) {
        reportContainer.innerHTML = '<p>No bookings available.</p>';
        return;
    }

    const table = document.createElement('table');
    table.classList.add('report-table');

    const headerRow = document.createElement('tr');
    const headers = ['Farmer\'s Name', 'Service Provider', 'Service Type', 'Appointment Date', 'Appointment Time'];

    headers.forEach(headerText => {
        const header = document.createElement('th');
        header.textContent = headerText;
        headerRow.appendChild(header);
    });

    table.appendChild(headerRow);

    bookings.forEach(booking => {
        const row = document.createElement('tr');

        Object.values(booking).forEach(text => {
            const cell = document.createElement('td');
            cell.textContent = text;
            row.appendChild(cell);
        });

        table.appendChild(row);
    });

    reportContainer.appendChild(table);
});
