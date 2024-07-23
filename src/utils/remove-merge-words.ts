/**
 * 移除合并字符
 */
const removeMergeWords = (content: string) => {
	return content
		.replace(/<<<<<<<.+/g, "")
		.replace(/>>>>>>>.+/g, "")
		.replace(/=======.*/g, "");
};

export default removeMergeWords;