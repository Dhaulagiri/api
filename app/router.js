import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('module', {path: '/module/:moduleId'});

  this.route('klass', {path: '/class/:classId'}, function(){
    this.route('index', {path: '/'});
    this.route('methods', function(){
      this.route('method', {path: '/:methodId'});
    });
    this.route('properties', function(){
      this.route('property', {path: '/:propertyId'});
    });
    this.route('events', function(){
      this.route('event', {path: '/:eventId'});
    });
  });
});

export default Router;
