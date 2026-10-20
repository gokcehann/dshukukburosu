"use client";

import React, { useState, useEffect } from 'react';

interface EmailLinkProps {
  className?: string;
  title?: string;
  showIcon?: boolean;
}

export const EmailLink: React.FC<EmailLinkProps> = ({
  className = "",
  title = "D&S Hukuk Bürosu ile E-posta Üzerinden İletişime Geçin",
}) => {
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    // Obfuscated email reconstruction on client side to prevent spambot scraping
    const user = "dshukukburosu";
    const domain = "outlook.com";
    setEmail(`${user}@${domain}`);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const user = "dshukukburosu";
    const domain = "outlook.com";
    window.location.href = `mailto:${user}@${domain}`;
  };

  return (
    <a
      href={email ? `mailto:${email}` : "#"}
      onClick={handleClick}
      title={title}
      className={className}
      rel="nofollow"
    >
      {email || "dshukukburosu [at] outlook.com"}
    </a>
  );
};
