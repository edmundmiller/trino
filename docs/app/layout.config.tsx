import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <Image
          src="/trino-logo.svg"
          alt="Trino"
          width={32}
          height={48}
          style={{ height: '32px', width: 'auto' }}
        />
        <span>Trino Documentation</span>
      </div>
    ),
  },
  links: [
    {
      text: 'Trino Website',
      url: 'https://trino.io',
      active: 'nested-url',
    },
  ],
};
