import { Route } from '@angular/router';
import { initialDataResolver } from 'app/app.resolvers';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';

export const appRoutes: Route[] = [

    {path: '', pathMatch : 'full', redirectTo: 'dashboards/project'},
   {
        path: 'signed-in-redirect',
        pathMatch : 'full',
        redirectTo: 'dashboards/project'
    },

    // Auth routes for guests
    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'confirmation-required', loadChildren: () => import('app/modules/auth/confirmation-required/confirmation-required.routes')},
            {path: 'forgot-password', loadChildren: () => import('app/modules/auth/forgot-password/forgot-password.routes')},
            {path: 'reset-password', loadChildren: () => import('app/modules/auth/reset-password/reset-password.routes')},
            {path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.routes')},
            {path: 'sign-up', loadChildren: () => import('app/modules/auth/sign-up/sign-up.routes')}
        ]
    },

    // Auth routes for authenticated users
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.routes')},
            {path: 'unlock-session', loadChildren: () => import('app/modules/auth/unlock-session/unlock-session.routes')}
        ]
    },

    // Landing routes
    {
        path: '',
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'home', loadChildren: () => import('app/modules/landing/home/home.routes')},
        ]
    },

    // Admin routes
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        resolve: {
            initialData: initialDataResolver
        },
        children: [

            // Dashboards
            {path: 'dashboards', children: [
                {path: 'project', loadChildren: () => import('app/modules/admin/dashboards/project/project.routes')},
            ]},

            // Apps
            {path: 'apps', children: [
                {path: 'user', loadChildren: () => import('app/modules/admin/apps/contacts/contacts.routes')},
                {path: 'project', loadChildren: () => import('app/modules/admin/apps/ecommerce/ecommerce.routes')},
                {path: 'mailbox', loadChildren: () => import('app/modules/admin/apps/mailbox/mailbox.routes')},
                {path: 'scrumboard', loadChildren: () => import('app/modules/admin/apps/scrumboard/scrumboard.routes')},
                {path: 'tasks', loadChildren: () => import('app/modules/admin/apps/tasks/tasks.routes')},
            ]},

            // Pages
            {path: 'pages', children: [


                // Authentication
                {path: 'authentication', loadChildren: () => import('app/modules/admin/pages/authentication/authentication.routes')},

                // Coming Soon
                {path: 'coming-soon', loadChildren: () => import('app/modules/admin/pages/coming-soon/coming-soon.routes')},

                // Error
                {path: 'error', children: [
                    {path: '404', loadChildren: () => import('app/modules/admin/pages/error/error-404/error-404.routes')},
                    {path: '500', loadChildren: () => import('app/modules/admin/pages/error/error-500/error-500.routes')}
                ]},



                // Maintenance
                {path: 'maintenance', loadChildren: () => import('app/modules/admin/pages/maintenance/maintenance.routes')},

                // Pricing
                {path: 'pricing', children: [
                    {path: 'modern', loadChildren: () => import('app/modules/admin/pages/pricing/modern/modern.routes')},

                ]},

                // Profile
                {path: 'profile', loadChildren: () => import('app/modules/admin/pages/profile/profile.routes')},

                // Settings
                {path: 'settings', loadChildren: () => import('app/modules/admin/pages/settings/settings.routes')},
            ]},

            // User Interface
            {path: 'ui', children: [

                // Material Components
                {path: 'material-components', loadChildren: () => import('app/modules/admin/ui/material-components/material-components.routes')},

                // Fuse Components
                {path: 'fuse-components', loadChildren: () => import('app/modules/admin/ui/fuse-components/fuse-components.routes')},

                // Other Components
                {path: 'other-components', loadChildren: () => import('app/modules/admin/ui/other-components/other-components.routes')},

                // TailwindCSS
                {path: 'tailwindcss', loadChildren: () => import('app/modules/admin/ui/tailwindcss/tailwindcss.routes')},

                // Advanced Search
                {path: 'advanced-search', loadChildren: () => import('app/modules/admin/ui/advanced-search/advanced-search.routes')},

                // Animations
                {path: 'animations', loadChildren: () => import('app/modules/admin/ui/animations/animations.routes')},

                 // Cards
                {path: 'cards', loadChildren: () => import('app/modules/admin/ui/cards/cards.routes')},

                // Colors
                {path: 'colors', loadChildren: () => import('app/modules/admin/ui/colors/colors.routes')},

                // Confirmation Dialog
                {path: 'confirmation-dialog', loadChildren: () => import('app/modules/admin/ui/confirmation-dialog/confirmation-dialog.routes')},

                // Datatable
                {path: 'datatable', loadChildren: () => import('app/modules/admin/ui/datatable/datatable.routes')},

                // Forms
                {path: 'forms', loadChildren: () => import('app/modules/admin/ui/forms/forms.routes')},

                // Icons
                {path: 'icons', loadChildren: () => import('app/modules/admin/ui/icons/icons.routes')},

                // Page Layouts
                {path: 'page-layouts', loadChildren: () => import('app/modules/admin/ui/page-layouts/page-layouts.routes')},

                // Typography
                {path: 'typography', loadChildren: () => import('app/modules/admin/ui/typography/typography.routes')}
            ]},


            // 404 & Catch all
            {path: '404-not-found', pathMatch: 'full', loadChildren: () => import('app/modules/admin/pages/error/error-404/error-404.routes')},
            {path: '**', redirectTo: '404-not-found'}
        ]
    }
];
