var hasOwn={}.hasOwnProperty;export function classNames(){for(var r=[],a=0;a<arguments.length;a++){var s=arguments[a];if(s){var e=typeof s;if("string"===e||"number"===e)r.push(s);else if(Array.isArray(s)&&s.length){var n=classNames.apply(null,s);n&&r.push(n)}else if("object"===e)for(var l in s)hasOwn.call(s,l)&&s[l]&&r.push(l)}}return r.join(" ")}