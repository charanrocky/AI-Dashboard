type Props = {
  username: string;
};

const Header = ({ username }: Props) => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl p-6 sm:p-10 shadow-md">
      <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">
            Welcome to your AI Dashboard
          </h1>
          <p className="text-sm sm:text-base mt-2 opacity-90">
            Hello, <span className="font-semibold">{username}</span>! 👋
          </p>
        </div>

        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-xl font-bold">
          {username.charAt(0).toUpperCase()}
        </div>
      </div>
    </header>
  );
};

export default Header;
