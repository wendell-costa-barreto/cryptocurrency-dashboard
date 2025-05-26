export default function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const { signIn, signUp } = useAuth();

  const { isSignUp, setIsSignUp } = useSignUpState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const { data, error } = isSignUp
        ? await signUp(email, password)
        : await signIn(email, password);

      if (error) throw error;

      if (isSignUp) {
        setMessage('Check your email for verification link! 📧');
      } else {
        setMessage('Welcome back!');
      }
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 w-full max-w-md border border-white/20 shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            {isSignUp ? 'Join the Club' : 'Welcome Back!'}
          </h1>
          <p className="text-gray-300">
            {isSignUp ? 'Start tracking your crypto portfolio' : 'Track your crypto gains'}
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              placeholder="••••••••"
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-transparent transition-all transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
          >
            {loading ? '⏳ Loading...' : (isSignUp ? 'Sign Up 🎯' : 'Sign In ⚡')}
          </button>
        </div>

        {message && (
          <div className={`mt-4 p-3 rounded-lg text-center text-sm ${message.includes('error') || message.includes('Error')
              ? 'bg-red-500/20 text-red-300 border border-red-500/30'
              : 'bg-green-500/20 text-green-300 border border-green-500/30'
          }`}>
            {message}
          </div>
        )}

        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
          </button>
        </div>
      </div>
    </div>
  );
}

