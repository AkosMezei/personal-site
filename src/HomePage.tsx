import ExpandableDiv from "./Components/ExpandableDiv.tsx";
import MessageBox from "./Components/MessageBox.tsx";
import { motion } from "motion/react";
import { useTranslation, Trans } from "react-i18next";
import {SectionDivider} from "./Components/SectionDivider.tsx";

function HomePage() {

    const { t } = useTranslation();

    const styledComponents = {
        reactLink: <a href="https://react.dev" target="_blank" className="hover:text-react font-bold text-nowrap" />,
        typeScriptLink: <a href="https://www.typescriptlang.org" target="_blank" className="hover:text-typescript font-bold text-nowrap" />,
        dotnetLink: <a href="https://dotnet.microsoft.com/" target="_blank" className="hover:bg-gradient-to-bl hover:from-dotNetStart hover:from-45% hover:to-dotNetEnd hover:to-80% hover:text-transparent hover:bg-clip-text font-bold text-nowrap" />,
        viteLink: <a href="https://vite.dev" target="_blank" className="hover:bg-gradient-to-br hover:from-viteStart hover:from-45% hover:via-viteMiddle hover:via-50% hover:to-viteEnd hover:to-80% hover:text-transparent hover:bg-clip-text font-bold text-nowrap" />,
        tailwindLink: <a href="https://tailwindcss.com" target="_blank" className="hover:text-tailwind font-bold text-nowrap" />,
        framerMotionLink: <a href="https://motion.dev" target="_blank" className="hover:text-framerMotion font-bold text-nowrap" />,
        vercelLink: <a href="https://vercel.com/" target="_blank" className="hover:text-black/90 font-bold text-nowrap" />,
        mongoDBLink: <a href="https://www.mongodb.com" target="_blank" className="hover:text-mongoDB font-bold text-nowrap" />,
        dockerLink: <a href="https://www.docker.com" target="_blank" className="hover:text-docker font-bold text-nowrap" />,
        digitalOceanLink: <a href="https://www.digitalocean.com" target="_blank" className="hover:text-digitalOcean font-bold text-nowrap" />,
        javascriptLink: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" className="hover:text-javascript font-bold text-nowrap" />,
        pythonLink: <a href="https://www.python.org" target="_blank" className="hover:text-python font-bold text-nowrap" />,
        fastAPILink: <a href="https://fastapi.tiangolo.com" target="_blank" className="hover:text-fastAPI font-bold text-nowrap" />,
        flaskLink: <a href="https://flask.palletsprojects.com" target="_blank" className="hover:text-black dark:hover:text-white font-bold text-nowrap" />,
        postgresLink: <a href="https://www.postgresql.org" target="_blank" className="hover:text-postgres font-bold text-nowrap" />,
        plotlyLink: <a href="https://plotly.com" target="_blank" className="hover:text-plotly font-bold text-nowrap" />,
        threejsLink: <a href="https://threejs.org" target="_blank" className="hover:text-black dark:hover:text-white font-bold text-nowrap" />,
        geminiLink: <a href="https://ai.google.dev/gemini-api" target="_blank" className="hover:bg-gradient-to-r hover:from-geminiStart hover:to-geminiEnd hover:text-transparent hover:bg-clip-text font-bold text-nowrap" />,
        csharpLink: <a href="https://learn.microsoft.com/en-us/dotnet/csharp/" target="_blank" className="hover:text-dotNetStart font-bold text-nowrap" />,
        matlabLink: <a href="https://www.mathworks.com/products/matlab.html" target="_blank" className="hover:text-matlab font-bold text-nowrap" />,
        SPALink: <a href="https://developer.mozilla.org/en-US/docs/Glossary/SPA" target="_blank" className="font-semibold italic hover:underline text-nowrap" />,
        playwrightLink: <a href="https://playwright.dev" target="_blank" className="hover:text-playwright font-bold text-nowrap" />,
        umbracoLink: <a href="https://umbraco.com" target="_blank" className="hover:text-umbraco font-bold text-nowrap" />,
        ankiLink: <a href="https://apps.ankiweb.net/" target="_blank" className="hover:text-anki font-bold text-nowrap" />,
        name: <strong className="font-semibold text-gray-900 dark:text-slate-100" />,
        bold: <strong />,
        subtitle: <strong className="font-semibold text-gray-900 dark:text-slate-100 mr-2" />,
        code: <code className="font-mono text-nowrap bg-slate-200 dark:bg-slate-700/80 text-sky-600 dark:text-sky-300 px-1 py-0.5 rounded-md text-sm" />,
    }

    return (
        <div className="mx-2 py-16 lg:w-3/5 ml-auto mr-auto">
            <motion.div layout transition={{layout: {duration: 0.5, ease: "easeInOut"}}}>
                <ExpandableDiv title={t('aboutMe.title')}
                               orientation="center"
                               isSectionBreak={true}
                               defaultContent={
                                   <p className="text-center">
                                       <Trans i18nKey="aboutMe.description" components={styledComponents}/>
                                   </p>
                               }
                               expandedContent={
                                   <>
                                       <p className="mt-3 text-center">
                                           {t('aboutMe.expanded_p1')}
                                       </p>
                                       <p className="mt-3 text-center">
                                           <Trans i18nKey="aboutMe.expanded_p2" components={styledComponents}/>
                                       </p>
                                       <p className="mt-3 text-center">
                                           {t('aboutMe.expanded_p3')}
                                       </p>
                                   </>
                               }
                />

                <ExpandableDiv title={t('education.title')}
                               orientation="center"
                               defaultContent={
                                   <></>
                               }
                               expandedContent={
                                   <div className="w-full">
                                       <ExpandableDiv
                                           title={t('education.highSchool.title')}
                                           orientation="left"
                                           defaultContent={
                                               <p> {t('education.highSchool.dates')} </p>
                                           }
                                           expandedContent={
                                               <Trans i18nKey="education.highSchool.description" className="text-center" components={styledComponents}/>
                                           }
                                       />
                                       <ExpandableDiv
                                           title={t('education.university.title')}
                                           orientation="right"
                                           defaultContent={
                                               <p> {t('education.university.dates')} </p>
                                           }
                                           expandedContent={
                                               <div>
                                                   <Trans i18nKey="education.university.description_p1" components={styledComponents}/>
                                                   <Trans i18nKey="education.university.description_p2" components={styledComponents}/>
                                                   <Trans i18nKey="education.university.description_p3" components={styledComponents}/>
                                                   <ExpandableDiv
                                                       title={t('education.universityProject.title')}
                                                       orientation="center"
                                                       defaultContent={
                                                           <p> {t('education.universityProject.status')} </p>
                                                       }
                                                       expandedContent={
                                                           <div>
                                                               <p className="text-left">
                                                                   <strong> {t('education.universityProject.what_title')} </strong>
                                                                   <Trans i18nKey="education.universityProject.what_description" components={styledComponents}/>
                                                               </p>
                                                               <br/>
                                                               <p className="text-left">
                                                                   <strong> {t('education.universityProject.why_title')} </strong>
                                                                   <Trans i18nKey="education.universityProject.why_description" components={styledComponents}/>
                                                               </p>
                                                               <br/>
                                                               <p className="text-left">
                                                                   <strong> {t('education.universityProject.how_title')} </strong>
                                                                   <Trans i18nKey="education.universityProject.how_description" components={styledComponents}/>
                                                                   <ul className="list-disc list-inside p-1 mt-2">
                                                                       <li> <Trans i18nKey="education.universityProject.how_bullet_1" components={styledComponents}/> </li>
                                                                       <li> <Trans i18nKey="education.universityProject.how_bullet_2" components={styledComponents}/> </li>
                                                                       <li> <Trans i18nKey="education.universityProject.how_bullet_3" components={styledComponents}/> </li>
                                                                   </ul>
                                                               </p>
                                                           </div>
                                                       }
                                                   />
                                               </div>
                                           }
                                       />
                                   </div>
                               }
                />
                <ExpandableDiv
                title={t('experience.title')}
                orientation="center"
                defaultContent={
                    <></>
                }
                expandedContent={
                    <div>
                        <ExpandableDiv
                            title={t('experience.woodworking.title')}
                            orientation="center"
                            defaultContent={
                                <div>
                                    <div className="mr-2 text-center">{t('experience.woodworking.company')}</div>
                                    <div className="text-center">{t('experience.woodworking.dates')}</div>
                                </div>
                            }
                            expandedContent={
                                <ul>
                                   <li>
                                       {t('experience.woodworking.bullet_1')}
                                   </li>
                                    <li>
                                        {t('experience.woodworking.bullet_2')}
                                    </li>
                                    <li>
                                        {t('experience.woodworking.bullet_3')}
                                    </li>
                                </ul>
                            }
                        />
                        <ExpandableDiv
                            title={t('experience.internship.title')}
                            orientation="center"
                            defaultContent={
                                <div>
                                    <div className="mr-2 text-center">{t('experience.internship.company')}</div>
                                    <div className="text-center">{t('experience.internship.dates')}</div>
                                </div>
                            }
                            expandedContent={
                                <ul>
                                    <li>
                                        <Trans i18nKey="experience.internship.bullet_1" components={styledComponents}/>
                                    </li>
                                    <li>
                                        <Trans i18nKey="experience.internship.bullet_2" components={styledComponents}/>
                                    </li>
                                    <li>
                                        {t('experience.internship.bullet_3')}
                                    </li>
                                </ul>
                            }
                        />
                    </div>
                }
                />

                <SectionDivider title={t('projects.title')} content={t('projects.description')}/>

                <ExpandableDiv
                    title={t('projects.featured.title')}
                    orientation="center"
                    defaultContent={
                        <></>
                    }
                    expandedContent={
                    <div>
                        <ExpandableDiv
                            title={t('projects.featured.portfolio.title')}
                            orientation="center"
                            defaultContent={
                            <div>
                                <p> {t('projects.featured.portfolio.description')} </p>
                                <a> {t('projects.featured.portfolio.repoLinkText')} </a>
                            </div>
                            }
                            expandedContent={
                                <div>
                                    <ul>
                                        <li>
                                            <p>
                                            <strong> {t('projects.featured.portfolio.what_title')} </strong>
                                                <Trans i18nKey="projects.featured.portfolio.what_description" components={styledComponents}/>
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <strong> {t('projects.featured.portfolio.why_title')} </strong>
                                                <Trans i18nKey="projects.featured.portfolio.why_description" components={styledComponents}/>
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <strong> {t('projects.featured.portfolio.how_title')} </strong>
                                                <Trans i18nKey="projects.featured.portfolio.how_description" components={styledComponents}/>
                                            </p>
                                        </li>
                                    </ul>
                                    <ExpandableDiv
                                        title={t('projects.featured.portfolio.deepDive.title')}
                                        orientation="center"
                                        defaultContent={
                                            <p> {t('projects.featured.portfolio.deepDive.description')} </p>
                                        }
                                        expandedContent={
                                            <div>
                                                <ExpandableDiv
                                                    title={t('projects.featured.portfolio.deepDive.frontEnd.title')}
                                                    orientation="center"
                                                    defaultContent={
                                                        <></>
                                                    }
                                                    expandedContent={
                                                        <div>
                                                            <ExpandableDiv
                                                                title={t('projects.featured.portfolio.deepDive.frontEnd.architectureAndTechnologies.title')}
                                                                orientation="center"
                                                                defaultContent={
                                                                    <Trans i18nKey='projects.featured.portfolio.deepDive.frontEnd.architectureAndTechnologies.description' components={styledComponents}/>
                                                                }
                                                                expandedContent={
                                                                    <ul>
                                                                        <li>
                                                                            <Trans i18nKey='projects.featured.portfolio.deepDive.frontEnd.architectureAndTechnologies.expanded_bullet_1' components={styledComponents}/>
                                                                        </li>
                                                                        <li>
                                                                            <Trans i18nKey='projects.featured.portfolio.deepDive.frontEnd.architectureAndTechnologies.expanded_bullet_2' components={styledComponents}/>
                                                                        </li>
                                                                        <li>
                                                                            <Trans i18nKey='projects.featured.portfolio.deepDive.frontEnd.architectureAndTechnologies.expanded_bullet_3' components={styledComponents}/>
                                                                        </li>
                                                                        <li>
                                                                            <Trans i18nKey='projects.featured.portfolio.deepDive.frontEnd.architectureAndTechnologies.expanded_bullet_4' components={styledComponents}/>
                                                                        </li>
                                                                        <li>
                                                                            <Trans i18nKey='projects.featured.portfolio.deepDive.frontEnd.architectureAndTechnologies.expanded_bullet_5' components={styledComponents}/>
                                                                        </li>
                                                                    </ul>
                                                                }
                                                            />
                                                            <ExpandableDiv
                                                                title={t('projects.featured.portfolio.deepDive.frontEnd.features.title')}
                                                                orientation="center"
                                                                defaultContent={
                                                                    <p> {t('projects.featured.portfolio.deepDive.frontEnd.features.description')} </p>
                                                                }
                                                                expandedContent={
                                                                    <ul>
                                                                        {/* Dynamic Background */}
                                                                        <li>
                                                                            <h1> <strong> {t('projects.featured.portfolio.deepDive.frontEnd.features.dynamicBackground.title')} </strong> </h1>
                                                                            <Trans i18nKey="projects.featured.portfolio.deepDive.frontEnd.features.dynamicBackground.description" components={styledComponents}/>
                                                                            <ul>
                                                                                <li>
                                                                                    <Trans i18nKey="projects.featured.portfolio.deepDive.frontEnd.features.dynamicBackground.bullet_1" components={styledComponents}/>
                                                                                </li>
                                                                                <li>
                                                                                    <Trans i18nKey="projects.featured.portfolio.deepDive.frontEnd.features.dynamicBackground.bullet_2" components={styledComponents}/>
                                                                                </li>
                                                                            </ul>
                                                                        </li>

                                                                        {/* Frictionless Messaging UI */}
                                                                        <li>
                                                                            <h1> <strong> {t('projects.featured.portfolio.deepDive.frontEnd.features.messagingUI.title')} </strong> </h1>
                                                                            <Trans i18nKey="projects.featured.portfolio.deepDive.frontEnd.features.messagingUI.description" components={styledComponents}/>
                                                                            <ul>
                                                                                <li>
                                                                                    <Trans i18nKey="projects.featured.portfolio.deepDive.frontEnd.features.messagingUI.bullet_1" components={styledComponents}/>
                                                                                </li>
                                                                            </ul>
                                                                        </li>

                                                                        {/* Interactive Tech Links */}
                                                                        <li>
                                                                            <h1> <strong> {t('projects.featured.portfolio.deepDive.frontEnd.features.interactiveTechLinks.title')} </strong> </h1>
                                                                            <Trans i18nKey="projects.featured.portfolio.deepDive.frontEnd.features.interactiveTechLinks.description" components={styledComponents}/>
                                                                            <ul>
                                                                                <li>
                                                                                    <Trans i18nKey="projects.featured.portfolio.deepDive.frontEnd.features.interactiveTechLinks.bullet_1" components={styledComponents}/>
                                                                                </li>
                                                                            </ul>
                                                                        </li>

                                                                        {/* Multi-Language Support */}
                                                                        <li>
                                                                            <h1> <strong> {t('projects.featured.portfolio.deepDive.frontEnd.features.multiLanguageSupport.title')} </strong> </h1>
                                                                            <Trans i18nKey="projects.featured.portfolio.deepDive.frontEnd.features.multiLanguageSupport.description" components={styledComponents}/>
                                                                            <ul>
                                                                                <li>
                                                                                    <Trans i18nKey="projects.featured.portfolio.deepDive.frontEnd.features.multiLanguageSupport.bullet_1" components={styledComponents}/>
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                    </ul>
                                                                }
                                                            />
                                                        </div>
                                                    }
                                                />
                                                <ExpandableDiv
                                                    title={t('projects.featured.portfolio.deepDive.backEnd.title')}
                                                    orientation="center"
                                                    defaultContent={
                                                        <></>
                                                    }
                                                    expandedContent={
                                                        <div>
                                                            {/* API Architecture & Technologies */}
                                                            <ExpandableDiv
                                                                title={t('projects.featured.portfolio.deepDive.backEnd.architectureAndTechnologies.title')}
                                                                orientation="center"
                                                                defaultContent={
                                                                    <Trans i18nKey='projects.featured.portfolio.deepDive.backEnd.architectureAndTechnologies.description' components={styledComponents}/>
                                                                }
                                                                expandedContent={
                                                                    <ul>
                                                                        <li>
                                                                            <Trans i18nKey='projects.featured.portfolio.deepDive.backEnd.architectureAndTechnologies.expanded_bullet_1' components={styledComponents}/>
                                                                        </li>
                                                                        <li>
                                                                            <Trans i18nKey='projects.featured.portfolio.deepDive.backEnd.architectureAndTechnologies.expanded_bullet_2' components={styledComponents}/>
                                                                        </li>
                                                                        <li>
                                                                            <Trans i18nKey='projects.featured.portfolio.deepDive.backEnd.architectureAndTechnologies.expanded_bullet_3' components={styledComponents}/>
                                                                        </li>
                                                                    </ul>
                                                                }
                                                            />

                                                            {/* Security & Configuration */}
                                                            <ExpandableDiv
                                                                title={t('projects.featured.portfolio.deepDive.backEnd.security.title')}
                                                                orientation="center"
                                                                defaultContent={
                                                                    <Trans i18nKey='projects.featured.portfolio.deepDive.backEnd.security.description' components={styledComponents}/>
                                                                }
                                                                expandedContent={
                                                                    <ul>
                                                                        <li>
                                                                            <Trans i18nKey='projects.featured.portfolio.deepDive.backEnd.security.bullet_1' components={styledComponents}/>
                                                                        </li>
                                                                        <li>
                                                                            <Trans i18nKey='projects.featured.portfolio.deepDive.backEnd.security.bullet_2' components={styledComponents}/>
                                                                        </li>
                                                                        <li>
                                                                            <Trans i18nKey='projects.featured.portfolio.deepDive.backEnd.security.bullet_3' components={styledComponents}/>
                                                                        </li>
                                                                        <li>
                                                                            <Trans i18nKey='projects.featured.portfolio.deepDive.backEnd.security.bullet_4' components={styledComponents}/>
                                                                        </li>
                                                                    </ul>
                                                                }
                                                            />

                                                            {/* Weather Service (BFF) */}
                                                            <ExpandableDiv
                                                                title={t('projects.featured.portfolio.deepDive.backEnd.weatherService.title')}
                                                                orientation="center"
                                                                defaultContent={
                                                                    <Trans i18nKey='projects.featured.portfolio.deepDive.backEnd.weatherService.description' components={styledComponents}/>
                                                                }
                                                                expandedContent={
                                                                    <ul>
                                                                        <li>
                                                                            <Trans i18nKey='projects.featured.portfolio.deepDive.backEnd.weatherService.bullet_1' components={styledComponents}/>
                                                                        </li>
                                                                        <li>
                                                                            <Trans i18nKey='projects.featured.portfolio.deepDive.backEnd.weatherService.bullet_2' components={styledComponents}/>
                                                                        </li>
                                                                    </ul>
                                                                }
                                                            />
                                                        </div>
                                                    }
                                                />
                                            </div>
                                        }
                                    />
                                </div>
                            }
                        />
                        <ExpandableDiv
                            title={t('projects.featured.portfolio.deepDive.stockPortfolioOptimizer.title')}
                            orientation="center"
                            defaultContent={
                                <p> {t('projects.featured.portfolio.deepDive.stockPortfolioOptimizer.description')} </p>
                            }
                            expandedContent={
                                <div>
                                    <ExpandableDiv
                                        title={t('projects.featured.portfolio.deepDive.stockPortfolioOptimizer.overview.title')}
                                        orientation="center"
                                        defaultContent={
                                            <Trans i18nKey='projects.featured.portfolio.deepDive.stockPortfolioOptimizer.overview.description' components={styledComponents}/>
                                        }
                                        expandedContent={
                                            <p>
                                                <Trans i18nKey='projects.featured.portfolio.deepDive.stockPortfolioOptimizer.overview.expanded' components={styledComponents}/>
                                            </p>
                                        }
                                    />
                                    <ExpandableDiv
                                        title={t('projects.featured.portfolio.deepDive.stockPortfolioOptimizer.objective.title')}
                                        orientation="center"
                                        defaultContent={
                                            <Trans i18nKey='projects.featured.portfolio.deepDive.stockPortfolioOptimizer.objective.description' components={styledComponents}/>
                                        }
                                        expandedContent={
                                            <div>
                                                <p>
                                                    <Trans i18nKey='projects.featured.portfolio.deepDive.stockPortfolioOptimizer.objective.expanded_description' components={styledComponents}/>
                                                </p>
                                                <ul>
                                                    <li>
                                                        <Trans i18nKey='projects.featured.portfolio.deepDive.stockPortfolioOptimizer.objective.bullet_1' components={styledComponents}/>
                                                    </li>
                                                    <li>
                                                        <Trans i18nKey='projects.featured.portfolio.deepDive.stockPortfolioOptimizer.objective.bullet_2' components={styledComponents}/>
                                                    </li>
                                                    <li>
                                                        <Trans i18nKey='projects.featured.portfolio.deepDive.stockPortfolioOptimizer.objective.bullet_3' components={styledComponents}/>
                                                    </li>
                                                    <li>
                                                        <Trans i18nKey='projects.featured.portfolio.deepDive.stockPortfolioOptimizer.objective.bullet_4' components={styledComponents}/>
                                                    </li>
                                                </ul>
                                            </div>
                                        }
                                    />
                                    <ExpandableDiv
                                        title={t('projects.featured.portfolio.deepDive.stockPortfolioOptimizer.tech.title')}
                                        orientation="center"
                                        defaultContent={
                                            <Trans i18nKey='projects.featured.portfolio.deepDive.stockPortfolioOptimizer.tech.description' components={styledComponents}/>
                                        }
                                        expandedContent={
                                            <ul>
                                                <li>
                                                    <Trans i18nKey='projects.featured.portfolio.deepDive.stockPortfolioOptimizer.tech.bullet_1' components={styledComponents}/>
                                                </li>
                                                <li>
                                                    <Trans i18nKey='projects.featured.portfolio.deepDive.stockPortfolioOptimizer.tech.bullet_2' components={styledComponents}/>
                                                </li>
                                                <li>
                                                    <Trans i18nKey='projects.featured.portfolio.deepDive.stockPortfolioOptimizer.tech.bullet_3' components={styledComponents}/>
                                                </li>
                                            </ul>
                                        }
                                    />
                                    <ExpandableDiv
                                        title={t('projects.featured.portfolio.deepDive.stockPortfolioOptimizer.keyFeature.title')}
                                        orientation="center"
                                        defaultContent={
                                            <Trans i18nKey='projects.featured.portfolio.deepDive.stockPortfolioOptimizer.keyFeature.description' components={styledComponents}/>
                                        }
                                        expandedContent={
                                            <div>
                                                <p>
                                                    <Trans i18nKey='projects.featured.portfolio.deepDive.stockPortfolioOptimizer.keyFeature.expanded_p1' components={styledComponents}/>
                                                </p>
                                                <ul>
                                                    <li>
                                                        <Trans i18nKey='projects.featured.portfolio.deepDive.stockPortfolioOptimizer.keyFeature.bullet_1' components={styledComponents}/>
                                                    </li>
                                                    <li>
                                                        <Trans i18nKey='projects.featured.portfolio.deepDive.stockPortfolioOptimizer.keyFeature.bullet_2' components={styledComponents}/>
                                                    </li>
                                                </ul>
                                                <p>
                                                    <Trans i18nKey='projects.featured.portfolio.deepDive.stockPortfolioOptimizer.keyFeature.expanded_p2' components={styledComponents}/>
                                                </p>
                                            </div>
                                        }
                                    />
                                </div>
                            }
                        />
                    </div>
                    }
                />

                <ExpandableDiv
                    title={t('projects.workInProgress.title')}
                    orientation="center"
                    defaultContent={<></>}
                    expandedContent={
                        <div>
                            {/* GAnki */}
                            <ExpandableDiv
                                title={t('projects.workInProgress.GAnki.title')}
                                orientation="center"
                                defaultContent={<p>{t('projects.workInProgress.GAnki.status')}</p>}
                                expandedContent={
                                    <div>
                                        {/* Overview */}
                                        <div>
                                            <h1><strong>{t('projects.workInProgress.GAnki.overview.title')}</strong></h1>
                                            <p><Trans i18nKey="projects.workInProgress.GAnki.overview.what" components={styledComponents} /></p>
                                            <p><Trans i18nKey="projects.workInProgress.GAnki.overview.why" components={styledComponents} /></p>
                                            <p><Trans i18nKey="projects.workInProgress.GAnki.overview.how" components={styledComponents} /></p>
                                        </div>

                                        {/* Technical Deep Dive */}
                                        <ExpandableDiv
                                            title={t('projects.workInProgress.GAnki.deepDive.title')}
                                            orientation="center"
                                            defaultContent={<></>}
                                            expandedContent={
                                                <div>
                                                    <ExpandableDiv
                                                        title={t('projects.workInProgress.GAnki.deepDive.coreFeatures.title')}
                                                        orientation="center"
                                                        defaultContent={<p>{t('projects.workInProgress.GAnki.deepDive.coreFeatures.description')}</p>}
                                                        expandedContent={
                                                            <ul>
                                                                <li>
                                                                    <h1><strong>{t('projects.workInProgress.GAnki.deepDive.coreFeatures.bullet_1.title')}</strong></h1>
                                                                    <ul>
                                                                        <li>{t('projects.workInProgress.GAnki.deepDive.coreFeatures.bullet_1.bullet_1')}</li>
                                                                        <li>{t('projects.workInProgress.GAnki.deepDive.coreFeatures.bullet_1.bullet_2')}</li>
                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <h1><strong>{t('projects.workInProgress.GAnki.deepDive.coreFeatures.bullet_2.title')}</strong></h1>
                                                                    <ul>
                                                                        <li>{t('projects.workInProgress.GAnki.deepDive.coreFeatures.bullet_2.bullet_1')}</li>
                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <h1><strong>{t('projects.workInProgress.GAnki.deepDive.coreFeatures.bullet_3.title')}</strong></h1>
                                                                    <ul>
                                                                        <li>{t('projects.workInProgress.GAnki.deepDive.coreFeatures.bullet_3.bullet_1')}</li>
                                                                        <li>{t('projects.workInProgress.GAnki.deepDive.coreFeatures.bullet_3.bullet_2')}</li>
                                                                        <li>{t('projects.workInProgress.GAnki.deepDive.coreFeatures.bullet_3.bullet_3')}</li>
                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <h1><strong>{t('projects.workInProgress.GAnki.deepDive.coreFeatures.bullet_4.title')}</strong></h1>
                                                                    <ul>
                                                                        <li>{t('projects.workInProgress.GAnki.deepDive.coreFeatures.bullet_4.bullet_1')}</li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        }
                                                    />
                                                    <ExpandableDiv
                                                        title={t('projects.workInProgress.GAnki.deepDive.architecture.title')}
                                                        orientation="center"
                                                        defaultContent={<Trans i18nKey="projects.workInProgress.GAnki.deepDive.architecture.description" components={styledComponents} />}
                                                        expandedContent={
                                                            <ul>
                                                                <li>
                                                                    <h1><strong>{t('projects.workInProgress.GAnki.deepDive.architecture.bullet_1.title')}</strong></h1>
                                                                    <ul>
                                                                        <li><Trans i18nKey="projects.workInProgress.GAnki.deepDive.architecture.bullet_1.bullet_1" components={styledComponents} /></li>
                                                                        <li><Trans i18nKey="projects.workInProgress.GAnki.deepDive.architecture.bullet_1.bullet_2" components={styledComponents} /></li>
                                                                        <li><Trans i18nKey="projects.workInProgress.GAnki.deepDive.architecture.bullet_1.bullet_3" components={styledComponents} /></li>
                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <h1><strong>{t('projects.workInProgress.GAnki.deepDive.architecture.bullet_2.title')}</strong></h1>
                                                                    <ul>
                                                                        <li><Trans i18nKey="projects.workInProgress.GAnki.deepDive.architecture.bullet_2.bullet_1" components={styledComponents} /></li>
                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <h1><strong>{t('projects.workInProgress.GAnki.deepDive.architecture.bullet_3.title')}</strong></h1>
                                                                    <ul>
                                                                        <li><Trans i18nKey="projects.workInProgress.GAnki.deepDive.architecture.bullet_3.bullet_1" components={styledComponents} /></li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        }
                                                    />
                                                    <ExpandableDiv
                                                        title={t('projects.workInProgress.GAnki.deepDive.riskAnalysis.title')}
                                                        orientation="center"
                                                        defaultContent={<p>{t('projects.workInProgress.GAnki.deepDive.riskAnalysis.description')}</p>}
                                                        expandedContent={
                                                            <ul>
                                                                <li>
                                                                    <h1><strong>{t('projects.workInProgress.GAnki.deepDive.riskAnalysis.bullet_1.title')}</strong></h1>
                                                                    <ul>
                                                                        <li><Trans i18nKey="projects.workInProgress.GAnki.deepDive.riskAnalysis.bullet_1.bullet_1" components={styledComponents} /></li>
                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <h1><strong>{t('projects.workInProgress.GAnki.deepDive.riskAnalysis.bullet_2.title')}</strong></h1>
                                                                    <ul>
                                                                        <li><Trans i18nKey="projects.workInProgress.GAnki.deepDive.riskAnalysis.bullet_2.bullet_1" components={styledComponents} /></li>
                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <h1><strong>{t('projects.workInProgress.GAnki.deepDive.riskAnalysis.bullet_3.title')}</strong></h1>
                                                                    <ul>
                                                                        <li><Trans i18nKey="projects.workInProgress.GAnki.deepDive.riskAnalysis.bullet_3.bullet_1" components={styledComponents} /></li>
                                                                        <li><Trans i18nKey="projects.workInProgress.GAnki.deepDive.riskAnalysis.bullet_3.bullet_2" components={styledComponents} /></li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        }
                                                    />
                                                    <ExpandableDiv
                                                        title={t('projects.workInProgress.GAnki.deepDive.devPlan.title')}
                                                        orientation="center"
                                                        defaultContent={<p>{t('projects.workInProgress.GAnki.deepDive.devPlan.description')}</p>}
                                                        expandedContent={
                                                            <ul>
                                                                <li><Trans i18nKey="projects.workInProgress.GAnki.deepDive.devPlan.bullet_1" components={styledComponents} /></li>
                                                                <li><Trans i18nKey="projects.workInProgress.GAnki.deepDive.devPlan.bullet_2" components={styledComponents} /></li>
                                                                <li><Trans i18nKey="projects.workInProgress.GAnki.deepDive.devPlan.bullet_3" components={styledComponents} /></li>
                                                                <li><Trans i18nKey="projects.workInProgress.GAnki.deepDive.devPlan.bullet_4" components={styledComponents} /></li>
                                                                <li><Trans i18nKey="projects.workInProgress.GAnki.deepDive.devPlan.bullet_5" components={styledComponents} /></li>
                                                            </ul>
                                                        }
                                                    />
                                                </div>
                                            }
                                        />
                                    </div>
                                }
                            />

                            {/* Vinted Deal Tracker */}
                            <ExpandableDiv
                                title={t('projects.workInProgress.dealTracker.title')}
                                orientation="center"
                                defaultContent={<p>{t('projects.workInProgress.dealTracker.status')}</p>}
                                expandedContent={
                                    <div>
                                        {/* Overview */}
                                        <div>
                                            <h1><strong>{t('projects.workInProgress.dealTracker.overview.title')}</strong></h1>
                                            <p><Trans i18nKey="projects.workInProgress.dealTracker.overview.what" components={styledComponents} /></p>
                                            <p><Trans i18nKey="projects.workInProgress.dealTracker.overview.why" components={styledComponents} /></p>
                                            <p><Trans i18nKey="projects.workInProgress.dealTracker.overview.how" components={styledComponents} /></p>
                                        </div>

                                        {/* Technical Deep Dive */}
                                        <ExpandableDiv
                                            title={t('projects.workInProgress.dealTracker.deepDive.title')}
                                            orientation="center"
                                            defaultContent={<></>}
                                            expandedContent={
                                                <div>
                                                    <ExpandableDiv
                                                        title={t('projects.workInProgress.dealTracker.deepDive.coreFeatures.title')}
                                                        orientation="center"
                                                        defaultContent={<p>{t('projects.workInProgress.dealTracker.deepDive.coreFeatures.description')}</p>}
                                                        expandedContent={
                                                            <ul>
                                                                <li><Trans i18nKey="projects.workInProgress.dealTracker.deepDive.coreFeatures.bullet_1" components={styledComponents} /></li>
                                                                <li><Trans i18nKey="projects.workInProgress.dealTracker.deepDive.coreFeatures.bullet_2" components={styledComponents} /></li>
                                                                <li>
                                                                    <h1><strong>{t('projects.workInProgress.dealTracker.deepDive.coreFeatures.bullet_3.title')}</strong></h1>
                                                                    <ul>
                                                                        <li>{t('projects.workInProgress.dealTracker.deepDive.coreFeatures.bullet_3.bullet_1')}</li>
                                                                        <li>{t('projects.workInProgress.dealTracker.deepDive.coreFeatures.bullet_3.bullet_2')}</li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        }
                                                    />
                                                    <ExpandableDiv
                                                        title={t('projects.workInProgress.dealTracker.deepDive.architecture.title')}
                                                        orientation="center"
                                                        defaultContent={<Trans i18nKey="projects.workInProgress.dealTracker.deepDive.architecture.description" components={styledComponents} />}
                                                        expandedContent={
                                                            <ul>
                                                                <li><Trans i18nKey="projects.workInProgress.dealTracker.deepDive.architecture.bullet_1" components={styledComponents} /></li>
                                                                <li><Trans i18nKey="projects.workInProgress.dealTracker.deepDive.architecture.bullet_2" components={styledComponents} /></li>
                                                                <li><Trans i18nKey="projects.workInProgress.dealTracker.deepDive.architecture.bullet_3" components={styledComponents} /></li>
                                                                <li><Trans i18nKey="projects.workInProgress.dealTracker.deepDive.architecture.bullet_4" components={styledComponents} /></li>
                                                            </ul>
                                                        }
                                                    />
                                                    <ExpandableDiv
                                                        title={t('projects.workInProgress.dealTracker.deepDive.riskAnalysis.title')}
                                                        orientation="center"
                                                        defaultContent={<p>{t('projects.workInProgress.dealTracker.deepDive.riskAnalysis.description')}</p>}
                                                        expandedContent={
                                                            <ul>
                                                                <li>
                                                                    <h1><strong>{t('projects.workInProgress.dealTracker.deepDive.riskAnalysis.bullet_1.title')}</strong></h1>
                                                                    <ul>
                                                                        <li><Trans i18nKey="projects.workInProgress.dealTracker.deepDive.riskAnalysis.bullet_1.bullet_1" components={styledComponents} /></li>
                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <h1><strong>{t('projects.workInProgress.dealTracker.deepDive.riskAnalysis.bullet_2.title')}</strong></h1>
                                                                    <ul>
                                                                        <li><Trans i18nKey="projects.workInProgress.dealTracker.deepDive.riskAnalysis.bullet_2.bullet_1" components={styledComponents} /></li>
                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <h1><strong>{t('projects.workInProgress.dealTracker.deepDive.riskAnalysis.bullet_3.title')}</strong></h1>
                                                                    <ul>
                                                                        <li><Trans i18nKey="projects.workInProgress.dealTracker.deepDive.riskAnalysis.bullet_3.bullet_1" components={styledComponents} /></li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        }
                                                    />
                                                    <ExpandableDiv
                                                        title={t('projects.workInProgress.dealTracker.deepDive.availability.title')}
                                                        orientation="center"
                                                        defaultContent={<p>{t('projects.workInProgress.dealTracker.deepDive.availability.description')}</p>}
                                                        expandedContent={
                                                            <div>
                                                                <p>{t('projects.workInProgress.dealTracker.deepDive.availability.expanded_p1')}</p>
                                                                <p>{t('projects.workInProgress.dealTracker.deepDive.availability.expanded_p2')}</p>
                                                                <p>{t('projects.workInProgress.dealTracker.deepDive.availability.expanded_p3')}</p>
                                                            </div>
                                                        }
                                                    />
                                                    <ExpandableDiv
                                                        title={t('projects.workInProgress.dealTracker.deepDive.devPlan.title')}
                                                        orientation="center"
                                                        defaultContent={<p>{t('projects.workInProgress.dealTracker.deepDive.devPlan.description')}</p>}
                                                        expandedContent={
                                                            <ul>
                                                                <li><Trans i18nKey="projects.workInProgress.dealTracker.deepDive.devPlan.bullet_1" components={styledComponents} /></li>
                                                                <li><Trans i18nKey="projects.workInProgress.dealTracker.deepDive.devPlan.bullet_2" components={styledComponents} /></li>
                                                                <li><Trans i18nKey="projects.workInProgress.dealTracker.deepDive.devPlan.bullet_3" components={styledComponents} /></li>
                                                                <li><Trans i18nKey="projects.workInProgress.dealTracker.deepDive.devPlan.bullet_4" components={styledComponents} /></li>
                                                                <li><Trans i18nKey="projects.workInProgress.dealTracker.deepDive.devPlan.bullet_5" components={styledComponents} /></li>
                                                            </ul>
                                                        }
                                                    />
                                                </div>
                                            }
                                        />
                                    </div>
                                }
                            />

                            {/* DS&A Showcase */}
                            <ExpandableDiv
                                title={t('projects.workInProgress.DSAShowcase.title')}
                                orientation="center"
                                defaultContent={<p>{t('projects.workInProgress.DSAShowcase.status')}</p>}
                                expandedContent={
                                    <div>
                                        {/* Overview */}
                                        <div>
                                            <h1><strong>{t('projects.workInProgress.DSAShowcase.overview.title')}</strong></h1>
                                            <p><Trans i18nKey="projects.workInProgress.DSAShowcase.overview.what" components={styledComponents} /></p>
                                            <p><Trans i18nKey="projects.workInProgress.DSAShowcase.overview.why" components={styledComponents} /></p>
                                            <p><Trans i18nKey="projects.workInProgress.DSAShowcase.overview.how" components={styledComponents} /></p>
                                        </div>

                                        {/* Technical Deep Dive */}
                                        <ExpandableDiv
                                            title={t('projects.workInProgress.DSAShowcase.deepDive.title')}
                                            orientation="center"
                                            defaultContent={<></>}
                                            expandedContent={
                                                <div>
                                                    <ExpandableDiv
                                                        title={t('projects.workInProgress.DSAShowcase.deepDive.coreFeatures.title')}
                                                        orientation="center"
                                                        defaultContent={<p>{t('projects.workInProgress.DSAShowcase.deepDive.coreFeatures.description')}</p>}
                                                        expandedContent={
                                                            <ul>
                                                                <li><Trans i18nKey="projects.workInProgress.DSAShowcase.deepDive.coreFeatures.bullet_1" components={styledComponents} /></li>
                                                                <li><Trans i18nKey="projects.workInProgress.DSAShowcase.deepDive.coreFeatures.bullet_2" components={styledComponents} /></li>
                                                                <li>
                                                                    <h1><strong>{t('projects.workInProgress.DSAShowcase.deepDive.coreFeatures.bullet_3.title')}</strong></h1>
                                                                    <ul>
                                                                        <li><Trans i18nKey="projects.workInProgress.DSAShowcase.deepDive.coreFeatures.bullet_3.bullet_1" components={styledComponents} /></li>
                                                                        <li><Trans i18nKey="projects.workInProgress.DSAShowcase.deepDive.coreFeatures.bullet_3.bullet_2" components={styledComponents} /></li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        }
                                                    />
                                                    <ExpandableDiv
                                                        title={t('projects.workInProgress.DSAShowcase.deepDive.architecture.title')}
                                                        orientation="center"
                                                        defaultContent={<p>{t('projects.workInProgress.DSAShowcase.deepDive.architecture.description')}</p>}
                                                        expandedContent={
                                                            <ul>
                                                                <li>
                                                                    <h1><strong>{t('projects.workInProgress.DSAShowcase.deepDive.architecture.bullet_1.title')}</strong></h1>
                                                                    <ul>
                                                                        <li><Trans i18nKey="projects.workInProgress.DSAShowcase.deepDive.architecture.bullet_1.bullet_1" components={styledComponents} /></li>
                                                                        <li><Trans i18nKey="projects.workInProgress.DSAShowcase.deepDive.architecture.bullet_1.bullet_2" components={styledComponents} /></li>
                                                                        <li><Trans i18nKey="projects.workInProgress.DSAShowcase.deepDive.architecture.bullet_1.bullet_3" components={styledComponents} /></li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        }
                                                    />
                                                    <ExpandableDiv
                                                        title={t('projects.workInProgress.DSAShowcase.deepDive.riskAnalysis.title')}
                                                        orientation="center"
                                                        defaultContent={<p>{t('projects.workInProgress.DSAShowcase.deepDive.riskAnalysis.description')}</p>}
                                                        expandedContent={
                                                            <ul>
                                                                <li>
                                                                    <h1><strong>{t('projects.workInProgress.DSAShowcase.deepDive.riskAnalysis.bullet_1.title')}</strong></h1>
                                                                    <ul>
                                                                        <li><Trans i18nKey="projects.workInProgress.DSAShowcase.deepDive.riskAnalysis.bullet_1.bullet_1" components={styledComponents} /></li>
                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <h1><strong>{t('projects.workInProgress.DSAShowcase.deepDive.riskAnalysis.bullet_2.title')}</strong></h1>
                                                                    <ul>
                                                                        <li><Trans i18nKey="projects.workInProgress.DSAShowcase.deepDive.riskAnalysis.bullet_2.bullet_1" components={styledComponents} /></li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        }
                                                    />
                                                </div>
                                            }
                                        />
                                    </div>
                                }
                            />
                        </div>
                    }
                />


            </motion.div>
            <div className="fixed m-3 right-0 bottom-0">
                <MessageBox/>
            </div>
        </div>
    );
}

export default HomePage;