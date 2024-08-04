import PortfolioImg from '@/public/images/col-2.jpg';
import MainImage from '@/public/images/col-2.jpg';
import Image from '@/public/images/col-2.jpg';
import Event240519Image from '@/public/images/events/event240519_big2.png'
import Event240630Image from '@/public/images/events/event240630_small3.png'
import Event240713Image from '@/public/images/events/event240713_big1.png'
import SubscriptionImage from '@/public/images/events/subscription_hackathon.png'

export const portfolioData = {
    agency: {
        mainData: {
            title: "Portfolio",
            title2: "Recent Projects",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem obcaecati, placeat nemo natus deleniti iusto labore quod quisquam quasi iure dolore architecto maxime beatae"
        },
        projects: [
            {
                title: 'Project Title Here',
                slug: 'agency-first',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div className="row mt-4"> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
                mainImage: PortfolioImg,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                images: [
                    { image: PortfolioImg, alt: 'image' },
                    { image: PortfolioImg, alt: 'image' },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
            },
            {
                title: 'Project Title Here',
                slug: 'agency-second',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div className="row mt-4"> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
                mainImage: PortfolioImg,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                images: [
                    { image: PortfolioImg },
                    { image: PortfolioImg },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
            },
            {
                title: 'Project Title Here',
                slug: 'agency-third',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div className="row mt-4"> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
                mainImage: PortfolioImg,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                images: [
                    { image: PortfolioImg },
                    { image: PortfolioImg },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
            },
        ],
    },
    business: {
        mainData: {
            title: "Portfolio",
            title2: "Recent Projects",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem obcaecati, placeat nemo natus deleniti iusto labore quod quisquam quasi iure dolore architecto maxime beatae"
        },
        projects: [
            {
                title: 'Project Title Here',
                slug: 'business-first',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div className="row mt-4"> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
                mainImage: PortfolioImg,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                images: [
                    { image: PortfolioImg },
                    { image: PortfolioImg },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
            },
            {
                title: 'Project Title Here',
                slug: 'business-second',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div className="row mt-4"> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
                mainImage: PortfolioImg,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                images: [
                    { image: PortfolioImg },
                    { image: PortfolioImg },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
            },
            {
                title: 'Project Title Here',
                slug: 'business-third',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div className="row mt-4"> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
                mainImage: PortfolioImg,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                images: [
                    { image: PortfolioImg },
                    { image: PortfolioImg },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
            },
        ],
    },
    portfolio: {
        navigationList: [
            {
                title: "First",
                classes: "first",
                dataFilter: ".first"
            },
            {
                title: "Second",
                classes: "second",
                dataFilter: ".second"
            },
            {
                title: "Third",
                classes: "third",
                dataFilter: ".third"
            },
        ],
        projects: [
            {
                title: 'Project Title Here',
                slug: 'portfolio-first',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                category: 'first',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div className="row mt-4"> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
                mainImage: PortfolioImg,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                images: [
                    { image: PortfolioImg },
                    { image: PortfolioImg },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
            },
            {
                title: 'Project Title Here',
                slug: 'portfolio-second',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                category: 'first',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div className="row mt-4"> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
                mainImage: PortfolioImg,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                images: [
                    { image: PortfolioImg },
                    { image: PortfolioImg },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
            },
            {
                title: 'Project Title Here',
                slug: 'portfolio-third',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                category: 'second',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div className="row mt-4"> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
                mainImage: PortfolioImg,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                images: [
                    { image: PortfolioImg },
                    { image: PortfolioImg },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
            },
            {
                title: 'Project Title Here',
                slug: 'portfolio-third',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                category: 'third',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div className="row mt-4"> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
                mainImage: PortfolioImg,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                images: [
                    { image: PortfolioImg },
                    { image: PortfolioImg },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
            },
        ],
    },
    startup: {
        mainData: {
            title: "Portfolio",
            title2: "Recent Projects",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem obcaecati, placeat nemo natus deleniti iusto labore quod quisquam quasi iure dolore architecto maxime beatae"
        },
        projects: [
            {
                title: 'Project Title Here',
                slug: 'startup-first',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div className="row mt-4"> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
                mainImage: PortfolioImg,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                images: [
                    { image: PortfolioImg },
                    { image: PortfolioImg },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
            },
            {
                title: 'Project Title Here',
                slug: 'startup-second',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div className="row mt-4"> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
                mainImage: PortfolioImg,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                images: [
                    { image: PortfolioImg },
                    { image: PortfolioImg },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
            },
            {
                title: 'Project Title Here',
                slug: 'startup-third',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div className="row mt-4"> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
                mainImage: PortfolioImg,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                images: [
                    { image: PortfolioImg },
                    { image: PortfolioImg },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
            },
        ],
    },
    marketing: {
        mainData: {
            title: "Portfolio",
            title2: "Recent Projects",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem obcaecati, placeat nemo natus deleniti iusto labore quod quisquam quasi iure dolore architecto maxime beatae"
        },
        projects: [
            {
                title: 'Project Title Here',
                slug: 'marketing-first',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div className="row mt-4"> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
                mainImage: PortfolioImg,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                images: [
                    { image: PortfolioImg },
                    { image: PortfolioImg },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
            },
            {
                title: 'Project Title Here',
                slug: 'marketing-second',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div className="row mt-4"> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
                mainImage: PortfolioImg,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                images: [
                    { image: PortfolioImg },
                    { image: PortfolioImg },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
            },
            {
                title: 'Project Title Here',
                slug: 'marketing-third',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
                services: [
                    { name: 'List item' },
                    { name: 'List item' },
                ],
                client: 'FlaTheme',
                projectLink: {
                    title: 'www.flatheme.net',
                    url: 'https://www.flatheme.net'
                },
                duration: '121 hours',
                content: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <div className="row mt-4"> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> <div className="col-12 col-lg-6"> <h4>Heading</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit odit eum itaque, fugiat illo dolores molestias obcaecati culpa</p> </div> </div>',
                mainImage: PortfolioImg,
                media: [
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                    { image: Image, alt: 'image' },
                ],
                images: [
                    { image: PortfolioImg },
                    { image: PortfolioImg },
                ],
                categories: [
                    { name: 'Category' },
                    { name: 'Category' },
                ],
            },
        ],
    },
    portfolioList: {
        navigationList: [
            {
                title: "Hackathon",
                classes: "hackathon",
                dataFilter: ".hackathon"
            },
            {
                title: "Fun Event",
                classes: "fun-event",
                dataFilter: ".fun-event"
            }
        ],
        projects: [
            {
                title: 'Subscription App Hackathon: ​RevenueCat Ship-a-ton Japan Special',
                slug: 'event-sites/HTML/subscriptionhackathon.html',
                description: '',
                category: 'hackathon',
                services: [],
                client: '',
                projectLink: {},
                duration: '',
                content: '',
                mainImage: SubscriptionImage,
                media: [],
                images: [],
                categories: [
                    { name: 'Hackathon' },
                    { name: 'Offline' },
                ],
            },
            {
                title: 'MeltingHack Meetup Night',
                slug: 'events/240713',
                description: '',
                category: 'fun-event',
                services: [],
                client: '',
                projectLink: {},
                duration: '',
                content: '',
                mainImage: Event240713Image,
                media: [],
                images: [],
                categories: [
                    { name: 'FunEvent' },
                    { name: 'Offline' },
                ],
            },
            {
                title: 'MeltingHack Sprint#2: Card Game Development',
                slug: 'events/240630',
                description: '',
                category: 'hackathon',
                services: [],
                client: '',
                projectLink: {},
                duration: '',
                content: '',
                mainImage: Event240630Image,
                media: [],
                images: [],
                categories: [
                    { name: 'Hackathon' },
                    { name: 'Online' },
                ],
            },
            {
                title: 'AR 1Day Hackathon',
                slug: 'events/240519',
                description: '',
                category: 'hackathon',
                services: [],
                client: '',
                projectLink: {},
                duration: '',
                content: '',
                mainImage: Event240519Image,
                media: [],
                images: [],
                categories: [
                    { name: 'Hackathon' },
                    { name: 'Offline' },
                ],
            },
        ],
    },
};