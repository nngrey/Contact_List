Contacts.ContactsController = Ember.ArrayController.extend({
  actions: {
    createContact: function () {
 
      var firstName = this.get('fName');
      if (!firstName.trim()) { return; }

      var lastName = this.get('lName');
      if (!lastName.trim()) { return; }

      var email = this.get('email');
      if (!email.trim()) { return; }

  
      var contact = this.store.createRecord('contact', {
        firstName: firstName,
        lastName: lastName,
        email: email
      });

      
      this.set('fName', '');
      this.set('lName', '');
      this.set('email', '');

     
      contact.save();
    }
  }
});

