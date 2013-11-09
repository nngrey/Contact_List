Contacts.Router.map(function () {
  this.resource('contacts', { path: '/' });
});

Contacts.ContactsRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('contact');
  }
});