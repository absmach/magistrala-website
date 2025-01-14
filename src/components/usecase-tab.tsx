'use client'

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface UseCase {
  title: string
  description: string
  imageUrl: string
  ctaText?: string
  ctaLink?: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
}

interface UseCasesTabsProps {
  useCases: UseCase[]
}

export function UseCasesTabs({ useCases }: UseCasesTabsProps) {
  const [activeTab, setActiveTab] = useState(useCases[0]?.title || "")

  return (
    <Tabs defaultValue={activeTab} className="w-full max-w-6xl mx-auto">
      <TabsList className="w-full justify-center mb-8 h-auto flex-wrap gap-2 bg-transparent">
        {useCases.map((useCase) => (
          <TabsTrigger
            key={useCase.title}
            value={useCase.title}
            className="data-[state=active]:bg-blue-800 data-[state=active]:text-white rounded-full px-6 py-2"
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
                <h3 className="text-2xl font-bold tracking-tight">{useCase.title}</h3>
                <p className="text-muted-foreground">{useCase.description}</p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button className="bg-blue-800 hover:bg-blue-600" asChild>
                    <a href={useCase.ctaLink}>{useCase.ctaText}</a>
                  </Button>
                  {useCase.secondaryCtaText && useCase.secondaryCtaLink && (
                    <Button variant="outline" className="border-blue-800 text-blue-800 hover:bg-blue-600" asChild>
                      <a href={useCase.secondaryCtaLink}>{useCase.secondaryCtaText}</a>
                    </Button>
                  )}
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px]">
                <Image
                  src={useCase.imageUrl}
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
  )
}
