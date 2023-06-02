if(!localStorage.getItem('lastVisitDate')) {
    localStorage.setItem('lastVisitDate', Date.now());
    document.getElementById('visits').textContent = 'Welcome! Let us know if you have any questions.';
} else {
    document.getElementById('visits').textContent = 'Back so soon! Awesome!';
}

function giveDate() {
    let lastDate = localStorage.getItem('lastVisitDate');
    let currDate = Date.now();
    let difference = currDate - lastDate;
        console.log(difference);
        let daysDifference = Math.floor(difference/1000/60/60/24);

    document.getElementById('visits').textContent = "You last visited" + daysDifference + " days ago";

    localStorage.setItem('lastVisitDate', Date.now());

}