import ExpandableDiv from "../ExpandableDiv.tsx";
import {Trans, useTranslation} from "react-i18next";
import {useRef} from "react";
import {styledComponents} from "../../data/Constants.tsx"
import MainPageShowcase from "/MainPageShowcase.png"
import addNewItemModal from "/addNewItemModal.png"
import feedbackPage from "/feedbackPage.png"
import {LayoutGroup, motion} from "motion/react";
import {ExpandableImage} from "../ExpandableImage.tsx";

const projectImages = [
    {src: MainPageShowcase, alt: "Image showing the main page of the Vinted Deal Tracker project."},
    {src: addNewItemModal, alt: "Image showing the \"add new item\" modal of the Vinted Deal Tracker project."},
    {src: feedbackPage, alt: "Image showing the feedback page of the Vinted Deal Tracker project."}
];

export const FeaturedProjectsSection = () => {

    const hasPreloadedProjectImages = useRef(false);

    const handleProjectImageLoad = () => {
        if (!hasPreloadedProjectImages.current) {
            projectImages.forEach(image => {
                const img = new Image()
                img.src = image.src
            })
            hasPreloadedProjectImages.current = true;
        }
    }

    const { t } = useTranslation();

    return (
        <div onMouseDown={handleProjectImageLoad}>
            <ExpandableDiv
                title={t('projects.featured.title')}
                orientation="center"
                shouldBlur={true}
                defaultContent={
                    <></>
                }
                expandedContent={() => (
                    <div>
                        <ExpandableDiv
                            title={t('projects.featured.portfolio.title')}
                            orientation="center"
                            defaultContent={
                                <div>
                                    <p> {t('projects.featured.portfolio.description')} </p>
                                    <a target="_blank" href="https://github.com/AkosMezei/personal-site"> {t('projects.featured.portfolio.repoLinkText')} </a>
                                </div>
                            }
                            expandedContent={() => (
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
                                        expandedContent={() => (
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
                                        )
                                        }
                                    />
                                </div>
                            )
                            }
                        />

                        <ExpandableDiv
                            title={t('projects.featured.dealTracker.title')}
                            orientation="center"
                            defaultContent={<p>{t('projects.featured.dealTracker.status')}</p>}
                            expandedContent={
                                <div>
                                    {/* Overview */}
                                    <LayoutGroup>
                                        <motion.div layout transition={{duration: 0.5, type: "spring"}}>
                                            <ExpandableImage src={projectImages[0].src} alt={projectImages[0].src}/>
                                            <h1><strong>{t('projects.featured.dealTracker.overview.title')}</strong></h1>
                                            <p><Trans i18nKey="projects.featured.dealTracker.overview.what" components={styledComponents} /></p>
                                            <p><Trans i18nKey="projects.featured.dealTracker.overview.why" components={styledComponents} /></p>
                                            <p><Trans i18nKey="projects.featured.dealTracker.overview.how" components={styledComponents} /></p>
                                        </motion.div>
                                    </LayoutGroup>

                                    {/* Technical Deep Dive */}
                                    <ExpandableDiv
                                        title={t('projects.featured.dealTracker.deepDive.title')}
                                        orientation="center"
                                        defaultContent={<></>}
                                        expandedContent={
                                            <motion.div layout>
                                                <ExpandableDiv
                                                    title={t('projects.featured.dealTracker.deepDive.coreFeatures.title')}
                                                    orientation="center"
                                                    defaultContent={<p>{t('projects.featured.dealTracker.deepDive.coreFeatures.description')}</p>}
                                                    expandedContent={
                                                        <ul>
                                                            <li><Trans i18nKey="projects.featured.dealTracker.deepDive.coreFeatures.bullet_1" components={styledComponents} /></li>
                                                            <ExpandableImage src={projectImages[1].src} alt={projectImages[1].src}/>
                                                            <li><Trans i18nKey="projects.featured.dealTracker.deepDive.coreFeatures.bullet_2" components={styledComponents} /></li>
                                                            <li>
                                                                <h1><strong>{t('projects.featured.dealTracker.deepDive.coreFeatures.bullet_3.title')}</strong></h1>
                                                                <ul>
                                                                    <li><Trans i18nKey="projects.featured.dealTracker.deepDive.coreFeatures.bullet_3.bullet_1" components={styledComponents} /></li>
                                                                    <li>{t('projects.featured.dealTracker.deepDive.coreFeatures.bullet_3.bullet_2')}</li>
                                                                </ul>
                                                                <ExpandableImage src={projectImages[2].src} alt={projectImages[2].src}/>
                                                            </li>
                                                        </ul>
                                                    }
                                                />
                                                <ExpandableDiv
                                                    title={t('projects.featured.dealTracker.deepDive.architecture.title')}
                                                    orientation="center"
                                                    defaultContent={<Trans i18nKey="projects.featured.dealTracker.deepDive.architecture.description" components={styledComponents} />}
                                                    expandedContent={
                                                        <ul>
                                                            <li><Trans i18nKey="projects.featured.dealTracker.deepDive.architecture.bullet_1" components={styledComponents} /></li>
                                                            <li><Trans i18nKey="projects.featured.dealTracker.deepDive.architecture.bullet_2" components={styledComponents} /></li>
                                                            <li><Trans i18nKey="projects.featured.dealTracker.deepDive.architecture.bullet_3" components={styledComponents} /></li>
                                                            <li><Trans i18nKey="projects.featured.dealTracker.deepDive.architecture.bullet_4" components={styledComponents} /></li>
                                                        </ul>
                                                    }
                                                />
                                                <ExpandableDiv
                                                    title={t('projects.featured.dealTracker.deepDive.riskAnalysis.title')}
                                                    orientation="center"
                                                    defaultContent={<p>{t('projects.featured.dealTracker.deepDive.riskAnalysis.description')}</p>}
                                                    expandedContent={
                                                        <ul>
                                                            <li>
                                                                <h1><strong>{t('projects.featured.dealTracker.deepDive.riskAnalysis.bullet_1.title')}</strong></h1>
                                                                <ul>
                                                                    <li><Trans i18nKey="projects.featured.dealTracker.deepDive.riskAnalysis.bullet_1.bullet_1" components={styledComponents} /></li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <h1><strong>{t('projects.featured.dealTracker.deepDive.riskAnalysis.bullet_2.title')}</strong></h1>
                                                                <ul>
                                                                    <li><Trans i18nKey="projects.featured.dealTracker.deepDive.riskAnalysis.bullet_2.bullet_1" components={styledComponents} /></li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <h1><strong>{t('projects.featured.dealTracker.deepDive.riskAnalysis.bullet_3.title')}</strong></h1>
                                                                <ul>
                                                                    <li><Trans i18nKey="projects.featured.dealTracker.deepDive.riskAnalysis.bullet_3.bullet_1" components={styledComponents} /></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    }
                                                />
                                                <ExpandableDiv
                                                    title={t('projects.featured.dealTracker.deepDive.availability.title')}
                                                    orientation="center"
                                                    defaultContent={<p>{t('projects.featured.dealTracker.deepDive.availability.description')}</p>}
                                                    expandedContent={
                                                        <div>
                                                            <p>{t('projects.featured.dealTracker.deepDive.availability.expanded_p1')}</p>
                                                            <p>{t('projects.featured.dealTracker.deepDive.availability.expanded_p2')}</p>
                                                            <p>{t('projects.featured.dealTracker.deepDive.availability.expanded_p3')}</p>
                                                        </div>
                                                    }
                                                />
                                                <ExpandableDiv
                                                    title={t('projects.featured.dealTracker.deepDive.devPlan.title')}
                                                    orientation="center"
                                                    defaultContent={<p>{t('projects.featured.dealTracker.deepDive.devPlan.description')}</p>}
                                                    expandedContent={
                                                        <ul>
                                                            <li><Trans i18nKey="projects.featured.dealTracker.deepDive.devPlan.bullet_1" components={styledComponents} /></li>
                                                            <li><Trans i18nKey="projects.featured.dealTracker.deepDive.devPlan.bullet_2" components={styledComponents} /></li>
                                                            <li><Trans i18nKey="projects.featured.dealTracker.deepDive.devPlan.bullet_3" components={styledComponents} /></li>
                                                            <li><Trans i18nKey="projects.featured.dealTracker.deepDive.devPlan.bullet_4" components={styledComponents} /></li>
                                                            <li><Trans i18nKey="projects.featured.dealTracker.deepDive.devPlan.bullet_5" components={styledComponents} /></li>
                                                        </ul>
                                                    }
                                                />
                                            </motion.div>
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
                )
                }
            />
        </div>
    );
};