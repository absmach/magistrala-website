'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useCasesSectionData } from '@/lib/constants';
import { getImageUrl } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';

interface UseCase {
  title: string;
  description: string;
  imageUrl: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

interface UseCasesTabsProps {
  useCases: UseCase[];
}

export function UseCasesTabs({ useCases }: UseCasesTabsProps) {
  const [activeTab, setActiveTab] = useState(useCases[0]?.title || '');

  return (
    <Tabs defaultValue={activeTab} className="w-full max-w-6xl mx-auto">
      <TabsList className="w-full justify-center mb-8 h-auto flex-wrap gap-2 bg-transparent">
        {useCases.map((useCase) => (
          <TabsTrigger
            key={useCase.title}
            value={useCase.title}
            className="data-[state=active]:bg-blue-800 data-[state=active]:text-white rounded-full px-6 py-2 text-lg"
          >
            {useCase.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {useCases.map((useCase) => (
        <TabsContent key={useCase.title} value={useCase.title}>
          <Card className="overflow-hidden border-none shadow-lg">
            <div className="grid md:grid-cols-2 gap-6 p-6">
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="lg:text-2xl text:xl font-bold tracking-tight">
                  {useCase.title}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {useCase.description}
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  {useCase.ctaText && useCase.ctaLink && (
                    <Button className="bg-blue-800 hover:bg-blue-600" asChild>
                      <a href={useCase.ctaLink}>{useCase.ctaText}</a>
                    </Button>
                  )}
                  {useCase.secondaryCtaText && useCase.secondaryCtaLink && (
                    <Button
                      variant="outline"
                      className="border-blue-800 text-blue-800 hover:bg-blue-600"
                      asChild
                    >
                      <a href={useCase.secondaryCtaLink}>
                        {useCase.secondaryCtaText}
                      </a>
                    </Button>
                  )}
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px]">
                <Image
                  src={getImageUrl(useCase.imageUrl)}
                  alt={useCase.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
}

export function UseCasesSection() {
  const { sectionId, title, subtitle, useCases } = useCasesSectionData;

  return (
    <section id={sectionId} className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-8">
          {title}
        </h2>
        <p className="text-xl lg:text-2xl text-gray-700 text-center mb-8">
          {subtitle}
        </p>
        <UseCasesTabs useCases={useCases} />
      </div>
    </section>
  );
}
