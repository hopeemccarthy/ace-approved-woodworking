import { Projects } from "./ProjectsCatalog.js";

export const Category: {[key: string] : string} = {
    kitchen: 'Kitchen',
    outdoor: 'Outdoor',
    kids: 'Kids',
    decor: 'Decor',
    holiday: 'Holiday',
    all: 'All'
};


export const Supplies = {
    
};

type MenuItem = {
    title: string;
    route: string;
    submenu?: {
        title: string;
        route: string;
    }[];
}

export const NavigationMenu: MenuItem[] = [
    {
        title: 'Home',
        route: '',
    },
        {
        title: 'About',
        route: 'about/',
    },
    {
        title: 'Items',
        route: 'items/',
        submenu: [
            {
                title: Category['kitchen'],
                route: 'items/kitchen',
            },
            {
                title: Category['outdoor'],
                route: 'items/outdoor',
            },
            {
                title: Category['kids'],
                route: 'items/kids',
            },
            {
                title: Category['decor'],
                route: 'items/decor',
            },
            {
                title: Category['holiday'],
                route: 'items/holiday',
            },   
            {
                title: Category['all'],
                route: 'items/',
            },         
        ]
    },
    {
        title: 'Projects',
        route: 'projects/',
        submenu: Projects.map((project) => ({
            title: project.name,
            route: `projects/${project.id}`
        }))
    },
    {
        title: 'Contact',
        route: 'contact/',
    }
]