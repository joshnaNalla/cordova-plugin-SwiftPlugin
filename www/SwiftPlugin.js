var exec = require('cordova/exec');

var PLUGIN_NAME = "SwiftPlugin"; 

var SwiftPlugin = function() {}; 
 us to export all of the functions at once.
// All of your plugin functions go below this. 
// Note: We are not passing any options in the [] block for this, so make sure you include the empty [] block.
SwiftPlugin.callFramework = function(onSuccess, onError) {
   exec(onSuccess, onError, PLUGIN_NAME, "callFramework", []);
};
module.exports = SwiftPlugin;
