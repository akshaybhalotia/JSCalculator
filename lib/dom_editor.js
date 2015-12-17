function DOMEditor () {
  
  function highlightField(field) {
    if(!field.classList.contains('highlighted')) { field.classList.add('highlighted') };
  }

  function unHighlightField(field) {
    if(field.classList.contains('highlighted')) { field.classList.remove('highlighted') };
  }

  return {
    highlightField: highlightField,
    unHighlightField: unHighlightField
  }
}
