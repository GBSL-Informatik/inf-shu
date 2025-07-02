// This file is never changed by teaching-dev.
// Use it to override or extend your app configuration.

import { VersionOptions } from '@docusaurus/plugin-content-docs';
import { SiteConfig, SiteConfigProvider } from '@tdev/siteConfig/siteConfig';
import { ScriptsBuilder } from './framework/builder/scriptsBuilder';
import { DevComponentGalleryNavbarItem, DevDocsNavbarItem } from './navbarItems';
import {
    accountSwitcher,
    loginProfileButton,
    personalSpaceOverlay,
    requestTarget,
    taskStateOverview
} from './src/siteConfig/navbarItems';

const GIT_COMMIT_SHA = process.env.GITHUB_SHA || Math.random().toString(36).substring(7);

const getSiteConfig: SiteConfigProvider = () => {
    const SCRIPTS_CONFIG_FILE = 'scriptsConfig.yaml';

    const versions: { [key: string]: VersionOptions } = {
        current: {
            badge: false,
            banner: 'none',
            path: 'docs'
        }
    };

    ScriptsBuilder.readScriptNames(SCRIPTS_CONFIG_FILE).forEach((scriptName: string) => {
        versions[scriptName] = {
            badge: false,
            banner: 'none'
        };
    });

    if (!process.env.NO_SYNC) {
        ScriptsBuilder.buildOnce(SCRIPTS_CONFIG_FILE);
    }

    return {
        title: 'Informatik P. Schuppli',
        tagline: 'Informatik',
        url: 'https://inf-shu.gbsl.website',
        siteStyles: ['website/css/custom.scss'],
        navbarItems: [
            taskStateOverview,
            DevDocsNavbarItem,
            DevComponentGalleryNavbarItem,
            accountSwitcher,
            requestTarget,
            personalSpaceOverlay,
            loginProfileButton
        ].filter((item) => !!item),
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Tools',
                    items: [
                        {
                            label: 'Thonny',
                            to: 'https://thonny.org/'
                        },
                        {
                            label: 'VS Code',
                            to: 'https://code.visualstudio.com/'
                        },
                        {
                            label: 'Python',
                            to: 'https://www.python.org/'
                        }
                    ]
                },
                {
                    title: 'Meine Schule',
                    items: [
                        {
                            label: 'Passwort Zurücksetzen',
                            to: 'https://password.edubern.ch/'
                        },
                        {
                            label: 'Office 365',
                            to: 'https://office.com'
                        },
                        {
                            label: 'GBSL',
                            to: 'https://gbsl.ch'
                        },
                        {
                            label: 'Intranet',
                            to: 'https://erzbe.sharepoint.com/sites/GYMB/gbs'
                        },
                        {
                            label: 'Stundenplan',
                            to: 'https://mese.webuntis.com/WebUntis/?school=gym_Biel-Bienne#/basic/main'
                        },
                        {
                            label: '🧑🏽‍💻 Anleitungen BYOD / ICT',
                            to: 'https://ict.gbsl.website/'
                        },
                        {
                            label: '⛑️ IT-Support für Schüler*innen',
                            to: 'mailto:it-help-for-students@bernedu.ch'
                        }
                    ]
                }
            ],
            copyright: `<a class="footer__link-item" href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de">
                          <img src="/img/by-nc-sa.eu.svg" alt="CC-BY-NC-SA">© ${new Date().getFullYear()} Pascal Schuppli</a> | Ausnahmen sind gekennzeichnet.<br/>
                          <a class="badge badge--primary" href="https://github.com/jesuisse/inf-shu/commits/${GIT_COMMIT_SHA}">
                            ᚶ ${GIT_COMMIT_SHA.substring(0, 7)}</a>`
        },
        onBrokenLinks: 'warn',
        docs: {
            lastVersion: 'current',
            routeBasePath: '',
            versions: versions
        },
        personalSpaceDocRootId: 'c6753ed8-2d3f-41f4-9b3d-6568a197ab76',
        gitHub: {
            orgName: 'jesuisse',
            projectName: 'inf-shu'
        }
    } as SiteConfig;
};

export default getSiteConfig;
