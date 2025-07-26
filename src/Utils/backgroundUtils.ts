// A palette of colors for different times of day
export const timePalettes = {
    light: {
        // sunrise: 5am-8am
        dawn:    { primary: '252 211 77', via: '249 115 22',  secondary: '135 206 235' }, // yellow -> orange -> skyblue
        // day: 8am-5pm
        day:     { primary: '56 189 248', via: '118 169 255', secondary: '224 231 255' }, // skyblue -> periwinkle -> lavender
        // sunset: 5pm-8pm
        dusk:    { primary: '251 146 60', via: '239 68 68',   secondary: '96 78 130' },   // orange -> red -> purple
        // night: 8pm-5am
        night:   { primary: '30 58 138',  via: '23 37 84',    secondary: '17 24 39' },    // darkblue -> deeper blue -> gray-900
    },
    dark: {
        dawn:    { primary: '17, 24, 39',   via: '43, 28, 51',    secondary: '59, 17, 59'},     // gray-blue -> dark muted purple -> deep purple
        day:     { primary: '6, 12, 26',  via: '12, 25, 51',  secondary: '32, 51, 87' },
        dusk:    { primary: '6, 12, 26',  via: '43, 28, 51',  secondary: '51, 12, 25' },  // navy -> MUTED DARK PURPLE -> deep red
        night:   { primary: '0, 0, 0',    via: '5, 8, 18',   secondary: '12, 25, 51' },     // black -> almost-black-blue -> deep navy
    }
};

/**
 * Gets the correct, non-blended color palette based on theme and hour.
 * @param {'light' | 'dark'} theme - The current theme.
 * @param {number} hour - The current hour (0-23).
 * @returns The chosen color palette { primary, via, secondary }.
 */
export const getColorsForThemeAndTime = (theme: "dark" | "light", hour: number) => {
    const palette = timePalettes[theme];
    if (hour >= 5 && hour < 8) return palette.dawn;
    if (hour >= 8 && hour < 17) return palette.day;
    if (hour >= 17 && hour < 21) return palette.dusk;
    return palette.night; // Default for hours 22:00 to 04:59
}
//TODO get sunset info so the palette can more accurately reflect time of day