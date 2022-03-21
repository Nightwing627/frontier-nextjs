
import storyImg1 from 'assets/social/story/1.jpg'
import storyImg2 from 'assets/social/story/2.jpg'
import storyImg3 from 'assets/social/story/3.jpg'

import avatar1 from 'assets/user-avatars/avatar_5.png' 
import avatar2 from 'assets/user-avatars/avatar_6.png' 
import avatar3 from 'assets/user-avatars/avatar_7.png' 
import avatar4 from 'assets/user-avatars/avatar_8.png' 

import suggest1 from 'assets/social/communites/suggested/1.png'
import suggest2 from 'assets/social/communites/suggested/2.png'
import suggest3 from 'assets/social/communites/suggested/3.png'

import { FaHeart } from 'react-icons/fa'

export default [
    { id: 1,  name: 'Kierra Gentry',  imgSrc: storyImg1,  avatar: avatar1 },
    { id: 2,  name: 'Bradyn Kramer',  imgSrc: storyImg2,  avatar: avatar2 },
    { id: 3,  name: 'Pierre Cox',     imgSrc: storyImg3,  avatar: avatar3 },
]

export const FollowData = [
    { id: 1,    name: 'Thomas Ben',     imgSrc: avatar1, },
    { id: 2,    name: 'Sarah Pierre',   imgSrc: avatar2, }
]

export const ContactData = [
    { id: 1,    name: 'Cierra Vega',    imgSrc: avatar3, },
    { id: 2,    name: 'Cierra Vega',    imgSrc: avatar3, },
    { id: 3,    name: 'Alden Cantrell', imgSrc: avatar3, },
    { id: 4,  name: 'Kierra Gentry',  imgSrc: avatar3, },
    { id: 5,  name: 'Bradyn Kramer',  imgSrc: avatar3, },
    { id: 6,  name: 'Thomas Crane',   imgSrc: avatar3, },
    { id: 7,  name: 'Miranda Shaffer',imgSrc: avatar3, },
    { id: 8,  name: 'Pierre Cox',     imgSrc: avatar3, },
    { id: 9,  name: 'Alvaro Mcgee',   imgSrc: avatar3, },
]

export const NewsData = [
    {
        id: 1,
        avatar: avatar1,
        username: 'Lurline',
        commentOn: 'Smiles - 3D icons',
        comment: 'Greate work, I just purchased this product',
        icon: <FaHeart className="news-status"/>,
        status: 'like'
    },{
        id: 2,
        avatar: avatar1,
        username: 'Lurline',
        commentOn: 'Smiles - 3D icons',
        comment: 'Greate work, I just purchased this product',
        icon: <FaHeart className="news-status"/>,
        status: 'like'
    },{
        id: 3,
        avatar: avatar1,
        username: 'Lurline',
        commentOn: 'Smiles - 3D icons',
        comment: 'Greate work, I just purchased this product',
        icon: <FaHeart className="news-status"/>,
        status: 'like'
    },{
        id: 4,
        avatar: avatar1,
        username: 'Lurline',
        commentOn: 'Smiles - 3D icons',
        comment: 'Greate work, I just purchased this product',
        icon: <FaHeart className="news-status"/>,
        status: 'like'
    },{
        id: 5,
        avatar: avatar1,
        username: 'Lurline',
        commentOn: 'Smiles - 3D icons',
        comment: 'Greate work, I just purchased this product',
        icon: <FaHeart className="news-status"/>,
        status: 'like'
    },{
        id: 6,
        avatar: avatar1,
        username: 'Lurline',
        commentOn: 'Smiles - 3D icons',
        comment: 'Greate work, I just purchased this product',
        icon: <FaHeart className="news-status"/>,
        status: 'like'
    },{
        id: 7,
        avatar: avatar1,
        username: 'Lurline',
        commentOn: 'Smiles - 3D icons',
        comment: 'Greate work, I just purchased this product',
        icon: <FaHeart className="news-status"/>,
        status: 'like'
    }
]

export const FilterData = [
    { id: 1, name: 'Comments',  status: 'checked' },
    { id: 2, name: 'Likes',     status: '' },
    { id: 3, name: 'Review',    status: 'checked' },
    { id: 4, name: 'Mentions',  status: 'checked' },
    { id: 5, name: 'Purchases', status: '' },
    { id: 6, name: 'Message',   status: '' },
]

export const NotiDetail = [
    {
        id: 1,
        avatar: avatar4,
        title: {
            target: 'Miranda Shaffer',
            bridge: 'added a photo in',
            from: 'Design Group'
        },
        description: '',
        time: 6
    },
    {
        id: 2,
        avatar: avatar4,
        title: {
            target: 'Elon Musk',
            bridge: 'liked a photo from',
            from: 'Neil deGrasse Tyson'
        },
        description: `Congratulations to @elonmusk and his Falcon 9 rockets for helping @NASA & @ESA send space probes around the solar system.</br>
            Tonight, the DART (Double Asteroid Redirect Test) misssion launches to deflect a potentially hazardous asteroid. https://pic.twitter.com/SmJkS1QFgi`,
        time: 7
    },
    {
        id: 3,
        avatar: avatar4,
        title: null,
        description: `<b>Iqbal Hossain</b> There was a login to your account @Iqbal01717 from a new device on 
        Nov 20, 2021. Review it now.`,
        time: 8
    },
    {
        id: 4,
        avatar: avatar4,
        title: {
            target: 'Elon Musk',
            bridge: 'liked a photo from',
            from: 'Neil deGrasse Tyson'
        },
        description: `Congratulations to @elonmusk and his Falcon 9 rockets for helping @NASA & @ESA send space probes around the solar system.</br>
            Tonight, the DART (Double Asteroid Redirect Test) misssion launches to deflect a potentially hazardous asteroid. https://pic.twitter.com/SmJkS1QFgi`,
        time: 5
    },
    {
        id: 5,
        avatar: avatar4,
        title: null,
        description: `<b>Iqbal Hossain</b> There was a login to your account @Iqbal01717 from a new device on 
        Nov 20, 2021. Review it now.`,
        time: 6
    },
    {
        id: 6,
        avatar: avatar4,
        title: null,
        description: `<b>Iqbal Hossain</b> There was a login to your account @Iqbal01717 from a new device on 
        Nov 20, 2021. Review it now.`,
        time: 6
    },
]

export const SuggestData = [
    {
        id: 1,
        imgSrc: suggest1,
        title: 'Behance',
        members: '74k',
        posts: 60,
        summary: 'Ito and 2 friends are members',
        users: {
            user1: avatar1,
            user2: avatar2,
            user3: avatar3,
        }
    },
    {
        id: 2,
        imgSrc: suggest2,
        title: 'Apple',
        members: '74k',
        posts: 60,
        summary: 'Ito and 2 friends are members',
        users: {
            user1: avatar1,
            user2: avatar2,
            user3: avatar3,
        }
    },
    {
        id: 3,
        imgSrc: suggest3,
        title: 'Crypto Trading',
        members: '74k',
        posts: 60,
        summary: 'Ito and 2 friends are members',
        users: {
            user1: avatar1,
            user2: avatar2,
            user3: avatar3,
        }
    }
]