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
        id: "campaign_preview",
        sublist: []
    }, 
    {
        icon: <AiOutlineSound />,
        subIconUp: <AiOutlineUp />,
        subIconDown: <AiOutlineDown />,
        text: "Campaign Editor",
        router: "",
        id: "campaign_editor",
        sublist: [
            {
                text: "Basics",
                router: "/campaign/editor/basic",
            },
            {
                text: "Content",
                router: "/campaign/editor/content",
            },
            {
                text: "Perks",
                router: "/campaign/editor/perks",
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
                router: "/campaign/editor/extras",
            },
            {
                text: "Settings",
                router: "/campaign/editor/settings",
            },
        ]
    }
]