import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: 'Trino Documentation',
  },
  links: [
    {
      text: 'Trino Website',
      url: 'https://trino.io',
      active: 'nested-url',
    },
  ],
};
