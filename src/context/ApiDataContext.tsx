"use client";
import { createContext } from "react";
import type { Blog } from "./blogdata"; // ✅ import Blog type

type ApiDataContextType = {
  data: Blog[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
};

// ✅ Initialize with default values
const ApiDataContext = createContext<ApiDataContextType>({
  data: [],
  loading: false,
  error: null,
  refetch: () => {},
});

export default ApiDataContext;
