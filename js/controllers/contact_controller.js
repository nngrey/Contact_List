Contacts.ContactController = Ember.ObjectController.extend({
  actions: {
   editContact: function () {
     this.set('isEditing', true);
 },
    acceptChanges: function () {
      this.set('isEditing', false);

      if (Ember.isEmpty(this.get('model.firstName'))) {
        this.send('removeContact');
      } else {
        this.get('model').save();
      }
    },
   
    removeContact: function () {
      var contact = this.get('model');
      contact.deleteRecord();
      contact.save();
    }
},
  isEditing: false,
});

