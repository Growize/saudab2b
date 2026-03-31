"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { client, urlFor } from "@/lib/sanity";
import { 
  ChevronRight, 
  MessageCircle, 
  Maximize2, 
  CheckCircle2, 
  Ruler 
} from "lucide-react";

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const [product, setProduct] = useState<any>(null);
  const [mainImage, setMainImage] = useState<string>("");
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentUrl, setCurrentUrl] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      // 1. Resolve the slug from params
      const resolvedParams = await params;
      const slug = resolvedParams.slug;

      // 2. Fetch the specific product from Sanity
      const query = `*[_type == "product" && slug.current == $slug][0]{
        name,
        description,
        "images": images[].asset->url,
        fabric,
        color,
        highlights,
        embroidery,
        included
      }`;

      const data = await client.fetch(query, { slug });
      
      if (data) {
        setProduct(data);
        if (data.images && data.images.length > 0) {
          setMainImage(data.images[0]);
        }
      }
      setLoading(false);
    }

    fetchData();
    
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, [params]);

  if (loading) return <div className="min-h-screen flex items-center justify-center text-[10px] uppercase tracking-[0.5em]">Loading Atelier...</div>;
  if (!product) return <div className="min-h-screen flex items-center justify-center">Product not found</div>;

  // Dynamic WhatsApp Link Generation
  const whatsappNumber = "971544802041";
  const whatsappMessage = encodeURIComponent(
    `Hello SAUDA, I am interested in wholesale details for:\n\n*Product:* ${product.name}\n*Link:* ${currentUrl}`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setMousePos({ x, y });
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-16 selection:bg-[#C5A059] selection:text-white">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-10">
        
        {/* --- BREADCRUMBS --- */}
        <nav className="flex items-center gap-3 text-[9px] uppercase tracking-[0.4em] text-gray-400 mb-6 font-bold">
          <Link href="/" className="hover:text-[#C5A059] transition-colors">Home</Link>
          <ChevronRight className="w-2.5 h-2.5" />
          <Link href="/collections" className="hover:text-[#C5A059] transition-colors">Collections</Link>
          <ChevronRight className="w-2.5 h-2.5" />
          <span className="text-black uppercase">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-start">
          
          {/* --- LEFT: IMAGE GALLERY --- */}
          <div className="space-y-4">
            <div 
              className="relative w-full h-[450px] md:h-[550px] bg-[#FDFDFD] overflow-hidden cursor-zoom-in border border-gray-100 group shadow-sm flex items-center justify-center"
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
              onMouseMove={handleMouseMove}
            >
              {mainImage && (
                <Image 
                  src={mainImage} 
                  alt={product.name} 
                  fill 
                  className={`transition-transform duration-200 ${isZoomed ? 'scale-[2.2] object-cover' : 'scale-100 object-contain p-4'}`}
                  style={isZoomed ? { transformOrigin: `${mousePos.x}% ${mousePos.y}%` } : {}}
                  unoptimized
                  priority
                />
              )}
              {!isZoomed && (
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4 text-black" />
                </div>
              )}
            </div>

            <div className="grid grid-cols-5 gap-2">
              {product.images?.map((img: string, i: number) => (
                <button 
                  key={i} 
                  onClick={() => setMainImage(img)}
                  className={`relative h-16 md:h-20 border transition-all overflow-hidden ${mainImage === img ? 'border-[#C5A059] ring-1 ring-[#C5A059]' : 'border-transparent opacity-50 hover:opacity-100'}`}
                >
                  <Image src={img} alt={`Thumb ${i}`} fill className="object-contain p-1" unoptimized />
                </button>
              ))}
            </div>
          </div>

          {/* --- RIGHT: PRODUCT DETAILS --- */}
          <div className="space-y-6">
            <header className="space-y-2">
              <span className="text-[#C5A059] text-[9px] uppercase tracking-[0.5em] font-bold block">Exclusive Atelier Edition</span>
              <h1 className="text-2xl md:text-3xl font-serif leading-tight text-black">
                {product.name}
              </h1>
            </header>

            <p className="text-gray-500 text-[13px] leading-relaxed max-w-lg">
              {product.description}
            </p>

            <div className="grid grid-cols-2 gap-4 py-4 border-y border-gray-50">
              {product.highlights?.map((item: any, i: number) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <p className="text-[11px] text-gray-500">
                    <strong className="text-black uppercase tracking-tighter block">{item.title}</strong> 
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Ruler className="w-4 h-4 text-[#C5A059]" />
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-black">Sizes Available</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {["XS", "S", "M", "L", "XL", "XXL", "3XL"].map((size) => (
                  <div key={size} className="w-9 h-9 flex items-center justify-center border border-black bg-black text-white text-[9px] font-bold">
                    {size}
                  </div>
                ))}
              </div>
              <p className="text-[9px] text-gray-400 italic">Tailored for a modest, loose-fitting silhouette.</p>
            </div>

            <div className="pt-2">
              <table className="w-full text-[10px] border-collapse">
                <tbody className="text-gray-500 divide-y divide-gray-50">
                  <tr><td className="py-2 font-bold text-black uppercase">Color</td><td className="py-2 text-right uppercase">{product.color}</td></tr>
                  <tr><td className="py-2 font-bold text-black uppercase">Material</td><td className="py-2 text-right uppercase">{product.fabric}</td></tr>
                  <tr><td className="py-2 font-bold text-black uppercase">Embroidery</td><td className="py-2 text-right uppercase">{product.embroidery}</td></tr>
                  <tr><td className="py-2 font-bold text-black uppercase">Included</td><td className="py-2 text-right uppercase">{product.included}</td></tr>
                </tbody>
              </table>
            </div>

            <Link 
              href={whatsappUrl} 
              target="_blank"
              className="flex items-center justify-center gap-3 w-full py-4 bg-black text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#C5A059] transition-all duration-500 shadow-lg active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              Inquire via WhatsApp B2B
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}