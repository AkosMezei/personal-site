import ExpandableDiv from "../ExpandableDiv.tsx";
import {Trans, useTranslation} from "react-i18next";
import {styledComponents} from "../../HomePage.tsx";


export const WorkInProgressProjectsSection = () => {

    const { t } = useTranslation();

    return (
        <ExpandableDiv
            title={t('projects.workInProgress.title')}
            orientation="center"
            shouldBlur={true}
            defaultContent={<></>}
            expandedContent={()=>(
                <div>
                    {/* GAnki */}
                    <ExpandableDiv
                        title={t('projects.workInProgress.GAnki.title')}
                        orientation="center"
                        defaultContent={<p>{t('projects.workInProgress.GAnki.status')}</p>}
                        expandedContent={() => (
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
                                    expandedContent={() => (
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
                                                                <li><Trans i18nKey='projects.workInProgress.GAnki.deepDive.coreFeatures.bullet_2.bullet_1' components={styledComponents} /></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <h1><strong>{t('projects.workInProgress.GAnki.deepDive.coreFeatures.bullet_3.title')}</strong></h1>
                                                            <ul>
                                                                <li><Trans i18nKey='projects.workInProgress.GAnki.deepDive.coreFeatures.bullet_3.bullet_1' components={styledComponents} /></li>
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
                                    )
                                    }
                                />
                            </div>
                        )
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
                                                            <h1><Trans i18nKey='projects.workInProgress.DSAShowcase.deepDive.architecture.bullet_1.title' components={styledComponents} /></h1>
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
            )
            }
        />
    );
};