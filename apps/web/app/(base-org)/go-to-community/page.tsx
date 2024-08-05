import { Divider } from 'apps/web/src/components/Divider/Divider';

import Hero from 'apps/web/src/components/GoToCommunity/Hero';
import BuildersMostWanted from 'apps/web/src/components/GoToCommunity/BuildersMostWanted';
import ResourceSection from 'apps/web/src/components/GoToCommunity/ResourceSection';

// import { resourceSections, ResourceSectionType } from 'apps/web/src/components/GoToCommunity/resourceSections';

export default async function GoToCommunity() {
  return (
    <div className="mt-[-96px] bg-blue-60 bg-repeat font-display text-white">
      <Hero />
      <BuildersMostWanted />
      <Divider />
      {resourceSections.map((section: ResourceSectionType) => (
        <ResourceSection key={section.title} section={section} />
      ))}
    </div>
  );
}

export type ResourceCard = {
    title: string;
    description: string;
  };

  export type ResourceSectionType = {
    title: string;
    description: string;
    cards: ResourceCard[];
  };

const resourceSections: ResourceSectionType[] = [
  {
    title: 'Resources to BUILD your project',
    description: 'Resources to make your project easier to build and easier to user',
    cards: [
      {
        title: 'Smart Wallet',
        description: 'Help users create an account in seconds without apps or extensions',
      },
      {
        title: 'Smart Wallet',
        description: 'Help users create an account in seconds without apps or extensions',
      },
      {
        title: 'Smart Wallet',
        description: 'Help users create an account in seconds without apps or extensions',
      },
      {
        title: 'Smart Wallet',
        description: 'Help users create an account in seconds without apps or extensions',
      },
    ],
  },
  {
    title: 'Resources to GROW your project',
    description: 'Resources to make your project easier to build and easier to user',
    cards: [
      {
        title: 'Smart Wallet',
        description: 'Help users create an account in seconds without apps or extensions',
      },
      {
        title: 'Something Else',
        description: 'Help users create an account in seconds without apps or extensions',
      },
      {
        title: 'A third thing',
        description: 'Help users create an account in seconds without apps or extensions',
      },
      {
        title: 'Thing #4',
        description: 'Help users create an account in seconds without apps or extensions',
      },
    ],
  },
];