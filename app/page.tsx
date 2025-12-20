"use client"

import { useState, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { HolographicCard } from "@/components/holographic-card"
import { ImageUpload } from "@/components/image-upload"
import { UploadPlaceholder } from "@/components/upload-placeholder"
import { DEFAULT_HOLOGRAPHIC_CONFIG } from "@/constants/holographic"

export default function HolographicCardApp() {
  const [image, setImage] = useState<string | null>(null)
  const [cardTitle, setCardTitle] = useState("Profile Card")
  const cardRef = useRef<HTMLDivElement>(null)
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    if (!cardRef.current || !image) return

    setIsDownloading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 500))

      const html2canvas = (await import("html2canvas")).default

      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: "#0f172a",
        scale: 2,
        logging: false,
        useCORS: true,
        allowTaint: false,
        width: cardRef.current.offsetWidth,
        height: cardRef.current.offsetHeight,
      })

      const link = document.createElement("a")
      link.download = `${cardTitle.toLowerCase().replace(/\s+/g, "-")}-holographic-card.png`
      link.href = canvas.toDataURL("image/png", 1.0)
      link.click()
    } catch (error) {
      console.error("Failed to download card:", error)
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <img src="/placeholder-37azn.png" alt="" className="hidden" />
      <img src="/rainbow-holographic-mesh.png" alt="" className="hidden" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Holographic Card Creator</h1>
          <p className="text-slate-300">Upload your profile image and create stunning holographic effects</p>
        </div>

        <Card className="bg-slate-800/50 border-slate-700 max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-white text-center">{cardTitle}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <ImageUpload onImageUpload={setImage} />

            <div className="space-y-2">
              <label htmlFor="card-title" className="text-sm font-medium text-slate-300 block">
                Card Title
              </label>
              <input
                id="card-title"
                type="text"
                value={cardTitle}
                onChange={(e) => setCardTitle(e.target.value)}
                placeholder="Enter your card title..."
                className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div ref={cardRef} className="flex items-center justify-center min-h-[500px]">
              {image ? (
                <HolographicCard
                  image={image}
                  config={DEFAULT_HOLOGRAPHIC_CONFIG}
                  title={cardTitle}
                  isDownloading={isDownloading}
                />
              ) : (
                <UploadPlaceholder />
              )}
            </div>

            {image && (
              <div className="flex justify-center">
                <Button
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                >
                  <Download className="w-4 h-4 mr-2" />
                  {isDownloading ? "Downloading..." : "Download Card"}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
