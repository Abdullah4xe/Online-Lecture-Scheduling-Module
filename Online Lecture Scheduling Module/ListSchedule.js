/// <reference path="Scheduling-doc.js" />

const p = Lecture.Scheduling;

calendar = new p.Calendar(document.getElementById("calendar"));

calendar.currentView = p.CalendarView.List;

calendar.listSettings.orientation = p.Orientation.Horizontal;
calendar.listSettings.numberOfCells = 4;
calendar.listSettings.titleFormat = "MMMM d";
calendar.listSettings.generalFormat = "dddd";
calendar.listSettings.firstDayOfMonthFormat = "dddd";

calendar.itemSettings.tooltipFormat = "%d";
calendar.itemSettings.titleFormat = "%s[HH:mm] - %e[HH:mm] %h";

let resource;

resource = new p.Contact();
resource.firstName = "Prof. William";
resource.lastName = "Dyer";
calendar.schedule.contacts.add(resource);

resource = new p.Contact();
resource.firstName = "Prof. Ann";
resource.lastName = "Fletcher";
calendar.schedule.contacts.add(resource);

resource = new p.Contact();
resource.firstName = "Dr. Gregory";
resource.lastName = "Dillamond";
calendar.schedule.contacts.add(resource);

resource = new p.Location();
resource.name = "Room 211";
calendar.schedule.locations.add(resource);

resource = new p.Location();
resource.name = "Auditorium 1";
calendar.schedule.locations.add(resource);

resource = new p.Location();
resource.name = "Hall 3A";
calendar.schedule.locations.add(resource);

calendar.itemCreating.addEventListener(handleItemCreating);

function handleItemCreating(sender, args) {
  if (args.item.contacts.count() > 0) {
    args.item.details =
      args.item.contacts.items()[0].firstName +
      " " +
      args.item.contacts.items()[0].lastName;

    if (args.item.location != null)
      args.item.details += " - " + args.item.location.name;

    switch (args.item.contacts.items()[0].lastName) {
      case "Dyer": {
        args.item.subject = "Foundations for Higher Mathematics";
        args.item.cssClass = "itemClass1";
        break;
      }
      case "Fletcher": {
        args.item.subject = "Classical Mechanics";
        args.item.cssClass = "itemClass2";
        break;
      }
      case "Dillamond": {
        args.item.subject = "The Special Theory of Relativity";
        args.item.cssClass = "itemClass3";
        break;
      }
    }
  }
}
calendar.theme = "standard";

calendar.render();

function handleClick(cb) {
  for (const i = 0; i < calendar.schedule.items.count(); i++) {
    const item = calendar.schedule.items.items()[i];

    if (item.contacts.count() > 0) {
      if (item.contacts.items()[0].lastName == cb.value)
        item.visible = cb.checked;
    }
  }

  this.calendar.repaint(true);
}
const option = document.createElement("option");
option.innerHTML = "All";
option.value = -1;
document.getElementById("location").appendChild(option);

for (const i = 0; i < calendar.schedule.locations.count(); i++) {
  resource = calendar.schedule.locations.items()[i];
  option = document.createElement("option");
  option.innerHTML = resource.name;
  option.value = i;
  document.getElementById("location").appendChild(option);
}
function filterLocation(list) {
  this.calendar.locations.clear();

  if (list.value == -1) {
    this.calendar.groupType = p.GroupType.None;
  } else {
    const resource =
      calendar.schedule.locations.items()[
        document.getElementById("location").value
      ];
    this.calendar.locations.add(resource);
    this.calendar.groupType = p.GroupType.FilterByLocations;
  }

  this.calendar.repaint(true);
}
