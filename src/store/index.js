import {createStore} from 'redux';

const INITIAL_STATE = {
  data: [
    {
      id: 1,
      user: 'test',
      location_name: 'location 1',
      liked: false,
      current_pagination: 0,
      pictures: [
        'https://3.bp.blogspot.com/-BfkLNbcybvI/VdSQX7HHXcI/AAAAAAAAOFQ/LxpXHROyD_8/s1600/001-chameleon-house-petr-hajek-architekti-1050x700.jpg',
        'https://4.bp.blogspot.com/-I5u5Q9jEXoU/VdSQX2_or0I/AAAAAAAAOFM/g25aJM6_OFM/s1600/001-caroline-residence-architecton-1050x707.jpg',
        'https://1.bp.blogspot.com/--4MUgRsbguI/VdSQYpl4QwI/AAAAAAAAOFU/J2_OLW-lZyM/s1600/001-emerald-star-dwell-development-1050x700.jpg',
        'https://4.bp.blogspot.com/-GD288lvbSYg/VdSQY0QEczI/AAAAAAAAOFY/lkzpadUT9zU/s1600/001-guest-houses-yod-designlab-1050x700.jpg',
        'https://4.bp.blogspot.com/-8CYzpzCj2Wc/VdSQZs0pTsI/AAAAAAAAOFo/Zv_bOcZ6FPo/s1600/002-armadale-house-mitsuori-architects.jpg',
      ],
    },
    {
      id: 2,
      user: 'test2',
      location_name: 'location 2',
      liked: true,
      current_pagination: 0,
      pictures: [
        'https://4.bp.blogspot.com/-GD288lvbSYg/VdSQY0QEczI/AAAAAAAAOFY/lkzpadUT9zU/s1600/001-guest-houses-yod-designlab-1050x700.jpg',
        'https://1.bp.blogspot.com/--4MUgRsbguI/VdSQYpl4QwI/AAAAAAAAOFU/J2_OLW-lZyM/s1600/001-emerald-star-dwell-development-1050x700.jpg',
        'https://3.bp.blogspot.com/-BfkLNbcybvI/VdSQX7HHXcI/AAAAAAAAOFQ/LxpXHROyD_8/s1600/001-chameleon-house-petr-hajek-architekti-1050x700.jpg',
        'https://4.bp.blogspot.com/-I5u5Q9jEXoU/VdSQX2_or0I/AAAAAAAAOFM/g25aJM6_OFM/s1600/001-caroline-residence-architecton-1050x707.jpg',
        'https://4.bp.blogspot.com/-8CYzpzCj2Wc/VdSQZs0pTsI/AAAAAAAAOFo/Zv_bOcZ6FPo/s1600/002-armadale-house-mitsuori-architects.jpg',
      ],
    },
    {
      id: 3,
      user: 'test3',
      location_name: 'location 3',
      liked: false,
      current_pagination: 0,
      pictures: [
        'https://4.bp.blogspot.com/-I5u5Q9jEXoU/VdSQX2_or0I/AAAAAAAAOFM/g25aJM6_OFM/s1600/001-caroline-residence-architecton-1050x707.jpg',
        'https://4.bp.blogspot.com/-GD288lvbSYg/VdSQY0QEczI/AAAAAAAAOFY/lkzpadUT9zU/s1600/001-guest-houses-yod-designlab-1050x700.jpg',
        'https://3.bp.blogspot.com/-BfkLNbcybvI/VdSQX7HHXcI/AAAAAAAAOFQ/LxpXHROyD_8/s1600/001-chameleon-house-petr-hajek-architekti-1050x700.jpg',
        'https://1.bp.blogspot.com/--4MUgRsbguI/VdSQYpl4QwI/AAAAAAAAOFU/J2_OLW-lZyM/s1600/001-emerald-star-dwell-development-1050x700.jpg',
        'https://4.bp.blogspot.com/-8CYzpzCj2Wc/VdSQZs0pTsI/AAAAAAAAOFo/Zv_bOcZ6FPo/s1600/002-armadale-house-mitsuori-architects.jpg',
      ],
    },
    {
      id: 4,
      user: 'test4',
      location_name: 'location 4',
      liked: true,
      current_pagination: 0,
      pictures: [
        'https://4.bp.blogspot.com/-GD288lvbSYg/VdSQY0QEczI/AAAAAAAAOFY/lkzpadUT9zU/s1600/001-guest-houses-yod-designlab-1050x700.jpg',
        'https://4.bp.blogspot.com/-I5u5Q9jEXoU/VdSQX2_or0I/AAAAAAAAOFM/g25aJM6_OFM/s1600/001-caroline-residence-architecton-1050x707.jpg',
        'https://3.bp.blogspot.com/-BfkLNbcybvI/VdSQX7HHXcI/AAAAAAAAOFQ/LxpXHROyD_8/s1600/001-chameleon-house-petr-hajek-architekti-1050x700.jpg',
        'https://1.bp.blogspot.com/--4MUgRsbguI/VdSQYpl4QwI/AAAAAAAAOFU/J2_OLW-lZyM/s1600/001-emerald-star-dwell-development-1050x700.jpg',
        'https://4.bp.blogspot.com/-8CYzpzCj2Wc/VdSQZs0pTsI/AAAAAAAAOFo/Zv_bOcZ6FPo/s1600/002-armadale-house-mitsuori-architects.jpg',
      ],
    },
  ],
};

