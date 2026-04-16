import { Category } from "./constants.js";
import { ItemListingInfo } from "./ItemListing.js";

export const ItemsList: ItemListingInfo[] = [
    {
      id: 0,
      name: 'Cookbook Stand',
      photo: '/../public/cookbookStand.jpg',
      availableUnits: 5,
      description: '',
      category: Category['kitchen']
    },
    {
      id: 1,
      name: 'Cornhole Boards',
      photo: '/../public/cornholeBoards.jpg',
      availableUnits: 5,
      description: '',
      category: Category['outdoor']
    },
    {
      id: 2,
      name: 'Wooden Spoon - Classic',
      photo: '/../public/woodenSpoonClassic.jpg',
      availableUnits: 5,
      description: '',
      category: Category['kitchen']
    },
    {
      id: 3,
      name: 'Centerpiece Lanterns',
      photo: '/../public/lanterns.jpg',
      availableUnits: 5,
      description: 'A set of 3 lanterns, created for the centerpieces for our wedding.',
      category: Category['decor']
    },
    {
      id: 4,
      name: 'Rattle',
      photo: '/../public/rattle.jpg',
      availableUnits: 5,
      description: 'A baptism gift for our first nephew, James.',
      category: Category['kids']
    },
    {
      id: 5,
      name: 'Large Frame',
      photo: '/../public/largeFrame.jpg',
      availableUnits: 5,
      description: '',
      category: Category['decor']
    },
    {
      id: 6,
      name: 'Small Frame',
      photo: '/../public/smallFrame.jpg',
      availableUnits: 5,
      description: '',
      category: Category['decor']
    },
    {
      id: 6,
      name: 'Garden Bed',
      photo: '/../public/gardenBed.jpg',
      availableUnits: 5,
      description: '',
      category: Category['outdoor']
    },
  ];