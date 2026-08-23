"use client";

import { useState } from "react";
import { Check, Link2, MessageCircle } from "lucide-react";

function LinkedinGlyph({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.68H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

export default function ShareButtons({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    {
      label: "WhatsApp",
      icon: MessageCircle,
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    },
    {
      label: "LinkedIn",
      icon: LinkedinGlyph,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span className="mr-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
        Compartir
      </span>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Compartir en ${link.label}`}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-white/15 text-slate-500 dark:text-slate-400 transition hover:border-brand-red-600 hover:text-brand-red-600 dark:hover:text-brand-red-400"
        >
          <link.icon size={16} />
        </a>
      ))}
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copiar enlace"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-white/15 text-slate-500 dark:text-slate-400 transition hover:border-brand-red-600 hover:text-brand-red-600 dark:hover:text-brand-red-400"
      >
        {copied ? (
          <Check size={16} className="text-emerald-500" />
        ) : (
          <Link2 size={16} />
        )}
      </button>
    </div>
  );
}
