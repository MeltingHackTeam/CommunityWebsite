import PortfolioImg from '@/public/images/col-2.jpg';
import MainImage from '@/public/images/col-2.jpg';
import Image from '@/public/images/col-2.jpg';
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
import Event250425Image from '@/public/images/events/event250425_big4.png'
import Event250514Image from '@/public/images/events/event250514_small2.png'
import Event250517Image from '@/public/images/events/event250517_small3.png'
import Event250601Image from '@/public/images/events/event250601_big1.png'
import Event250702Image from '@/public/images/events/event250702_small1.png'
import Event250712Image from '@/public/images/events/event250712_big1.png'
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
                title: "Workshop",
                classes: "workshop",
                dataFilter: ".workshop"
            },
            {
                title: "Fun Event",
                classes: "fun-event",
                dataFilter: ".fun-event"
            }
        ],
        projects: [
            {
                title: 'Generative AI Video Creation: WAN Hackathon',
                slug: 'events/250712',
                description: '',
                category: 'hackathon',
                keywords: '',
                categories: [
                    { name: 'Hackathon' },
                    { name: 'Hybrid' },
                    { name: 'AI' },
                ],
                postedBy: '',
                content: '',
                mainImage: Event250712Image,
                media: [],
                images: [],
                tags: []
            },
            {
                title: 'A Night to Redefine the Future of Entertainment',
                slug: 'events/250702',
                description: '',
                category: 'fun-event',
                keywords: '',
                categories: [
                    { name: 'FunEvent' },
                    { name: 'Offline' },
                    { name: 'Game' },
                ],
                postedBy: '',
                content: '',
                mainImage: Event250702Image,
                media: [],
                images: [],
                tags: []
            },
            {
                title: 'AI Agent Hackathon: Revolutionizing Health Concierge and Fostering Innovation',
                slug: 'events/250601',
                description: '',
                category: 'hackathon',
                keywords: '',
                categories: [
                    { name: 'Hackathon' },
                    { name: 'Offline' },
                    { name: 'AI' },
                ],
                postedBy: '',
                content: '',
                mainImage: Event250601Image,
                media: [],
                images: [],
                tags: []
            },
            {
                title: '4 Hours to Viral: Short Video Creation Hackathon',
                slug: 'events/250517',
                description: '',
                category: 'hackathon',
                keywords: '',
                categories: [
                    { name: 'Hackathon' },
                    { name: 'Offline' },
                    { name: 'Creator' },],
                postedBy: '',
                content: '',
                mainImage: Event250517Image,
                media: [],
                images: [],
                tags: []
            },
            {
                title: 'Exploring the Latest Generative AI Landscape in China',
                slug: 'events/250514',
                description: '',
                category: 'workshop',
                keywords: '',
                categories: [
                    { name: 'Workshop' },
                    { name: 'Offline' },
                    { name: 'AI' },],
                postedBy: '',
                content: '',
                mainImage: Event250514Image,
                media: [],
                images: [],
                tags: []
            },
            {
                title: 'Tokyo Game Jam - Spring 2025',
                slug: 'events/250425',
                description: '',
                category: 'hackathon',
                keywords: '',
                categories: [
                    { name: 'Hackathon' },
                    { name: 'Offline' },
                    { name: 'Game' },],
                postedBy: '',
                content: '',
                mainImage: Event250425Image,
                media: [],
                images: [],
                tags: []
            },
            {
                title: 'Apple Vision Pro Hackathon',
                slug: 'events/250323',
                description: '',
                category: 'hackathon',
                keywords: '',
                categories: [
                    { name: 'Hackathon' },
                    { name: 'Offline' },
                    { name: 'VR' },],
                postedBy: '',
                content: '',
                mainImage: Event250323Image,
                media: [],
                images: [],
                tags: []
            },
            {
                title: 'Tokyo GameJam Community Night',
                slug: 'events/250219',
                description: '',
                category: 'fun-event',
                keywords: '',
                categories: [
                    { name: 'FunEvent' },
                    { name: 'Offline' },
                    { name: 'Game' },],
                postedBy: '',
                content: '',
                mainImage: Event250219Image,
                media: [],
                images: [],
                tags: []
            },
            {
                title: 'AI Agents 1Day Hackathon',
                slug: 'events/250209',
                description: '',
                category: 'hackathon',
                keywords: '',
                categories: [
                    { name: 'Hackathon' },
                    { name: 'Offline' },
                    { name: 'AI' },],
                postedBy: '',
                content: '',
                mainImage: Event250209Image,
                media: [],
                images: [],
                tags: []
            },
            {
                title: 'Subscription App Industry Networking Night',
                slug: 'events/241120',
                description: '',
                category: 'fun-event',
                services: [],
                client: '',
                projectLink: {},
                duration: '',
                content: '',
                mainImage: Event241120Image,
                media: [],
                images: [],
                categories: [
                    { name: 'FunEvent' },
                    { name: 'Offline' },
                    { name: 'Mobile' },
                ],
            },
            {
                title: 'AI Buildathon by Inception Studio',
                slug: 'events/241115',
                description: '',
                category: 'hackathon',
                services: [],
                client: '',
                projectLink: {},
                duration: '',
                content: '',
                mainImage: Event241115Image,
                media: [],
                images: [],
                categories: [
                    { name: 'Hackathon' },
                    { name: 'Offline' },
                    { name: 'AI' },
                ],
            },
            {
                title: 'Hands-on AI Workshop with Alibaba Cloud',
                slug: 'events/241002',
                description: '',
                category: 'workshop',
                services: [],
                client: '',
                projectLink: {},
                duration: '',
                content: '',
                mainImage: Event241002Image,
                media: [],
                images: [],
                categories: [
                    { name: 'Workshop' },
                    { name: 'Offline' },
                    { name: 'AI' },
                ],
            },
            {
                title: 'SubscriptionApp Hackathon with RevenueCat',
                slug: 'events/240830',
                description: '',
                category: 'hackathon',
                services: [],
                client: '',
                projectLink: {},
                duration: '',
                content: '',
                mainImage: Event240830Image,
                media: [],
                images: [],
                categories: [
                    { name: 'Hackathon' },
                    { name: 'Offline' },
                    { name: 'Mobile' },
                ],
            },
            {
                title: 'GameJam vol.1',
                slug: 'events/240818',
                description: '',
                category: 'hackathon',
                services: [],
                client: '',
                projectLink: {},
                duration: '',
                content: '',
                mainImage: Event240818Image,
                media: [],
                images: [],
                categories: [
                    { name: 'Hackathon' },
                    { name: 'Hybrid' },
                    { name: 'Game'},
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
                    { name: 'Game' },
                ],
            },
            {
                title: 'AR 1Day Hackathon with Apple and Mercari',
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
                    { name: 'Mobile'},
                ],
            },
            {
                title: 'Intel AI PC Hands-on Workshop with Intel',
                slug: 'events/240514',
                description: '',
                category: 'workshop',
                services: [],
                client: '',
                projectLink: {},
                duration: '',
                content: '',
                mainImage: Event240514Image,
                media: [],
                images: [],
                categories: [
                    { name: 'Workshop' },
                    { name: 'Offline' },
                    { name: 'AI' },
                ],
            },
            {
                title: 'Generative AI 1DAY Hackathon supported by Stability AI',
                slug: 'events/240427',
                description: '',
                category: 'hackathon',
                services: [],
                client: '',
                projectLink: {},
                duration: '',
                content: '',
                mainImage: Event240427Image,
                media: [],
                images: [],
                categories: [
                    { name: 'Hackathon' },
                    { name: 'Offline' },
                    { name: 'AI'},
                ],
            },
        ],
    },
};