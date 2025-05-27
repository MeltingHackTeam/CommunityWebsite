import Image from '@/public/images/col-3-square.jpg';
import OnlineSessionImage from '@/public/images/online-session.webp';
import BornFireImage from '@/public/images/born-fire.webp';
import FeaturedEventImage from '@/public/images/featured-event.png';

export const aboutData = {
    mainData: {
        name1: 'Fact Title',
        count1: '12',
        image1: Image,
        name2: 'Fact Title',
        count2: '34',
        image2: Image,
        title1: 'About US',
        title2: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
        biography: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum maiores necessitatibus deleniti dolore, enim inventore',
        learnMoreUrl: '#',
    },
    skills: [
        {
            name: 'Web Development',
            progress: '94',
        },
        {
            name: 'UI & UX Design',
            progress: '90',
        },
    ],
    business: {
        mainData: {
            name1: 'Fact Title',
            count1: '12',
            image1: Image,
            name2: 'Fact Title',
            count2: '34',
            image2: Image,
            title1: 'About US',
            title2: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
            biography: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum maiores necessitatibus deleniti dolore, enim inventore',
            learnMoreUrl: '#',
        }
    },
    corporate: {
        mainData: {
            name1: 'Community Members',
            count1: '600',
            image1: OnlineSessionImage,
            name2: 'Events Organized',
            count2: '20',
            image2: BornFireImage,
            title1: 'About US',
            title2: 'MeltingHack: a Hackathon hub for anyone ready to take on new challenges',
            biography: "Let's ignite a global movement of passionate dreamers turning ideas into reality! Join us in shaping a brighter future together!",
            learnMoreUrl: '#',
        }
    },
    marketing: {
        mainData: {
            title: "サブスクアプリ Hackathon: ​RevenueCat Ship-a-ton Japan Special",
            image: FeaturedEventImage,
            featuredSite: 'https://subscription-hackathon.melting-hack.tokyo/',
            eventSite: 'https://melting-hack.connpass.com/event/327248/',
            eventSiteEnglish: 'https://lu.ma/dk0afwud',
        },
        features1: [
            {name: 'Up to 100,000 yen in funding per team'},
            {name: 'Build a monetized app using the RevenueCat SDK'},
            {name: 'A special edition of the global hackathon \"RevenueCat Ship-a-ton\"'},
        ],
        features2: [
            {name: 'Sessions on monetization tips and strategies'},
            {name: 'Support in both Japanese and English'},
            {name: 'First prize: $5,000 USD and a week-long ad campaign on a digital billboard'},
        ]
    },
    servicesPage: {
        mainData: {
            title: "We're a team of marketing specialists with innovative thinking",
            name1: 'Fact Title',
            count1: '12',
            image1: Image,
            name2: 'Fact Title',
            count2: '34',
            image2: Image,
        },
        features: [
            { name: 'Lorem ipsum dolor sit amet, consectetuer' },
            { name: 'Aenean commodo ligula eget dolor' },
            { name: 'Cum sociis natoque penatibus et magnis' },
            { name: 'Lorem ipsum dolor sit amet, consectetuer' },
        ],
    },
};