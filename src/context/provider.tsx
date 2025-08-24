"use client";
import { useState, useEffect } from "react";
import ApiDataContext from "./ApiDataContext";
import type { Blog, BlogResponse } from "@/context/blogdata";
import { toSlug } from "./slug";

export function ApiDataProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://www.elitebcar.com/blog/airtable-get");
      const json: BlogResponse = await res.json();
const formatted = (json.data || []).map((item) => ({
  ...item,
  slug: toSlug(item.fields.Name),
}));


      setData(formatted);
      setError(null);
    } catch (err) {
      setError("Failed to fetch blogs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ApiDataContext.Provider value={{ data, loading, error, refetch: fetchData }}>
      {children}
    </ApiDataContext.Provider>
  );
}
