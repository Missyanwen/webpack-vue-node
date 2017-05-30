

const list = {
	dataset: [
		'GETHEADER', 
		'GETFOOTER'
	]
}

//映射
const types = {};
let key, item;
for(key in list) {
	types[key] = {};
	for( item of list[key]) {
		types[key][item] = `${key}\\${item}`;
	}
}

export default types;