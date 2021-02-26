//document.write("hello");
function compareAttendees(a, b) {
    if (a.fullName < b.fullName) return -1;
    if (a.fullName > b.fullName) return 1;
    // equal fuuk names
    if (a.company < b.company) return -1;
    if (a.company > b.company) return 1;

    return 0;
}

function add() {
    getANewAttendee();
    attendees.sort(compareAttendees);
    displayAttendees();
    resetDataEntryFields();
}
function getANewAttendee() {
    var attFullname = document.getElementById("attFullName").value;
    var attCompany = document.getElementById("attCompany").value;
    var attendee = {
        fullName: attFullname,
        company: attCompany,
    };
    attendees.push(attendee);
}

function resetDataEntryFields() {
    document.getElementById("attFullName").value = "";
    document.getElementById("attCompany").value = "";
}
function displayAttendees() {
    var body = document.getElementById("attendeesTableBody");
    body.innerHTML = ""; // remove previous rows
    for (var i = 0; i < attendees.length; i++) {
        var row = document.createElement("tr");
        var cell = document.createElement("td");
        cell.innerHTML = attendees[i].fullName;
        row.appendChild(cell);
        cell = document.createElement("td");
        cell.innerHTML = attendees[i].company;
        row.appendChild(cell);
        body.appendChild(row);
    }
}
var attendees = [];