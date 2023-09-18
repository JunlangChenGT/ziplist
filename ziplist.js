function zipList(list1, list2) {
  zipped = [];
  if(list1.length === list2.length) {
    for(i = 0; i <list1.length; i++) {
      zipped.push(list1.shift());
      zipped.push(list2.shift());
    }
    return zipped;
  }
}

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}
/*
for(potato2 olnao){${enhfodkh}}
aodgnhriugn,adnagrdogno;kljraognvk{\lnh}

 */