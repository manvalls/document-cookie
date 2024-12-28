"use client";

import { useEffect } from "react";

export type DocumentCookieProps = {
  name: string;
  value?: string;
  expires?: Date;
  path?: string;
  domain?: string;
  secure?: boolean;
};

const DocumentCookie = ({
  name,
  value,
  expires,
  path,
  domain,
  secure,
}: DocumentCookieProps) => {
  useEffect(() => {
    const escapedName = encodeURIComponent(name);
    const escapedValue = encodeURIComponent(value || "");

    let cookie = `${escapedName}=${escapedValue}`;

    if (expires) {
      cookie += `; expires=${expires.toUTCString()}`;
    }

    if (path) {
      cookie += `; path=${path}`;
    }

    if (domain) {
      cookie += `; domain=${domain}`;
    }

    if (secure) {
      cookie += "; secure";
    }

    document.cookie = cookie;
    return () => {
      document.cookie = `${escapedName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    };
  }, [name, value, expires, path, domain, secure]);

  return null;
};

export default DocumentCookie;