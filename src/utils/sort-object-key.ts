/**
 * 对对象的字段进行排序
 */
const sortObjectKey = (obj: Record<string, any>): typeof obj => {
	if (Array.isArray(obj)) {
		return obj.map(sortObjectKey);
	} else if (obj !== null && typeof obj === "object") {
		return Object.keys(obj)
			.sort((key1, key2) => {
				if (typeof obj[key1] === "object" && typeof obj[key2] !== "object") { return 1; }
				if (typeof obj[key1] !== "object" && typeof obj[key2] === "object") { return -1; }
				return key2 > key1 ? -1 : 1;
			})
			.reduce((result, key) => {
				result[key] = sortObjectKey(obj[key]);
				return result;
			}, {} as typeof obj);
	}
	return obj;
};

export default sortObjectKey;