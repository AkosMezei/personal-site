import { useBackgroundContext } from './BackgroundContext.tsx';
import { Moon, Sun } from 'lucide-react';

function Header() {
    const { theme, toggleTheme } = useBackgroundContext();

    return (
        <header className={`fixed top-0 w-full z-50 backdrop-blur-sm ${
            theme === 'dark' ? 'bg-gray-900/90' : 'bg-white/50'
        }`}>
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className={`text-xl font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                    Your Logo
                </h1>
                <button
                    onClick={toggleTheme}
                    className={`rounded-lg p-2 hover:bg-opacity-20 transition-colors ${
                        theme === 'dark'
                            ? 'text-white hover:bg-white'
                            : 'text-gray-900 hover:bg-gray-900'
                    }`}
                    aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                >
                    {theme === 'dark' ? (
                        <Sun className="w-5 h-5" />
                    ) : (
                        <Moon className="w-5 h-5" />
                    )}
                </button>
            </div>
        </header>
    );
}

export default Header;