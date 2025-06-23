document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('commandForm');
    const ratingData = [0, 0, 0, 0, 0]; // Ratings 1 to 5

    const ctx = document.getElementById('ratingChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Poor (1)', 'Fair (2)', 'Good (3)', 'Very Good (4)', 'Excellent (5)'],
            datasets: [{
                label: 'Number of Ratings',
                data: ratingData,
                backgroundColor: '#4CAF50'
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const rating = parseInt(document.getElementById('rating').value);
        const command = document.getElementById('commands').value.trim();

        if (!isNaN(rating) && rating >= 1 && rating <= 5 && command !== "") {
            ratingData[rating - 1]++;
            chart.update();
            alert('Command submitted successfully!');
            form.reset();
        } else {
            alert('Please fill in all required fields.');
        }
    });
});
