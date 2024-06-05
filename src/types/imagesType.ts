type ThumbsType = {
	large: string;
	original: string;
	small: string;
};

type ImageType = {
	id: string;
	url: string;
	short_url: string;
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
	thumbs: ThumbsType;
};

type MetaType = {
	current_page: number;
	last_page: number;
	per_page: string;
	total: number;
	query: boolean;
	seed: boolean;
};

export type ImageApiResponseType = {
	data: ImageType[];
	meta: MetaType;
};
