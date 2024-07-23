/**
 * 检查是否存在合并
 */
const checkMergeWords = (content: string) => {
	return /<<<<<<<.+/.test(content) && /=======.*/.test(content) && />>>>>>>.+/.test(content);
};

export default checkMergeWords;