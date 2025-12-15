import ExpandableDiv from "./Components/ExpandableDiv.tsx";
import MessageBox from "./Components/MessageBox.tsx";
import { useTranslation, Trans } from "react-i18next";
import {SectionDivider} from "./Components/SectionDivider.tsx";
import {useState} from "react";
import {SettingsMenu} from "./Components/SettingsMenu.tsx";
import {useIsMobile} from "./Hooks/useIsMobile.ts";
import {FeaturedProjectsSection} from "./Components/Sections/FeaturedProjectsSection.tsx";
import {WorkInProgressProjectsSection} from "./Components/Sections/WorkInProgressProjectsSection.tsx";

export const styledComponents = {
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
    SWCLink: <a href="https://swc.rs" target="_blank" className="hover:bg-gradient-to-r hover:from-swcStart hover:to-swcEnd hover:text-transparent hover:bg-clip-text font-bold text-nowrap" />,
    sendGridLink: <a href="https://sendgrid.com" target="_blank" className="hover:text-sendGrid font-bold text-nowrap" />,
    name: <strong className="font-semibold text-gray-900 dark:text-slate-100" />,
    bold: <strong />,
    subtitle: <strong className="font-semibold text-gray-900 dark:text-slate-100 mr-2" />,
    code: <code className="font-mono text-nowrap bg-slate-200 dark:bg-slate-700/80 text-sky-600 dark:text-sky-300 px-1 py-0.5 rounded-md text-sm" />,
}

function HomePage() {

    const isMobile = useIsMobile()

    const [isMessageBoxOpen, setIsMessageBoxOpen] = useState(false);
    const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState(false);

    const handleToggleSettings = () => {
        setIsSettingsMenuOpen((prev) => !prev); //change the state of the settings menu
        if (!isSettingsMenuOpen && isMobile){ //if the settings menu is closed, so it's about to change to open
            setIsMessageBoxOpen(false); //close the message box
        }
    }

    const handleToggleMessageBox = () => {
        setIsMessageBoxOpen((prev) => !prev)
        if (!isMessageBoxOpen && isMobile){ // if the messagebox is closed and about to be opened
            setIsSettingsMenuOpen(false); //close the settings menu
        }
    }

    const { t } = useTranslation();

    return (
        <div className="mx-2 py-20 lg:w-3/5 ml-auto mr-auto">
                <ExpandableDiv title={t('aboutMe.title')}
                               orientation="center"
                               isSectionBreak={true}
                               shouldBlur={true}
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
                               shouldBlur={true}
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
                                                               <div className="text-left">
                                                                   <strong> {t('education.universityProject.how_title')} </strong>
                                                                   <Trans i18nKey="education.universityProject.how_description" components={styledComponents}/>
                                                                   <ul className="list-disc list-inside p-1 mt-2">
                                                                       <li> <Trans i18nKey="education.universityProject.how_bullet_1" components={styledComponents}/> </li>
                                                                       <li> <Trans i18nKey="education.universityProject.how_bullet_2" components={styledComponents}/> </li>
                                                                       <li> <Trans i18nKey="education.universityProject.how_bullet_3" components={styledComponents}/> </li>
                                                                   </ul>
                                                               </div>
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
                    shouldBlur={true}
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

                <FeaturedProjectsSection/>

                <WorkInProgressProjectsSection/>

            <div className="fixed m-3 left-0 bottom-0 ">
                <SettingsMenu isOpen={isSettingsMenuOpen} onToggle={handleToggleSettings}/>
            </div>
            <div className="fixed m-3 right-0 bottom-0 pointer-events-none">
                <div className="pointer-events-auto">
                    <MessageBox isOpen={isMessageBoxOpen} onToggle={handleToggleMessageBox}/>
                </div>
            </div>

        </div>
    );
}

export default HomePage;