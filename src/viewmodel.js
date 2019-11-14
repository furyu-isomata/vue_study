import moment from 'moment';

export default class ArticleViewModel {
	constructor(data) {
		this.id = data.id;
		this.category = ArcticleCategoryViewModel.getCategory();
		this.date = moment(new Date).format(data.date);
		this.title = data.title;
		this.caption = data.caption;
		this.detail = data.detail;
		this.img = data.img;
		this.author = data.author;
	}
}

export class ArcticleCategoryViewModel {
	constructor(data) {
		this.category = data;
	}
	get getCategory () {
		switch (this.category) {
			case '1':
				return this.category = 'BEAUTY';
				break;
			case '2':
				return this.category =  'FASHION';
				break;
			case '3':
				return this.category =  'GOURMET';
				break;

		}
	}
}