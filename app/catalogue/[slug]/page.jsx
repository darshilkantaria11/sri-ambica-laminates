"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const HTMLFlipBook = dynamic(() => import("react-pageflip"), { ssr: false });

export default function CataloguePage() {
  const { slug } = useParams();
  const [pages, setPages] = useState([]);

  useEffect(() => {
    let pdfjs;

    async function loadPdf() {
      // ✅ browser-only import (no bundling)
      pdfjs = await import("pdfjs-dist/webpack");

      pdfjs.GlobalWorkerOptions.workerSrc =
        "https://unpkg.com/pdfjs-dist@4.0.379/build/pdf.worker.min.js";

      const pdfUrl = `/pdf/${slug}.pdf`;
      const pdf = await pdfjs.getDocument(pdfUrl).promise;

      const images = [];

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: 1.5 });

        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        await page.render({ canvasContext: ctx, viewport }).promise;
        images.push(canvas.toDataURL("image/png"));
      }

      setPages(images);
    }

    loadPdf();
  }, [slug]);

  return (
    <div className="min-h-screen bg-black flex justify-center items-center">
      {pages.length > 0 && (
        <HTMLFlipBook width={500} height={700}>
          {pages.map((src, i) => (
            <div key={i} className="bg-white">
              <img src={src} className="w-full h-full object-contain" />
            </div>
          ))}
        </HTMLFlipBook>
      )}
    </div>
  );
}
