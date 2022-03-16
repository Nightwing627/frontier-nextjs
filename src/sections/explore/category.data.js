import CardImage from 'assets/crypto-feature/card-image.png';
import UserAvatar1 from 'assets/user-avatars/avatar_1.png';
import UserAvatar2 from 'assets/user-avatars/avatar_2.png';
import UserAvatar3 from 'assets/user-avatars/avatar_3.png';
import UserAvatar4 from 'assets/user-avatars/avatar_4.png';

export default [
    {
      id: 1,
      label: 'All Projects',
    },
    {
      id: 2,
      label: 'Technology',
    },
    {
      id: 3,
      label: 'Medical',
    },
    {
      id: 4,
      label: 'Business',
    },
    {
      id: 5,
      label: 'Fashion',
    },
    {
      id: 6,
      label: 'Arts',
    },
    {
      id: 7,
      label: 'Fitness and Health',
    },
    {
      id: 8,
      label: 'BlockChain',
    },
    {
      id: 9,
      label: 'Web',
    },
]

export const Popular = [
  {
    id: 1,
    label: 'Technology Projects',
  },
  {
    id: 2,
    label: 'Cancer Charity Programs',
  },
  {
    id: 3,
    label: 'Design Interior',
  }
]

export const ListData = [
  {
    id: 1,
    type: 'FUNDING',
    title: 'Triple 4K Display for MacBook Pro 2016-2021',
    imgSrc: CardImage,
    altText: 'Triple',
    process: 30,
    raised: '5,345',
    days: 45,
    user: {
        name: 'Cheyenne Curtls',
        avatar: UserAvatar1,
        text: '12 Campaign',
        rate: 3,
    },
  },{
    id: 2,
    type: 'FUNDING',
    title: 'NAKEY - The Case For People Who Hate Cases',
    imgSrc: CardImage,
    altText: 'Nakey',
    process: 30,
    raised: '5,345',
    days: 45,
    user: {
        name: 'Ahmad Schleifer',
        avatar: UserAvatar2,
        text: '12 Campaign',
        rate: 3,
        address: 'New York, Longdon',
      }, 
  },{
    id: 3,
    type: 'FUNDING',
    title: 'Stupid Old Suidios Has Gotta Move',
    imgSrc: CardImage,
    altText: 'Stupid',
    process: 30,
    raised: '5,345',
    days: 45,
    user: {
        name: 'Skylar Gouse',
        avatar: UserAvatar3,
        text: '12 Campaign',
        rate: 3,
        address: 'New York, Longdon',
      },
  },{
    id: 4,
    type: 'FUNDING',
    title: 'Little Failures by Alisha M. Wielfaert',
    imgSrc: CardImage,
    altText: 'Little',
    process: 20,
    raised: '5,345',
    days: 45,
    user: {
      name: 'Maren George',
      avatar: UserAvatar4,
      text: '12 Campaign',
      rate: 3,
      address: 'New York, Longdon',
    },
  },
];

export const OrderData = [
  {
    id: 1,
    label: 'Newest'
  },{
    id: 2,
    label: 'Popular'
  },{
    id: 3,
    label: 'Country'
  }

]