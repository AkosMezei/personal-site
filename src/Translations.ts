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
        educationDefault: "My formal and self-directed learning path.",

        experienceTitle: "Experience",
        woodworking: {
            title: "Woodworking Craftsman",
            company: "Local Artisan Workshop",
            dates: "Ongoing, on and off",
            description: "In my role as a craftsman, I translated ideas into designs and then into high-quality, finished products. This experience was foundational in developing a high standard for precision and attention to detail — a 'measure twice, cut once' mentality that I now apply to writing clean, bug-resistant code. I was responsible for managing projects from raw material selection through to final assembly, which honed my ability to follow a process, solve problems, and deliver on project requirements."
        },
        internship: {
            title: "Web Content Intern",
            company: "Octopus Digital",
            dates: "April 2024 – August 2024",
            description: "During my internship, I gained practical experience within a professional development environment. My primary responsibility was updating content for a large-scale enterprise website using the Umbraco CMS. This role required me to collaborate with the development team to ensure content integrity, troubleshoot issues, and adhere to project deadlines, providing me with valuable insight into the maintenance and operation of a live web application."
        },

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
            para1_part1: "The messaging functionality is built on a two-tier architecture, consisting of a ",
            highlight_dotnet: ".NET REST API",
            para1_part2: " (C#) and a ",
            highlight_mongo1: "MongoDB",
            para1_part3: " database. The API serves as the gateway for all message-related operations, while ",
            highlight_mongo2: "MongoDB",
            para1_part4: " handles the data persistence.",
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
            para3_part1: "The user-facing chat experience is designed to be efficient and resource-conscious. When a user opens the chat interface, the application first checks ",
            highlight_storage: "local and session storage",
            para3_part2: " for an existing ",
            highlight_chatid1: "chatID",
            para3_part3: ". If one is found, the message history is retrieved. If not, the application remains idle. A new chat session, including a database document and a server-generated ",
            highlight_chatid2: "chatID",
            para3_part4: ", is only created when the user sends their first message. This '",
            highlight_lazy: "lazy creation",
            para3_part5: "' approach prevents unnecessary database entries.",
            para4_part1: "On the backend, each conversation is stored as a single document in ",
            highlight_mongo4: "MongoDB",
            para4_part2: ". This document includes the ",
            highlight_chatid3: "chatID",
            para4_part3: ", creation and update timestamps, and an embedded array of message objects. Each message object in the array contains its content, a timestamp, and a flag to identify the sender (user or administrator).",
            para5_part1: "To manage conversations, I made a separate ",
            highlight_admin: "administrative dashboard",
            para5_part2: ". This interface allows me to view and respond to all incoming user messages, completing the communication loop."
        },

        ttWebsiteProjectTitle: "Artisan E-Commerce Frontend",
        ttWebsiteProjectDefault: "A fully responsive and performant website frontend designed for \"Transylvania Transport\", a woodworking business.",
        ttWebsiteProjectExpanded: {
            performance: {
                title: "Performance-First Architecture",
                default: "Optimized for fast loading and a smooth user experience.",
                expanded: {
                    part1: "Implemented advanced performance patterns including component-level code-splitting using `React.lazy()` and lazy-loading of page sections with the `IntersectionObserver` API. This ensures a fast initial page load and minimizes data usage for the end-user."
                }
            },
            interactive: {
                title: "Interactive & Custom Components",
                default: "Featuring bespoke, reusable components with rich animations.",
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
                expanded: {
                    part1: "Built on a modern foundation using ",
                    highlightVite: "Vite",
                    part2: ", ",
                    highlightReact: "React",
                    part3: ", and ",
                    highlightTailwindCSS: "Tailwind CSS",
                    part4: " for a highly efficient and maintainable styling workflow. The project demonstrates best practices in componentization and responsive design."
                }
            },
            design: {
                title: "Client-Centric Design",
                default: "A user interface and brand identity tailored to business needs.",
                expanded: {
                    part1: "The entire application, from the color palette to the layout, was designed with a specific business and brand identity in mind, proving an ability to translate product requirements into a polished final product."
                }
            }
        },

        hsTitle: "Salamon Ernő Theoretical High School",
        hsDefault: "Mathematics & Informatics",
        hsExpanded: "My specialization focused on mathematics and computer science, with an emphasis on foundational C++ programming.",
        uniTitle: "Sapientia University (EMTE)",
        uniDefault: "Economic Informatics",
        uniExpanded: "I built a strong foundation in key computer science and economic principles, including coursework in: Fundamentals of Programming, Java Programming, Operations Research, Database Design, Computer Networks, and Operating Systems."
    },


    hu: {
        aboutMeTitle: "Rólam",

        aboutMeDefault: {
            part1: "Szia, ",
            highlight_name: "Mezei Ákos",
            part2: " vagyok, autodidakta full-stack fejlesztő. Szenvedélyem, hogy komplex problémákra elegáns, műszaki megoldásokat alkossak."
        },

        aboutMeExpanded: {
            para1_part1: "A tech világába vezető utam a családi ",
            highlight_woodworking: "asztalosműhelyünkben",
            para1_part2: " kezdődött, ahol megtanultam a precizitás, a tervezés és a gondos kivitelezés fontosságát. Ezt a kézműves szemléletet és a minőség iránti elkötelezettséget hoztam magammal a szoftverfejlesztés világába.",

            para2_part1: "Ez a portfólió ennek a filozófiának a megtestesülése: a reszponzív, ",
            highlight_react: "React",
            para2_part2: " alapú és ",
            highlight_typescript: "TypeScript",
            para2_part3: "-ben írt front-endtől kezdve az egyedi ",
            highlight_dotnet: ".NET REST API",
            para2_part4: "-ig, amely a háttérfunkciókat biztosítja.",

            para3_part1: "Amikor nem a gép előtt ülök, szívesen túrázom, vagy a falusi élet mindennapi kihívásaira keresek gyakorlatias megoldásokat. A szívem mélyén ",
            highlight_builder: "alkotó ember vagyok",
            para3_part2: ", legyen szó kódról vagy fizikai anyagokról, és készen állok arra, hogy egyedi képességeimet és elszánt, kíváncsi szemléletmódomat egy innovatív fejlesztői csapatban kamatoztassam."
        },

        educationTitle: "Tanulmányok",
        educationDefault: "Formális és önképzésen alapuló tanulmányi utam.",

        experienceTitle: "Szakmai Tapasztalat",
        woodworking: {
            title: "Asztalosmester",
            company: "Helyi Kézműves Műhely",
            dates: "Ongoing, on and off",
            description: "Asztalosként ötletekből terveket, majd azokból kézzel készült, minőségi termékeket hoztam létre. Ez a tapasztalat alapozta meg a precizitás és a részletekre való odafigyelés iránti elkötelezettségemet – a 'kétszer mérj, egyszer vágj' elvét, amelyet ma a tiszta, hibamentes kód írásánál is alkalmazok. Felelős voltam a projektek teljes folyamatának felügyeletéért, a nyersanyagtól a végső összeszerelésig, ami megerősítette a folyamatorientált gondolkodásomat és a problémamegoldó képességemet."
        },
        internship: {
            title: "Webes Tartalomkezelő Gyakornok",
            company: "Octopus Digital",
            dates: "2024. április – 2024. augusztus",
            description: "Gyakornoki időszakom alatt gyakorlati tapasztalatot szereztem egy professzionális fejlesztői környezetben. Elsődleges feladatom egy nagyvállalati weboldal tartalmának frissítése volt az Umbraco CMS segítségével. Ez a szerepkör megkövetelte a fejlesztői csapattal való együttműködést a tartalom integritásának biztosítása, a hibák elhárítása és a határidők betartása érdekében, ami értékes betekintést nyújtott egy élő webalkalmazás karbantartásába és működésébe."
        },

        projectsTitle: "Projektek",
        projectsDefault: "Kattints a részletekért.",

        cvWebsiteProjectTitle: "Szakmai Portfólió Weboldal",
        cvWebsiteProjectDefault: "Az oldal, amit éppen böngészel.",
        cvWebsiteProjectDescription: {
            part1: "Ez a weboldal a digitális önéletrajzom, amely gyors, interaktív és minimalizálja a teljes oldalbetöltéseket. A front-end egy ",
            highlightVite: "Vite",
            part2: " és ",
            highlightReact: "React",
            part3: " alapra épül, ",
            highlightTypescript: "TypeScript",
            part4: " használatával. A stílusokért a ",
            highlightTailwindCSS: "Tailwind CSS",
            part5: ", az animációk többségéért pedig a ",
            highlightFramerMotion: "Framer Motion",
            part6: " felel. Az oldal globálisan a ",
            highlightVercel: "▲ Vercel",
            part7: " platformján fut, míg az üzenetküldő funkciót egy ",
            highlightMongoDB: "MongoDB",
            part8: " adatbázis szolgálja ki, amely egy ",
            highlightDocker: "Docker",
            part9: " konténerben fut egy ",
            highlightDigitalOcean: "DigitalOcean",
            part10: " szerveren.",
        },

        cvWebsiteMessageBoxTitle: "Üzenetküldő Rendszer Architektúrája",
        cvWebsiteMessageBoxDefault: "Betekintés az üzenetküldő funkció kulisszái mögé.",
        cvWebsiteMessageBoxDescription: {
            para1_part1: "Az üzenetküldő egy kétszintű architektúrára épül, amely egy ",
            highlight_dotnet: ".NET REST API",
            para1_part2: "-ból (C#) és egy ",
            highlight_mongo1: "MongoDB",
            para1_part3: " adatbázisból áll. Az API átjáróként szolgál az üzenetekkel kapcsolatos műveletekhez, míg a ",
            highlight_mongo2: "MongoDB",
            para1_part4: " kezeli az adatok tárolását.",
            para2_part1: "Bár egy hagyományos ",
            highlight_sql: "SQL",
            para2_part2: " adatbázis is jó választás lett volna, ez a projekt kiváló lehetőséget nyújtott a ",
            highlight_nosql: "NoSQL",
            para2_part3: " technológiák megismerésére. A ",
            highlight_mongo3: "MongoDB",
            para2_part4: " melletti döntés tudatos választás volt a ",
            highlight_doc_model: "dokumentum-alapú modelljének",
            para2_part5: " felfedezésére, még akkor is, ha a projekt jelenlegi mérete nem indokolja a ",
            highlight_scaling: "horizontális skálázhatóság",
            para2_part6: " nyújtotta előnyöket.",
            para3_part1: "A felhasználói felületet a hatékonyság jegyében terveztem. Amikor a felhasználó megnyitja a chatet, az alkalmazás először a ",
            highlight_storage: "böngésző tárolójában",
            para3_part2: " keres egy meglévő ",
            highlight_chatid1: "chat ID",
            para3_part3: "-t. Ha talál, betölti a beszélgetést. Ha nem, az új chat csak az első üzenet elküldésekor jön létre. Ez a '",
            highlight_lazy: "lusta létrehozás",
            para3_part5: "' megközelítés elkerüli a felesleges adatbázis-bejegyzéseket.",
            para4_part1: "A háttérben minden beszélgetés egyetlen dokumentumként van tárolva a ",
            highlight_mongo4: "MongoDB",
            para4_part2: "-ben. Ez a dokumentum tartalmazza a ",
            highlight_chatid3: "chat ID",
            para4_part3: "-t, a létrehozási és frissítési időbélyegeket, valamint egy beágyazott tömböt az üzenetekkel.",
            para5_part1: "A beszélgetések kezelésére egy külön ",
            highlight_admin: "adminisztrációs felületet",
            para5_part2: " készítettem, amely lehetővé teszi a bejövő üzenetek megtekintését és megválaszolását, lezárva a kommunikációs kört."
        },

        ttWebsiteProjectTitle: "Kézműves E-kereskedelmi Frontend",
        ttWebsiteProjectDefault: "Egy teljesen reszponzív és performáns weboldal frontend egy asztalos vállalkozás számára.",
        ttWebsiteProjectExpanded: {
            performance: {
                title: "Teljesítmény-központú Architektúra",
                default: "Gyors betöltésre és zökkenőmentes felhasználói élményre optimalizálva.",
                expanded: {
                    part1: "Fejlett teljesítménynövelő mintákat alkalmaztam, beleértve a komponens-szintű kód-felosztást a `React.lazy()` segítségével, valamint az oldalszakaszok lusta betöltését az `IntersectionObserver` API-val. Ez gyors kezdeti betöltést és minimális adatforgalmat biztosít."
                }
            },
            interactive: {
                title: "Interaktív és Egyedi Komponensek",
                default: "Egyedi, újrahasznosítható komponensek és gazdag animációk.",
                expanded: {
                    part1: "Egyedi, újrahasznosítható komponenseket fejlesztettem ",
                    highlightReact: "React",
                    part2: " és ",
                    highlightTypescript: "TypeScript",
                    part3: " használatával. A központi elem egy húzható kép-körhinta, amely a ",
                    highlightFramerMotion: "Framer Motion",
                    part4: " könyvtárral készült a sima, fizika-alapú animációk érdekében."
                }
            },
            stack: {
                title: "Modern és Karbantartható Tech Stack",
                default: "Ipari szabványoknak megfelelő, skálázható technológiai háttérrel.",
                expanded: {
                    part1: "A projekt ",
                    highlightVite: "Vite",
                    part2: ", ",
                    highlightReact: "React",
                    part3: " és ",
                    highlightTailwindCSS: "Tailwind CSS",
                    part4: " alapokra épül, ami hatékony és karbantartható stílusozási munkafolyamatot tesz lehetővé."
                }
            },
            design: {
                title: "Ügyfél-központú Tervezés",
                default: "A felhasználói felület és a márkaidentitás az üzleti igényekre szabva.",
                expanded: {
                    part1: "Az alkalmazás a színpalettától az elrendezésig egyedi üzleti igények szerint lett megtervezve, bizonyítva, hogy képes vagyok a termékkövetelményeket egy csiszolt végtermékké alakítani."
                }
            }
        },

        hsTitle: "Salamon Ernő Elméleti Líceum",
        hsDefault: "Matematika-Informatika",
        hsExpanded: "A szakirányom a matematikára és az informatikára fókuszált, kiemelt hangsúlyt fektetve a C++ programozás alapjaira.",
        uniTitle: "Sapientia EMTE",
        uniDefault: "Gazdasági Informatika",
        uniExpanded: "Szilárd alapot szereztem a legfontosabb informatikai és közgazdasági területeken, többek között: Programozás Alapjai, Java Programozás, Operációkutatás, Adatbázis-tervezés, Számítógépes Hálózatok és Operációs Rendszerek."
    }
};