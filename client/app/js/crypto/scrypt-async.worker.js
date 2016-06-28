/* global scrypt, Promise */

importScripts("lib/scrypt-async.min.js");

onmessage = function(e) {
  var options = e.data;

  return new Promise(function() {
    var callback = function(result) {
      postMessage(result);
    };

    scrypt(options.password,
           options.salt,
           options.logN,
           options.r,
           options.dkLen,
           callback,
           options.encoding);
  });
};
