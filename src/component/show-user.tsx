import { useState, Suspense } from "react";
import { useDebounce } from "use-debounce";
import { ErrorBoundary } from "react-error-boundary";
import { useGitHubUser } from "../hook/useGetGithubUser";
import Loading from "./loading";
import GitHubUserCard from "./github-user-card";
import ErrorFallback from "./errpr";

const ShowUser = () => {
  const [username, setUsername] = useState("");
  const [debouncedUsername] = useDebounce(username, 500);
  const { user, loading, error } = useGitHubUser(debouncedUsername);

  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col gap-6 bg-gray-100 p-6">
      <div className="w-full flex flex-col items-center gap-5">
        <input
          className="p-3 border border-gray-400 rounded-full w-1/3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          type="text"
          value={username}
          placeholder="🔍 Enter a GitHub username"
          onChange={(e) => setUsername(e.target.value)}
        />
        {!user && !loading && !error && (
          <p className="text-2xl font-semibold text-gray-700 text-center">
            See any GitHub user's profile and stats
          </p>
        )}
      </div>

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<Loading />}>
          {loading && <Loading />}
          {error && <p className="text-red-500">{error}</p>}
          {!loading && user && <GitHubUserCard user={user} />}
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default ShowUser;
