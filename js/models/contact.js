Contacts.Contact = DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string')
});

Contacts.Contact.FIXTURES = [
 {
   id: 1,
   firstName: 'Nathan',
   lastName: 'Grey',
   email: 'nngrey@yahoo.com'
 },
 {
   id: 2,
   firstName: 'Anne',
   lastName: 'Grey',
   email: 'agrey@yahoo.com'
 },
 {
   id: 3,
   firstName: 'Joe',
   lastName: 'Smith',
   email: 'jsmith@yahoo.com'
 }
 ];