// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by file-collection.js.
import { name as packageName } from "meteor/ccueto:file-collection";

// Write your tests here!
// Here is an example.
Tinytest.add('file-collection - example', function (test) {
  test.equal(packageName, "file-collection");
});
