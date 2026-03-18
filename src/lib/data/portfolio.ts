export type Profile = {
	name: string;
	title: string;
	tagline: string;
	location: string;
	email: string;
	phone: string;
};

export type Stat = {
	value: string;
	label: string;
};

export type Experience = {
	period: string;
	role: string;
	company: string;
	points: string[];
};

export type Project = {
	name: string;
	description: string;
	role: string;
	stack: string;
	link: string;
	thumbnail: string;
};

export const profile: Profile = {
	name: 'Vũ Hồng Linh',
	title: 'Lập trình viên Full-Stack',
	tagline:
		'Tôi xây dựng các sản phẩm web end-to-end, từ kiến trúc backend đến frontend hoàn thiện, đảm bảo hiệu năng tốt và code dễ bảo trì.',
	location: 'Thành phố Hà Nội, Việt Nam',
	email: 'davidvu.dev35@gmail.com',
	phone: '+84 393 915 663'
};

export const stats: Stat[] = [
	{ value: '10+', label: 'Dự án đã thực hiện' },
	{ value: '4', label: 'Hệ thống production đã triển khai' },
	{ value: '99.9%', label: 'Tỷ lệ uptime cốt lõi' }
];

export type SkillItem = {
	name: string;
	level: number;
	color: string;
	icon?: string;
};

export type SkillGroup = {
	title: string;
	items: SkillItem[];
};

export const skillGroups: SkillGroup[] = [
	{
		title: 'Web & Development',
		items: [
			{
				name: 'JavaScript',
				level: 92,
				color: '#f7df1e',
				icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
			},
			{
				name: 'TypeScript',
				level: 88,
				color: '#3178c6',
				icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
			},
			{
				name: 'React',
				level: 86,
				color: '#61dafb',
				icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
			},
			{
				name: 'Next.js',
				level: 82,
				color: '#111827',
				icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
			},
			{
				name: 'HTML5',
				level: 95,
				color: '#f16529',
				icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
			},
			{
				name: 'CSS3',
				level: 90,
				color: '#1572b6',
				icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
			},
			{
				name: 'Tailwind CSS',
				level: 90,
				color: '#06b6d4',
				icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'
			}
		]
	},
	{
		title: 'Backend & API',
		items: [
			{
				name: 'PHP',
				level: 95,
				color: '#777bb4',
				icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'
			},
			{
				name: 'Laravel',
				level: 95,
				color: '#ff2d20',
				icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg'
			},
			{
				name: 'Node.js',
				level: 87,
				color: '#3c873a',
				icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
			},
			{
				name: 'Express',
				level: 84,
				color: '#6b7280',
				icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
			},
			{
				name: 'NestJS',
				level: 80,
				color: '#e0234e',
				icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg'
			},
			{
				name: 'REST API',
				level: 92,
				color: '#14b8a6'
			},
			{
				name: 'Webhooks',
				level: 85,
				color: '#3b82f6'
			}
		]
	},
	{
		title: 'Database',
		items: [
			{
				name: 'MySQL',
				level: 90,
				color: '#00758f',
				icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
			},
			{
				name: 'PostgreSQL',
				level: 85,
				color: '#336791',
				icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
			},
			{
				name: 'MongoDB',
				level: 82,
				color: '#4fa94d',
				icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
			},
			{
				name: 'Redis',
				level: 80,
				color: '#dc382d',
				icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg'
			}
		]
	},
	{
		title: 'Cloud & DevOps',
		items: [
			{
				name: 'Docker',
				level: 85,
				color: '#2496ed',
				icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
			},
			{
				name: 'Vercel',
				level: 88,
				color: '#000000',
				icon: 'https://cdn.simpleicons.org/vercel/white'
			},
			{
				name: 'Cloudflare',
				level: 82,
				color: '#f38020'
			},
			{
				name: 'Nginx',
				level: 80,
				color: '#009639',
				icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg'
			},
			{
				name: 'CI/CD',
				level: 85,
				color: '#6366f1'
			}
		]
	},
	{
		title: 'Tools & Productivity',
		items: [
			{
				name: 'Git',
				level: 95,
				color: '#f05032',
				icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
			},
			{
				name: 'GitHub',
				level: 92,
				color: '#181717',
				icon: 'https://cdn.simpleicons.org/github/white'
			},
			{
				name: 'VS Code',
				level: 93,
				color: '#007acc',
				icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'
			},
			{
				name: 'Postman',
				level: 88,
				color: '#ff6c37',
				icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg'
			}
		]
	}
];
export const projects: Project[] = [
	{
		name: 'Prep4U',
		description:
			'Nền tảng luyện thi SAT/ACT online với hệ thống đề thi chuẩn hóa, chấm điểm tự động và phân tích năng lực theo từng kỹ năng giúp người học cải thiện điểm số rõ rệt.',
		role: 'Full-Stack Developer',
		stack: 'Laravel, MySQL, Blade, TailwindCSS...',
		link: 'https://prep4u.vn',
		thumbnail: 'https://prep4u.vn/images/v3/logo-center.png'
	},
	{
		name: 'EduPen',
		thumbnail: 'https://edupen.vn/images/edupen/logo2.png',
		description:
			'Hệ thống quản lý học tập (LMS) và nội dung số, giúp tổ chức giáo dục quản lý khóa học, học viên và tài liệu một cách tập trung và hiệu quả.',
		role: 'Full-Stack Developer',
		stack: 'Laravel, MySQL, REST API, VueJs, TailwindCSS...',
		link: 'https://edupen.vn'
	},
	{
		name: 'Edly',
		thumbnail: 'https://edly.vn/images/edly/edly-logo.png',
		description:
			'Nền tảng phân phối và học tập nội dung số thế hệ mới, tối ưu trải nghiệm học tập cá nhân hóa và khả năng mở rộng cho creator và doanh nghiệp.',
		role: 'Full-Stack Developer',
		stack: 'Laravel, Svelte, MongoDB, VueJs, TailwindCSS...',
		link: 'https://edly.vn'
	},
	{
		name: 'TaiLieuChuan',
		thumbnail: 'https://tailieuchuan.vn/logo.webp',
		description:
			'Website chia sẻ tài liệu học tập chất lượng cao với hệ thống tìm kiếm, phân loại và tối ưu SEO giúp người dùng tiếp cận nội dung nhanh chóng.',
		role: 'Full-Stack Developer',
		stack: 'Laravel, MySQL, Blade, Ajax, Bootstrap...',
		link: 'https://tailieuchuan.vn'
	}
];

