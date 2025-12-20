import { Upload } from "lucide-react";

export function UploadPlaceholder() {
  return (
    <div className="text-center text-slate-400">
      <Upload className="mx-auto mb-4 h-16 w-16 opacity-50" />
      <p>Upload an image to see the holographic effect</p>
    </div>
  );
}
