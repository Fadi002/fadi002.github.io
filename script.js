document.addEventListener('DOMContentLoaded', function() {
    updatetime()
    function updatetime() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        let period = hours >= 12 ? 'PM' : 'AM';
        const displayhours = hours % 12 || 12;
        document.getElementById('current-time').textContent = `${displayhours}:${minutes}:${seconds} ${period}`;
    }
    setInterval(updatetime, 1000);
    function fetchvc() {
        fetch('https://visit-counter--fdsgdhgdshgdshsdh.repl.co/visits')
            .then(response => response.json())
            .then(data => {
                animatelol(data.count);
            }).catch(error => console.error('Error fetching visits counter:', error));
    }

    function animatelol(newCount) {
        const visitCounterElement = document.getElementById('visit-counter');
        const options = {
            strings: [visitCounterElement.textContent, newCount.toString()],
            typeSpeed: 100,
            startDelay: 500,
            showCursor: false,
            onComplete: function() {
                visitCounterElement.textContent = newCount;
            }
        };

        const typed = new Typed('#visit-counter', options);
    }
    fetchvc();
});
