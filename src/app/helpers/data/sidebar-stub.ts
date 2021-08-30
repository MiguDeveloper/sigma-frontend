import { of } from 'rxjs';

export class SidebarItems {
  static getMenu() {
    const sidebar = {
      isSuccess: true,
      groups: [
        {
          name: 'Menu',
          order: 1,
          items: [
            {
              name: 'Dashboard',
              order: 1,
              enable: true,
              icon: 'bx bx-home-circle',
              href: '/dashboard',
              active: true,
            },
          ],
        },
        {
          name: 'APPS',
          order: 3,
          items: [
            {
              name: 'Calendar',
              order: 1,
              enable: true,
              icon: 'bx bx-calendar',
              href: '/calendar',
              active: false,
            },
            {
              name: 'Ecommerce',
              order: 2,
              enable: true,
              icon: 'bx bx-store',
              active: false,
              items: [
                {
                  name: 'Products',
                  order: 1,
                  enable: true,
                  href: '/products',
                },
                {
                  name: 'Orders',
                  order: 2,
                  icon: '',
                  href: '/orders',
                },
                {
                  name: 'Products',
                  order: 1,
                  enable: true,
                  href: '/products',
                },
                {
                  name: 'Orders',
                  order: 2,
                  icon: '',
                  href: '/orders',
                },
                {
                  name: 'Products',
                  order: 1,
                  enable: true,
                  href: '/products',
                },
                {
                  name: 'Orders',
                  order: 2,
                  icon: '',
                  href: '/orders',
                },
                {
                  name: 'Products',
                  order: 1,
                  enable: true,
                  href: '/products',
                },
                {
                  name: 'Orders',
                  order: 2,
                  icon: '',
                  href: '/orders',
                },
              ],
            },
            {
              name: 'Crypto',
              order: 1,
              enable: true,
              icon: 'bx bx-bitcoin',
              active: false,
              items: [
                {
                  name: 'Wallet',
                  order: 1,
                  enable: true,
                  href: '/dashboard',
                },
                {
                  name: 'Exchange',
                  order: 2,
                  icon: '',
                  href: '/exchange',
                },
                {
                  name: 'Wallet',
                  order: 1,
                  enable: true,
                  href: '/wallet',
                },
                {
                  name: 'Exchange',
                  order: 2,
                  icon: '',
                  href: '/exchange',
                },
                {
                  name: 'Wallet',
                  order: 1,
                  enable: true,
                  href: '/wallet',
                },
                {
                  name: 'Exchange',
                  order: 2,
                  icon: '',
                  href: '/exchange',
                },
                {
                  name: 'Wallet',
                  order: 1,
                  enable: true,
                  href: '/wallet',
                },
                {
                  name: 'Exchange',
                  order: 2,
                  icon: '',
                  href: '/exchange',
                },
                {
                  name: 'Wallet',
                  order: 1,
                  enable: true,
                  href: '/wallet',
                },
                {
                  name: 'Exchange',
                  order: 2,
                  icon: '',
                  href: '/exchange',
                },
                {
                  name: 'Wallet',
                  order: 1,
                  enable: true,
                  href: '/wallet',
                },
                {
                  name: 'Exchange',
                  order: 2,
                  icon: '',
                  href: '/exchange',
                },
              ],
            },
          ],
        },
        {
          name: 'Components',
          order: 6,
          items: [
            {
              name: 'Profile',
              order: 1,
              enable: true,
              icon: 'bx bx-user-circle',
              href: '/profile',
              active: false,
            },
            {
              name: 'UI Components',
              order: 2,
              enable: true,
              icon: 'bx bxs-user-detail',
              active: true,
              items: [
                {
                  name: 'General',
                  order: 0,
                  enable: true,
                  href: 'ui-elements/general',
                },
                {
                  name: 'User list',
                  order: 1,
                  enable: true,
                  href: '/contacts',
                },
                {
                  name: 'User grid',
                  order: 2,
                  icon: '',
                  href: '/user-grid',
                },
                {
                  name: 'User list',
                  order: 1,
                  enable: true,
                  href: '/contacts',
                },
                {
                  name: 'User grid',
                  order: 2,
                  icon: '',
                  href: '/user-grid',
                },
                {
                  name: 'User list',
                  order: 1,
                  enable: true,
                  href: '/contacts',
                },
                {
                  name: 'User grid',
                  order: 2,
                  icon: '',
                  href: '/user-grid',
                },
              ],
            },
          ],
        },
      ],
    };

    return of(sidebar);
  }
}
