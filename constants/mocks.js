const catagories = [
    {
        id: plants,
        name: 'Plants',
        tags: ['products', 'inspirations'],
        count: 147,
        Image: require('../assets/images/plants.png')
    },
    {
        id: seeds,
        name: 'Seeds',
        tags: ['products', 'shop'],
        count: 16,
        Image: require('../assets/images/seeds.png')
    },
    {
        id: flowers,
        name: 'Flowers',
        tags: ['products', 'inspirations'],
        count: 68,
        Image: require('../assets/images/flowers.png')
    },
    {
        id: sprayers,
        name: 'Sprayers',
        tags: ['products', 'shop'],
        count: 17,
        Image: require('../assets/images/sprayers.png')
    },
    {
        id: pots,
        name: 'Pots',
        tags: ['products', 'shop'],
        count: 47,
        Image: require('../assets/images/pots.png')
    },
    {
        id: fertilizers,
        name: 'Fertilizers',
        tags: ['products', 'inspirations', 'shop'],
        count: 47,
        Image: require('../assets/images/fertilizers.png')
    }
];

const products = [
    {
        id: 1,
        name: '',
        description: '',
        tags: ['Interior', '27m', 'Ideas'],
        gallery: [
            require('assets/images/plants_1.png'),
            require('assets/images/plants_2.png'),
            require('assets/images/plants_3.png'),
            // Showing only 3 images, show +3 for the rest
            require('assets/images/plants_1.png'),
            require('assets/images/plants_2.png'),
            require('assets/images/plants_3.png'),
        ]
    }
];

const explore = [
    // Images
    require('../assets/images/explore_1.png'),
    require('../assets/images/explore_2.png'),
    require('../assets/images/explore_3.png'),
    require('../assets/images/explore_4.png'),
    require('../assets/images/explore_5.png'),
    require('../assets/images/explore_6.png'),
]

const profile = [

];

export {
    catagories,
    products,
    profile,
    explore,
}