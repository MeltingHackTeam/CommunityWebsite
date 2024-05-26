import MainImage from '@/public/images/blog-fullwidth.jpg'
import Image from '@/public/images/col-2.jpg';
import News1Image from '@/public/images/news/news_1.png'
import News2Image from '@/public/images/news/news_2.png'
import News3Image from '@/public/images/news/news_3.png'
import YuriIshitoya from '@/public/images/blog/yuri_ishitoya/yuri_ishitoya_1.png'
import ShunKatayose from '@/public/images/blog/shun_katayose/shun_katayose_2.png'


export const blogData = {
    business: {
        mainData: {
            title: "Blog",
            title2: "Melting Interview 🔥",
            description: "We are conducting interviews with MeltingHack members about their passionate involvement (Melting) in their life."
        },
        posts: [
            {
                title: 'Yuri Ishitoya',
                slug: 'Yuri-Ishitoya',
                description: '',
                keywords: '',
                categories: [],
                date: 'May 27',
                postedBy: 'Taku',
                content: '',
                mainImage: YuriIshitoya,
                media: [],
                images: [],
                tags: []
            },
            {
                title: 'Shun Katayose',
                slug: 'Shun-Katayose',
                description: '',
                keywords: '',
                categories: [],
                date: 'May 27',
                postedBy: 'Taku',
                content: '',
                mainImage: ShunKatayose,
                media: [],
                images: [],
                tags: []
            },
            // {
            //     title: 'Intel Ideathon Preparation',
            //     slug: 'Intel-Ideathon-Preparation',
            //     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
            //     keywords: 'key1, key2, key3',
            //     categories: [
            //         { name: 'Category 1', url: '#' },
            //         { name: 'Category 2', url: '#' },
            //     ],
            //     date: 'Oct 8',
            //     postedBy: 'Admin',
            //     content: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div className="row mt-4"> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
            //     mainImage: News2Image,
            //     media: [
            //         { image: Image, alt: 'image' },
            //         { image: Image, alt: 'image' },
            //         { image: Image, alt: 'image' },
            //     ],
            //     images: [
            //         { image: Image, alt: 'image' },
            //         { image: Image, alt: 'image' },
            //     ],
            //     tags: [
            //         { name: 'Tag 1', url: '#' },
            //         { name: 'Tag 2', url: '#' },
            //         { name: 'Tag 3', url: '#' }
            //     ]
            // },
            // {
            //     title: 'The Generative AI Expedition',
            //     slug: 'The-Generative-AI-Expedition',
            //     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
            //     keywords: 'key1, key2, key3',
            //     categories: [
            //         { name: 'Category 1', url: '#' },
            //         { name: 'Category 2', url: '#' },
            //     ],
            //     date: 'Oct 8',
            //     postedBy: 'Admin',
            //     content: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div className="row mt-4"> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
            //     mainImage: News3Image,
            //     media: [
            //         { image: Image, alt: 'image' },
            //         { image: Image, alt: 'image' },
            //         { image: Image, alt: 'image' },
            //     ],
            //     images: [
            //         { image: Image, alt: 'image' },
            //         { image: Image, alt: 'image' },
            //     ],
            //     tags: [
            //         { name: 'Tag 1', url: '#' },
            //         { name: 'Tag 2', url: '#' },
            //         { name: 'Tag 3', url: '#' }
            //     ]
            // },
        ],
    },
    corporate: {
        mainData: {
            title: "Journal",
            title2: "Our Recent News",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem obcaecati, placeat nemo natus deleniti iusto labore quod quisquam quasi iure dolore architecto maxime beatae"
        },
        posts: [
            {
                title: 'Blog Post Title',
                slug: 'blog-post-title',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                keywords: 'key1, key2, key3',
                categories: [
                    { name: 'Category 1', url: '#' },
                    { name: 'Category 2', url: '#' },
                ],
                date: 'Oct 8',
                postedBy: 'Admin',
                content: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div className="row mt-4"> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
                mainImage: MainImage,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                images: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                tags: [
                    { name: 'Tag 1', url: '#' },
                    { name: 'Tag 2', url: '#' },
                    { name: 'Tag 3', url: '#' }
                ]
            },
            {
                title: 'Blog Post Title',
                slug: 'blog-post-title-1',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                keywords: 'key1, key2, key3',
                categories: [
                    { name: 'Category 1', url: '#' },
                    { name: 'Category 2', url: '#' },
                ],
                date: 'Oct 8',
                postedBy: 'Admin',
                content: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div className="row mt-4"> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
                mainImage: MainImage,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                images: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                tags: [
                    { name: 'Tag 1', url: '#' },
                    { name: 'Tag 2', url: '#' },
                    { name: 'Tag 3', url: '#' }
                ]
            },
            {
                title: 'Blog Post Title',
                slug: 'blog-post-title-2',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                keywords: 'key1, key2, key3',
                categories: [
                    { name: 'Category 1', url: '#' },
                    { name: 'Category 2', url: '#' },
                ],
                date: 'Oct 8',
                postedBy: 'Admin',
                content: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div className="row mt-4"> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
                mainImage: MainImage,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                images: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                tags: [
                    { name: 'Tag 1', url: '#' },
                    { name: 'Tag 2', url: '#' },
                    { name: 'Tag 3', url: '#' }
                ]
            },
        ],
    },
    blogListFullwidthDarkPage: {
        posts: [
            {
                title: 'Blog Post Title',
                slug: 'blog-post-title',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                keywords: 'key1, key2, key3',
                categories: [
                    { name: 'Category 1', url: '#' },
                    { name: 'Category 2', url: '#' },
                ],
                date: 'Oct 8',
                postedBy: 'Admin',
                content: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div className="row mt-4"> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
                mainImage: MainImage,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                images: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                tags: [
                    { name: 'Tag 1', url: '#' },
                    { name: 'Tag 2', url: '#' },
                    { name: 'Tag 3', url: '#' }
                ]
            },
            {
                title: 'Blog Post Title',
                slug: 'blog-post-title-1',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                keywords: 'key1, key2, key3',
                categories: [
                    { name: 'Category 1', url: '#' },
                    { name: 'Category 2', url: '#' },
                ],
                date: 'Oct 8',
                postedBy: 'Admin',
                content: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div className="row mt-4"> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
                mainImage: MainImage,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                images: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                tags: [
                    { name: 'Tag 1', url: '#' },
                    { name: 'Tag 2', url: '#' },
                    { name: 'Tag 3', url: '#' }
                ]
            },
            {
                title: 'Blog Post Title',
                slug: 'blog-post-title-2',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                keywords: 'key1, key2, key3',
                categories: [
                    { name: 'Category 1', url: '#' },
                    { name: 'Category 2', url: '#' },
                ],
                date: 'Oct 8',
                postedBy: 'Admin',
                content: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div className="row mt-4"> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
                mainImage: MainImage,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                images: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                tags: [
                    { name: 'Tag 1', url: '#' },
                    { name: 'Tag 2', url: '#' },
                    { name: 'Tag 3', url: '#' }
                ]
            },
        ],
    },
    blogListSidebarDark: {
        categories: [
            {
                name: 'Category One',
                countOfPosts: '2',
                url: '#',
            },
            {
                name: 'Category Two',
                countOfPosts: '4',
                url: '#',
            },
            {
                name: 'Category Three',
                countOfPosts: '3',
                url: '#',
            },
            {
                name: 'Category Four',
                countOfPosts: '5',
                url: '#',
            },
        ],
        tags: [
            {
                name: 'Tag 1',
                url: '#',
            },
            {
                name: 'Tag 2',
                url: '#',
            },
            {
                name: 'Tag 3',
                url: '#',
            },
            {
                name: 'Tag 4',
                url: '#',
            },
            {
                name: 'Tag 5',
                url: '#',
            },
        ],
        archive: [
            {
                name: 'November 2023',
                url: '#',
            },
            {
                name: 'October 2023',
                url: '#',
            },
            {
                name: 'September 2023',
                url: '#',
            },
            {
                name: 'August 2023',
                url: '#',
            },
            {
                name: 'Tag 5',
                url: '#',
            },
        ],
        posts: [
            {
                title: 'Blog Post Title',
                slug: 'blog-post-title',
                isTrending: true,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                keywords: 'key1, key2, key3',
                categories: [
                    { name: 'Category 1', url: '#' },
                    { name: 'Category 2', url: '#' },
                ],
                date: 'Oct 8',
                postedBy: 'Admin',
                content: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div className="row mt-4"> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
                mainImage: MainImage,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                images: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                tags: [
                    { name: 'Tag 1', url: '#' },
                    { name: 'Tag 2', url: '#' },
                    { name: 'Tag 3', url: '#' }
                ]
            },
            {
                title: 'Blog Post Title',
                slug: 'blog-post-title-1',
                isTrending: true,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                keywords: 'key1, key2, key3',
                categories: [
                    { name: 'Category 1', url: '#' },
                    { name: 'Category 2', url: '#' },
                ],
                date: 'Oct 8',
                postedBy: 'Admin',
                content: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div className="row mt-4"> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
                mainImage: MainImage,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                images: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                tags: [
                    { name: 'Tag 1', url: '#' },
                    { name: 'Tag 2', url: '#' },
                    { name: 'Tag 3', url: '#' }
                ]
            },
            {
                title: 'Blog Post Title',
                slug: 'blog-post-title-2',
                isTrending: true,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                keywords: 'key1, key2, key3',
                categories: [
                    { name: 'Category 1', url: '#' },
                    { name: 'Category 2', url: '#' },
                ],
                date: 'Oct 8',
                postedBy: 'Admin',
                content: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div className="row mt-4"> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
                mainImage: MainImage,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                images: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                tags: [
                    { name: 'Tag 1', url: '#' },
                    { name: 'Tag 2', url: '#' },
                    { name: 'Tag 3', url: '#' }
                ]
            },
        ],
    }
};