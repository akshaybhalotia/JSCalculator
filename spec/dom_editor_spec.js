describe("A DOM editor", function () {

  var dom_editor;
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = 'base/spec/';
    loadFixtures('fixtures.html');
    dom_editor = new DOMEditor();
  });

  it("adds the class highlight to an element passed to it", function() {
    var operator = document.getElementById('operator');

    dom_editor.highlightField(operator);

    expect(operator).toHaveClass('highlighted');
  });

  it("remove the class highlight from an element passed to it", function() {
    var operator = document.getElementById('operator');
    operator.classList.add('highlighted');

    dom_editor.unHighlightField(operator);

    expect(operator).not.toHaveClass('highlighted');
  });
});
