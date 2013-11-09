Contacts.EditContactView = Ember.TextField.extend({
  didInsertElement: function () {
    this.$().focus();
  }
});

Ember.Handlebars.helper('edit-contact', Contacts.EditContactView);