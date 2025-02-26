//TODO refuses to update on theme change, make it work with static bg or make it update

import ExpandableDiv from "./Components/ExpandableDiv.tsx";
import giantPlaceholderImage from "../src/assets/placeholderImage.jpeg"
function HomePage() {

    return (
        <div className="mx-2 py-16">
            <ExpandableDiv title="About me" orientation="center"
                           image = {giantPlaceholderImage}
                           defaultContent={
                <p className="text-center"> Hello! My name is [Your Name], and I'm a passionate programmer with a knack
                    for
                    solving complex problems through code. With expertise in various programming languages and
                    frameworks, I strive to create efficient and innovative solutions. My journey in the tech world has
                    been fueled by my curiosity and a constant drive to learn and improve. </p>
            }
                           expandedContent={
                               <>
                                   <p className="mt-3 text-center"> When I'm not coding, you can find me exploring the
                                       latest tech trends,
                                       participating
                                       in hackathons, or enjoying a good book. I'm excited to connect and collaborate
                                       with
                                       like-minded individuals who share my enthusiasm for technology. </p>
                                   <p className="mt-3 text-center text-lg text-red-500/75"> Note: This is a placeholder
                                       "About Me" section. </p>
                               </>
                           }
            />
            
            <ExpandableDiv title={"Left Aligned"}
                           image = {giantPlaceholderImage}
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
                           image = {giantPlaceholderImage}
                           defaultContent={
                               <p className="text-right"> This is some right aligned content as a placeholder for testing purposes. </p>
                           }
                           expandedContent={
                               <>
                                   <p> Expanded right aligned test section</p>
                                   <p className="mt-3 text-lg text-red-500/75"> Note: This is a placeholder
                                       section. </p>
                               </>
                           }
            />
        </div>
    );
}

export default HomePage;