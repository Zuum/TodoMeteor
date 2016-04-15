Template.header.helpers({
  hideCompleted () {
    return Session.get("hideCompleted");
  },
  incompleteCount () {
    return Tasks.find({ checked: { $ne: true } }).count();
  }
});

Template.header.events({
  "submit .new-task" (event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    var text = event.target.text.value;

    // Insert a task into the collection
    Meteor.call("addTask", text);

    // Clear form
    event.target.text.value = "";
  },
  "change .hide-completed input" (event) {
    Session.set("hideCompleted", event.target.checked);
  }
});

Template.header.onCreated(function () {
  this.autorun(() => {
    this.subscribe("tasks");
  });
});