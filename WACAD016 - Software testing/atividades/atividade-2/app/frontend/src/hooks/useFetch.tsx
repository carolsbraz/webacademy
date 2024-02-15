import { useEffect, useState } from "react";

export default function useFetch<T>(fetchFunction: () => Promise<T>) {
  const [data, SetData] = useState<T>();
  const [loading, SetLoading] = useState<boolean>();
  const [error, SetError] = useState<string>("");

  useEffect(() => {
    async function FetchData() {
      try {
        SetLoading(true);
        const res = await fetchFunction();
        SetData(res);
      } catch (error) {
        SetError((error as Error).message);
      } finally {
        SetLoading(false);
      }
    }

    FetchData();
  }, [fetchFunction]);

  return { data, loading, error, SetData };
}
