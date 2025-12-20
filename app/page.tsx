"use client";

import Image from "next/image";
import { useState } from "react";
import { HolographicCard } from "@/components/holographic-card";
import { ImageUpload } from "@/components/image-upload";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UploadPlaceholder } from "@/components/upload-placeholder";
import { DEFAULT_HOLOGRAPHIC_CONFIG } from "@/constants/holographic";

export default function HolographicCardApp() {
  const [image, setImage] = useState<string | null>(null);
  const [cardTitle, setCardTitle] = useState("Profile Card");

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <Image
        alt=""
        className="hidden"
        height={1}
        src="/placeholder-37azn.png"
        width={1}
      />
      <Image
        alt=""
        className="hidden"
        height={1}
        src="/rainbow-holographic-mesh.png"
        width={1}
      />

      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="mb-2 font-bold text-4xl text-white">
            Holographic Card Creator
          </h1>
          <p className="text-slate-300">
            Upload your profile image and create stunning holographic effects
          </p>
        </div>

        <Card className="mx-auto max-w-2xl border-slate-700 bg-slate-800/50">
          <CardHeader>
            <CardTitle className="text-center text-white">
              {cardTitle}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <ImageUpload onImageUpload={setImage} />

            <div className="space-y-2">
              <label
                className="block font-medium text-slate-300 text-sm"
                htmlFor="card-title"
              >
                Card Title
              </label>
              <input
                className="w-full rounded-lg border border-slate-600 bg-slate-700/50 px-4 py-2 text-white placeholder:text-slate-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500"
                id="card-title"
                onChange={(e) => setCardTitle(e.target.value)}
                placeholder="Enter your card title..."
                type="text"
                value={cardTitle}
              />
            </div>

            <div className="flex min-h-[500px] items-center justify-center">
              {image ? (
                <HolographicCard
                  config={DEFAULT_HOLOGRAPHIC_CONFIG}
                  image={image}
                  title={cardTitle}
                />
              ) : (
                <UploadPlaceholder />
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
