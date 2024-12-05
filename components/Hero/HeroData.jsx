import AgencyImage from '@/public/images/meltinghack_logo.png';
import BGClearLogoImage from '@/public/images/meltinghack_logo_bg_clear.png';
import BackgroundImage from '@/public/images/meltinghack_hero_bg.png';
import Avatar from '@/public/images/client-avatar.jpg';
import Image from '@/public/images/meltinghack_logo.png';

export const heroData = {
    agency: {
        name: "MeltingHack",
        jobTitle: "hackathons community!",
        image: AgencyImage,
        description: "Join the community which is a hub of knowledge and insights from hackathon!",
        letsTalkUrl: "https://discord.gg/XHqMZGQgzC",
    },
    business: {
        title: 'We help innovators to successfully bring their business to life',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto beatae doloribus odio nulla vero impedit quam omnis amet est! Ex ratione',
        backgroundImage: BackgroundImage,
        youtubeVideoUrl: 'https://www.youtube.com/watch?v=W-j4QGAgNu8',
        countOfClients: '4,000',
        avatars: [
            {
                name: 'avatar1',
                avatar: Avatar,
            },
            {
                name: 'avatar2',
                avatar: Avatar,
            },
            {
                name: 'avatar3',
                avatar: Avatar,
            },
            {
                name: 'avatar4',
                avatar: Avatar,
            },
            {
                name: 'avatar5',
                avatar: Avatar,
            },
        ]
    },
    corporate: {
        name: "MeltingHack",
        title: 'Unleash your potential and build practical skills',
        description: 'Melting Hack is a Tokyo-based non-profit international hackathon community that empowers individuals of all backgrounds to gain hands-on tech skills and bring their dreams to life. Through short-term prototyping, immersive workshops, and passionate connections, we foster an environment where innovation thrives.',
        message: 'Join us as we shape the future, one hackathon at a time.',
        backgroundImage: BackgroundImage,
        logoImage: BGClearLogoImage,
        learnMoreUrl: 'https://discord.gg/74WJ455uWw',
        youtubeVideoUrl: 'https://www.youtube.com/watch?v=m1UYhjEK_Mg',
    },
    portfolio: {
        title: 'Good Design is Obvious',
        title2: 'Great Design is Transparent',
    },
    startup: {
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quaerat',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In minus quasi eos doloribus soluta animi incidunt molestiae inventore minima mollitia vel quos aut, obcaecati officiis error. Fugiat aliquam cupiditate enim.',
        learnMoreUrl: '#',
    },
    marketing: {
        titleSpan1: 'Digital',
        titleSpan2: 'Marketing',
        titleSpan3: 'Service',
        titleSpan4: 'Agency',
        countOfClients: '4,000',
        avatars: [
            {
                name: 'avatar1',
                avatar: Avatar,
            },
            {
                name: 'avatar2',
                avatar: Avatar,
            },
            {
                name: 'avatar3',
                avatar: Avatar,
            },
            {
                name: 'avatar4',
                avatar: Avatar,
            },
            {
                name: 'avatar5',
                avatar: Avatar,
            },
        ]
    },
    aboutPage: {
        mainData: {
            title: "Creating the Best Solutions for your Business",
            image: Image,
            countOfClients: '4,000',
        },
        features1: [
            {name: 'Lorem ipsum dolor sit amet, consectetuer'},
            {name: 'Aenean commodo ligula eget dolor'},
            {name: 'Cum sociis natoque penatibus et magnis'},
        ],
        features2: [
            {name: 'Aenean commodo ligula eget dolor'},
            {name: 'Lorem ipsum dolor sit amet, consectetuer'},
            {name: 'Cum sociis natoque penatibus'},
        ],
        avatars: [
            {
                name: 'avatar1',
                avatar: Avatar,
            },
            {
                name: 'avatar2',
                avatar: Avatar,
            },
            {
                name: 'avatar3',
                avatar: Avatar,
            },
            {
                name: 'avatar4',
                avatar: Avatar,
            },
            {
                name: 'avatar5',
                avatar: Avatar,
            },
        ]
    }
};