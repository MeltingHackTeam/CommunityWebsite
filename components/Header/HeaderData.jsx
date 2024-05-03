export const headerData = {
    logo: 'MeltingHack',
    menu: [
        {
            label: 'Basic Nav',
            link: '#',
        },
        {
            label: 'Dropdown',
            link: '#',
            submenu: [
                { label: 'Dropdown Item 1', link: '#' },
                { label: 'Dropdown Item 2', link: '#' },
                { label: 'Dropdown Item 3', link: '#' },
                { label: 'Dropdown Item 4', link: '#' },
                { label: 'Dropdown Item 5', link: '#' },
            ],
        },
        {
            label: 'Subdropdown',
            link: '#',
            submenu: [
                {
                    label: 'Dropdown Item 1',
                    link: '#',
                    navdropdown: [
                        { label: 'Subdropdown Item 1', link: '#' },
                        { label: 'Subdropdown Item 2', link: '#' },
                    ],
                },
                {
                    label: 'Dropdown Item 2',
                    link: '#',
                    navdropdown: [
                        { label: 'Subdropdown Item 1', link: '#' },
                        { label: 'Subdropdown Item 2', link: '#' },
                    ],
                },
                {
                    label: 'Dropdown Item 3',
                    link: '#',
                    navdropdown: [
                        { label: 'Subdropdown Item 1', link: '#' },
                        { label: 'Subdropdown Item 2', link: '#' },
                    ],
                },
            ],
        },
    ]
};
