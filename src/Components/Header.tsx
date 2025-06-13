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
                </div>
                <div className="flex">
                    <label className="inline-flex items-center cursor-pointer">
                        <span className="me-3 text-sm font-medium text-gray-900 dark:text-gray-300"> Flag EN</span>
                        <input
                            type="checkbox"
                            checked={language === "HU"}
                            onChange={toggleLanguage}
                            className="sr-only peer"
                        />
                        <div
                            className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"></div>
                        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"> Flag HU</span>
                    </label>
                    <button
                        onClick={toggleTheme}
                        className={`ml-2 rounded-lg p-2 hover:bg-opacity-20 transition-colors ${
                            theme === 'dark'
                                ? 'text-white hover:bg-white'
                                : 'text-gray-900 hover:bg-gray-900'
                        }`}
                        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                    >
                        {theme === 'dark' ? (
                            <Sun className="w-5 h-5"/>
                        ) : (
                            <Moon className="w-5 h-5"/>
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;