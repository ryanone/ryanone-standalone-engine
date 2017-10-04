import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const users = [
      {
        "firstName":" Naga",
        "groups":[
          {
            "key":{
              "account":"urn:li:enterpriseAccount:1112",
              "id":2168
            },
            "name":"JR testing Thursday night"
          },
          {
            "key":{
              "account":"urn:li:enterpriseAccount:1112",
              "id":2014210
            },
            "name":"LIL BLR"
          },
          {
            "key":{
              "account":"urn:li:enterpriseAccount:1112",
              "id":1003208
            },
            "name":"ACME"
          }
        ],
        "lastName":"Vikrams",
        "mediaId":null,
        "member":null,
        "primaryEmailAddress":"test@testinglinkedin.con"
      },
      {
        "firstName":null,
        "groups":[
          {
            "key":{
              "account":"urn:li:enterpriseAccount:1112",
              "id":1003208
            },
            "name":"ACME"
          },
          {
            "key":{
              "account":"urn:li:enterpriseAccount:1112",
              "id":2006106
            },
            "name":"Hillary Trump"
          }
        ],
        "lastName":null,
        "mediaId":null,
        "member":null,
        "primaryEmailAddress":"072102@test.linkedin.com"
      },
    ];
    const columns = [
      {
        propertyName: 'displayName',
        title: 'User Details'
      },
      {
        component: 'ep/-private/group-names',
        title: 'Groups'
      },
      {
        propertyName: 'licenseStatus',
        title: 'License Status'
      }
    ];
    return Ember.RSVP.hash({
      columns: Ember.RSVP.resolve(columns),
      users: Ember.RSVP.resolve(users)
    });
  }
});