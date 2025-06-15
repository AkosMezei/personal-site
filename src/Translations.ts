export const translations = {
    en: {
        aboutMeTitle: "About me",
        aboutMeDefault: "Hello! My name is [Your Name], and I'm a passionate programmer with a knack for solving complex problems through code. With expertise in various programming languages and frameworks, I strive to create efficient and innovative solutions. My journey in the tech world has been fueled by my curiosity and a constant drive to learn and improve.",
        aboutMeExpanded: "When I'm not coding, you can find me exploring the latest tech trends, participating in hackathons, or enjoying a good book. I'm excited to connect and collaborate with like-minded individuals who share my enthusiasm for technology.",
        educationTitle: "Education",
        educationDefault: "Default Education text placeholder",
        educationExpanded: "Expanded Education text placeholder",
        experienceTitle: "Experience",
        experienceDefault: "Default Experience text placeholder",
        experienceExpanded: "Expanded Experience text placeholder",
        
        projectsTitle: "Projects",
        projectsDefault: "Expand to see my current projects.",
        
        cvWebsiteProjectTitle: "CV Website Project",
        cvWebsiteProjectDefault: "The site you're currently on.",
        cvWebsiteProjectDescription: {
            part1: "This website serves as my digital resume, built to be fast, interactive while minimizing full page reloads. The front-end uses a ",
            highlightVite: "Vite",
            part2: " and ",
            highlightReact: "React",
            part3: " foundation with ",
            highlightTypescript: "TypeScript",
            part4: ". Styling is handled with ",
            highlightTailwindCSS: "Tailwind CSS",
            part5: ", and ",
            highlightFramerMotion: "Framer Motion",
            part6: " is responsible for the majority of animations. The site is deployed globally via ",
            highlightVercel: "▲ Vercel",
            part7: ", while the messaging function is powered by a ",
            highlightMongoDB: "MongoDB",
            part8: " database running in a ",
            highlightDocker: "Docker",
            part9: " container on a ",
            highlightDigitalOcean: "DigitalOcean",
            part10: " app platform.",
        },

        cvWebsiteMessageBoxTitle: "Messaging System Architecture",
        cvWebsiteMessageBoxDefault: "A behind-the-scenes look at the messaging feature.",
        cvWebsiteMessageBoxDescription: {
            //full disclosure, I made AI structure the raw text to fit into my language file based on cvWebsiteProjectDescription
            para1_part1: "The messaging functionality is built on a two-tier architecture, consisting of a ",
            highlight_dotnet: ".NET REST API",
            para1_part2: " (C#) and a ",
            highlight_mongo1: "MongoDB",
            para1_part3: " database. The API serves as the gateway for all message-related operations, while ",
            highlight_mongo2: "MongoDB",
            para1_part4: " handles the data persistence.",

            //why I'm using mongoDB
            para2_part1: "While a traditional ",
            highlight_sql: "SQL",
            para2_part2: " database would have been a natural fit for this kind of structured data, this project presented an excellent opportunity to gain hands-on experience with ",
            highlight_nosql: "NoSQL",
            para2_part3: " technologies. The decision to use ",
            highlight_mongo3: "MongoDB",
            para2_part4: " was a deliberate choice to explore its ",
            highlight_doc_model: "document-based model",
            para2_part5: ", even though the project's current scale doesn't require its powerful ",
            highlight_scaling: "horizontal scaling",
            para2_part6: " capabilities.",

            //how chats work
            para3_part1: "The user-facing chat experience is designed to be efficient and resource-conscious. When a user opens the chat interface, the application first checks ",
            highlight_storage: "local and session storage",
            para3_part2: " for an existing ",
            highlight_chatid1: "chatID",
            para3_part3: ". If one is found, the message history is retrieved. If not, the application remains idle. A new chat session, including a database document and a server-generated ",
            highlight_chatid2: "chatID",
            para3_part4: ", is only created when the user sends their first message. This '",
            highlight_lazy: "lazy creation",
            para3_part5: "' approach prevents unnecessary database entries.",

            //data structure
            para4_part1: "On the backend, each conversation is stored as a single document in ",
            highlight_mongo4: "MongoDB",
            para4_part2: ". This document includes the ",
            highlight_chatid3: "chatID",
            para4_part3: ", creation and update timestamps, and an embedded array of message objects. Each message object in the array contains its content, a timestamp, and a flag to identify the sender (user or administrator).",

            //admin stuffs
            para5_part1: "To manage conversations, I made a separate ",
            highlight_admin: "administrative dashboard",
            para5_part2: ". This interface allows me to view and respond to all incoming user messages, completing the communication loop."
        },
        
        cvWebsiteAPITitle: "CV Website API Title",
        cvWebsiteAPIDefault: "Default CV Website API Title",
        cvWebsiteAPIExpanded: "Expanded CV Website Expanded Title",
        
        cvWebsiteFrontendTitle: "CV Website Frontend Title",
        cvWebsiteFrontendDefault: "Default CV Website Frontend Title",
        cvWebsiteFrontendExpanded: "Expanded CV Website Frontend Title",
        
        ttWebsiteProjectTitle: "TT Website Project",
        ttWebsiteProjectDefault: "Default TT Website Project text placeholder",
        ttWebsiteProjectExpanded: "Expanded TT Website Project text placeholder",
        hsTitle: "Salamon Ernő - Theoretical High School",
        hsDefault: "Math - Informatics",
        hsExpanded: "My majors were mathematics and computer science, mainly c++.",
        uniTitle: "Sapientia EMTE",
        uniDefault: "Economic Informatics",
        uniExpanded: "I studied Fundamentals of Programming, Java Programming, Operations Research, Database Design, Computer Networks, Operating Systems, Micro- and Macroeconomics.",
        
    },
    hu: {
        aboutMeTitle: "Rólam",
        aboutMeDefault: "Szia! A nevem [Your Name], és szenvedélyes programozó vagyok, aki szereti a komplex problémákat kód segítségével megoldani. Különböző programozási nyelvekben és keretrendszerekben szerzett szakértelmemmel hatékony és innovatív megoldások létrehozására törekszem. A technológiai világban tett utamat a kíváncsiság és a folyamatos tanulás és fejlődés iránti vágy hajtja.",
        aboutMeExpanded: "When I'm not coding, you can find me exploring the latest tech trends, participating in hackathons, or enjoying a good book. I'm excited to connect and collaborate with like-minded individuals who share my enthusiasm for technology.",
        educationTitle: "Education",
        educationDefault: "Default Education text placeholder",
        educationExpanded: "Expanded Education text placeholder",
        experienceTitle: "Experience",
        experienceDefault: "Default Experience text placeholder",
        experienceExpanded: "Expanded Experience text placeholder",

        projectsTitle: "Projects",
        projectsDefault: "Expand to see my current projects.",

        cvWebsiteProjectTitle: "CV Website Project",
        cvWebsiteProjectDefault: "The site you're currently on.",
        cvWebsiteProjectDescription: {
            part1: "This website serves as my digital resume, built to be fast, interactive while minimizing full page reloads. The front-end uses a ",
            highlightVite: "Vite",
            part2: " and ",
            highlightReact: "React",
            part3: " foundation with ",
            highlightTypescript: "TypeScript",
            part4: ". Styling is handled with ",
            highlightTailwindCSS: "Tailwind CSS",
            part5: ", and ",
            highlightFramerMotion: "Framer Motion",
            part6: " is responsible for the majority of animations. The site is deployed globally via ",
            highlightVercel: "▲ Vercel",
            part7: ", while the messaging function is powered by a ",
            highlightMongoDB: "MongoDB",
            part8: " database running in a ",
            highlightDocker: "Docker",
            part9: " container on a ",
            highlightDigitalOcean: "DigitalOcean",
            part10: " app platform.",
        },

        cvWebsiteMessageBoxTitle: "Messaging System Architecture",
        cvWebsiteMessageBoxDefault: "A behind-the-scenes look at the messaging feature.",
        cvWebsiteMessageBoxDescription: {
            //full disclosure, I made AI structure the raw text to fit into my language file based on cvWebsiteProjectDescription
            para1_part1: "The messaging functionality is built on a two-tier architecture, consisting of a ",
            highlight_dotnet: ".NET REST API",
            para1_part2: " (C#) and a ",
            highlight_mongo1: "MongoDB",
            para1_part3: " database. The API serves as the gateway for all message-related operations, while ",
            highlight_mongo2: "MongoDB",
            para1_part4: " handles the data persistence.",

            //why I'm using mongoDB
            para2_part1: "While a traditional ",
            highlight_sql: "SQL",
            para2_part2: " database would have been a natural fit for this kind of structured data, this project presented an excellent opportunity to gain hands-on experience with ",
            highlight_nosql: "NoSQL",
            para2_part3: " technologies. The decision to use ",
            highlight_mongo3: "MongoDB",
            para2_part4: " was a deliberate choice to explore its ",
            highlight_doc_model: "document-based model",
            para2_part5: ", even though the project's current scale doesn't require its powerful ",
            highlight_scaling: "horizontal scaling",
            para2_part6: " capabilities.",

            //how chats work
            para3_part1: "The user-facing chat experience is designed to be efficient and resource-conscious. When a user opens the chat interface, the application first checks ",
            highlight_storage: "local and session storage",
            para3_part2: " for an existing ",
            highlight_chatid1: "chatID",
            para3_part3: ". If one is found, the message history is retrieved. If not, the application remains idle. A new chat session, including a database document and a server-generated ",
            highlight_chatid2: "chatID",
            para3_part4: ", is only created when the user sends their first message. This '",
            highlight_lazy: "lazy creation",
            para3_part5: "' approach prevents unnecessary database entries.",

            //data structure
            para4_part1: "On the backend, each conversation is stored as a single document in ",
            highlight_mongo4: "MongoDB",
            para4_part2: ". This document includes the ",
            highlight_chatid3: "chatID",
            para4_part3: ", creation and update timestamps, and an embedded array of message objects. Each message object in the array contains its content, a timestamp, and a flag to identify the sender (user or administrator).",

            //admin stuffs
            para5_part1: "To manage conversations, I made a separate ",
            highlight_admin: "administrative dashboard",
            para5_part2: ". This interface allows me to view and respond to all incoming user messages, completing the communication loop."
        },

        cvWebsiteAPITitle: "CV Website API Title",
        cvWebsiteAPIDefault: "Default CV Website API Title",
        cvWebsiteAPIExpanded: "Expanded CV Website Expanded Title",

        cvWebsiteFrontendTitle: "CV Website Frontend Title",
        cvWebsiteFrontendDefault: "Default CV Website Frontend Title",
        cvWebsiteFrontendExpanded: "Expanded CV Website Frontend Title",

        ttWebsiteProjectTitle: "TT Website Project",
        ttWebsiteProjectDefault: "Default TT Website Project text placeholder",
        ttWebsiteProjectExpanded: "Expanded TT Website Project text placeholder",
        hsTitle: "Salamon Ernő - Theoretical High School",
        hsDefault: "Math - Informatics",
        hsExpanded: "My majors were mathematics and computer science, mainly c++.",
        uniTitle: "Sapientia EMTE",
        uniDefault: "Economic Informatics",
        uniExpanded: "I studied Fundamentals of Programming, Java Programming, Operations Research, Database Design, Computer Networks, Operating Systems, Micro- and Macroeconomics.",

    }
};