
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        events: [
            // Sample event data
            {
                title: 'Meeting',
                start: '2023-07-10T10:30:00',
                end: '2023-07-10T12:30:00'
            },
            {
                title: 'Lunch',
                start: '2023-07-12T12:00:00'
            },
            {
                title: 'Conference',
                start: '2023-07-15',
                end: '2023-07-17'
            }
        ]
    });
    calendar.render();

});