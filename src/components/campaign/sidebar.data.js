import {
    AiOutlineEye,
    AiOutlineSound,
    AiOutlineUp,
    AiOutlineDown
} from "react-icons/ai"

export default [
    {
        icon: <AiOutlineEye />,
        text: "Preview Campaign",
        router: "/campaign/preview",
        className: "campagin-preview",
        sublist: []
    }, 
    {
        icon: <AiOutlineSound />,
        subIconUp: <AiOutlineUp />,
        subIconDown: <AiOutlineDown />,
        text: "Campaign Editor",
        router: "",
        className: "campagin-editor",
        sublist: [
            {
                text: "Basics",
                router: "/campaign/editor/basic",
            },
            {
                text: "Contents",
                router: "/campaign/editor/content",
            },
            {
                text: "Perks",
                router: "/campaign/editor/perk",
            },
            {
                text: "Team",
                router: "/campaign/editor/team",
            },
            {
                text: "Funding",
                router: "/campaign/editor/funding",
            },
            {
                text: "Extras",
                router: "/campaign/editor/extra",
            },
            {
                text: "Settings",
                router: "/campaign/editor/setting",
            },
        ]
    }
]