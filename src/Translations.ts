//TODO rewrite hungarian part, it sounds like ass

export const translations = {
    en: {
        aboutMeTitle: "About Me",

        aboutMeDefault: {
            part1: "Hello! I'm ",
            highlight_name: "Mezei Ákos",
            part2: ", a self-taught full-stack developer driven by a passion for building elegant solutions to complex problems."
        },

        aboutMeExpanded: {
            para1_part1: "My journey into tech started in my family's ",
            highlight_woodworking: "woodworking shop",
            para1_part2: ", where I learned to value precision, planning, and the satisfaction of turning an idea into a well-crafted product. I've translated that same dedication to craftsmanship into the digital world.",

            para2_part1: "This portfolio is a showcase of that philosophy, from the responsive ",
            highlight_react: "React",
            para2_part2: " front-end built with ",
            highlight_typescript: "TypeScript",
            para2_part3: " to the custom ",
            highlight_dotnet: ".NET REST API",
            para2_part4: " that powers its features.",

            para3_part1: "When I step away from the keyboard, I'm usually either hiking or finding practical solutions to the everyday challenges of village life. I'm a ",
            highlight_builder: "builder at heart",
            para3_part2: ", whether with code or with physical materials, and I am eager to bring my unique blend of practical skills and a determined, curious mindset to a forward-thinking development team."
        },
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

        ttWebsiteProjectTitle: "E-Commerce Frontend",

        ttWebsiteProjectDefault: "A fully responsive and performant website frontend designed for \"Transylvania Transport\", a woodworking business.",

        ttWebsiteProjectExpanded: {
            performance: {
                title: "Performance-First Architecture",
                default: "Optimized for fast loading and a smooth user experience.",
                // No tech links here, so a single part is fine
                expanded: {
                    part1: "Implemented advanced performance patterns including component-level code-splitting using `React.lazy()` and lazy-loading of page sections with the `IntersectionObserver` API. This ensures a fast initial page load and minimizes data usage for the end-user."
                }
            },
            interactive: {
                title: "Interactive & Custom Components",
                default: "Featuring bespoke, reusable components with rich animations.",
                // NEW: Broken down for tech links
                expanded: {
                    part1: "Developed custom, reusable components in ",
                    highlightReact: "React",
                    part2: " and ",
                    highlightTypescript: "TypeScript",
                    part3: ". The centerpiece is a draggable image carousel with an expandable lightbox gallery, built using the ",
                    highlightFramerMotion: "Framer Motion",
                    part4: " library for smooth, physics-based animations."
                }
            },
            stack: {
                title: "Modern & Maintainable Stack",
                default: "Built with an industry-standard, scalable technology stack.",
                // NEW: Broken down for tech links
                expanded: {
                    part1: "Built on a modern foundation using ",
                    highlightVite: "Vite",
                    part2: ", React 19, and ",
                    highlightTailwindCSS: "Tailwind CSS",
                    part3: " for a highly efficient and maintainable styling workflow. The project demonstrates best practices in componentization and responsive design."
                }
            },
            design: {
                title: "Client-Centric Design",
                default: "A user interface and brand identity tailored to business needs.",
                // No tech links here, so a single part is fine
                expanded: {
                    part1: "The entire application, from the color palette to the layout, was designed with a specific business and brand identity in mind, proving an ability to translate product requirements into a polished final product."
                }
            }
        },
        
        hsTitle: "Salamon Ernő - Theoretical High School",
        hsDefault: "Math - Informatics",
        hsExpanded: "My majors were mathematics and computer science, mainly c++.",
        uniTitle: "Sapientia EMTE",
        uniDefault: "Economic Informatics",
        uniExpanded: "I studied Fundamentals of Programming, Java Programming, Operations Research, Database Design, Computer Networks, Operating Systems, Micro- and Macroeconomics.",
        
    },
    hu: {
        aboutMeTitle: "Rólam",

        aboutMeDefault: {
            part1: "Szia! ",
            highlight_name: "Mezei Ákos",
            part2: " vagyok, egy autodidakta full-stack fejlesztő, akit az a szenvedély hajt, hogy elegáns megoldásokat építsek komplex problémákra."
        },

        aboutMeExpanded: {
            para1_part1: "A tech világába vezető utam a családom ",
            highlight_woodworking: "asztalosműhelyében",
            para1_part2: " kezdődött, ahol megtanultam értékelni a precizitást, a tervezést és azt az elégedettséget, amikor egy ötletből egy gondosan kidolgozott termék lesz. Ugyanezt az elhivatottságot és a minőségi kivitelezés iránti igényt ültettem át a digitális világba is.",

            para2_part1: "Ez a portfólió ennek a filozófiának a bemutatója, a reszponzív ",
            highlight_react: "React",
            para2_part2: " front-endtől, ami ",
            highlight_typescript: "TypeScript",
            para2_part3: "-tel készült, egészen az egyedi ",
            highlight_dotnet: ".NET REST API",
            para2_part4: "-ig, amely a funkcióit működteti.",

            para3_part1: "Amikor nem a billentyűzet mögött ülök, általában túrázom vagy gyakorlatias megoldásokat keresek a falusi élet mindennapi kihívásaira. A szívem mélyén ",
            highlight_builder: "építő vagyok",
            para3_part2: ", legyen szó kódról vagy fizikai anyagokról, és alig várom, hogy egyedi, gyakorlatias képességeimet és elszánt, kíváncsi gondolkodásmódomat egy előremutató fejlesztői csapathoz vigyem."
        },
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

        ttWebsiteProjectTitle: "E-kereskedelmi Frontend",

        ttWebsiteProjectDefault: "Egy teljesen reszponzív és performáns weboldal frontend a \"Transylvania Transport\" nevű asztalos vállalkozás számára.",

        ttWebsiteProjectExpanded: {
            performance: {
                title: "Teljesítmény-központú Architektúra",
                default: "Gyors betöltésre és zökkenőmentes felhasználói élményre optimalizálva.",
                expanded: {
                    part1: "Fejlett teljesítménynövelő mintákat alkalmaztam, beleértve a komponens-szintű kód-felosztást a `React.lazy()` segítségével, valamint az oldalszakaszok lusta betöltését az `IntersectionObserver` API-val. Ez gyors kezdeti betöltést biztosít és minimalizálja a végfelhasználó adatforgalmát."
                }
            },
            interactive: {
                title: "Interaktív és Egyedi Komponensek",
                default: "Egyedi, újrahasznosítható komponensekkel és gazdag animációkkal.",
                expanded: {
                    part1: "Egyedi, újrahasznosítható komponenseket fejlesztettem ",
                    highlightReact: "React",
                    part2: " és ",
                    highlightTypescript: "TypeScript",
                    part3: " használatával. A projekt központi eleme egy húzható kép-körhinta egy kibővíthető lightbox galériával, amely a ",
                    highlightFramerMotion: "Framer Motion",
                    part4: " könyvtárral készült a sima, fizika-alapú animációk érdekében."
                }
            },
            stack: {
                title: "Modern és Karbantartható Tech Stack",
                default: "Ipari szabványoknak megfelelő, skálázható technológiai háttérrel építve.",
                expanded: {
                    part1: "A projekt egy modern alapra épült, ",
                    highlightVite: "Vite",
                    part2: ", React 19 és ",
                    highlightTailwindCSS: "Tailwind CSS",
                    part3: " felhasználásával, ami egy rendkívül hatékony és karbantartható stílusozási munkafolyamatot tesz lehetővé. A projekt a komponens-alapú felépítés és a reszponzív dizájn legjobb gyakorlatait mutatja be."
                }
            },
            design: {
                title: "Ügyfél-központú Tervezés",
                default: "A felhasználói felület és a márkaidentitás az üzleti igényekre szabva.",
                expanded: {
                    part1: "A teljes alkalmazás, a színpalettától az elrendezésig, egy konkrét üzleti és márkaidentitás figyelembevételével lett megtervezve, bizonyítva a képességet, hogy a termékkövetelményeket egy csiszolt végtermékké alakítsam."
                }
            }
        },
        
        hsTitle: "Salamon Ernő - Theoretical High School",
        hsDefault: "Math - Informatics",
        hsExpanded: "My majors were mathematics and computer science, mainly c++.",
        uniTitle: "Sapientia EMTE",
        uniDefault: "Economic Informatics",
        uniExpanded: "I studied Fundamentals of Programming, Java Programming, Operations Research, Database Design, Computer Networks, Operating Systems, Micro- and Macroeconomics.",

    }
};