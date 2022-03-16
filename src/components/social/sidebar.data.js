import { BiHomeAlt, BiBell, BiLogOut } from "react-icons/bi"
import { AiOutlineSetting } from "react-icons/ai"
import { BsPerson, BsChatDots } from "react-icons/bs"

export default [
  {
    icon: <BiHomeAlt />,
    text: "Feed",
    router: "/social/home",
    className: "campagin-preview",
  },
  {
    icon: <BiBell />,
    text: "Notifications",
    router: "/social/notifications",
    className: "campagin-preview",
  },
  {
    icon: <BiBell />,
    text: "Community",
    router: "/social/community",
    className: "campagin-preview",
  },
  {
    icon: <BsChatDots />,
    text: "Chat",
    router: "/social/chat",
    className: "campagin-preview",
  },
  {
    icon: <BsPerson />,
    text: "Profile",
    router: "/social/profile",
    className: "campagin-preview",
  },
  {
    icon: <AiOutlineSetting />,
    text: "Settings",
    router: "/social/settings",
    className: "campagin-preview",
  },
  {
    icon: <BiLogOut />,
    text: "Sign Out",
    router: "/social/signout",
    className: "campagin-preview",
  },
]
