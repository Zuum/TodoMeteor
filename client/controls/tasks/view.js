Template.tasks.helpers({
  tasks () {
    if (Session.get("hideCompleted")) {
      // If hide completed is checked, filter tasks
      return Tasks.find({ checked: { $ne: true } }, { sort: { createdAt: -1 } });
    } else {
      // Otherwise, return all of the tasks
      return Tasks.find({}, { sort: { createdAt: -1 } });
    }
  }
});

Template.tasks.onCreated(function () {
  this.autorun(() => {
    this.subscribe("tasks");
  });
});