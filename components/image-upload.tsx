"use client"

import type React from "react"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Upload } from "lucide-react"

interface ImageUploadProps {
  onImageUpload: (imageUrl: string) => void
}

export function ImageUpload({ onImageUpload }: ImageUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        onImageUpload(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="text-center">
      <input type="file" accept="image/*" onChange={handleImageUpload} ref={fileInputRef} className="hidden" />
      <Button
        onClick={() => fileInputRef.current?.click()}
        variant="outline"
        className="border-slate-600 hover:bg-slate-700 text-slate-900"
      >
        <Upload className="w-4 h-4 mr-2" />
        Upload Image
      </Button>
    </div>
  )
}
