import {  ProjectType } from "./projectType.js";

export const Tools = {
    dewaltDrill: 'Dewalt Drill',
    dewaltSander: 'Dewalt Sander',
    circularSaw: 'Circular Saw',
    miterSaw: 'Miter Saw',
    hammer: 'Hammer',
    speedSquare: 'Speed Square',
    tapeMeasure: 'Tape Measure',
    angleGrinder: 'Angle Grinder',
    level: 'Level',
    transferPen: 'Transfer Pen',
    pyrographyPen: 'Pyrograpy Pen',
    clamps: 'Clamps',
    holeSaw: 'Hole Saw',
    tableSaw: 'Table Saw',
    nailGun: 'Nail Gun',
};

export const photoPath = '/../public/';

export const Projects: ProjectType[] = [
    {
        id: 'kitchen-remodel',
        name: 'Kitchen Remodel',
        description: 
            'We started with the demolition of the old cabinets, then patching and painting the walls and adding wallpaper. ' + 
            'I built out the cabinet, then cut the granite and stuck it on the cabinet. ' +
            'Last we cut, stained, and installed the new shelves.',
        date: new Date('January 17, 2024'),
        primaryPhoto: '',
        photos: [
            '/../public/kitchen00.jpg',
            '/../public/kitchen01.jpg',
            '/../public/kitchen02.jpg',
            '/../public/kitchen03.jpg',
            '/../public/kitchen04.jpg', 
            '/../public/kitchen05.jpg',
            '/../public/kitchen06.jpg',
            '/../public/kitchen07.jpg',
            '/../public/kitchen08.jpg',
            '/../public/kitchen09.jpg',
            '/../public/kitchen10.jpg', 
        ],
        difficulty: 'Easy',
        time: '2 days',
        tools: [
            Tools.hammer,
            Tools.dewaltDrill, 
            Tools.speedSquare,
            Tools.tapeMeasure,
            Tools.angleGrinder,
            Tools.level,
            Tools.circularSaw,
        ],
        supplies: [
            '2x4s',
            '3/4 plywood',
            '1x2 boards',
            'Construction screws',
            'Caulk',
            'Metal Shelf Brackets',
            'Granite',
            'Paint',
            'Wallpaper',
            'Stain'
        ],
        cost: 0,
    },
    {
        id: 'cornhole-boards',
        name: 'Cornhole Boards',
        description: 'I started by measuring and cutting the 2x4s for the frame. ' + 
        'I attached the plywood as the face and measured and cut the cornhole. ' + 
        'I used the bolts and more 2x4s for the legs, then stained and paitned the design on the face. ' +
        'Last, add polyurethane and lightly sand for a smooth finish. ',
        date: new Date('August 5, 2022'),
        primaryPhoto: '',
        photos: [
            `${photoPath}boards00.jpg`,
            `${photoPath}boards01.jpg`, 
            `${photoPath}boards02.jpg`,
            `${photoPath}boards03.jpg`, 
            `${photoPath}boards04.jpg`,
        ],
        difficulty: 'Easy',
        time: '',
        tools: [
            Tools.circularSaw,
            Tools.dewaltDrill, 
            Tools.holeSaw,
            Tools.tapeMeasure,
            Tools.tapeMeasure,
            Tools.speedSquare,
            Tools.dewaltSander
        ],
        supplies: [
            '2x4 boards',
            '3/4 plywood',
            'Construction Screws',
            'Bolts',
            'Stain',
            'Tape',
            'Polyeurthane'
        ],
        cost: 0,
    },
    {
        id: 'garden-beds',
        name: 'Garden Beds',
        description: '',
        date: new Date('May 5, 2025'),
        primaryPhoto: '',
        photos: [],
        difficulty: 'Easy',
        time: '',
        tools: [],
        supplies: [],
        cost: 0,
    },
    {
        id: 'bar',
        name: 'Bar',
        description: 'This project started with the demolition of the old cabinet, removing the old shelves and shutters. ' +
            'Then I measures and cut the new shelved from scrap wood we had from other projects. Then I painted the cabinet and shelves, ' +
            'and measures and installed them.',
        date: new Date('May 29, 2022'),
        primaryPhoto: '',
        photos: [
            `${photoPath}bar00.jpg`,
            `${photoPath}bar01.jpg`, 
        ],
        difficulty: 'Easy',
        time: '',
        tools: [
            Tools.dewaltDrill, 
            Tools.tapeMeasure, 
            Tools.level,
            Tools.circularSaw,
        ],
        supplies: [
            'Scrap wood',
            'Construction screws',
            'Paint',
        ],
        cost: 0,
    },
    {
        id: 'groomsmen-gifts',
        name: 'Groomsmen Gifts',
        description: 'Handmade coasters as a gift for each groomsmen in our wedding. ' + 
            'I started by tracing the images to a blank with Transfer paper and pen. ' + 
            'Then I used the pyrography pen to draw each image on the coaster, then stained each of them. ' + 
            'To finish up I cut and glued a cork sheet to the bottom of each as a coaster base.',
        date: new Date('August 18, 2022'),
        primaryPhoto: '',
        photos: [
            `${photoPath}coasters00.jpg`,
            `${photoPath}coasters01.jpg`, 
            `${photoPath}coasters02.jpg`, 
            `${photoPath}coasters03.jpg`, 
            `${photoPath}coasters04.jpg`,
            `${photoPath}coasters05.jpg`,
        ],
        difficulty: 'Easy',
        time: '',
        tools: [
            Tools.transferPen, 
            Tools.pyrographyPen, 
            Tools.clamps
        ],
        supplies: [
            'Cork', 
            'Coaster Blanks', 
            'Wood Glue', 
            'Stain', 
            'Transfer Paper'
        ],
        cost: 0,
    },
    {
        id: 'wedding-centerpieces',
        name: 'Wedding Centerpieces',
        description: 
            'We started by measuring and cutting all of the wood, then sanding each piece. ' +
            'Then we stained and dried each piece. When those were dry, we nailed them all together into the lanterns.',
        date: new Date('August 20, 2022'),
        primaryPhoto: '',
        photos: [
            `${photoPath}lanterns00.jpg`,
            `${photoPath}lanterns01.jpg`, 
            `${photoPath}lanterns02.jpg`, 
            `${photoPath}lanterns03.jpg`, 
        ],
        difficulty: 'Easy',
        time: '',
        tools: [
            Tools.tableSaw, 
            Tools.nailGun,
            Tools.speedSquare,
            Tools.tapeMeasure,
            Tools.hammer,
            Tools.clamps
        ],
        supplies: [
            'Cherry Wood blanks',
            'Stain',
            'Nails'
        ],
        cost: 0,
    }
];

