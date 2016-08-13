var getElementsByClassName = function(className, reference) {
  var list = [];

  //Start at body. After, children are passed recursively into reference
  reference = reference || document.body;

  //Checks if target class is in list of classes for current element
  if(reference.classList.contains(className)) {
    list.push(reference);
  };

  //Recursive call to go deeper until reaches childless element
  for (var i = 0; i < reference.children.length; i++) {
   list.push(getElementsByClassName(className, reference.children[i]));
  }

  //prevent nested arrays from recursive calls
  list = _.flatten(list);

  return list;
}
