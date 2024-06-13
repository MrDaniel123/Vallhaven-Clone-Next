type Uploader = {
	username: string;
	group: string;
	avatar: {
		'200px': string;
		'128px': string;
		'32px': string;
		'20px': string;
	};
};

export type Tags = {
	id: number;
	name: string;
	alias: string;
	category_id: number;
	category: string;
	purity: string;
	created_at: string;
};

type ImageDataResponse = {
	id: string;
	url: string;
	short_url: string;
	uploader: Uploader;
	views: number;
	favorites: number;
	source: string;
	purity: string;
	category: string;
	dimension_x: number;
	dimension_y: number;
	resolution: string;
	ratio: string;
	file_size: number;
	file_type: string;
	created_at: string;
	colors: string[];
	path: string;
	thumbs: {
		large: string;
		original: string;
		small: string;
	};
	tags: Tags[];
};

export type ImageType = {
	data: ImageDataResponse;
};
