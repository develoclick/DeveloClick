"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, MonitorSmartphone, Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/componentes/i18n/LanguageProvider";

const slideImages = [
  "/imagenes/equipo-corporativo.jpg",
  "/imagenes/moderno.jpg",
  "/imagenes/transformacion.png",
  "/imagenes/diseño.png",
  "/imagenes/automatizacion.jpg",
];

export default function Carrusel() {
  const { t } = useLanguage();
  const slides = t.carrusel.slides.map((slide, index) => ({ ...slide, image: slideImages[index] }));
  const [activeSlide, setActiveSlide] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const changeSlide = (direction: number) => {
    setActiveSlide((current) => {
      const next = current + direction;

      if (next < 0) {
        return slides.length - 1;
      }

      if (next >= slides.length) {
        return 0;
      }

      return next;
    });
  };

  const slide = slides[activeSlide];

  return (
    <section
      className="bg-white py-20 dark:bg-[#07182d] lg:py-28"
      aria-label={t.carrusel.eyebrow}
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

          <div className="max-w-xl">
            <p className="text-xs font-bold tracking-[0.18em] text-[#E63946] uppercase">
              {t.carrusel.eyebrow}
            </p>

            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#0A192F] dark:text-white sm:text-4xl">
              {t.carrusel.title}
            </h2>
          </div>


          <div className="flex gap-3">

            <button
              type="button"
              onClick={() => changeSlide(-1)}
              aria-label={t.carrusel.prev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 transition hover:bg-slate-100 dark:border-white/20 dark:text-white"
            >
              <ArrowLeft size={18} />
            </button>


            <button
              type="button"
              onClick={() => changeSlide(1)}
              aria-label={t.carrusel.next}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0A192F] text-white transition hover:bg-[#E63946]"
            >
              <ArrowRight size={18} />
            </button>

          </div>

        </div>



        <div className="overflow-hidden rounded-3xl bg-[#0A192F] shadow-2xl">

          <div
            key={activeSlide}
            className="grid min-h-[460px] animate-in fade-in duration-500 lg:grid-cols-2"
          >

            <div className="relative order-2 min-h-[280px] lg:order-1">

              <Image
                key={activeSlide}
                src={slide.image}
                alt={slide.imageAlt}
                fill
                sizes="(max-width:1024px)100vw,50vw"
                className="object-cover transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/40 to-transparent" />

            </div>



            <div className="order-1 flex flex-col justify-between p-8 text-white sm:p-12 lg:order-2 lg:p-14">


              <div>

                <div className="flex items-center gap-2 text-xs font-display font-bold tracking-widest text-[#FF2738] sm:text-sm">

                  <MonitorSmartphone size={16} />

                  {slide.category.toUpperCase()}

                </div>


                <h3 className="mt-6 max-w-lg text-3xl font-display font-bold leading-tight sm:text-4xl">

                  {slide.title}

                </h3>


                <p className="mt-5 max-w-lg leading-7 text-slate-300">

                  {slide.description}

                </p>


              </div>



              <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">


                <div className="flex gap-2">

                  {slides.map((item, index) => (

                    <button
                      type="button"

                      key={item.title}
                      onClick={() => setActiveSlide(index)}
                      className={
                        index === activeSlide
                          ?
                          "h-2 w-8 rounded-full bg-[#E63946] transition-all"
                          :
                          "h-2 w-2 rounded-full bg-white/30 hover:bg-white/60"
                      }
                    />

                  ))}

                </div>


                <Quote
                  size={28}
                  className="text-white/20"
                />

              </div>


            </div>


          </div>

        </div>


      </div>
    </section>
  );
}
