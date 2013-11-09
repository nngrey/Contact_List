Contacts.ContactController = Ember.ObjectController.extend({
  actions: {
   editContact: function () {
     this.set('isEditing', true);
 },
    removeContact: function () {
      var contact = this.get('model');
      contact.deleteRecord();
      contact.save();
    }
  },
  isEditing: false,
});

Contacts.ContactsController = Ember.ArrayController.extend({
  actions: {
    createContact: function () {
      // Get the todo title set by the "New Todo" text field
      var firstName = this.get('fName');
      if (!firstName.trim()) { return; }

      var lastName = this.get('lName');
      if (!lastName.trim()) { return; }

      var email = this.get('email');
      if (!email.trim()) { return; }

      // Create the new Todo model
      var contact = this.store.createRecord('contact', {
        firstName: firstName,
        lastName: lastName,
        email: email
      });

      // Clear the "New Todo" text field
      this.set('fName', '');
      this.set('lName', '');
      this.set('email', '');

      // Save the new model
      contact.save();
    }
  }
});

