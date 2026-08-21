import { getPermalink } from './utils/permalinks';
import { BRAND } from './brand';

export const headerData = {
  links: [
    { text: 'How it works', href: getPermalink('/#how-it-works') },
    { text: 'What you earn', href: getPermalink('/#earnings') },
    { text: 'Rebates', href: getPermalink('/#rebates') },
    { text: 'FAQ', href: getPermalink('/#faq') },
  ],
  actions: [{ variant: 'primary' as const, text: 'Get an estimate', href: getPermalink('/#estimate') }],
};

export const footerData = {
  links: [
    {
      title: 'Owners',
      links: [
        { text: 'How it works', href: getPermalink('/#how-it-works') },
        { text: 'What you earn', href: getPermalink('/#earnings') },
        { text: 'Rebates', href: getPermalink('/#rebates') },
        { text: 'FAQ', href: getPermalink('/#faq') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'For drivers', href: getPermalink('/for-drivers') },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
        { text: 'Terms of Service', href: getPermalink('/terms') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  // Handles are unclaimed. An icon pointing at an empty profile is worse than no
  // icon, so nothing is linked until BRAND.social has real URLs.
  socialLinks: [
    ...(BRAND.social.instagram
      ? [{ ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: BRAND.social.instagram }]
      : []),
    ...(BRAND.social.linkedin
      ? [{ ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: BRAND.social.linkedin }]
      : []),
  ],
  footNote: `
    <span class="text-muted">&copy; ${new Date().getFullYear()} Arclight, Chicago IL. Electrical work performed under Illinois electrical contractor license ${
      BRAND.licenseNumber
        ? `#${BRAND.licenseNumber}`
        : `<span class="inline-flex items-center rounded-md border border-amber-500/60 bg-amber-50 px-1.5 py-0.5 text-[0.85em] font-semibold uppercase tracking-wide text-amber-800">TBD: license #</span>`
    }.</span>
  `,
};
