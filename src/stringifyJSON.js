// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  var contents = [];
  if(Array.isArray(obj)) {
  	if (obj.length === 0) {
  		return "[]";
  	} else {
  		_.forEach(obj, function(value){
  			contents.push(stringifyJSON(value));
  		});
	  	return "[" + contents.toString() + "]";
	}
  }
  else if(typeof obj === 'object' && obj !== null) {
  	if (_.isEmpty(obj)) {
  		return "{}";
  	} else {
  		_.forEach(obj, function(value, key){
  			if (!(typeof value === 'function' || typeof value === 'undefined')) {
	  			contents.push('"' + key +'":' + stringifyJSON(value));
  			}
  		});
  		return "{" + contents.toString() + "}";
  	}
  }
  else if (!isNaN(parseFloat(obj)) && isFinite(obj)) {
  	return obj.toString();
  }
  else if (obj === null || obj === true || obj === false) {
  	return String(obj);
  }
  else if(typeof obj === "string") {
  	return '"' + obj + '"';
  }
};
