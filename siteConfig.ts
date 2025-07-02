// This file is never changed by teaching-dev.
// Use it to override or extend your app configuration.

import { SiteConfigProvider } from '@tdev/siteConfig/siteConfig';
import {
    accountSwitcher,
    loginProfileButton,
    personalSpaceOverlay,
    requestTarget,
    taskStateOverview
} from './src/siteConfig/navbarItems';
import { DevComponentGalleryNavbarItem, DevDocsNavbarItem } from './navbarItems';

const GIT_COMMIT_SHA = process.env.GITHUB_SHA || Math.random().toString(36).substring(7);

/*
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
*/

const getSiteConfig: SiteConfigProvider = () => {
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
        onBrokenLinks: 'warn'
    };
};

export default getSiteConfig;
