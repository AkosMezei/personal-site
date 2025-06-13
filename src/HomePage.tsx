//TODO refuses to update on theme change, make it work with static bg or make it update

import ExpandableDiv from "./Components/ExpandableDiv.tsx";
import giantPlaceholderImage from "../src/assets/placeholderImage.jpeg"
import {preload} from "react-dom";
import MessageBox from "./Components/MessageBox.tsx";

function HomePage() {
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

            <ExpandableDiv title={"Left Aligned"}
                           image={giantPlaceholderImage}
                           defaultContent={
                               <p> This is some left aligned content as a placeholder for testing purposes. </p>
                           }
                           expandedContent={
                               <>
                                   <p> Expanded left aligned test section</p>
                                   <p className="mt-3 text-lg text-red-500/75"> Note: This is a placeholder
                                       section. </p>
                               </>
                           }
            />

            <ExpandableDiv title={"Right Aligned"}
                           orientation="right"
                           image={giantPlaceholderImage}
                           defaultContent={
                               <p className="text-right"> This is some right aligned content as a placeholder for
                                   testing purposes. </p>
                           }
                           expandedContent={
                               <>
                                   <p> Expanded right aligned test section</p>
                                   <p className="mt-3 text-lg text-red-500/75"> Note: This is a placeholder
                                       section. </p>
                               </>
                           }
            />

            <ExpandableDiv title={"Projects"}
                           orientation="center"
                           defaultContent={
                               <p>I wonder if this'll work lmao</p>
                           }
                           expandedContent={
                               <div className="w-full">
                                   
                                   <ExpandableDiv
                                       title="Project 1 - left"
                                       orientation="left"
                                       defaultContent={
                                           <p className="text-left"> maybe hopefully it works?</p>
                                       }
                                   expandedContent={
                                       <p className="text-left"> Left aligned interior content stuffs. </p>
                                   }
                                   />
                                   
                                   <ExpandableDiv
                                       title="Project 2 - right"
                                       orientation="right"
                                       defaultContent={
                                           <p className="text-right"> maybe hopefully it works?</p>
                                       }
                                       expandedContent={
                                           <p className="text-right"> Right aligned interior content stuffs. </p>
                                       }
                                   />
                                   
                                   <ExpandableDiv
                                       title="Project 3 - center"
                                       orientation="center"
                                       defaultContent={
                                           <p className="text-center"> maybe hopefully it works?</p>
                                       }
                                       expandedContent={
                                           <p className="text-center"> Center aligned interior content stuffs. </p>
                                       }
                                   />
                                   
                               </div>
                           }

                />
            </motion.div>
                <MessageBox/>
        </div>
);
}

export default HomePage;