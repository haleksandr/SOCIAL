const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
        {
            id: 1,
            followed: true,
            name: 'Aleksandr',
            status: 'I am working',
            location: {country: 'Ukraine', city: 'Kyiv'},
            photos: 'https://pm1.narvii.com/6883/d2058cac129dc90a3d6e3903889b401b29d13c45r1-515-414v2_128.jpg'
        },
        {
            id: 2,
            followed: true,
            name: 'Mike',
            status: 'Hi',
            location: {country: 'USA', city: 'New York'},
            photos: null
        },
        {
            id: 3,
            followed: false,
            name: 'John',
            status: 'I am John',
            location: {country: 'USA', city: 'Miami'},
            photos: 'https://pm1.narvii.com/6883/d2058cac129dc90a3d6e3903889b401b29d13c45r1-515-414v2_128.jpg'
        },
        {
            id: 4,
            followed: false,
            name: 'Tomas',
            status: 'I love BEER',
            location: {country: 'Germany', city: 'Berlin'},
            photos: 'https://pm1.narvii.com/6883/d2058cac129dc90a3d6e3903889b401b29d13c45r1-515-414v2_128.jpg'
        },
        {
            id: 5,
            followed: true,
            name: 'Sara',
            status: 'sleep',
            location: {country: 'United Kingdom', city: 'Manchester'},
            photos: 'https://pm1.narvii.com/6883/d2058cac129dc90a3d6e3903889b401b29d13c45r1-515-414v2_128.jpg'
        }
    ]
};

const usersReducer = (state = initialState, action) => {

    let stateCopy;

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {
                ...state, users: [...state.users, action.users]
            };
        default:
            return state;
    }
};


export let followAC = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
};

export let unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
};

export let setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export default usersReducer;