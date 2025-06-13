//TODO refuses to update on theme change, make it work with static bg or make it update
//TODO if the number of lines is different between languages, the language change is jagged af
//TODO sometimes on first expand the image load jumps the whole div, figure out what causes it

import ExpandableDiv from "./Components/ExpandableDiv.tsx";
import giantPlaceholderImage from "../src/assets/placeholderImage.jpeg"
import {preload} from "react-dom";
import MessageBox from "./Components/MessageBox.tsx";
import { motion } from "motion/react";
import { useTranslation } from "./Hooks/useTranslation.ts";

function HomePage() {

    const { t } = useTranslation();
    
    preload(giantPlaceholderImage, {as: "image"})
    return (
        <div className="mx-2 py-16 lg:w-3/5 ml-auto mr-auto">
            <motion.div layout transition={{layout: {duration: 0.5, ease: "easeInOut"}}}> {/*TODO this does jack shit fuck all currently*/}
                <ExpandableDiv title={t('aboutMeTitle')} orientation="center"
                               image={giantPlaceholderImage}
                               defaultContent={
                                   <p className="text-center">
                                       {t('aboutMeDefault')}
                                   </p>
                               }
                               expandedContent={
                                   <>
                                       <p className="mt-3 text-center"> {t('aboutMeExpanded')} </p>
                                       <p className="mt-3 text-center text-lg text-red-500/75"> Note: This is a
                                           placeholder
                                           "About Me" section. </p>
                                   </>
                               }
                />

                <ExpandableDiv title={t('experienceTitle')}
                               image={giantPlaceholderImage}
                               defaultContent={
                                   <p> {t('experienceDefault')} </p>
                               }
                               expandedContent={
                                   <>
                                       <p> {t('experienceExpanded')} </p>
                                       <p className="mt-3 text-lg text-red-500/75"> Note: This is a placeholder
                                           section. </p>
                                   </>
                               }
                />

                <ExpandableDiv title={t('educationTitle')}
                               orientation="right"
                               image={giantPlaceholderImage}
                               defaultContent={
                                   <p className="text-right"> {t('educationDefault')} </p>
                               }
                               expandedContent={
                                   <>
                                       <p> {t('educationExpanded')} </p>
                                       <p className="mt-3 text-lg text-red-500/75"> Note: This is a placeholder
                                           section. </p>
                                   </>
                               }
                />

                <ExpandableDiv title={"Projects"}
                               orientation="center"
                               defaultContent={
                                   <p> {t('projectsDefault')} </p>
                               }
                               expandedContent={
                                   <div className="w-full">

                                       <ExpandableDiv
                                           title={t('cvWebsiteProjectTitle')}
                                           orientation="center"
                                           defaultContent={
                                               <p className="text-center"> {t('cvWebsiteProjectDefault')} </p>
                                           }
                                           expandedContent={
                                               <p className="text-center"> {t('cvWebsiteProjectExpanded')} </p>
                                           }
                                       />

                                       <ExpandableDiv
                                           title={t('ttWebsiteProjectTitle')}
                                           orientation="center"
                                           defaultContent={
                                               <p className="text-center"> {t('ttWebsiteProjectDefault')} </p>
                                           }
                                           expandedContent={
                                               <p className="text-center"> {t('ttWebsiteProjectExpanded')} </p>
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