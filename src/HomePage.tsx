//TODO refuses to update on theme change, make it work with static bg or make it update
//TODO if the number of lines is different between languages, the language change is jagged af
//TODO sometimes on first expand the image load jumps the whole div, figure out what causes it
//TODO if on mobile, when opening message sender, jump to bottom so keyboard doesn't hide input 
//TODO fix centered titles inside projects not being centered on mobile
//TODO add hrefs to tech stack in about me
//TODO maybe unhighlight the woodworking part
//TODO preload or preallocate space for edu. images (and maybe all other images too while at it)

//TODO move ttwebsite image to top

import giantPlaceholderImage from "../src/assets/placeholderImage.jpeg"
import uni from "../src/assets/sapientia.jpg"
import highschool from "../src/assets/salamon_erno.jpg"
import ttwebsite from "../src/assets/ttwebsite.png"
import ExpandableDiv from "./Components/ExpandableDiv.tsx";
import {preload} from "react-dom";
import MessageBox from "./Components/MessageBox.tsx";
import { motion } from "motion/react";
import { useTranslation } from "./Hooks/useTranslation.ts";

function HomePage() {

    const { t } = useTranslation();

    // TODO preload on div expansion OR hover
    preload(giantPlaceholderImage, {as: "image"})


    return (
        <div className="mx-2 py-16 lg:w-3/5 ml-auto mr-auto">
            <motion.div layout transition={{layout: {duration: 0.5, ease: "easeInOut"}}}> {/*TODO this does jack shit fuck all currently*/}
                <ExpandableDiv title={t('aboutMeTitle')}
                               orientation="center"
                               defaultContent={
                                   <p className="text-center">
                                       {t('aboutMeDefault.part1')}
                                       <strong className="text-lg font-bold">{t('aboutMeDefault.highlight_name')}</strong>
                                       {t('aboutMeDefault.part2')}
                                   </p>
                               }
                               expandedContent={
                                   <>
                                       <p className="mt-3 text-center">
                                           {t('aboutMeExpanded.para1_part1')}
                                           <strong>{t('aboutMeExpanded.highlight_woodworking')}</strong>
                                           {t('aboutMeExpanded.para1_part2')}
                                       </p>
                                       <p className="mt-3 text-center">
                                           {t('aboutMeExpanded.para2_part1')}
                                           <a href="..." className="hover:text-react font-bold">{t('aboutMeExpanded.highlight_react')}</a>
                                           {t('aboutMeExpanded.para2_part2')}
                                           <a href="..." className="hover:text-typescript font-bold">{t('aboutMeExpanded.highlight_typescript')}</a>
                                           {t('aboutMeExpanded.para2_part3')}
                                           <a href="..." className="hover:bg-gradient-to-bl hover:from-dotNetStart hover:from-45% hover:to-dotNetEnd hover:to-80% hover:text-transparent hover:bg-clip-text font-bold">{t('aboutMeExpanded.highlight_dotnet')}</a>
                                           {t('aboutMeExpanded.para2_part4')}
                                       </p>
                                       <p className="mt-3 text-center">
                                           {t('aboutMeExpanded.para3_part1')}
                                           <strong>{t('aboutMeExpanded.highlight_builder')}</strong>
                                           {t('aboutMeExpanded.para3_part2')}
                                       </p>
                                   </>
                               }
                />

                <ExpandableDiv title={t('educationTitle')}
                               orientation="center"
                               defaultContent={
                                   <></>
                               }
                               expandedContent={
                                   <div className="w-full">
                                       <ExpandableDiv
                                           title={t('hsTitle')}
                                           image={highschool}
                                           preloadOnHover={() => preload(highschool, {as: "image"})}
                                           orientation="left"
                                           defaultContent={
                                               <p className=""> {t('hsDefault')} </p>
                                           }
                                           expandedContent={
                                               <p className="text-center"> {t('hsExpanded')} </p>
                                           }
                                       />

                                       <ExpandableDiv
                                           title={t("uniTitle")}
                                           image={uni}
                                           preloadOnHover={() => preload(uni, {as: "image"})}
                                           orientation="right"
                                           defaultContent={
                                               <p className="text-center"> {t('uniDefault')} </p>
                                           }
                                           expandedContent={
                                               <p className="text-center ml-10"> {t('uniExpanded')} </p>
                                           }
                                       />

                                   </div>
                               }

                />

                <ExpandableDiv title={t('experienceTitle')}
                               orientation="center"
                               defaultContent={
                                   <></>
                               }
                               expandedContent={
                                   <>
                                       <div className="experience-item mt-4">
                                           <div className="flex justify-between items-baseline">
                                               <h3 className="text-xl font-bold">{t('woodworking.title')}</h3>
                                               <p className="text-sm text-gray-400">{t('woodworking.dates')}</p>
                                           </div>
                                           <h4 className="text-lg font-semibold italic">{t('woodworking.company')}</h4>
                                           <p className="mt-2">
                                               {t('woodworking.description')}
                                           </p>
                                       </div>

                                       <div className="experience-item mt-6">
                                           <div className="flex justify-between items-baseline">
                                               <h3 className="text-xl font-bold">{t('internship.title')}</h3>
                                               <p className="text-sm text-gray-400">{t('internship.dates')}</p>
                                           </div>
                                           <h4 className="text-lg font-semibold italic">{t('internship.company')}</h4>
                                           <p className="mt-2">
                                               {t('internship.description')}
                                           </p>
                                       </div>
                                   </>
                               }
                />

                <ExpandableDiv title={t('projectsTitle')}
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
                                               <>
                                                   <p className="text-center mb-3"> {t('cvWebsiteProjectDefault')} </p>
                                                   <div className="text-center">
                                                       {t('cvWebsiteProjectDescription.part1')}
                                                       <a href="https://vite.dev" target="_blank" className="hover:bg-gradient-to-br hover:from-viteStart hover:from-45% hover:via-viteMiddle hover:via-50% hover:to-viteEnd hover:to-80% hover:text-transparent hover:bg-clip-text font-bold text-lg rounded-md px-1">{t('cvWebsiteProjectDescription.highlightVite')}</a>
                                                       {t('cvWebsiteProjectDescription.part2')}
                                                       <a href="https://react.dev" target="_blank" className="hover:text-react font-bold text-lg rounded-md px-1">{t('cvWebsiteProjectDescription.highlightReact')}</a>
                                                       {t('cvWebsiteProjectDescription.part3')}
                                                       <a href="https://www.typescriptlang.org" target="_blank"  className="hover:text-typescript font-bold text-lg rounded-md px-1">{t('cvWebsiteProjectDescription.highlightTypescript')}</a>
                                                       {t('cvWebsiteProjectDescription.part4')}
                                                       <a href="https://tailwindcss.com" target="_blank" className="hover:text-tailwind font-bold text-lg rounded-md px-1">{t('cvWebsiteProjectDescription.highlightTailwindCSS')}</a>
                                                       {t('cvWebsiteProjectDescription.part5')}
                                                       <a href="https://motion.dev" target="_blank" className="hover:text-framerMotion font-bold text-lg rounded-md px-1">{t('cvWebsiteProjectDescription.highlightFramerMotion')}</a>
                                                       {t('cvWebsiteProjectDescription.part6')}
                                                       <a href="https://vercel.com/" target="_blank" className="hover:text-black/90 font-bold text-lg rounded-md px-1">{t('cvWebsiteProjectDescription.highlightVercel')}</a>
                                                       {t('cvWebsiteProjectDescription.part7')}
                                                       <a  href="https://www.mongodb.com" target="_blank" className="hover:text-mongoDB font-bold text-lg rounded-md px-1">{t('cvWebsiteProjectDescription.highlightMongoDB')}</a>
                                                       {t('cvWebsiteProjectDescription.part8')}
                                                       <a href="https://www.docker.com" target="_blank" className="hover:text-docker font-bold text-lg rounded-md px-1">{t('cvWebsiteProjectDescription.highlightDocker')}</a>
                                                       {t('cvWebsiteProjectDescription.part9')}
                                                       <a href="https://www.digitalocean.com" target="_blank" className="hover:text-digitalOcean font-bold text-lg rounded-md px-1">{t('cvWebsiteProjectDescription.highlightDigitalOcean')}</a>
                                                       {t('cvWebsiteProjectDescription.part10')}
                                                   </div>
                                               </>
                                           }
                                           expandedContent={
                                               <div className="w-full">

                                                   <ExpandableDiv
                                                       title={t('cvWebsiteMessageBoxTitle')}
                                                       orientation="center"
                                                       defaultContent={
                                                           <p className="text-center"> {t('cvWebsiteMessageBoxDefault')} </p>
                                                       }
                                                       expandedContent={
                                                           <div className="w-full">
                                                               <p className="text-center mb-4">
                                                                   {t('cvWebsiteMessageBoxDescription.para1_part1')}
                                                                   <strong>{t('cvWebsiteMessageBoxDescription.highlight_dotnet')}</strong>
                                                                   {t('cvWebsiteMessageBoxDescription.para1_part2')}
                                                                   <strong>{t('cvWebsiteMessageBoxDescription.highlight_mongo1')}</strong>
                                                                   {t('cvWebsiteMessageBoxDescription.para1_part3')}
                                                                   <strong>{t('cvWebsiteMessageBoxDescription.highlight_mongo2')}</strong>
                                                                   {t('cvWebsiteMessageBoxDescription.para1_part4')}
                                                               </p>

                                                               <p className="text-center mb-4">
                                                                   {t('cvWebsiteMessageBoxDescription.para2_part1')}
                                                                   <strong>{t('cvWebsiteMessageBoxDescription.highlight_sql')}</strong>
                                                                   {t('cvWebsiteMessageBoxDescription.para2_part2')}
                                                                   <strong>{t('cvWebsiteMessageBoxDescription.highlight_nosql')}</strong>
                                                                   {t('cvWebsiteMessageBoxDescription.para2_part3')}
                                                                   <strong>{t('cvWebsiteMessageBoxDescription.highlight_mongo3')}</strong>
                                                                   {t('cvWebsiteMessageBoxDescription.para2_part4')}
                                                                   <strong>{t('cvWebsiteMessageBoxDescription.highlight_doc_model')}</strong>
                                                                   {t('cvWebsiteMessageBoxDescription.para2_part5')}
                                                                   <strong>{t('cvWebsiteMessageBoxDescription.highlight_scaling')}</strong>
                                                                   {t('cvWebsiteMessageBoxDescription.para2_part6')}
                                                               </p>

                                                               <p className="text-center mb-4">
                                                                   {t('cvWebsiteMessageBoxDescription.para3_part1')}
                                                                   <strong>{t('cvWebsiteMessageBoxDescription.highlight_storage')}</strong>
                                                                   {t('cvWebsiteMessageBoxDescription.para3_part2')}
                                                                   <strong>{t('cvWebsiteMessageBoxDescription.highlight_chatid1')}</strong>
                                                                   {t('cvWebsiteMessageBoxDescription.para3_part3')}
                                                                   <strong>{t('cvWebsiteMessageBoxDescription.highlight_chatid2')}</strong>
                                                                   {t('cvWebsiteMessageBoxDescription.para3_part4')}
                                                                   <strong>{t('cvWebsiteMessageBoxDescription.highlight_lazy')}</strong>
                                                                   {t('cvWebsiteMessageBoxDescription.para3_part5')}
                                                               </p>

                                                               <p className="text-center mb-4">
                                                                   {t('cvWebsiteMessageBoxDescription.para4_part1')}
                                                                   <strong>{t('cvWebsiteMessageBoxDescription.highlight_mongo4')}</strong>
                                                                   {t('cvWebsiteMessageBoxDescription.para4_part2')}
                                                                   <strong>{t('cvWebsiteMessageBoxDescription.highlight_chatid3')}</strong>
                                                                   {t('cvWebsiteMessageBoxDescription.para4_part3')}
                                                               </p>

                                                               <p className="text-center">
                                                                   {t('cvWebsiteMessageBoxDescription.para5_part1')}
                                                                   <strong>{t('cvWebsiteMessageBoxDescription.highlight_admin')}</strong>
                                                                   {t('cvWebsiteMessageBoxDescription.para5_part2')}
                                                               </p>
                                                           </div>
                                                       }
                                                   />
                                                   <ExpandableDiv
                                                       title={t('cvWebsiteFrontendTitle')}
                                                       orientation="center"
                                                       defaultContent={
                                                           <p className="text-center"> {t('cvWebsiteFrontendDefault')} </p>
                                                       }
                                                       expandedContent={
                                                           <p className="text-center"> {t('cvWebsiteFrontendExpanded')} </p>
                                                       }
                                                   />
                                               </div>
                                           }
                                       />

                                       <ExpandableDiv
                                           title={t('ttWebsiteProjectTitle')}
                                           orientation="center"
                                           image={ttwebsite}
                                           imageLocation="top"
                                           preloadOnHover={()=> preload(ttwebsite, {as: "image"})}
                                           defaultContent={
                                               <p className="text-center">{t('ttWebsiteProjectDefault')}</p>
                                           }
                                           expandedContent={
                                               <div className="w-full mt-4 space-y-2">

                                                   {/* Performance Accordion (no links, simple p tag) */}
                                                   <ExpandableDiv
                                                       title={t('ttWebsiteProjectExpanded.performance.title')}
                                                       orientation="center"
                                                       defaultContent={<p>{t('ttWebsiteProjectExpanded.performance.default')}</p>}
                                                       expandedContent={<p className="text-center">{t('ttWebsiteProjectExpanded.performance.expanded.part1')}</p>}
                                                   />

                                                   {/* Interactivity Accordion (with styled links) */}
                                                   <ExpandableDiv
                                                       title={t('ttWebsiteProjectExpanded.interactive.title')}
                                                       orientation="center"
                                                       defaultContent={<p>{t('ttWebsiteProjectExpanded.interactive.default')}</p>}
                                                       expandedContent={
                                                           <div className="text-center">
                                                               {t('ttWebsiteProjectExpanded.interactive.expanded.part1')}
                                                               <a href="https://react.dev" target="_blank" className="hover:text-react font-bold text-lg rounded-md px-1">{t('ttWebsiteProjectExpanded.interactive.expanded.highlightReact')}</a>
                                                               {t('ttWebsiteProjectExpanded.interactive.expanded.part2')}
                                                               <a href="https://www.typescriptlang.org" target="_blank" className="hover:text-typescript font-bold text-lg rounded-md px-1">{t('ttWebsiteProjectExpanded.interactive.expanded.highlightTypescript')}</a>
                                                               {t('ttWebsiteProjectExpanded.interactive.expanded.part3')}
                                                               <a href="https://motion.dev" target="_blank" className="hover:text-framerMotion font-bold text-lg rounded-md px-1">{t('ttWebsiteProjectExpanded.interactive.expanded.highlightFramerMotion')}</a>
                                                               {t('ttWebsiteProjectExpanded.interactive.expanded.part4')}
                                                           </div>
                                                       }
                                                   />

                                                   {/* Stack Accordion (with styled links) */}
                                                   <ExpandableDiv
                                                       title={t('ttWebsiteProjectExpanded.stack.title')}
                                                       orientation="center"
                                                       defaultContent={<p>{t('ttWebsiteProjectExpanded.stack.default')}</p>}
                                                       expandedContent={
                                                           <div className="text-center">
                                                               {t('ttWebsiteProjectExpanded.stack.expanded.part1')}
                                                               <a href="https://vite.dev" target="_blank" className="bg-gradient-to-br from-viteStart from-45% via-viteMiddle via-50% to-viteEnd to-80% text-transparent bg-clip-text font-bold text-lg rounded-md px-1">{t('ttWebsiteProjectExpanded.stack.expanded.highlightVite')}</a>
                                                               {t('ttWebsiteProjectExpanded.stack.expanded.part2')}
                                                               <a href="https://tailwindcss.com" target="_blank" className="text-tailwind font-bold text-lg rounded-md px-1">{t('ttWebsiteProjectExpanded.stack.expanded.highlightTailwindCSS')}</a>
                                                               {t('ttWebsiteProjectExpanded.stack.expanded.part3')}
                                                           </div>
                                                       }
                                                   />

                                                   {/* Design Accordion (no links, simple p tag) */}
                                                   <ExpandableDiv
                                                       title={t('ttWebsiteProjectExpanded.design.title')}
                                                       orientation="center"
                                                       defaultContent={<p>{t('ttWebsiteProjectExpanded.design.default')}</p>}
                                                       expandedContent={<p className="text-center">{t('ttWebsiteProjectExpanded.design.expanded.part1')}</p>}
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