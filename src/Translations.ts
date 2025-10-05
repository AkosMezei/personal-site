export const translations = {
    en: {
        translation:{
        aboutMe: {
            title: "About Me",
            description: "Hello! I'm <name>Mezei Ákos</name>, a self-taught full-stack developer driven by a passion for building elegant solutions to complex problems.",
            expanded_p1: "My journey into tech started in my family's woodworking shop, where I learned to value precision, planning, and the satisfaction of turning an idea into a well-crafted product. I've translated that same dedication to craftsmanship into the digital world.",
            expanded_p2: "This portfolio is a showcase of that philosophy, from the dynamic, weather-aware front-end built with <reactLink>React</reactLink> and <typeScriptLink>TypeScript</typeScriptLink> to the custom <dotnetLink>.NET REST API</dotnetLink> that powers its functionality.",
            expanded_p3: "When I step away from the keyboard, I'm usually either hiking or finding practical solutions to the everyday challenges of village life. I'm a builder at heart, and I'm eager to bring my unique blend of craftsmanship and curiosity to a forward-thinking development team.",
        },
        education: {
            title: "Education",
            highSchool: {
                title: "Salamon Ernő Theoretical High School",
                description: "This is where I first dove into programming, building a strong foundation in logic and algorithmic thinking through C++ that sparked my passion for software development.",
                dates: "2014 - 2018",
            },
            university: {
                title: "Sapientia University (EMTE)",
                description_p1: "My time at university was an invaluable deep dive into the intersection of software development and quantitative problem-solving. The highlight was a key project in <bold>Operations Research</bold>, where I co-developed a tool in <matlabLink>MATLAB</matlabLink> to solve a complex stock portfolio optimization problem.",
                description_p2: "The application utilized <bold>linear programming</bold> to maximize profit under various real-world constraints like budget, transaction costs, and per-stock investment limits.",
                description_p3: "This hands-on experience of translating a complex business requirement into a functional, data-driven solution solidified my passion for building practical software. It ultimately led me to transition from formal academia to a fully self-directed path focused on modern full-stack development.",
                dates: "2019 - 2021",
            },
            universityProject: {
                title: "Project: Stock Portfolio Optimizer",
                status: "Completed as part of my university coursework.",
                what_title: "What is it?",
                what_description: "A decision-support tool built in <matlabLink>MATLAB</matlabLink> that uses linear programming to find the most profitable investment strategy for a stock portfolio. Given a set of stocks, their current prices, expected future prices, and a variety of constraints, the application calculates the optimal number of shares to purchase of each stock to maximize potential profit.",
                why_title: "Why was it built?",
                why_description: "This project was the centerpiece of my <bold>Operations Research</bold> course, designed to bridge the gap between abstract mathematical theory and real-world financial decision-making. The goal was to move beyond simple \"buy low, sell high\" logic and create a robust model that could handle the complex, interlocking constraints that real investors face, such as budget limits, transaction fees, and minimum investment requirements per asset.",
                how_title: "How does it work?",
                how_description: "The solution is modeled as a <bold>Mixed-Integer Linear Programming (MILP)</bold> problem, chosen because the number of shares purchased must be a whole number.",
                how_bullet_1: "<subtitle>Modeling the Problem:</subtitle> The core of the project involved translating the financial requirements into a mathematical model. The \"objective function\" was defined to maximize profit (the difference between the total expected sale value and the total purchase cost, minus commissions). This was subjected to a series of linear constraints representing the investor's rules (e.g., total_investment <= 5,000,000 EUR).",
                how_bullet_2: "<subtitle>Implementation in MATLAB:</subtitle> I leveraged <matlabLink>MATLAB</matlabLink>'s Optimization Toolbox, specifically the <code>intlinprog</code> function, which is a powerful solver designed for this exact type of problem. The application's UI allows a user to input all necessary parameters (number of stocks, prices, commissions, constraints) dynamically.",
                how_bullet_3: "<subtitle>Analysis & Visualization:</subtitle> After the solver finds the optimal solution, the application doesn't just output a number. It provides a clear breakdown of how many shares of each stock to buy, the total cost, and the projected profit. It also includes a <bold>sensitivity analysis</bold> feature, generating graphs that visualize how the potential profit and optimal purchase quantity change as the price of a single stock varies. This provides crucial insights into the risk and volatility of the investment strategy.",
            },
        },
        experience: {
            title: "Experience",
            woodworking: {
                title: "Woodworking Craftsman",
                company: "Local Artisan Workshop",
                bullet_1: "Translated abstract ideas into detailed designs and then into high-quality, finished products, managing the full project lifecycle from concept to delivery.",
                bullet_2: "Developed a foundational 'measure twice, cut once' mentality, applying a high standard for precision and attention to detail that directly translates to writing clean, bug-resistant code.",
                bullet_3: "Managed projects from raw material selection through to final assembly, honing skills in process adherence, problem-solving, and delivering on strict project requirements.",
                dates: "TODO",
            },
            internship: {
                title: "Web Content Intern",
                company: "Octopus Digital",
                bullet_1: "Managed and updated content for an enterprise website, using the **Umbraco CMS** to ensure content integrity and alignment with project goals.",
                bullet_2: "Used Figma as the single source of truth to update and populate content in the Umbraco CMS, ensuring a 1:1 consistency between the design mockups and the live site.",
                bullet_3: "Operated within a professional development environment, gaining valuable insight into the maintenance and operational lifecycle of a commercial web application.",
                dates: "April 2024 – August 2024",
            }
        },
        projects: {
            title: "Projects",
            description: "I believe the best way to demonstrate skill is to build tangible solutions. Each project below is a case study in solving a real-world problem, from enhancing personal productivity to creating professional-grade web applications. You'll find my featured projects first, followed by a look into what I'm currently building.",
            featured: {
                title: "Featured Projects",
                portfolio: {
                    title: "Personal Portfolio & Digital Résumé",
                    description: "The dynamic, interactive site you're currently on.",
                    repoLinkText: "Click here to view the source code on GitHub",
                    what_title: "What is it?",
                    what_description: "A high-performance, full-stack <SPALink>Single-Page Application (SPA)</SPALink> that serves as my digital résumé. It features a dynamic, weather-aware background, a frictionless real-time messaging system, interactive UI elements, and multi-language support.",
                    //possibly link the feature names to the sections in the deep dive? sounds like a headache for minimal payoff, but may be worth looking into
                    why_title: "Why was it built?",
                    why_description: "To create a digital presence that is more engaging and informative than a traditional PDF résumé. The goal was to build a site that is not just a document, but a <bold>living demonstration of my full-stack development capabilities</bold> from a polished, animated frontend to a secure, containerized backend API. Every feature is a deliberate showcase of a specific technical skill or architectural pattern.",
                    how_title: "How does it work?",
                    how_description: "The site is built with a decoupled architecture, consisting of a <reactLink>React</reactLink> frontend, a <dotnetLink>.NET</dotnetLink> backend API, and a serverless BFF.",

                deepDive: {
                    title: "Technical Deep Dive",
                    description: "Below is a detailed breakdown of the architecture and key features of this portfolio site. Each section can be expanded to reveal more in-depth technical information.",
                    frontEnd: {
                        title: "Frontend",
                        architectureAndTechnologies: {
                            title: "Architecture & Technologies",
                            description: "A high-performance Single-Page Application built with <reactLink>React</reactLink>, <typeScriptLink>TypeScript</typeScriptLink>, and <viteLink>Vite</viteLink>, featuring a responsive UI styled with <tailwindLink>Tailwind CSS</tailwindLink> and animated with <framerMotionLink>Framer Motion.</framerMotionLink>",
                            expanded_bullet_1: "<subtitle>Framework:</subtitle> The site is a <SPALink>Single-Page Application (SPA)</SPALink> built with <reactLink>React</reactLink> and <typeScriptLink" +
                                ">TypeScript</typeScriptLink" +
                                ">, using <viteLink>Vite</viteLink> for the build tool.",
                            expanded_bullet_2: "<subtitle>Styling:</subtitle> <tailwindLink>Tailwind CSS</tailwindLink> is used for styling the components.",
                            expanded_bullet_3: "<subtitle>Animations:</subtitle> All major UI animations, including layout and transition effects, are handled by <framerMotionLink>Framer Motion.</framerMotionLink>",
                            expanded_bullet_4: "<subtitle>State Management:</subtitle> Core <reactLink>React</reactLink> features like <code>useState</code> and <code>useContext</code> are used for managing the state of interactive components.",
                            expanded_bullet_5: "<subtitle>Deployment:</subtitle> The frontend is deployed and hosted on <vercelLink>Vercel.</vercelLink>",
                            },
                        features: {
                            title: "Key Features",
                            description: "Featuring a dynamic background that responds to time and weather, a frictionless messaging system, interactive tech links, and a custom multi-language system.",
                            dynamicBackground: {
                                title: "Dynamic Background",
                                description: "The background is fully dynamic and changes based on both the time of day and real-world weather conditions.",
                                bullet_1: "<subtitle>Time-Based Gradient:</subtitle> Both the light and dark themes feature a background gradient that transitions smoothly between different color schemes for morning, midday, evening, and night.",
                                bullet_2: "<subtitle>Dynamic Weather Effects:</subtitle> In the light theme, clouds are dynamically generated and animated across the screen based on the user's local weather. The dark theme features a parallax starfield effect.",
                            },
                            messagingUI: {
                                title: "Frictionless Messaging UI",
                                description: "A custom-built, two-way messaging system designed for ease of use, allowing for seamless, sign-up-free conversations.",
                                bullet_1: "To minimize friction, users can send messages without any sign-up process. A unique <code>chatID</code> is generated and stored in the browser's <code>localStorage</code>, allowing returning users to seamlessly continue their conversations.",
                            },
                            interactiveTechLinks: {
                                title: "Interactive Tech Links",
                                description: "Throughout the site's text, mentions of specific technologies are interactive links that dynamically change color to match official branding on hover.",
                                bullet_1: "On hover, they dynamically change color to match the official branding of the technology—for instance, Vite displays its signature gradient. These links lead directly to the technologies' official websites.",
                            },
                            multiLanguageSupport: {
                                title: "Multi-Language Support",
                                description: "The portfolio supports multiple languages through a custom-built, lightweight translation system.",
                                bullet_1: "All text content is loaded from simple JSON files, making the system easy to manage and extend. ---TODO change this to reflect the new i18n system", //TODO rewrite this part to mention transitioning to i18n
                            }
                        }
                    },
                    backEnd: {
                        title: "Backend & Infrastructure",
                        architectureAndTechnologies: {
                            title: "API Architecture & Technologies",
                            description: "A secure REST API built with <dotnetLink>.NET 8</dotnetLink> and <csharpLink>C#,</csharpLink> using a clean architectural pattern. It's powered by a <mongoDBLink>MongoDB</mongoDBLink> database and containerized with <dockerLink>Docker</dockerLink> for deployment.",
                            expanded_bullet_1: "<subtitle>API Framework:</subtitle> The messaging system is powered by a REST API built with <dotnetLink>.NET 8</dotnetLink> <csharpLink>(C#).</csharpLink> It follows a clean architectural pattern with controllers handling HTTP requests, a dedicated <code>MessageService</code> for business logic, and clear data models.",
                            expanded_bullet_2: "<subtitle>Database:</subtitle> <mongoDBLink>MongoDB</mongoDBLink> serves as the NoSQL database. A conversation, including all its messages, is stored as a single document, which is an efficient design for this use case.",
                            expanded_bullet_3: "<subtitle>Deployment:</subtitle> The <dotnetLink>.NET</dotnetLink> API is containerized using <dockerLink>Docker</dockerLink> and deployed on <digitalOceanLink>DigitalOcean.</digitalOceanLink> The API is configured to run on a port specified by an environment variable, a standard practice for containerized applications.",
                        },
                        security: {
                            title: "Security & Configuration",
                            description: "The API is secured with a custom API key handler, role-based authorization, and a strict CORS policy. Configuration and secrets are managed via environment variables.",
                            bullet_1: "<subtitle>Authentication:</subtitle> Instead of traditional tokens, it uses a custom <code>ApiKeyHandler</code> that validates API keys sent in the <code>X-API-Key</code> header.",
                            bullet_2: "<subtitle>Authorization:</subtitle> It defines separate policies for \"User\" and \"Admin\" roles. For example, the endpoint to retrieve all conversations is restricted to admins only, while creating or updating a single conversation is accessible to users. This provides granular control over the API.",
                            bullet_3: "<subtitle>Configuration Management:</subtitle> The application is configured to pull sensitive data like connection strings and API keys from environment variables, with fallbacks to local configuration files for development. This is a secure and flexible approach.",
                            bullet_4: "<subtitle>Specific CORS Policy:</subtitle> The Cross-Origin Resource Sharing (CORS) policy is explicitly configured to only allow requests from the specific domains of the portfolio website and localhost, preventing unauthorized access from other sites.",
                        },
                        weatherService: {
                            title: "Weather Service (BFF)",
                            description: "A <vercelLink>Vercel</vercelLink> serverless function acts as a Backend-for-Frontend to securely call and aggregate data from multiple third-party weather APIs.",
                            bullet_1: "<subtitle>The Why:</subtitle> This was built to securely hide third-party API keys from the client and to create a resilient system that doesn't rely on a single weather provider.",
                            bullet_2: "<subtitle>The How:</subtitle> It calls multiple weather APIs in parallel, normalizes their different data formats into a single, consistent category (\"clear,\" \"cloudy,\" or \"stormy\"), and returns the result of a majority vote to the frontend.",
                        }
                    },
                    stockPortfolioOptimizer: {
                        title: "Stock Portfolio Optimizer",
                        description: "A university case study in applying Operations Research principles to solve a complex financial modeling problem. This project demonstrates the ability to translate intricate business rules into a mathematical model and a functional software solution.",
                        overview: {
                            title: "Project Overview",
                            description: "A decision-support tool built in <matlabLink>MATLAB</matlabLink> that uses linear programming to find the most profitable investment strategy for a stock portfolio, given a complex set of real-world constraints.",
                            expanded: "This project was the centerpiece of my Operations Research course, designed to create a functional application for maximizing investment returns. It involved mathematical modeling, software implementation in <matlabLink>MATLAB,</matlabLink> and a comparative analysis against an alternative solution built with Excel VBA and the Solver add-in.",
                        },
                        objective: {
                            title: "The Problem & Objective",
                            description: "To create a robust model that moves beyond simple \"buy low, sell high\" logic to handle the interlocking constraints that real investors face, thereby maximizing potential profit.",
                            expanded_description: "The objective was to maximize the total profit from a stock portfolio, subject to a variety of constraints:",
                            bullet_1: "<subtitle>Overall Budget:</subtitle> A hard limit on the total capital that could be invested.",
                            bullet_2: "<subtitle>Per-Stock Minimum Investment:</subtitle> A requirement to invest a minimum monetary amount in certain stocks to ensure diversification.",
                            bullet_3: "<subtitle>Per-Stock Maximum Share Count:</subtitle> A cap on the number of shares that could be purchased for a specific stock.",
                            bullet_4: "<subtitle>Transaction Commissions:</subtitle> Both buying and selling commissions were factored in as a percentage of the transaction value, impacting the net profit.",
                        },
                        tech: {
                            title: "Technical Solution & Implementation",
                            description: "The problem was modeled as a Mixed-Integer Linear Programming (MILP) problem and implemented using <matlabLink>MATLAB's</matlabLink> Optimization Toolbox, chosen for its power and precision in handling integer constraints.",
                            bullet_1: "<subtitle>Mathematical Modeling:</subtitle> The core of the project was translating the financial requirements into a mathematical model. The \"objective function\" was defined to maximize profit, and this was subjected to a series of linear inequality constraints representing the investor's rules.",
                            bullet_2: "<subtitle>MATLAB Implementation:</subtitle> I leveraged MATLAB's Optimization Toolbox, specifically the <code>intlinprog</code> function, which is a powerful solver designed for MILP problems where variables (like the number of shares) must be whole numbers.",
                            bullet_3: "<subtitle>Comparative Analysis:</subtitle> The MATLAB solution was also benchmarked against an alternative model built in <bold>Excel using the Solver add-in and VBA<bold>. This provided valuable insights into the performance, scalability, and ease of modeling of the different technical approaches to the same problem.",
                        },
                        keyFeature: {
                            title: "Key Feature: Sensitivity Analysis",
                            description: "The tool goes beyond providing a single answer by visualizing how the optimal strategy and potential profit change as market conditions vary.",
                            expanded_p1: "The application can generate two key graphs for any given stock, providing crucial insights into the investment's stability:",
                            bullet_1: "<subtitle>Profit vs. Stock Price:</subtitle> This graph shows how the total portfolio profit would change if the purchase price of a single stock were different, revealing at what price point the stock is no longer a profitable part of the optimal solution.",
                            bullet_2: "<subtitle>Optimal Shares vs. Stock Price:</subtitle> This graph visualizes how many shares of a given stock the model recommends buying at different price points.",
                            expanded_p2: "This analysis turns the application from a simple calculator into a true <bold>decision-support system</bold>, allowing the user to understand the risk and volatility associated with their strategy.",
                        }
                    }
                }
                },
            },
            workInProgress: {
                title: "Work in Progress",
                GAnki: {
                    title: "GAnki - AI-Augmented Spaced Repetition System",
                    status: "Current Status: P0: Spec Sheet Only",
                    overview: {
                        title: "Project Overview",
                        what: "<subtitle>What:</subtitle> An intelligent, next-generation flashcard application that uses a large language model (e.g., <geminiLink>Google's Gemini</geminiLink>) to provide objective, AI-driven feedback on user-generated answers.",
                        why: "<subtitle>Why:</subtitle> To solve the core problem of traditional spaced repetition systems (SRS) like <ankiLink>Anki</ankiLink>, which rely on unreliable, subjective self-evaluation. This leads to inefficient study and a false sense of mastery.",
                        how: "<subtitle>How:</subtitle> A full-stack application featuring a <reactLink>React</reactLink>/<typeScriptLink" +
                            ">TypeScript</typeScriptLink" +
                            "> frontend and a secure <dotnetLink>.NET</dotnetLink> backend. The backend acts as a proxy, sending the user's answer and the card's context to the <geminiLink>Gemini</geminiLink> API for evaluation and returning objective feedback to the user.",
                    },
                    deepDive: {
                        title: "Technical Deep Dive",
                        coreFeatures: {
                            title: "Core Features (MVP)",
                            description: "The Minimum Viable Product includes secure user authentication, full CRUD management for flashcard decks, and an AI-powered review session that provides objective feedback and suggests the next review interval.",
                            bullet_1: {
                                title:"User & Deck Management:",
                                bullet_1: "Secure user authentication (registration, login, logout).",
                                bullet_2: "Standard CRUD (Create, Read, Update, Delete) functionality for flashcard decks and individual cards.",
                            },
                            bullet_2: {
                                title:"Card Structure:",
                                bullet_1: "Each card will contain four primary data fields: <code>front</code> (question), <code>back</code> (ideal answer/keywords), <code>truths</code> (user-supplied ground truth for nuanced topics and grounding), and <code>observations</code> (user's personal notes).",
                            },
                            bullet_3: {
                                title:"AI-Powered Review Session:",
                                bullet_1: "The review interface will present the <code>front</code> of a card and a free-text input field for the user's answer.",
                                bullet_2: "Upon submission, the user's answer and card context will be sent to the Gemini API via a secure backend.",
                                bullet_3: "The AI will be prompted to evaluate the correctness, provide concise feedback, and suggest a review interval category (e.g., \"Again,\" \"Hard,\" \"Normal,\" \"Easy\")."
                            },
                            bullet_4: {
                                title:"API Key Management:",
                                bullet_1: "Users will be required to provide their own Google AI Studio API key in a secure settings panel to power the evaluation feature.",
                            },
                        },
                        architecture: {
                            title: "Proposed Technical Architecture",
                            description: "A full-stack application featuring a <reactLink>React</reactLink>/<typeScriptLink" +
                                ">TypeScript</typeScriptLink" +
                                "> frontend, a secure <dotnetLink>.NET</dotnetLink> backend API to act as an intermediary for all <geminiLink>Gemini</geminiLink> API calls, and a relational <postgresLink>PostgresSQL</postgresLink> database.",
                            bullet_1: {
                                title: "Frontend:",
                                bullet_1: "<subtitle>Framework:</subtitle> <reactLink>React</reactLink> with <typeScriptLink" +
                                    ">TypeScript</typeScriptLink" +
                                    "> (via <viteLink>Vite</viteLink> + <SWCLink>SWC</SWCLink>).",
                                bullet_2: "<subtitle>Styling:</subtitle> <tailwindLink>Tailwind CSS</tailwindLink> for rapid, systematic UI development.",
                                bullet_3: "<subtitle>Data Fetching:</subtitle> <code>axios</code> for handling REST API communication.",
                            },
                            bullet_2: {
                                title: "Backend:",
                                bullet_1: "<subtitle>Framework:</subtitle> A robust <dotnetLink>.NET</dotnetLink> API responsible for user authentication, database operations, and acting as a secure proxy for all <geminiLink>Gemini</geminiLink> API calls.",
                            },
                            bullet_3: {
                                title: "Database:",
                                bullet_1: "<subtitle>Type:</subtitle> A relational (SQL) database like <postgresLink>PostgresSQL</postgresLink>, chosen due to the highly structured and relational nature of users, decks, and cards.",
                            },
                        },
                        riskAnalysis: {
                            title: "Risk Analysis & Mitigation",
                            description: "The primary risks identified are LLM hallucination, API latency, and API cost. These are mitigated through advanced prompt engineering, optimistic UI patterns, and a \"bring-your-own-key\" model for the MVP.",
                            bullet_1: {
                                title: "Primary Risk: LLM Hallucination / Inaccurate Evaluations.",
                                bullet_1: "<subtitle>Mitigation:</subtitle> The prompt sent to the AI will be heavily grounded with the card's <code>front</code>, <code>back</code>, and user-defined <code>truths</code>. The backend will also augment the prompt with real-time Google Search results to provide further context. The user will always be able to override the AI's suggestion.",
                            },
                            bullet_2: {
                                title: "Secondary Risk: API Latency.",
                                bullet_1: "<subtitle>Mitigation:</subtitle> The UI will implement an optimistic, non-blocking design with a clear loading state while waiting for the AI's response to manage user expectations.",
                            },
                            bullet_3: {
                                title: "Tertiary Risk: API Cost & Rate Limits.",
                                bullet_1: "<subtitle>Mitigation (MVP):</subtitle> By requiring users to supply their own API key, this risk is offloaded from the application owner.",
                                bullet_2: "<subtitle>Mitigation (Future):</subtitle> A potential \"free trial\" feature would require strict server-side rate-limiting and usage monitoring.",
                            },
                        },
                        devPlan: {
                            title: "Phased Development Plan",
                            description: "The project follows a pragmatic, iterative development plan: first, build a complete \"dumb\" version with traditional self-evaluation, then layer in the backend and the \"genius\" AI features.",
                            bullet_1: "<subtitle>Phase 1 - The \"Dumb\" Clone:</subtitle> Build the core frontend application with full CRUD functionality for decks and cards, using a traditional self-evaluation UI.",
                            bullet_2: "<subtitle>Phase 2 - Backend & Database:</subtitle> Set up the database schema and build the backend API endpoints for user auth and card management.",
                            bullet_3: "<subtitle>Phase 3 - Integration:</subtitle> Connect the frontend to the backend, replacing all local state with live API calls.",
                            bullet_4: "<subtitle>Phase 4 - The \"Genius\" Feature:</subtitle> Implement the Gemini API integration. Build the prompt engineering logic and the new review UI.",
                            bullet_5: "<subtitle>Phase 5 - Deployment & Polish:</subtitle> Deploy the full stack to a production-ready environment and conduct end-to-end testing.",
                        }
                    }
                },
                dealTracker: {
                    title: "Vinted Deal Tracker & Opinion Getter",
                    status: "Current Status: P0.5: Scraper, front- and back-end scaffolded",
                    overview: {
                        title: "Project Overview",
                        what: "<subtitle>What:</subtitle> A personalized, self-hosted web application that automatically tracks Vinted items, sends email alerts on price drops, and provides a unique sharing feature for gathering friends' opinions before a purchase.",
                        why: "<subtitle>Why:</subtitle> This project was built as a thoughtful gift for a friend, designed to solve the real-world frustration of manually tracking online deals. It tackles the technical challenge of ethical web scraping against modern anti-bot measures where commercial tools often fail.",
                        how: "<subtitle>How:</subtitle> A full-stack application with a React frontend and a <dotnetLink>.NET</dotnetLink>/<pythonLink>Python</pythonLink> backend. The key architectural decision is a lightweight scraper that runs from a <bold>local home server</bold>, using a residential IP and realistic browser automation (via <playwrightLink>Playwright</playwrightLink>) to remain virtually undetectable.",
                    },
                    deepDive: {
                        title: "Technical Deep Dive",
                        coreFeatures: {
                            title: "Core Features (MVP)",
                            description: "The application allows a user to track Vinted items by URL, view price history, receive automated email alerts on price drops, and use a unique \"Opinion Getter\" to seamlessly collect feedback from friends.",
                            bullet_1: "<subtitle>Item Tracking:</subtitle> Add items via URL for automatic tracking of name, image, and price. A central dashboard displays all items, and a detailed view shows a full price history chart.",
                            bullet_2: "<subtitle>Price Monitoring & Alerts:</subtitle> A scheduled script runs locally on a home server to check for price updates. If a drop is detected, a formatted email alert is sent via a service like <sendGridLink>SendGrid.</sendGridLink> TODO expand this section", //TODO expand this section, specs go into more detail
                            bullet_3: {
                                title: "The \"Opinion Getter\":",
                                bullet_1: "Generate a unique, shareable link for any tracked item.",
                                bullet_2: "The link leads to a public page where friends can view the item and leave comments, which are then aggregated back into the main application for the user to review.",
                            },
                        },
                        architecture: {
                            title: "Technical Architecture",
                            description: "A decoupled architecture featuring a <reactLink>React</reactLink> frontend on <vercelLink>Vercel</vercelLink>, a <dockerLink>Dockerized</dockerLink> backend API on <digitalOcean>DigitalOcean</digitalOcean>, and a unique, locally hosted scraper to ensure effectiveness and avoid IP blocks.",
                            bullet_1: "<subtitle>Frontend:</subtitle> <reactLink>React</reactLink> <typeScriptLink" +
                                ">(TypeScript)</typeScriptLink" +
                                "> with <tailwindLink>Tailwind CSS</tailwindLink>, deployed on <vercelLink>Vercel.</vercelLink>",
                            bullet_2: "<subtitle>Backend API:</subtitle> <dotnetLink>.NET</dotnetLink> or <pythonLink>Python</pythonLink> (<fastAPILink>FastAPI</fastAPILink>/<flaskLink>Flask</flaskLink> recommended for stack simplicity), deployed as a <dockerLink>Docker</dockerLink> container on DigitalOcean.",
                            bullet_3: "<subtitle>Database:</subtitle> <mongoDBLink>MongoDB</mongoDBLink> (using a free-tier cluster), with the Vinted item URL serving as the unique <code>_id</code> for each document.",
                            bullet_4: "<subtitle>The Scraper:</subtitle> The core of the system. It runs on a dedicated <bold>home server</bold> (e.g., a repurposed laptop) via a cron job. This ensures the scraper operates 24/7 from a <bold>residential IP address</bold>, making its traffic appear as authentic user activity.",
                        },
                        riskAnalysis: {
                            title: "Risk Analysis & Mitigation",
                            description: "The primary risks are anti-scraping measures and scraper brittleness. These are mitigated by running the scraper from a residential IP with realistic automation, and by implementing robust error handling and notifications.",
                            bullet_1: {
                                title: "Primary Risk: Anti-Scraping (e.g., Cloudflare).",
                                bullet_1: "<subtitle>Mitigation:</subtitle> Run the scraper from a residential IP using a real browser profile via <playwrightLink>Playwright</playwrightLink>. Implement respectful delays and a realistic User-Agent to mimic human behavior.",
                            },
                            bullet_2: {
                                title: "Secondary Risk: Scraper Brittleness.",
                                bullet_1: "<subtitle>Mitigation:</subtitle> The scraper will break if Vinted changes its site layout. Implement robust error handling and logging. The script will be configured to send a notification to the admin if scraping fails consecutively.",
                            },
                            bullet_3: {
                                title: "Tertiary Risk: Ethical Considerations & Footprint.",
                                bullet_1: "<subtitle>Mitigation:</subtitle> The project's scope (low-frequency, personal use, single-user traffic) is designed to be indistinguishable from manual browsing and operates ethically, causing no discernible strain on Vinted's servers.",
                            },
                        },
                        availability: {
                          title: "A Note on Availability",
                          description: "\"Can I use this?\" I'm flattered you asked! Here's why the magic of this tool relies on it being a private, one-of-a-kind solution.",
                          expanded_p1: "The secret sauce of this project is its ethical, \"fly under the radar\" ethos. The scraper's effectiveness comes from its architecture: it runs from a single, residential IP address and behaves exactly like a real person manually checking a few items a day. ",
                          expanded_p2: "Scaling this into a public service would instantly change that footprint, defeating the very purpose of its design and crossing an ethical boundary. ",
                          expanded_p3: "For that reason, it will remain what it was always meant to be: an one-of-a-kind gift.",
                        },
                        devPlan: {
                            title: "Phased Development Plan",
                            description: "Development is phased to tackle the highest-risk component first: building the scraper. Subsequent phases add the backend, frontend, and final integration.",
                            bullet_1: "<subtitle>Phase 1: Scraper Development:</subtitle> Write and test the core <pythonLink>Python</pythonLink>/<playwrightLink>Playwright</playwrightLink> script to parse a live Vinted page.",
                            bullet_2: "<subtitle>Phase 2: Backend & Database:</subtitle> Set up <mongoDBLink>MongoDB</mongoDBLink> and build the core CRUD API endpoints for items.",
                            bullet_3: "<subtitle>Phase 3: Frontend Development:</subtitle> Build the main dashboard and item detail views.",
                            bullet_4: "<subtitle>Phase 4: Integration & Core Logic:</subtitle> Connect all components and implement the email notification service.",
                            bullet_5: "<subtitle>Phase 5: Final Features & Deployment:</subtitle> Build the \"Opinion Getter\" sharing feature and deploy the full stack.",
                        }
                    }
                },
                DSAShowcase: {
                    title: "Grind75 - An Interactive DS&A Showcase",
                    status: "Current Status: P0: Spec Sheet Only",
                    overview: {
                        title: "Project Overview",
                        what: "<subtitle>What:</subtitle> A data-driven, interactive exploration of my solutions to the Grind75 list of Data Structures & Algorithms problems. It's not just a list of code; it's a tool for running, benchmarking, and visualizing the performance of different algorithmic approaches.",
                        why: "<subtitle>Why:</subtitle> To demonstrate a deeper understanding of computer science fundamentals that goes beyond simple correctness. The goal is to visually articulate the \"why\" behind optimal solutions—showcasing the tangible impact of time and space complexity in a practical way.",
                        how: "<subtitle>How:</subtitle> A self-contained frontend component built with <reactLink>React</reactLink> and <typeScriptLink" +
                            ">TypeScript.</typeScriptLink" +
                            "> It allows users to run the solutions directly in the browser with custom inputs. Performance data is presented through interactive charts (using libraries like <plotlyLink>Plotly</plotlyLink> or <threejsLink>Three.js</threejsLink>) that compare the benchmarked performance of brute-force vs. optimized solutions.",
                    },
                    deepDive: {
                        title: "Technical Deep Dive",
                        coreFeatures: {
                            title: "Core Features",
                            description: "The project is designed to be an educational tool, featuring live code execution, comparative performance analysis, and data visualizations of both performance metrics and topic coverage.",
                            bullet_1: "<subtitle>Interactive Code Execution (MVP):</subtitle> Users can select a problem and run the corresponding <javascriptLink>JavaScript</javascriptLink>/<typeScriptLink" +
                                ">TypeScript</typeScriptLink" +
                                "> solution directly on the site. An interface will allow for changing input values to test various edge cases.",
                            bullet_2: "<subtitle>Comparative Performance Analysis (V1.5):</subtitle> For key problems, the showcase will feature multiple solutions (e.g., brute-force, single-pass, optimal). The component will display benchmark data showing the dramatic performance differences between these approaches.",
                            bullet_3: {
                                title: "Data Visualization (V2.0):",
                                bullet_1: "<subtitle>Performance Charts:</subtitle> Interactive visualizations will plot the performance differences, making concepts like O(n²) vs. O(n) visually intuitive.",
                                bullet_2: "<subtitle>Topic Mind Map:</subtitle> A creative visualization will map out the topics covered (e.g., Arrays, Trees, Dynamic Programming), showing the interconnectedness of different DS&A concepts.",
                            },
                        },
                        architecture: {
                            title: "Technical Architecture & Approach",
                            description: "A self-contained, frontend-only architecture was chosen for simplicity and speed. All logic and data are stored client-side, eliminating the need for a backend or database for this use case.",
                            bullet_1: {
                                title: "<subtitle>Stack:</subtitle> Built with <reactLink>React</reactLink>, <typeScriptLink" +
                                    ">TypeScript</typeScriptLink" +
                                    ">, and <tailwindLink>Tailwind CSS</tailwindLink> to remain consistent with the main portfolio. <framerMotionLink>Framer Motion</framerMotionLink> will be used for UI animations.",
                                bullet_1: "<subtitle>Visualization Libraries:</subtitle> Researching powerful but lightweight libraries like <plotlyLink>Plotly.js</plotlyLink> for 2D charts and potentially <threejsLink>Three.js</threejsLink> for the more ambitious 3D mind-map visualization.",
                                bullet_2: "<subtitle>Code Execution:</subtitle> Since the solutions are in JS/TS, they can be run natively in the browser without requiring a separate online compiler, which significantly simplifies the architecture.",
                                bullet_3: "<subtitle>Data Storage:</subtitle> A single JSON or CSV file containing benchmark results will be bundled with the site. This is a lightweight solution that avoids the overhead of a database for what is essentially static, read-only data.",
                            }
                        },
                        riskAnalysis: {
                            title: "Risk Analysis & Mitigation",
                            description: "The primary risks are potential performance degradation on the main portfolio site and ensuring a good user experience for a code-heavy component on mobile devices.",
                            bullet_1: {
                                title: "Primary Risk: Performance Impact on Main Portfolio.",
                                bullet_1: "<subtitle>Mitigation:</subtitle> The solution components will be designed to be mutually exclusive; running the code for one problem will be a distinct action, and multiple solutions will not run simultaneously. Components and visualization libraries will be code-split and lazy-loaded to minimize the initial impact on page load.",
                            },
                            bullet_2: {
                                title: "Secondary Risk: Mobile User Experience.",
                                bullet_1: "<subtitle>Mitigation:</subtitle> Code is inherently hostile to small screens. The mobile version of the component will likely feature a simplified interface. Instead of a free-form custom input field, it may use a dropdown with pre-selected test cases to ensure usability without a physical keyboard.",
                            },
                        }
                    }
                }
            }
        }
        }
    },


    hu: {

    }
};