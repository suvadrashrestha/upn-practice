import { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";

const GITHUB_TOKEN = "Bearer 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";

export const useGitHubUser = (username: string) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUser = useCallback(async () => {
    if (!username) return;

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`, {
        headers: {
          Authorization: GITHUB_TOKEN,
        },
      });
      setUser(response.data);
    } catch (err: any) {
      setError("User not found or API error.");
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, [username]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const userMemo = useMemo(() => user, [user]);

  return { user: userMemo, loading, error };
};
