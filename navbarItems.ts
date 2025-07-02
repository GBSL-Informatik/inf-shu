import { NavbarItem } from '@docusaurus/theme-common';

const isDev = process.env.NODE_ENV === 'development';

export const TaskStateOverviewNavItem: NavbarItem = {
    type: 'custom-taskStateOverview',
    position: 'left'
};

export const AccountSwitcherNavItem: NavbarItem = {
    type: 'custom-accountSwitcher',
    position: 'right'
};

export const RequestTargetNavItem: NavbarItem = {
    type: 'custom-requestTarget',
    position: 'right'
};

export const LoginProfileNavItem: NavbarItem = {
    type: 'custom-loginProfileButton',
    position: 'right'
};

export const DevDocsNavbarItem: NavbarItem | null = isDev
    ? {
          to: 'docs/material',
          label: '📄 Material',
          position: 'right'
      }
    : null;

export const DevComponentGalleryNavbarItem: NavbarItem | null = isDev
    ? {
          to: 'docs/tdev/mdi',
          label: '🔧 Tdev',
          position: 'right'
      }
    : null;
