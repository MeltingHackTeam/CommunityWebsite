import MainImage from '@/public/images/blog-fullwidth.jpg'
import Image from '@/public/images/col-2.jpg';
import News1Image from '@/public/images/news/news_1.png'
import News2Image from '@/public/images/news/news_2.png'
import News3Image from '@/public/images/news/news_3.png'
import Event240427Image from '@/public/images/events/event240427_big1.png'
import Event240514Image from '@/public/images/events/event240514_small1.png'
import Event240519Image from '@/public/images/events/event240519_big2.png'
import Event240630Image from '@/public/images/events/event240630_small3.png'
import Event240713Image from '@/public/images/events/event240713_big1.png'
import Event240818Image from '@/public/images/events/event240818_big2.png'
import Event240830Image from '@/public/images/events/event240830_big1.png'
import Event241002Image from '@/public/images/events/event241002_small2.png'
import Event241115Image from '@/public/images/events/event241115_small5.png'
import Event241120Image from '@/public/images/events/event241120_big1.png'
import Event250209Image from '@/public/images/events/event250209_small2.png'
import Event250219Image from '@/public/images/events/event250219_small1.png'
import Event250323Image from '@/public/images/events/event250323_big1.png'
import Event250425Image from '@/public/images/events/event250425_big3.png'
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
        ],
    },
    events: {
        mainData: {
            title: "Events",
            title2: "Event Reports 🎞️",
            description: "Let's dive into our passionate memory, where we were so enthusiastic that it felt like we were melting."
        },
        posts: [
            {
                title: 'Tokyo Game Jam - Spring 2025',
                slug: '../events/250425',
                description: '',
                keywords: '',
                categories: [
                    { name: 'Hackathon' },
                    { name: 'Offline' },
                    { name: 'Game' },],
                date: 'April 25th - 27th, 2025',
                postedBy: '',
                content: '',
                mainImage: Event250425Image,
                media: [],
                images: [],
                tags: []
            },
            {
                title: 'Apple Vision Pro Hackathon',
                slug: '../events/250323',
                description: '',
                keywords: '',
                categories: [
                    { name: 'Hackathon' },
                    { name: 'Offline' },
                    { name: 'VR' },],
                date: 'March 21st - 23rd, 2025',
                postedBy: '',
                content: '',
                mainImage: Event250323Image,
                media: [],
                images: [],
                tags: []
            },
            {
                title: 'Tokyo GameJam Community Night',
                slug: '../events/250219',
                description: '',
                keywords: '',
                categories: [
                    { name: 'FunEvent' },
                    { name: 'Offline' },
                    { name: 'Game' },],
                date: 'February 19th, 2025',
                postedBy: '',
                content: '',
                mainImage: Event250219Image,
                media: [],
                images: [],
                tags: []
            },
            {
                title: 'AI Agents 1Day Hackathon',
                slug: '../events/250209',
                description: '',
                keywords: '',
                categories: [
                    { name: 'Hackathon' },
                    { name: 'Offline' },
                    { name: 'AI' },],
                date: 'February 9th, 2025',
                postedBy: '',
                content: '',
                mainImage: Event250209Image,
                media: [],
                images: [],
                tags: []
            },
            {
                title: 'Subscription App Industry Networking Night',
                slug: '../events/241120',
                description: '',
                keywords: '',
                categories: [
                    { name: 'FunEvent' },
                    { name: 'Offline' },
                    { name: 'Mobile' },],
                date: 'November 20th, 2024',
                postedBy: '',
                content: '',
                mainImage: Event241120Image,
                media: [],
                images: [],
                tags: []
            },
            {
                title: 'AI Buildathon by Inception Studio',
                slug: '../events/241115',
                description: '',
                keywords: '',
                categories: [
                    { name: 'Hackathon' },
                    { name: 'Offline' },
                    { name: 'AI' },],
                date: 'November 15th, 2024',
                postedBy: '',
                content: '',
                mainImage: Event241115Image,
                media: [],
                images: [],
                tags: []
            },
            {
                title: 'Hands-on AI Workshop with Alibaba Cloud',
                slug: '../events/241002',
                description: '',
                keywords: '',
                categories: [
                    { name: 'Workshop' },
                    { name: 'Offline' },
                    { name: 'AI' },],
                date: 'October 2nd, 2024',
                postedBy: '',
                content: '',
                mainImage: Event241002Image,
                media: [],
                images: [],
                tags: []
            },
            {
                title: 'SubscriptionApp Hackathon with RevenueCat',
                slug: '../events/240830',
                description: '',
                keywords: '',
                categories: [
                    { name: 'Hackathon' },
                    { name: 'Offline' },
                    { name: 'Mobile' },
                ],
                date: 'August 30th, 2024',
                postedBy: '',
                content: '',
                mainImage: Event240830Image,
                media: [],
                images: [],
                tags: []
            },
            {
                title: 'GameJam vol.1',
                slug: '../events/240818',
                description: '',
                keywords: '',
                categories: [
                    { name: 'Hackathon' },
                    { name: 'Hybrid' },
                    { name: 'Game'},
                ],
                date: 'August 18th, 2024',
                postedBy: '',
                content: '',
                mainImage: Event240818Image,
                media: [],
                images: [],
                tags: []
            },
            {
                title: 'MeltingHack Meetup Night',
                slug: '../events/240713',
                description: '',
                keywords: '',
                categories: [
                    { name: 'FunEvent' },
                    { name: 'Offline' },
                ],
                date: 'July 13th, 2024',
                postedBy: '',
                content: '',
                mainImage: Event240713Image,
                media: [],
                images: [],
                tags: []
            },
            {
                title: 'MeltingHack Sprint#2: Card Game Development',
                slug: '../events/240630',
                description: '',
                keywords: '',
                categories: [
                    { name: 'Hackathon' },
                    { name: 'Online' },
                    { name: 'Game' },
                ],
                date: 'June 30th, 2024',
                postedBy: '',
                content: '',
                mainImage: Event240630Image,
                media: [],
                images: [],
                tags: []
            },
            {
                title: 'AR 1Day Hackathon with Apple and Mercari',
                slug: '../events/240519',
                description: '',
                keywords: '',
                categories: [
                    { name: 'Hackathon' },
                    { name: 'Offline' },
                    { name: 'Mobile'},
                ],
                date: 'May 19th, 2024',
                postedBy: '',
                content: '',
                mainImage: Event240519Image,
                media: [],
                images: [],
                tags: []
            },
            {
                title: 'Intel AI PC Hands-on Workshop with Intel',
                slug: '../events/240514',
                description: '',
                keywords: '',
                categories: [
                    { name: 'Workshop' },
                    { name: 'Offline' },
                    { name: 'AI' },
                ],
                date: 'May 14th, 2024',
                postedBy: '',
                content: '',
                mainImage: Event240514Image,
                media: [],
                images: [],
                tags: []
            },
            {
                title: 'Generative AI 1DAY Hackathon supported by Stability AI',
                slug: '../events/240427',
                description: '',
                keywords: '',
                categories: [
                    { name: 'Hackathon' },
                    { name: 'Offline' },
                    { name: 'AI'},
                ],
                date: 'April 27th, 2024',
                postedBy: '',
                content: '',
                mainImage: Event240427Image,
                media: [],
                images: [],
                tags: []
            },
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