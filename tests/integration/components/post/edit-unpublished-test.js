import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('post/edit-unpublished', 'Integration | Component | post/edit unpublished', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{post/edit-unpublished}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#post/edit-unpublished}}
      template block text
    {{/post/edit-unpublished}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
