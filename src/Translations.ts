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
                bullet_1: "Managed and updated content for an enterprise website, using the <umbracoLink>Umbraco CMS</umbracoLink> to ensure content integrity and alignment with project goals.",
                bullet_2: "Used Figma as the single source of truth to update and populate content in the <umbracoLink>Umbraco CMS</umbracoLink>, ensuring a 1:1 consistency between the design mockups and the live site.",
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
                            bullet_3: "<subtitle>Comparative Analysis:</subtitle> The MATLAB solution was also benchmarked against an alternative model built in <bold>Excel using the Solver add-in and VBA</bold>. This provided valuable insights into the performance, scalability, and ease of modeling of the different technical approaches to the same problem.",
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
                            description: "A decoupled architecture featuring a <reactLink>React</reactLink> frontend on <vercelLink>Vercel</vercelLink>, a <dockerLink>Dockerized</dockerLink> backend API on <digitalOceanLink>DigitalOcean</digitalOceanLink>, and a unique, locally hosted scraper to ensure effectiveness and avoid IP blocks.",
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
        translation:{
            aboutMe: {
                title: "Rólam",
                description: "Szia! <name>Mezei Ákos</name> vagyok, autodidakta full-stack fejlesztő. Az hajt, hogy komplex problémákra elegáns megoldásokat hozzak létre.",
                expanded_p1: "A tech világába vezető utam a családi asztalosműhelyben indult. Itt tanultam meg, milyen fontos a pontosság, a tervezés, és mekkora öröm, amikor egy ötletből kézzel fogható, minőségi termék lesz. Ugyanezt a hozzáállást vittem tovább a digitális alkotómunkába is.",
                expanded_p2: "Ez a portfólió is ezt a szemléletet mutatja be, a dinamikus, időjárás-követő, <reactLink>React</reactLink> és <typeScriptLink>TypeScript</typeScriptLink> alapú front-endtől kezdve, egészen az egészet működtető, egyedi <dotnetLink>.NET REST API</dotnetLink>-ig.",
                expanded_p3: "Amikor épp nem kódolok, akkor vagy túrázok, vagy a vidéki élet mindennapi problémáira keresek praktikus megoldásokat. Alapvetően egy építő szellemű ember vagyok, és izgatottan várom, hogy a kézműves múltból hozott precizitásomat és a veleszületett kíváncsiságomat egy modern szemléletű fejlesztői csapatnál kamatoztassam."
            },
            education: {
                title: "Tanulmányok",
                highSchool: {
                    title: "Salamon Ernő Elméleti Líceum",
                    description: "Itt kezdtem el komolyabban foglalkozni a programozással. A C++ segítségével erős logikai és algoritmikus gondolkodásbeli alapokat szereztem, ami megalapozta a szoftverfejlesztés iránti szenvedélyemet.",
                    dates: "2014 - 2018"
                },
                university: {
                    title: "Sapientia Erdélyi Magyar Tudományegyetem (EMTE)",
                    description_p1: "Az egyetemi évek kiváló lehetőséget adtak, hogy elmélyedjek a szoftverfejlesztés és a kvantitatív problémamegoldás metszetében. A tanulmányaim csúcspontja egy <bold>Operációkutatás</bold> projekt volt, melynek keretében egy komplex részvényportfólió-optimalizálási probléma megoldására fejlesztettünk egy eszközt <matlabLink>MATLAB</matlabLink>-ban.",
                    description_p2: "Az alkalmazás <bold>lineáris programozást</bold> használt a profit maximalizálására, különböző valós korlátok – mint például a költségvetés, tranzakciós költségek és részvényenkénti befektetési limitek – figyelembevételével.",
                    description_p3: "Ez a gyakorlati tapasztalat, ahol egy komplex üzleti követelményt egy működőképes, adatvezérelt megoldássá alakítottunk, szilárdította meg bennem az elhivatottságot a gyakorlatias szoftverek készítése iránt. Ez vezetett végül ahhoz, hogy a formális oktatás helyett az önálló, autodidakta utat válasszam, a modern full-stack fejlesztésre fókuszálva.",
                    "dates": "2019 - 2021"
                },
                universityProject: {
                    title: "Projekt: Részvényportfólió Optimalizáló",
                    status: "Egyetemi kurzusmunka keretében készült.",
                    what_title: "Mi ez?",
                    what_description: "Egy <matlabLink>MATLAB</matlabLink>-ban készült döntéstámogató eszköz, amely lineáris programozás segítségével határozza meg egy részvényportfólió legnyereségesebb befektetési stratégiáját. Adott részvények, azok aktuális és várható jövőbeli árai, valamint különböző korlátok alapján az alkalmazás kiszámítja az optimális darabszámot, amelyet az egyes részvényekből érdemes vásárolni a potenciális profit maximalizálása érdekében.",
                    why_title: "Miért készült?",
                    why_description: "Ez a projekt volt az <bold>Operációkutatás</bold> kurzusom központi eleme, azzal a céllal, hogy áthidalja a szakadékot az absztrakt matematikai elmélet és a valós pénzügyi döntéshozatal között. A cél a \"vedd olcsón, add drágán\" egyszerű logikáján való túllépés volt, és egy olyan robusztus modell létrehozása, amely képes kezelni azokat az összetett, egymással összefüggő korlátokat (költségvetési korlát, tranzakciós díjak, minimális befektetési követelmények), amelyekkel a valódi befektetők szembesülnek.",
                    how_title: "Hogyan működik?",
                    how_description: "A megoldást egy <bold>Vegyes Egészértékű Lineáris Programozási (MILP)</bold> problémaként modelleztük, mivel a megvásárolt részvények számának egész számnak kell lennie.",
                    how_bullet_1: "<subtitle>A probléma modellezése:</subtitle> A projekt magját a pénzügyi követelmények matematikai modellé alakítása jelentette. A \"célfüggvényt\" a profit maximalizálására definiáltuk (a teljes várható eladási érték és a teljes vételi költség különbsége, csökkentve a jutalékokkal). Ezt egy sor lineáris korlát egészítette ki, amelyek a befektető szabályait reprezentálták (pl. teljes_befektetés <= 5 000 000 EUR).",
                    how_bullet_2: "<subtitle>Megvalósítás MATLAB-ban:</subtitle> A <matlabLink>MATLAB</matlabLink> Optimization Toolbox-át, azon belül is az <code>intlinprog</code> függvényt használtam, amely egy hatékony, pont az ilyen típusú problémákra tervezett megoldó. Az alkalmazás felhasználói felülete lehetővé teszi az összes szükséges paraméter (részvények száma, árak, jutalékok, korlátok) dinamikus megadását.",
                    how_bullet_3: "<subtitle>Elemzés és vizualizáció:</subtitle> Miután a megoldó megtalálja az optimális megoldást, az alkalmazás nem csupán egy számot ad vissza. Világos bontásban mutatja be, hogy melyik részvényből hány darabot érdemes vásárolni, mennyi a teljes költség és a várható profit. Tartalmaz egy <bold>érzékenységi analízis</bold> funkciót is, amely grafikonokon vizualizálja, hogyan változik a potenciális profit és az optimális vásárlási mennyiség egy adott részvény árának változásával. Ez kulcsfontosságú betekintést nyújt a befektetési stratégia kockázatába és volatilitásába."
                }
            },
            experience: {
                title: "Tapasztalat",
                woodworking: {
                    title: "Famegmunkáló kézműves",
                    company: "Helyi kézműves műhely",
                    bullet_1: "Absztrakt ötletek átültetése részletes tervekbe, majd azok megvalósítása magas minőségű késztermékként. A teljes projekt életciklus felügyelete a tervezéstől az átadásig.",
                    bullet_2: "A \"mérj kétszer, vágj egyszer\" elv elsajátítása, ami a precizitás és a részletekre való odafigyelés fontosságára tanított. Ez a szemlélet közvetlenül kamatoztatható a tiszta, hibáknak ellenálló kód írása során.",
                    bullet_3: "Projektek teljes körű menedzselése a nyersanyag kiválasztásától a végső összeszerelésig, mely során fejlődött a folyamatok betartásához, a problémamegoldáshoz és a szigorú projektkövetelmények teljesítéséhez szükséges készségem.",
                    dates: "TODO"
                },
                internship: {
                    title: "Webtartalom-kezelő gyakornok",
                    company: "Octopus Digital",
                    bullet_1: "Nagyvállalati weboldal tartalmának kezelése és frissítése az <ubracoLink>Umbraco CMS</ubracoLink> segítségével, a tartalmi integritás és a projektcéloknak való megfelelés biztosítása.",
                    bullet_2: "A Figma használata mint \"egyedüli hiteles forrás\" (single source of truth) a tartalmak frissítéséhez az <umbracoLink>Umbraco CMS</umbracoLink>-ben, biztosítva a design tervek és az éles weboldal közötti 1:1 arányú megegyezést.",
                    bullet_3: "Professzionális fejlesztői környezetben dolgozva értékes betekintést nyertem egy kereskedelmi webalkalmazás karbantartási és működési életciklusába.",
                    dates: "2024. április – 2024. augusztus"
                }
            },
            projects: {
                title: "Projektek",
                description: "Hiszem, hogy a tudás bemutatásának legjobb módja a kézzelfogható megoldások építése. Minden alábbi projekt egy esettanulmány egy valós probléma megoldására, a személyes produktivitás növelésétől a professzionális szintű webalkalmazások készítéséig. Először a kiemelt projektjeim láthatók, melyeket egy betekintés követ abba, amin jelenleg dolgozom.",
                featured: {
                    title: "Kiemelt Projektek",
                    portfolio: {
                        title: "Személyes Portfólió és Digitális Önéletrajz",
                        description: "A dinamikus, interaktív weboldal, amelyet éppen böngészel.",
                        repoLinkText: "A forráskód megtekintése a GitHub-on",
                        what_title: "Mi ez?",
                        what_description: "Egy nagy teljesítményű, full-stack <SPALink>Single-Page Application (SPA)</SPALink>, amely a digitális önéletrajzomként funkcionál. Dinamikus, időjárás-érzékeny háttérrel, akadálymentes, valós idejű üzenetküldő rendszerrel, interaktív UI elemekkel és többnyelvű támogatással rendelkezik.",
                        why_title: "Miért készült?",
                        why_description: "A cél egy olyan digitális jelenlét megteremtése volt, amely sokkal informatívabb és érdekesebb, mint egy hagyományos PDF önéletrajz. Egy olyan oldalt akartam építeni, ami nem csupán egy dokumentum, hanem a <bold>full-stack fejlesztői képességeim élő demonstrációja</bold>: a csiszolt, animált frontendtől a biztonságos, konténerizált backend API-ig. Minden egyes funkció egy-egy konkrét technikai készség vagy architekturális minta tudatos bemutatása.",
                        how_title: "Hogyan működik?",
                        how_description: "Az oldal egy függetlenített (decoupled) architektúrával épült fel, amely egy <reactLink>React</reactLink> frontendből, egy <dotnetLink>.NET</dotnetLink> backend API-ból és egy szervermentes BFF-ből (Backend-for-Frontend) áll.",
                        deepDive: {
                            title: "Részletes Technikai Bemutató",
                            description: "Az alábbiakban a portfólió oldal architektúrájának és kulcsfontosságú funkcióinak részletes bemutatása található. Minden szekció lenyitható a további technikai információkért.",
                            frontEnd: {
                                title: "Frontend",
                                architectureAndTechnologies: {
                                    title: "Architektúra és Technológiák",
                                    description: "Egy nagy teljesítményű, <reactLink>React</reactLink>, <typeScriptLink>TypeScript</typeScriptLink> és <viteLink>Vite</viteLink> alapú Single-Page Application, reszponzív felhasználói felülettel, amelynek stílusát a <tailwindLink>Tailwind CSS</tailwindLink>, animációit pedig a <framerMotionLink>Framer Motion</framerMotionLink> biztosítja.",
                                    expanded_bullet_1: "<subtitle>Keretrendszer:</subtitle> Az oldal egy <SPALink>Single-Page Application (SPA)</SPALink>, amely <reactLink>React</reactLink> és <typeScriptLink>TypeScript</typeScriptLink> használatával készült, a build folyamatot a <viteLink>Vite</viteLink> kezeli.",
                                    expanded_bullet_2: "<subtitle>Stílus:</subtitle> A komponensek stílusát a <tailwindLink>Tailwind CSS</tailwindLink> biztosítja.",
                                    expanded_bullet_3: "<subtitle>Animációk:</subtitle> Az összes jelentősebb UI animációt, beleértve az elrendezési és átmeneti effekteket, a <framerMotionLink>Framer Motion</framerMotionLink> kezeli.",
                                    expanded_bullet_4: "<subtitle>Állapotkezelés (State Management):</subtitle> Az interaktív komponensek állapotának kezelésére alapvető <reactLink>React</reactLink> funkciókat, mint a <code>useState</code> és <code>useContext</code> hook-okat használom.",
                                    expanded_bullet_5: "<subtitle>Telepítés (Deployment):</subtitle> A frontend a <vercelLink>Vercel</vercelLink>-en van telepítve és hosztolva."
                                },
                                features: {
                                    title: "Kiemelt Funkciók",
                                    description: "Dinamikus háttér, amely az időre és az időjárásra is reagál, egy akadálymentes üzenetküldő rendszer, interaktív technológiai linkek és egy egyedi többnyelvű rendszer.",
                                    dynamicBackground: {
                                        title: "Dinamikus Háttér",
                                        description: "A háttér teljesen dinamikus, a napszaknak és a valós idejű időjárási viszonyoknak megfelelően változik.",
                                        bullet_1: "<subtitle>Időalapú színátmenet:</subtitle> Mind a világos, mind a sötét téma háttere egy színátmenet, amely finoman vált a reggeli, déli, esti és éjszakai színsémák között.",
                                        bullet_2: "<subtitle>Dinamikus időjárás effektek:</subtitle> Világos témában a felhők dinamikusan generálódnak és animálódnak a képernyőn a felhasználó helyi időjárása alapján. A sötét téma egy parallax csillagmező effektet használ."
                                    },
                                    messagingUI: {
                                        title: "Akadálymentes Üzenetküldő Felület",
                                        description: "Egy egyedi fejlesztésű, kétirányú üzenetküldő rendszer, melynek célja az egyszerű használat és a zökkenőmentes, regisztráció nélküli kommunikáció.",
                                        bullet_1: "A gördülékenység érdekében a felhasználók regisztráció nélkül küldhetnek üzeneteket. A rendszer egy egyedi <code>chatID</code>-t generál, amelyet a böngésző <code>localStorage</code>-ában tárol, így a visszatérő felhasználók zökkenőmentesen folytathatják a beszélgetéseiket."
                                    },
                                    interactiveTechLinks: {
                                        title: "Interaktív Technológiai Linkek",
                                        description: "Az oldalon szereplő technológiák nevei interaktív linkek, amelyek egérmutatóra a technológia hivatalos arculatának megfelelő színre váltanak.",
                                        bullet_1: "Amikor az egér föléjük kerül, dinamikusan felveszik az adott technológia hivatalos márkaszínét – például a Vite a jellegzetes színátmenetét mutatja. Ezek a linkek közvetlenül az adott technológia hivatalos weboldalára vezetnek."
                                    },
                                    multiLanguageSupport: {
                                        title: "Többnyelvű Támogatás",
                                        description: "A portfólió több nyelvet is támogat egy egyedi, pehelysúlyú fordítási rendszeren keresztül.",
                                        bullet_1: "A teljes szöveges tartalom egyszerű JSON fájlokból töltődik be, ami a rendszert könnyen kezelhetővé és bővíthetővé teszi. ---TODO change this to reflect the new i18n system"
                                    }
                                }
                            },
                            backEnd: {
                                title: "Backend és Infrastruktúra",
                                architectureAndTechnologies: {
                                    title: "API Architektúra és Technológiák",
                                    description: "Egy biztonságos REST API, amely <dotnetLink>.NET 8</dotnetLink>-ra és <csharpLink>C#</csharpLink>-ra épül, a tiszta architektúra (clean architecture) elveit követve. Az adatbázis <mongoDBLink>MongoDB</mongoDBLink>, a telepítés pedig <dockerLink>Docker</dockerLink> konténerizációval történik.",
                                    expanded_bullet_1: "<subtitle>API Keretrendszer:</subtitle> Az üzenetküldő rendszert egy <dotnetLink>.NET 8</dotnetLink> <csharpLink>(C#)</csharpLink> alapú REST API működteti. Az API a tiszta architektúra mintáját követi: a controllerek kezelik a HTTP kéréseket, egy dedikált <code>MessageService</code> felel az üzleti logikáért, és az adatmodellek világosan definiáltak.",
                                    expanded_bullet_2: "<subtitle>Adatbázis:</subtitle> A NoSQL adatbázis szerepét a <mongoDBLink>MongoDB</mongoDBLink> tölti be. Egy teljes beszélgetés, az összes üzenetével együtt, egyetlen dokumentumként van tárolva, ami ebben az esetben egy rendkívül hatékony megoldás.",
                                    expanded_bullet_3: "<subtitle>Telepítés (Deployment):</subtitle> A <dotnetLink>.NET</dotnetLink> API <dockerLink>Docker</dockerLink> segítségével konténerizálva van, és a <digitalOceanLink>DigitalOcean</digitalOceanLink>-on fut. Az API úgy van konfigurálva, hogy a portot egy környezeti változóból olvassa ki, ami a konténerizált alkalmazásoknál bevett gyakorlat."
                                },
                                security: {
                                    title: "Biztonság és Konfiguráció",
                                    description: "Az API biztonságát egyedi API kulcs kezelő, szerepkör alapú jogosultságkezelés és szigorú CORS policy garantálja. A konfiguráció és a titkos adatok kezelése környezeti változókon keresztül történik.",
                                    bullet_1: "<subtitle>Azonosítás (Authentication):</subtitle> Hagyományos tokenek helyett egy egyedi <code>ApiKeyHandler</code>-t használ, amely a <code>X-API-Key</code> fejlécben küldött API kulcsokat érvényesíti.",
                                    bullet_2: "<subtitle>Jogosultságkezelés (Authorization):</subtitle> Külön policy-k vannak definiálva a \"User\" és \"Admin\" szerepkörökre. Például az összes beszélgetést lekérdező végpont csak adminisztrátori jogosultsággal érhető el, míg egy beszélgetés létrehozása vagy frissítése a felhasználók számára is engedélyezett. Ez részletes kontrollt biztosít az API felett.",
                                    bullet_3: "<subtitle>Konfigurációkezelés:</subtitle> Az alkalmazás az érzékeny adatokat, mint a connection stringek és API kulcsok, környezeti változókból olvassa be, fejlesztés során pedig helyi konfigurációs fájlokra támaszkodik tartalékként. Ez egy biztonságos és rugalmas megközelítés.",
                                    bullet_4: "<subtitle>Specifikus CORS Policy:</subtitle> A Cross-Origin Resource Sharing (CORS) policy kifejezetten úgy van beállítva, hogy csak a portfólió weboldalának domainjéről és localhostról érkező kéréseket engedélyezze, megelőzve ezzel más oldalakról érkező illetéktelen hozzáférést."
                                },
                                weatherService: {
                                    title: "Időjárás Szolgáltatás (BFF)",
                                    description: "Egy <vercelLink>Vercel</vercelLink> szervermentes funkció működik Backend-for-Frontend-ként, amely biztonságosan hív meg és aggregál adatokat több külső időjárás API-ból.",
                                    bullet_1: "<subtitle>A miért:</subtitle> Azért készült, hogy a külső szolgáltatók API kulcsait biztonságosan elrejtse a kliens oldal elől, és hogy egy olyan ellenálló rendszert hozzon létre, amely nem függ egyetlen időjárás szolgáltatótól.",
                                    bullet_2: "<subtitle>A hogyan:</subtitle> Párhuzamosan több időjárás API-t hív meg, a különböző adatformátumokat egy egységes kategóriába (\"tiszta\", \"felhős\", \"viharos\") normalizálja, majd a többségi szavazás eredményét küldi vissza a frontendnek."
                                }
                            },
                            stockPortfolioOptimizer: {
                                title: "Részvényportfólió Optimalizáló",
                                description: "Egy egyetemi esettanulmány az Operációkutatás elveinek alkalmazására egy komplex pénzügyi modellezési probléma megoldásához. Ez a projekt jól demonstrálja azt a képességet, hogy bonyolult üzleti szabályokat egy matematikai modellé és egy működő szoftveres megoldássá alakítsak.",
                                overview: {
                                    title: "Projekt Áttekintés",
                                    description: "Egy <matlabLink>MATLAB</matlabLink>-ban készült döntéstámogató eszköz, amely lineáris programozás segítségével határozza meg egy részvényportfólió legnyereségesebb befektetési stratégiáját, figyelembe véve egy sor komplex, valós korlátot.",
                                    expanded: "Ez a projekt volt az Operációkutatás kurzusom központi eleme, azzal a céllal, hogy egy működőképes alkalmazást hozzunk létre a befektetési hozamok maximalizálására. A feladat magában foglalta a matematikai modellezést, a szoftveres implementációt <matlabLink>MATLAB</matlabLink>-ban, valamint egy összehasonlító elemzést egy alternatív, Excel VBA és a Solver kiegészítő segítségével készült megoldással."
                                },
                                objective: {
                                    title: "A Probléma és a Célkitűzés",
                                    description: "Egy olyan robusztus modell létrehozása, amely túllép az egyszerű \"vedd olcsón, add drágán\" logikán, és képes kezelni azokat az egymással összefüggő korlátokat, amelyekkel a valós befektetők szembesülnek, így maximalizálva a potenciális profitot.",
                                    expanded_description: "A cél a részvényportfólió teljes profitjának maximalizálása volt, a következő korlátok figyelembevételével:",
                                    bullet_1: "<subtitle>Teljes költségvetés:</subtitle> Egy szigorú felső korlát a teljes befektethető tőkére.",
                                    bullet_2: "<subtitle>Részvényenkénti minimális befektetés:</subtitle> Előírás, hogy bizonyos részvényekbe egy minimális pénzösszeget be kell fektetni a diverzifikáció érdekében.",
                                    bullet_3: "<subtitle>Részvényenkénti maximális darabszám:</subtitle> Egy felső korlát egy adott részvényből megvásárolható darabszámra.",
                                    bullet_4: "<subtitle>Tranzakciós jutalékok:</subtitle> Mind a vételi, mind az eladási jutalékok a tranzakció értékének százalékában lettek figyelembe véve, befolyásolva a nettó profitot."
                                },
                                tech: {
                                    title: "Technikai Megoldás és Implementáció",
                                    description: "A problémát egy Vegyes Egészértékű Lineáris Programozási (MILP) problémaként modelleztük, és a <matlabLink>MATLAB</matlabLink> Optimization Toolbox-ával valósítottuk meg, annak ereje és az egészértékű korlátok precíz kezelése miatt.",
                                    bullet_1: "<subtitle>Matematikai modellezés:</subtitle> A projekt magját a pénzügyi követelmények matematikai modellé alakítása jelentette. A \"célfüggvényt\" a profit maximalizálására definiáltuk, melyet egy sor, a befektető szabályait reprezentáló lineáris egyenlőtlenségi korlátnak vetettünk alá.",
                                    bullet_2: "<subtitle>MATLAB implementáció:</subtitle> A MATLAB Optimization Toolbox-át, azon belül is az <code>intlinprog</code> függvényt használtam, amely egy hatékony, kifejezetten MILP problémákra tervezett megoldó, ahol a változóknak (mint a részvények száma) egész számoknak kell lenniük.",
                                    bullet_3: "<subtitle>Összehasonlító elemzés:</subtitle> A MATLAB megoldás teljesítményét összevetettük egy alternatív, <bold>Excelben, a Solver kiegészítő és VBA</bold> segítségével épített modellel is. Ez értékes betekintést nyújtott a különböző technikai megközelítések teljesítményébe, skálázhatóságába és a modellezés egyszerűségébe ugyanazon probléma esetén."
                                },
                                keyFeature: {
                                    title: "Kiemelt Funkció: Érzékenységi Analízis",
                                    description: "Az eszköz nem csupán egyetlen választ ad, hanem vizualizálja is, hogyan változik az optimális stratégia és a potenciális profit a piaci feltételek változásával.",
                                    expanded_p1: "Az alkalmazás két kulcsfontosságú grafikont képes generálni bármely adott részvényre, amelyek elengedhetetlen betekintést nyújtanak a befektetés stabilitásába:",
                                    bullet_1: "<subtitle>Profit vs. Részvényár:</subtitle> Ez a grafikon azt mutatja, hogyan változna a teljes portfólió profitja, ha egy adott részvény vételára más lenne, felfedve, hogy melyik árpont felett már nem éri meg az adott részvényt bevenni az optimális megoldásba.",
                                    bullet_2: "<subtitle>Optimális darabszám vs. Részvényár:</subtitle> Ez a grafikon azt vizualizálja, hogy a modell hány darab részvényt javasol megvételre a különböző árpontokon.",
                                    expanded_p2: "Ez az analízis egy egyszerű kalkulátorból egy valódi <bold>döntéstámogató rendszerré</bold> emeli az alkalmazást, lehetővé téve a felhasználó számára, hogy megértse a stratégiájával járó kockázatot és volatilitást."
                                }
                            }
                        }
                    },
                },
                workInProgress: {
                    title: "Folyamatban lévő projektek",
                    GAnki: {
                        title: "GAnki - MI-vel Támogatott Ismétléses Tanulási Rendszer",
                        status: "Jelenlegi Állapot: P0: Csak specifikáció",
                        overview: {
                            title: "Projekt Áttekintés",
                            what: "<subtitle>Mi ez:</subtitle> Egy intelligens, új generációs tanulókártya alkalmazás, amely egy nagy nyelvi modellt (pl. <geminiLink>Google Gemini</geminiLink>) használ, hogy objektív, MI-alapú visszajelzést adjon a felhasználó által adott válaszokra.",
                            why: "<subtitle>Miért:</subtitle> Hogy megoldja a hagyományos, időzített ismétlésen alapuló rendszerek (SRS), mint például az <ankiLink>Anki</ankiLink>, alapvető problémáját: a megbízhatatlan, szubjektív önértékelést. Ez nem hatékony tanuláshoz és a tudás hamis illúziójához vezet.",
                            how: "<subtitle>Hogyan:</subtitle> Egy full-stack alkalmazás, amely egy <reactLink>React</reactLink>/<typeScriptLink>TypeScript</typeScriptLink> frontendből és egy biztonságos <dotnetLink>.NET</dotnetLink> backendből áll. A backend egy közvetítőként (proxy) működik, amely a felhasználó válaszát és a kártya kontextusát elküldi a <geminiLink>Gemini</geminiLink> API-nak kiértékelésre, majd az objektív visszajelzést visszaküldi a felhasználónak."
                        },
                        deepDive: {
                            title: "Részletes Technikai Bemutató",
                            coreFeatures: {
                                title: "Alapvető Funkciók (MVP)",
                                description: "A Minimum Viable Product (MVP) tartalmazza a biztonságos felhasználói hitelesítést, a tanulókártya paklik teljes körű CRUD kezelését, valamint egy MI-alapú gyakorló felületet, amely objektív visszajelzést ad és javaslatot tesz a következő ismétlési időpontra.",
                                bullet_1: {
                                    title: "Felhasználó- és Paklikezelés:",
                                    bullet_1: "Biztonságos felhasználói hitelesítés (regisztráció, bejelentkezés, kijelentkezés).",
                                    bullet_2: "Szabványos CRUD (Create, Read, Update, Delete) funkcionalitás a paklikra és a kártyákra."
                                },
                                bullet_2: {
                                    title: "Kártya Struktúra:",
                                    bullet_1: "Minden kártya négy elsődleges adatmezőt tartalmaz: <code>front</code> (kérdés), <code>back</code> (ideális válasz/kulcsszavak), <code>truths</code> (a felhasználó által megadott alapigazságok a többértelmű témákhoz és a kontextus megalapozásához), és <code>observations</code> (a felhasználó személyes jegyzetei)."
                                },
                                bullet_3: {
                                    title: "MI-alapú Gyakorlás:",
                                    bullet_1: "A gyakorló felület a kártya <code>front</code> (előlapját) és egy szöveges beviteli mezőt jelenít meg a felhasználó válaszának.",
                                    bullet_2: "A válasz elküldése után az adatokat egy biztonságos backenden keresztül továbbítjuk a Gemini API-nak.",
                                    bullet_3: "Az MI feladata lesz a válasz helyességének kiértékelése, tömör visszajelzés adása, és egy ismétlési időköz kategória javaslata (pl. \"Újra\", \"Nehéz\", \"Normál\", \"Könnyű\")."
                                },
                                bullet_4: {
                                    title: "API Kulcs Kezelés:",
                                    bullet_1: "A felhasználóknak meg kell adniuk a saját Google AI Studio API kulcsukat egy biztonságos beállítási panelen a kiértékelő funkció működtetéséhez."
                                }
                            },
                            architecture: {
                                title: "Tervezett Technikai Architektúra",
                                description: "Egy full-stack alkalmazás, amely egy <reactLink>React</reactLink>/<typeScriptLink>TypeScript</typeScriptLink> frontendből, egy biztonságos <dotnetLink>.NET</dotnetLink> backend API-ból (amely közvetítőként szolgál az összes <geminiLink>Gemini</geminiLink> API hívásnál), és egy relációs <postgresLink>PostgreSQL</postgresLink> adatbázisból áll.",
                                bullet_1: {
                                    title: "Frontend:",
                                    bullet_1: "<subtitle>Keretrendszer:</subtitle> <reactLink>React</reactLink> <typeScriptLink>TypeScript</typeScriptLink>-tel (<viteLink>Vite</viteLink> + <SWCLink>SWC</SWCLink> segítségével).",
                                    bullet_2: "<subtitle>Stílus:</subtitle> <tailwindLink>Tailwind CSS</tailwindLink> a gyors, szisztematikus UI fejlesztéshez.",
                                    bullet_3: "<subtitle>Adatlekérdezés:</subtitle> <code>axios</code> a REST API kommunikáció kezelésére."
                                },
                                bullet_2: {
                                    title: "Backend:",
                                    bullet_1: "<subtitle>Keretrendszer:</subtitle> Egy robusztus <dotnetLink>.NET</dotnetLink> API, amely felelős a felhasználói hitelesítésért, az adatbázis műveletekért, és biztonságos közvetítőként (proxy) működik az összes <geminiLink>Gemini</geminiLink> API hívásnál."
                                },
                                bullet_3: {
                                    title: "Adatbázis:",
                                    bullet_1: "<subtitle>Típus:</subtitle> Egy relációs (SQL) adatbázis, mint a <postgresLink>PostgreSQL</postgresLink>, a felhasználók, paklik és kártyák erősen strukturált és relációs jellege miatt."
                                }
                            },
                            riskAnalysis: {
                                title: "Kockázatelemzés és Kockázatcsökkentés",
                                description: "Az elsődlegesen azonosított kockázatok az LLM hallucináció, az API késleltetés és az API költség. Ezeket fejlett prompt engineering, optimista UI minták és egy \"hozd a saját kulcsod\" modell alkalmazásával csökkentjük az MVP fázisban.",
                                bullet_1: {
                                    title: "Elsődleges kockázat: LLM Hallucináció / Pontatlan kiértékelések.",
                                    bullet_1: "<subtitle>Kockázatcsökkentés:</subtitle> Az MI-nek küldött promptot erősen megalapozzuk a kártya <code>front</code>, <code>back</code> és a felhasználó által definiált <code>truths</code> mezőivel. A backend valós idejű Google keresési eredményekkel is kiegészíti a promptot a további kontextus érdekében. A felhasználónak mindig lehetősége lesz felülbírálni az MI javaslatát."
                                },
                                bullet_2: {
                                    title: "Másodlagos kockázat: API Késleltetés (Latency).",
                                    bullet_1: "<subtitle>Kockázatcsökkentés:</subtitle> A UI egy optimista, nem-blokkoló felépítést fog implementálni, egyértelmű töltési állapottal, amíg az MI válaszára várunk, ezzel kezelve a felhasználói elvárásokat."
                                },
                                bullet_3: {
                                    title: "Harmadlagos kockázat: API Költség és Használati Limitek.",
                                    bullet_1: "<subtitle>Kockázatcsökkentés (MVP):</subtitle> Mivel a felhasználóknak saját API kulcsot kell megadniuk, ez a kockázat lekerül az alkalmazás tulajdonosának válláról.",
                                    bullet_2: "<subtitle>Kockázatcsökkentés (Jövő):</subtitle> Egy esetleges \"ingyenes próbaidőszak\" funkció szigorú szerveroldali limitálást és használati monitorozást igényelne."
                                }
                            },
                            devPlan: {
                                title: "Fázisokra Bontott Fejlesztési Terv",
                                description: "A projekt egy pragmatikus, iteratív fejlesztési tervet követ: először egy teljes \"buta\" verzió megépítése hagyományos önértékeléssel, majd erre épül rá a backend és a \"zseni\" MI funkciók.",
                                bullet_1: "<subtitle>1. Fázis - A \"buta\" klón:</subtitle> Az alap frontend alkalmazás megépítése, teljes CRUD funkcionalitással a paklikra és kártyákra, hagyományos önértékelő felülettel.",
                                bullet_2: "<subtitle>2. Fázis - Backend és Adatbázis:</subtitle> Az adatbázis séma felállítása és a backend API végpontok megépítése a felhasználói hitelesítéshez és a kártyakezeléshez.",
                                bullet_3: "<subtitle>3. Fázis - Integráció:</subtitle> A frontend összekötése a backenddel, a helyi állapotkezelés felváltása valós API hívásokkal.",
                                bullet_4: "<subtitle>4. Fázis - A \"zseni\" funkció:</subtitle> A Gemini API integráció implementálása. A prompt engineering logika és az új gyakorló felület megépítése.",
                                bullet_5: "<subtitle>5. Fázis - Telepítés és Finomhangolás:</subtitle> A teljes stack telepítése éles környezetbe és end-to-end tesztelés végrehajtása."
                            }
                        }
                    },
                    dealTracker: {
                        title: "Vinted Árfigyelő és Véleménykérő",
                        status: "Jelenlegi Állapot: P0.5: Scraper, front- és back-end váz elkészült",
                        overview: {
                            title: "Projekt Áttekintés",
                            what: "<subtitle>Mi ez:</subtitle> Egy személyre szabott, saját hosztolású webalkalmazás, amely automatikusan figyeli a Vinted termékeket, e-mail értesítést küld árcsökkenés esetén, és egy egyedi megosztási funkciót biztosít a barátok véleményének kikérésére vásárlás előtt.",
                            why: "<subtitle>Miért:</subtitle> A projekt egy figyelmes ajándékként készült egy barátomnak, hogy megoldja az online ajánlatok kézi követésének valós frusztrációját. Az etikus web scraping technikai kihívását célozza meg a modern bot-ellenes védelmekkel szemben, ahol a kereskedelmi eszközök gyakran kudarcot vallanak.",
                            how: "<subtitle>Hogyan:</subtitle> Egy full-stack alkalmazás React frontenddel és <dotnetLink>.NET</dotnetLink>/<pythonLink>Python</pythonLink> backenddel. A kulcsfontosságú architekturális döntés egy pehelysúlyú scraper, amely egy <bold>helyi otthoni szerverről</bold> fut, lakossági IP címet és valósághű böngésző automatizálást (<playwrightLink>Playwright</playwrightLink> segítségével) használva, hogy gyakorlatilag észrevehetetlen maradjon."
                        },
                        deepDive: {
                            title: "Részletes Technikai Bemutató",
                            coreFeatures: {
                                title: "Alapvető Funkciók (MVP)",
                                description: "Az alkalmazás lehetővé teszi a felhasználó számára, hogy URL alapján kövessen Vinted termékeket, megtekintse az ártörténetet, automatikus e-mail értesítéseket kapjon árcsökkenés esetén, és egy egyedi \"Véleménykérő\" funkcióval zökkenőmentesen gyűjtsön visszajelzéseket a barátaitól.",
                                bullet_1: "<subtitle>Termékkövetés:</subtitle> Termékek hozzáadása URL alapján a név, kép és ár automatikus követéséhez. Egy központi irányítópult jeleníti meg az összes terméket, egy részletes nézet pedig a teljes ártörténetet mutatja grafikonon.",
                                bullet_2: "<subtitle>Árfigyelés és Értesítések:</subtitle> Egy időzített szkript fut helyben egy otthoni szerveren, hogy ellenőrizze az árváltozásokat. Ha csökkenést észlel, egy formázott e-mail értesítést küld egy szolgáltatáson, mint a <sendGridLink>SendGrid</sendGridLink>, keresztül. TODO expand this section",
                                bullet_3: {
                                    title: "A \"Véleménykérő\":",
                                    bullet_1: "Egyedi, megosztható link generálása bármely követett termékhez.",
                                    bullet_2: "A link egy publikus oldalra vezet, ahol a barátok megtekinthetik a terméket és hozzászólásokat hagyhatnak, amelyek azután összesítve megjelennek a fő alkalmazásban a felhasználó számára."
                                }
                            },
                            architecture: {
                                title: "Technikai Architektúra",
                                description: "Egy függetlenített (decoupled) architektúra, amely egy <reactLink>React</reactLink> frontendet tartalmaz a <vercelLink>Vercel</vercelLink>-en, egy <dockerLink>Docker</dockerLink> konténerbe zárt backend API-t a <digitalOceanLink>DigitalOcean</digitalOceanLink>-ön, és egy egyedi, helyileg hosztolt scrapert a hatékonyság és az IP-blokkolások elkerülése érdekében.",
                                bullet_1: "<subtitle>Frontend:</subtitle> <reactLink>React</reactLink> <typeScriptLink>(TypeScript)</typeScriptLink> <tailwindLink>Tailwind CSS</tailwindLink>-szel, a <vercelLink>Vercel</vercelLink>-en telepítve.",
                                bullet_2: "<subtitle>Backend API:</subtitle> <dotnetLink>.NET</dotnetLink> vagy <pythonLink>Python</pythonLink> (<fastAPILink>FastAPI</fastAPILink>/<flaskLink>Flask</flaskLink> javasolt a stack egyszerűsége miatt), <dockerLink>Docker</dockerLink> konténerként telepítve a DigitalOcean-re.",
                                bullet_3: "<subtitle>Adatbázis:</subtitle> <mongoDBLink>MongoDB</mongoDBLink> (egy ingyenes cluster használatával), ahol a Vinted termék URL-je szolgál egyedi <code>_id</code>-ként minden dokumentumhoz.",
                                bullet_4: "<subtitle>A Scraper:</subtitle> A rendszer magja. Egy dedikált <bold>otthoni szerveren</bold> (pl. egy újrahasznosított laptopon) fut egy cron job segítségével. Ez biztosítja, hogy a scraper a nap 24 órájában egy <bold>lakossági IP címről</bold> működjön, így a forgalma hiteles felhasználói tevékenységnek tűnik."
                            },
                            riskAnalysis: {
                                title: "Kockázatelemzés és Kockázatcsökkentés",
                                description: "Az elsődleges kockázatok a scraper-ellenes intézkedések és a scraper törékenysége. Ezeket úgy csökkentjük, hogy a scraper egy lakossági IP-címről fut valósághű automatizálással, valamint robusztus hibakezelést és értesítéseket implementálunk.",
                                bullet_1: {
                                    title: "Elsődleges kockázat: Scraper-ellenes védelem (pl. Cloudflare).",
                                    bullet_1: "<subtitle>Kockázatcsökkentés:</subtitle> A scraper futtatása lakossági IP-címről, valódi böngészőprofillal a <playwrightLink>Playwright</playwrightLink> segítségével. Tiszteletteljes késleltetések és valósághű User-Agent implementálása az emberi viselkedés utánzására."
                                },
                                bullet_2: {
                                    title: "Másodlagos kockázat: A Scraper törékenysége.",
                                    bullet_1: "<subtitle>Kockázatcsökkentés:</subtitle> A scraper elromlik, ha a Vinted megváltoztatja az oldalának elrendezését. Robusztus hibakezelés és naplózás implementálása. A szkript úgy lesz beállítva, hogy értesítést küldjön az adminisztrátornak, ha a scraping egymás után többször meghiúsul."
                                },
                                bullet_3: {
                                    title: "Harmadlagos kockázat: Etikai megfontolások és lábnyom.",
                                    bullet_1: "<subtitle>Kockázatcsökkentés:</subtitle> A projekt hatóköre (alacsony gyakoriságú, személyes használat, egyfelhasználós forgalom) úgy van kialakítva, hogy megkülönböztethetetlen legyen a kézi böngészéstől, és etikusan működjön, nem okozva érzékelhető terhelést a Vinted szervereinek."
                                }
                            },
                            availability: {
                                title: "Megjegyzés az Elérhetőségről",
                                description: "\"Használhatom ezt?\" Megtisztelő a kérdés! Íme, miért rejlik ennek az eszköznek a varázsa abban, hogy egy privát, egyedi megoldás.",
                                expanded_p1: "A projekt titkos összetevője az etikus, \"radar alatt repülő\" filozófiája. A scraper hatékonysága az architektúrájából fakad: egyetlen, lakossági IP-címről fut, és pontosan úgy viselkedik, mint egy valódi ember, aki naponta manuálisan ellenőriz néhány terméket.",
                                expanded_p2: "Ezt egy nyilvános szolgáltatássá skálázni azonnal megváltoztatná ezt a lábnyomot, megszüntetve a tervezésének lényegét és átlépve egy etikai határt.",
                                expanded_p3: "Ebből az okból kifolyólag az marad, aminek mindig is szánták: egy egyedi ajándék."
                            },
                            devPlan: {
                                title: "Fázisokra Bontott Fejlesztési Terv",
                                description: "A fejlesztés fázisokra van bontva, hogy először a legkockázatosabb komponenst, a scraper megépítését kezeljük. A további fázisok a backend, a frontend és a végső integráció hozzáadását tartalmazzák.",
                                bullet_1: "<subtitle>1. Fázis: Scraper fejlesztés:</subtitle> A központi <pythonLink>Python</pythonLink>/<playwrightLink>Playwright</playwrightLink> szkript megírása és tesztelése egy élő Vinted oldal feldolgozására.",
                                bullet_2: "<subtitle>2. Fázis: Backend és Adatbázis:</subtitle> A <mongoDBLink>MongoDB</mongoDBLink> felállítása és az alapvető CRUD API végpontok megépítése a termékekhez.",
                                bullet_3: "<subtitle>3. Fázis: Frontend fejlesztés:</subtitle> A fő irányítópult és a termék részletes nézeteinek megépítése.",
                                bullet_4: "<subtitle>4. Fázis: Integráció és Alaplogika:</subtitle> Az összes komponens összekötése és az e-mail értesítési szolgáltatás implementálása.",
                                bullet_5: "<subtitle>5. Fázis: Végső funkciók és Telepítés:</subtitle> A \"Véleménykérő\" megosztási funkció megépítése és a teljes stack telepítése."
                            }
                        }
                    },
                    DSAShowcase: {
                        title: "Grind75 - Interaktív Adatszerkezetek és Algoritmusok Bemutató",
                        status: "Jelenlegi Állapot: P0: Csak specifikáció",
                        overview: {
                            title: "Projekt Áttekintés",
                            what: "<subtitle>Mi ez:</subtitle> A Grind75 listán szereplő Adatszerkezetek és Algoritmusok problémáira adott megoldásaim adatvezérelt, interaktív felfedezése. Ez nem csupán egy kódlista; ez egy eszköz a különböző algoritmikus megközelítések futtatására, teljesítménymérésére és vizualizálására.",
                            why: "<subtitle>Miért:</subtitle> Hogy a számítástudományi alapok mélyebb megértését demonstráljam, ami túlmutat az egyszerű helyességen. A cél, hogy vizuálisan is bemutassam az optimális megoldások mögötti \"miért\"-et – kézzelfogható módon szemléltetve az idő- és tárhelykomplexitás gyakorlati hatását.",
                            how: "<subtitle>Hogyan:</subtitle> Egy önálló, <reactLink>React</reactLink> és <typeScriptLink>TypeScript</typeScriptLink> alapú frontend komponens. Lehetővé teszi a felhasználók számára, hogy a megoldásokat közvetlenül a böngészőben futtassák egyedi bemenetekkel. A teljesítményadatokat interaktív grafikonok (olyan könyvtárakkal, mint a <plotlyLink>Plotly</plotlyLink> vagy a <threejsLink>Three.js</threejsLink>) jelenítik meg, amelyek összehasonlítják a brute-force és az optimalizált megoldások mért teljesítményét."
                        },
                        deepDive: {
                            title: "Részletes Technikai Bemutató",
                            coreFeatures: {
                                title: "Alapvető Funkciók",
                                description: "A projektet oktatási eszköznek tervezték, amely élő kódfuttatást, összehasonlító teljesítményelemzést, valamint a teljesítménymutatók és a lefedett témakörök adatvizualizációját is tartalmazza.",
                                bullet_1: "<subtitle>Interaktív Kódfuttatás (MVP):</subtitle> A felhasználók kiválaszthatnak egy problémát és a hozzá tartozó <javascriptLink>JavaScript</javascriptLink>/<typeScriptLink>TypeScript</typeScriptLink> megoldást közvetlenül az oldalon futtathatják. Egy felület lehetővé teszi a bemeneti értékek módosítását a különböző peremesetek tesztelésére.",
                                bullet_2: "<subtitle>Összehasonlító Teljesítményelemzés (V1.5):</subtitle> A kulcsfontosságú problémákhoz a bemutató több megoldást is tartalmazni fog (pl. brute-force, egy-menetes, optimális). A komponens benchmark adatokat jelenít meg, amelyek bemutatják a drámai teljesítménykülönbségeket ezen megközelítések között.",
                                bullet_3: {
                                    title: "Adatvizualizáció (V2.0):",
                                    bullet_1: "<subtitle>Teljesítménygrafikonok:</subtitle> Interaktív vizualizációk fogják ábrázolni a teljesítménykülönbségeket, vizuálisan intuitívvá téve az olyan koncepciókat, mint az O(n²) vs. O(n).",
                                    bullet_2: "<subtitle>Tematikus Gondolattérkép:</subtitle> Egy kreatív vizualizáció fogja feltérképezni a lefedett témákat (pl. Tömbök, Fák, Dinamikus Programozás), bemutatva a különböző adatszerkezeti és algoritmikus koncepciók közötti kapcsolatokat."
                                }
                            },
                            architecture: {
                                title: "Technikai Architektúra és Megközelítés",
                                description: "Az egyszerűség és a sebesség érdekében egy önálló, csak frontend architektúrát választottam. Minden logika és adat a kliens oldalon van tárolva, így ebben az esetben nincs szükség backendre vagy adatbázisra.",
                                bullet_1: {
                                    title: "<subtitle>Stack:</subtitle> <reactLink>React</reactLink>, <typeScriptLink>TypeScript</typeScriptLink>, és <tailwindLink>Tailwind CSS</tailwindLink> használatával készült, hogy összhangban maradjon a fő portfólióval. A <framerMotionLink>Framer Motion</framerMotionLink> lesz felelős a UI animációkért.",
                                    bullet_1: "<subtitle>Vizualizációs Könyvtárak:</subtitle> Erőteljes, de pehelysúlyú könyvtárak kutatása, mint a <plotlyLink>Plotly.js</plotlyLink> 2D grafikonokhoz és esetleg a <threejsLink>Three.js</threejsLink> az ambiciózusabb 3D gondolattérkép vizualizációhoz.",
                                    bullet_2: "<subtitle>Kódfuttatás:</subtitle> Mivel a megoldások JS/TS nyelven vannak, natívan futtathatók a böngészőben külön online fordító nélkül, ami jelentősen leegyszerűsíti az architektúrát.",
                                    bullet_3: "<subtitle>Adattárolás:</subtitle> A teljesítménymérési eredményeket tartalmazó egyetlen JSON vagy CSV fájl az oldallal együtt lesz csomagolva. Ez egy pehelysúlyú megoldás, amely elkerüli egy adatbázis többletköltségét egy alapvetően statikus, csak olvasható adat esetében."
                                }
                            },
                            riskAnalysis: {
                                title: "Kockázatelemzés és Kockázatcsökkentés",
                                description: "Az elsődleges kockázatok a fő portfólió oldalának lehetséges teljesítményromlása, valamint a jó felhasználói élmény biztosítása egy kód-intenzív komponens esetében mobil eszközökön.",
                                bullet_1: {
                                    title: "Elsődleges kockázat: Teljesítményhatás a fő portfólióra.",
                                    bullet_1: "<subtitle>Kockázatcsökkentés:</subtitle> A megoldás komponensei úgy lesznek tervezve, hogy kölcsönösen kizárják egymást; egy probléma kódjának futtatása különálló művelet lesz, és több megoldás nem fog egyszerre futni. A komponensek és a vizualizációs könyvtárak kódfelbontással (code-splitting) és késleltetve (lazy-load) lesznek betöltve, hogy minimalizálják a kezdeti oldalbetöltésre gyakorolt hatást."
                                },
                                bullet_2: {
                                    title: "Másodlagos kockázat: Mobil felhasználói élmény.",
                                    bullet_1: "<subtitle>Kockázatcsökkentés:</subtitle> A kód megjelenítése kis képernyőkön eleve problémás. A komponens mobil verziója valószínűleg egy egyszerűsített felülettel fog rendelkezni. Egy szabadon szerkeszthető beviteli mező helyett egy legördülő menüt használhat előre kiválasztott tesztesetekkel, hogy fizikai billentyűzet nélkül is biztosítsa a használhatóságot."
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};