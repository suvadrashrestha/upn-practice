interface Props {
  user: any;
}

const GitHubUserCard = ({ user }: Props) => {
  return (
    <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-6 flex flex-col gap-5">
      <div className="flex flex-col items-center">
        <img
          className="w-28 h-28 rounded-full border-4 border-blue-300 shadow-md"
          src={user.avatar_url}
          alt={user.name}
        />
        <h2 className="text-xl font-bold text-gray-800 mt-2">{user.name}</h2>
        <p className="text-sm text-gray-500">@{user.login}</p>
        {user.bio && (
          <p className="mt-2 text-center text-gray-600 italic max-w-sm">
            “{user.bio}”
          </p>
        )}
      </div>

      <div className="flex justify-around text-sm text-gray-700">
        <div className="text-center">
          <p className="font-semibold text-lg">{user.followers}</p>
          <p>Followers</p>
        </div>
        <div className="text-center">
          <p className="font-semibold text-lg">{user.following}</p>
          <p>Following</p>
        </div>
        <div className="text-center">
          <p className="font-semibold text-lg">{user.public_repos}</p>
          <p>Repositories</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 text-gray-700 text-sm">
        <p>
          🗓️ Joined on{" "}
          <span className="font-medium">
            {new Date(user.created_at).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </p>
        {user.blog && (
          <p>
            🔗 Blog:{" "}
            <a
              href={user.blog}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              {user.blog}
            </a>
          </p>
        )}
        <p>
          🔗 GitHub Profile:{" "}
          <a
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            {user.html_url}
          </a>
        </p>
      </div>
    </div>
  );
};

export default GitHubUserCard;