const INITIAL_STATE1 = {
  data: {
    0: {
      id: 1,
      user: 'test',
      location_name: 'location 1',
      liked: false,
      current_pagination: 0,
      pictures: [
        'https://3.bp.blogspot.com/-BfkLNbcybvI/VdSQX7HHXcI/AAAAAAAAOFQ/LxpXHROyD_8/s1600/001-chameleon-house-petr-hajek-architekti-1050x700.jpg',
        'https://4.bp.blogspot.com/-I5u5Q9jEXoU/VdSQX2_or0I/AAAAAAAAOFM/g25aJM6_OFM/s1600/001-caroline-residence-architecton-1050x707.jpg',
        'https://1.bp.blogspot.com/--4MUgRsbguI/VdSQYpl4QwI/AAAAAAAAOFU/J2_OLW-lZyM/s1600/001-emerald-star-dwell-development-1050x700.jpg',
        'https://4.bp.blogspot.com/-GD288lvbSYg/VdSQY0QEczI/AAAAAAAAOFY/lkzpadUT9zU/s1600/001-guest-houses-yod-designlab-1050x700.jpg',
        'https://4.bp.blogspot.com/-8CYzpzCj2Wc/VdSQZs0pTsI/AAAAAAAAOFo/Zv_bOcZ6FPo/s1600/002-armadale-house-mitsuori-architects.jpg',
      ],
    },
    1: {
      id: 2,
      user: 'test2',
      location_name: 'location 2',
      liked: true,
      current_pagination: 0,
      pictures: [
        'https://4.bp.blogspot.com/-GD288lvbSYg/VdSQY0QEczI/AAAAAAAAOFY/lkzpadUT9zU/s1600/001-guest-houses-yod-designlab-1050x700.jpg',
        'https://1.bp.blogspot.com/--4MUgRsbguI/VdSQYpl4QwI/AAAAAAAAOFU/J2_OLW-lZyM/s1600/001-emerald-star-dwell-development-1050x700.jpg',
        'https://3.bp.blogspot.com/-BfkLNbcybvI/VdSQX7HHXcI/AAAAAAAAOFQ/LxpXHROyD_8/s1600/001-chameleon-house-petr-hajek-architekti-1050x700.jpg',
        'https://4.bp.blogspot.com/-I5u5Q9jEXoU/VdSQX2_or0I/AAAAAAAAOFM/g25aJM6_OFM/s1600/001-caroline-residence-architecton-1050x707.jpg',
        'https://4.bp.blogspot.com/-8CYzpzCj2Wc/VdSQZs0pTsI/AAAAAAAAOFo/Zv_bOcZ6FPo/s1600/002-armadale-house-mitsuori-architects.jpg',
      ],
    },
    2: {
      id: 3,
      user: 'test3',
      location_name: 'location 3',
      liked: false,
      current_pagination: 0,
      pictures: [
        'https://4.bp.blogspot.com/-I5u5Q9jEXoU/VdSQX2_or0I/AAAAAAAAOFM/g25aJM6_OFM/s1600/001-caroline-residence-architecton-1050x707.jpg',
        'https://4.bp.blogspot.com/-GD288lvbSYg/VdSQY0QEczI/AAAAAAAAOFY/lkzpadUT9zU/s1600/001-guest-houses-yod-designlab-1050x700.jpg',
        'https://3.bp.blogspot.com/-BfkLNbcybvI/VdSQX7HHXcI/AAAAAAAAOFQ/LxpXHROyD_8/s1600/001-chameleon-house-petr-hajek-architekti-1050x700.jpg',
        'https://1.bp.blogspot.com/--4MUgRsbguI/VdSQYpl4QwI/AAAAAAAAOFU/J2_OLW-lZyM/s1600/001-emerald-star-dwell-development-1050x700.jpg',
        'https://4.bp.blogspot.com/-8CYzpzCj2Wc/VdSQZs0pTsI/AAAAAAAAOFo/Zv_bOcZ6FPo/s1600/002-armadale-house-mitsuori-architects.jpg',
      ],
    },
    3: {
      id: 4,
      user: 'test4',
      location_name: 'location 4',
      liked: true,
      current_pagination: 0,
      pictures: [
        'https://4.bp.blogspot.com/-GD288lvbSYg/VdSQY0QEczI/AAAAAAAAOFY/lkzpadUT9zU/s1600/001-guest-houses-yod-designlab-1050x700.jpg',
        'https://4.bp.blogspot.com/-I5u5Q9jEXoU/VdSQX2_or0I/AAAAAAAAOFM/g25aJM6_OFM/s1600/001-caroline-residence-architecton-1050x707.jpg',
        'https://3.bp.blogspot.com/-BfkLNbcybvI/VdSQX7HHXcI/AAAAAAAAOFQ/LxpXHROyD_8/s1600/001-chameleon-house-petr-hajek-architekti-1050x700.jpg',
        'https://1.bp.blogspot.com/--4MUgRsbguI/VdSQYpl4QwI/AAAAAAAAOFU/J2_OLW-lZyM/s1600/001-emerald-star-dwell-development-1050x700.jpg',
        'https://4.bp.blogspot.com/-8CYzpzCj2Wc/VdSQZs0pTsI/AAAAAAAAOFo/Zv_bOcZ6FPo/s1600/002-armadale-house-mitsuori-architects.jpg',
      ],
    },
  },
};

const Data = (state = INITIAL_STATE1, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return {
        ...state,
        data: {
          ...state.data,
          ...{
            [action.index]: {
              ...state.data[action.index],
              liked: !state.data[action.index].liked,
            },
          },
        },
      };
    case 'CHANGE_PAGINATION':
      return {
        ...state,
        data: {
          ...state.data,
          ...{
            [action.data.index]: {
              ...state.data[action.data.index],
              current_pagination: action.data.pagination,
            },
          },
        },
      };
    default:
      return state;
  }
};

export default createStore(Data);
