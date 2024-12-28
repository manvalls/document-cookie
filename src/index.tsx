"use client";

import { useEffect } from "react";

export type DocumentCookieProps = {
  name: string;
  value?: string;
  expires?: Date;
  maxAge?: number;
  partitioned?: boolean;
  path?: string;
  sameSite?: "strict" | "lax" | "none";
  domain?: string;
  secure?: boolean;
};

const DocumentCookie = ({
  name,
  value,
  expires,
  maxAge,
  partitioned,
  path,
  sameSite,
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

    if (maxAge) {
      cookie += `; max-age=${maxAge}`;
    }

    if (partitioned) {
      cookie += "; partitioned";
    }

    if (path) {
      cookie += `; path=${path}`;
    }

    if (sameSite) {
      cookie += `; samesite=${sameSite}`;
    }

    if (domain) {
      cookie += `; domain=${domain}`;
    }

    if (secure) {
      cookie += "; secure";
    }

    document.cookie = cookie;
  }, [
    name,
    value,
    expires,
    maxAge,
    partitioned,
    path,
    sameSite,
    domain,
    secure,
  ]);

  return null;
};

export default DocumentCookie;
