"use client";

import { Upload } from "lucide-react";
import type React from "react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

type ImageUploadProps = {
  onImageUpload: (imageUrl: string) => void;
};

export function ImageUpload({ onImageUpload }: ImageUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onImageUpload(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex justify-center">
      <input
        accept="image/*"
        className="hidden"
        onChange={handleImageUpload}
        ref={fileInputRef}
        type="file"
      />
      <Button
        className="bg-purple-600 text-white hover:bg-purple-700"
        onClick={() => fileInputRef.current?.click()}
      >
        <Upload className="mr-2 h-4 w-4" />
        Upload Image
      </Button>
    </div>
  );
}
