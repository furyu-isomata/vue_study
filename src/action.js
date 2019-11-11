import db from './data';

// 全部返す
export function getArticleList() {
	return db.articleList;
};

// category
export function getArticleCategory(currentCategory) {
	return getArticleList().filter(x => x.category === currentCategory);
};
// id
export function getArticleId(articleId) {
	getArticleList().filter((element) => {
		return (element.id === articleId);
	});
};