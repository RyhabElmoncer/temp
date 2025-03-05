/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [

            {
                id: 'dashboards.project',
                title: 'dashboards',
                type: 'basic',
                icon: 'heroicons_outline:clipboard-document-check',
                link: '/dashboards/project',
            },
            {
                id: 'apps.contacts',
                title: 'User Managment',
                type: 'basic',
                icon: 'heroicons_outline:user-group',
                link: '/apps/user',
            },
            {
                        id: 'apps.ecommerce.inventory',
                        title: 'Project Managment',
                        type: 'basic',
                         icon: 'heroicons_outline:shopping-cart',

                        link: '/apps/project',
            },

           {
                id: 'apps.tasks',
                title: 'Tasks Managment',
                type: 'basic',
                icon: 'heroicons_outline:check-circle',
                link: '/apps/tasks',
            },
            {
                id: 'apps.scrumboard',
                title: 'Scrumboard',
                type: 'basic',
                icon: 'heroicons_outline:view-columns',
                link: '/apps/scrumboard',
            },

          {
                        id: 'pages.profile',
                        title: 'Profile',
                        type: 'basic',
                        icon: 'heroicons_outline:user-circle',
                        link: '/pages/profile',
                    },
                      {
                                id: 'apps.mailbox',
                                title: 'Mailbox',
                                type: 'basic',
                                icon: 'heroicons_outline:envelope',
                                link: '/apps/mailbox',
                                badge: {
                                    title: '27',
                                    classes: 'px-2 bg-pink-600 text-white rounded-full',
                                },
                            },
                        {
        id: 'pages',
        title: '',
        subtitle: '',
        type: 'group',
        icon: 'heroicons_outline:document',
        children: [

            {
                id: 'pages.authentication',
                title: 'Authentication',
                type: 'collapsable',
                icon: 'heroicons_outline:lock-closed',
                children: [
 {
                                id: 'pages.authentication.sign-in.modern',
                                title: 'Sign in',
                                type: 'basic',
                                link: '/pages/authentication/sign-in/modern',
                            },

                            {
                                id: 'pages.authentication.sign-up.modern',
                                title: 'Sign up',
                                type: 'basic',
                                link: '/pages/authentication/sign-up/modern',
                            },
  {
                                id: 'pages.authentication.sign-out.modern',
                                title: 'Sign out',
                                type: 'basic',
                                link: '/pages/authentication/sign-out/modern',
                            },
 {
                                id: 'pages.authentication.forgot-password.modern',
                                title: 'Forgot password',
                                type: 'basic',
                                link: '/pages/authentication/forgot-password/modern',
                            },

                            {
                                id: 'pages.authentication.reset-password.modern',
                                title: 'Reset password',
                                type: 'basic',
                                link: '/pages/authentication/reset-password/modern',
                            },
                            {
                                id: 'pages.authentication.confirmation-required.modern',
                                title: 'Confirmation required',
                                type: 'basic',
                                link: '/pages/authentication/confirmation-required/modern',
                            },

                ],
            },

        ],
    },





];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id: 'dashboards',
        title: 'Dashboards',
        tooltip: 'Dashboards',
        type: 'aside',
        icon: 'heroicons_outline:home',
        children: [],
    },
    {
        id: 'apps',
        title: 'Apps',
        tooltip: 'Apps',
        type: 'aside',
        icon: 'heroicons_outline:squares-2x2',
        children: [],
    },
    {
        id: 'pages',
        title: 'Pages',
        tooltip: 'Pages',
        type: 'aside',
        icon: 'heroicons_outline:document-duplicate',
        children: [], //
    },
    {
        id: 'user-interface',
        title: 'UI',
        tooltip: 'UI',
        type: 'aside',
        icon: 'heroicons_outline:rectangle-stack',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'navigation-features',
        title: 'Navigation',
        tooltip: 'Navigation',
        type: 'aside',
        icon: 'heroicons_outline:bars-3',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id: 'dashboards',
        title: 'DASHBOARDS',
        type: 'group',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'apps',
        title: 'APPS',
        type: 'group',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'others',
        title: 'OTHERS',
        type: 'group',
    },
    {
        id: 'pages',
        title: 'Pages',
        type: 'aside',
        icon: 'heroicons_outline:document-duplicate',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'user-interface',
        title: 'User Interface',
        type: 'aside',
        icon: 'heroicons_outline:rectangle-stack',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'navigation-features',
        title: 'Navigation Features',
        type: 'aside',
        icon: 'heroicons_outline:bars-3',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id: 'dashboards',
        title: 'Dashboards',
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'apps',
        title: 'Apps',
        type: 'group',
        icon: 'heroicons_outline:squares-2x2',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'pages',
        title: 'Pages',
        type: 'group',
        icon: 'heroicons_outline:document-duplicate',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'user-interface',
        title: 'UI',
        type: 'group',
        icon: 'heroicons_outline:rectangle-stack',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'navigation-features',
        title: 'Misc',
        type: 'group',
        icon: 'heroicons_outline:bars-3',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
];
