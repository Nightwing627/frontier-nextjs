import { BiHomeAlt, BiBell, BiLogOut, BiCommentDetail } from "react-icons/bi"
import { AiOutlineSetting } from "react-icons/ai"
import { BsChatDots } from "react-icons/bs"
import { FiUsers, FiUser } from "react-icons/fi"

export default [
  {
    icon: <BiHomeAlt />,
    text: "Feed",
    router: "/social",
    className: "campagin-preview",
  },
  {
    icon: <BiBell />,
    text: "Notifications",
    router: "/social/notification",
    className: "campagin-preview",
  },
  {
    icon: <FiUsers />,
    text: "Community",
    router: "/social/community",
    className: "campagin-preview",
  },
  {
    icon: <BiCommentDetail />,
    text: "Chat",
    router: "/social/chat",
    className: "campagin-preview",
  },
  {
    icon: <FiUser />,
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