export const experiences: Experience[] = [
	{
		period: '2025 - Hiện tại',
		role: 'Lập trình viên Full-Stack',
		company: 'Protean Studios',
		points: [
			'Phát triển và duy trì các hệ thống web full-stack, bao gồm dashboard và nền tảng học tập.',
			'Thiết kế API, xây dựng kiến trúc hệ thống và triển khai frontend/backend đồng bộ.',
			'Tối ưu hiệu suất, đảm bảo khả năng mở rộng và ổn định hệ thống production.'
		]
	},
	{
		period: '05/2024 - 12/2024',
		role: 'Magento Developer',
		company: 'Magenest Company',
		points: [
			'Phát triển và tùy chỉnh các module Magento cho hệ thống thương mại điện tử.',
			'Tích hợp API, tối ưu hiệu năng và xử lý các vấn đề liên quan đến hệ thống Magento.',
			'Phối hợp với team để triển khai và bảo trì hệ thống production.'
		]
	},
	{
		period: '01/2024 - 04/2024',
		role: 'Intern MERN Stack Developer',
		company: 'Internship',
		points: [
			'Tham gia phát triển ứng dụng web sử dụng MongoDB, Express, React và Node.js.',
			'Xây dựng RESTful API và kết nối frontend với backend.',
			'Học và áp dụng quy trình làm việc nhóm, Git và Agile.'
		]
	},
	{
		period: '2022 - 2025',
		role: 'Sinh viên Công nghệ Thông tin',
		company: 'Cao đẳng FPT',
		points: [
			'Học tập và thực hành các kiến thức nền tảng về lập trình và phát triển phần mềm.',
			'Thực hiện các dự án cá nhân và nhóm liên quan đến web development.',
			'Xây dựng nền tảng vững chắc về frontend, backend và cơ sở dữ liệu.'
		]
	}
];

export const services: string[] = [
	'Xây dựng ứng dụng web full-stack',
	'Thiết kế và tài liệu hóa RESTful API',
	'Tích hợp thanh toán, xác thực và tính năng CMS',
	'Tối ưu truy vấn cơ sở dữ liệu và hiệu năng ứng dụng',
	'Triển khai và vận hành hệ thống production'
];

export const processSteps: string[] = [
	'Tìm hiểu yêu cầu và mục tiêu kinh doanh',
	'Thiết kế kiến trúc và luồng dữ liệu',
	'Xây dựng frontend và backend',
	'Kiểm thử, tối ưu và hoàn thiện hệ thống',
	'Triển khai, giám sát và tiếp tục cải tiến'
];

export const highlights: Stat[] = [
	{
		value: '10+',
		label: 'Dự án thuộc các mảng LMS, thương mại điện tử, dashboard và công cụ nội bộ'
	},
	{ value: '4', label: 'Hệ thống production đã triển khai và vận hành' },
	{ value: 'Liên phòng ban', label: 'Phối hợp cùng product, design và vận hành' }
];
