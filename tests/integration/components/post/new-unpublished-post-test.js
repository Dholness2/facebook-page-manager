import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('post/new-unpublished-post', 'Integration | Component | post/new unpublished post', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{post/new-unpublished-post}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#post/new-unpublished-post}}
      template block text
    {{/post/new-unpublished-post}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
