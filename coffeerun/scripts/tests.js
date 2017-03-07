(function (window) {
  'use strict';
  var App = window.App;
  var DataStore = App.DataStore;
  var ds = new DataStore();

  QUnit.test( "Get All the DataStores", function( assert ) {
    assert.propEqual(ds.add('m@bond.com', 'tea'), undefined, "Passed");
    assert.propEqual(ds.add('james@bond.com', 'eshpressho'), undefined, "Passed");
    assert.propEqual(ds.getAll(), {'m@bond.com': "tea", 'james@bond.com': "eshpressho"}, "Passed");
    ds.remove('james@bond.com');
    assert.propEqual(ds.getAll(), {'m@bond.com': "tea"}, "Passed");
    assert.propEqual(ds.get('m@bond.com'), "tea", "Passed");
    assert.propEqual(ds.get('james@bond.com'), undefined, "Passed");
  });
})(window);
