Template.task.helpers({
  isOwner () {
    return this.owner === Meteor.userId();
  },
  attrs () {
    return {
      class: (this.checked ? 'checked ' : '') + (this.private ? 'private ' : '')
    };
  }
});

Template.task.events({
  "click .toggle-checked" () {
    console.log(this._id, !this.checked);
    // Set the checked property to the opposite of its current value
    Meteor.call("setChecked", this._id, !this.checked);
  },
  "click .delete" () {
    console.log('delete', this._id);
    Meteor.call("deleteTask", this._id);
  },
  "click .toggle-private" () {
    Meteor.call("setPrivate", this._id, !this.private);
  }
});