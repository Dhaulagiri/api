import Ember from 'ember';

const { on } = Ember;

export default Ember.Select.extend(Ember.TargetActionSupport, {
  target: Ember.computed.alias('controller'),

  onChange: on('change', function(){
    this.triggerAction({
      action: this.get('action'),
      actionContext: [this.selection, this._oldValue]
    });
    this._oldValue = this.selection;
  })

});
