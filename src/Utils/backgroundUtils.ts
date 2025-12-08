import * as SunCalc from 'suncalc';

/**
 * Represents a geographical location defined by latitude and longitude coordinates.
 *
 * Properties:
 * - `lat`: The latitude of the location, represented as a number. Positive values indicate locations in the northern hemisphere, and negative values indicate locations in the southern hemisphere.
 * - `lon`: The longitude of the location, represented as a number. Positive values indicate locations east of the Prime Meridian, and negative values indicate locations west of the Prime Meridian.
 */
type Location = {
    lat: number;
    lon: number;
}

type CachedLocation = {
    location: Location;
    timestamp: number;
}

const twilightPeriodLength = 40 //length of the twilight period in minutes in either side, for example, if Sunrise is at 7:30, twilight is 6:50 to 8:10.

// A palette of colors for different times of day

// yellow -> orange -> skyblue
const light_primaryDawnColor = '252 211 77';
const light_dawnTransitionColor = '249 115 22';
const light_secondaryDawnColor = '135 206 235';

// skyblue -> periwinkle -> lavender
const light_primaryDayColor = '56 189 248';
const light_dayTransitionColor = '118 169 255';
const light_secondaryDayColor = '224 231 255';

// orange -> red -> purple
const light_secondaryDuskColor = '96 78 130';
const light_duskTransitionColor = '239 68 68';
const light_primaryDuskColor = '251 146 60';

// darkblue -> deeper blue -> gray-900
const light_primaryNightColor = '30 58 138';
const light_nightTransitionColor = '23 37 84';
const light_secondaryNightColor = '17 24 39';

// gray-blue -> dark muted purple -> deep purple
const dark_primaryDawnColor = '17, 24, 39';
const dark_dawnTransitionColor = '43, 28, 51';
const dark_secondaryDawnColor = '59, 17, 59';


const dark_primaryDayColor = '6, 12, 26';
const dark_dayTransitionColor = '12, 25, 51';
const dark_secondaryDayColor = '32, 51, 87';

// navy -> MUTED DARK PURPLE -> deep red
const dark_primaryDuskColor = '6, 12, 26';
const dark_duskTransitionColor = '43, 28, 51';
const dark_secondaryDuskColor = '51, 12, 25';

// black -> almost-black-blue -> deep navy
const dark_primaryNightColor = '0, 0, 0';
const dark_nightTransitionColor = '5, 8, 18';
const dark_secondaryNightColor = '12, 25, 51';

export const timePalettes = {
    light: {
        // sunrise: 5am-8am
        dawn:    { primary: light_primaryDawnColor, via: light_dawnTransitionColor, secondary: light_secondaryDawnColor },
        // day: 8am-5pm
        day:     { primary: light_primaryDayColor, via: light_dayTransitionColor, secondary: light_secondaryDayColor },
        // sunset: 5pm-8pm
        dusk:    { primary: light_primaryDuskColor, via: light_duskTransitionColor, secondary: light_secondaryDuskColor },
        // night: 8pm-5am
        night:   { primary: light_primaryNightColor,  via: light_nightTransitionColor, secondary: light_secondaryNightColor },
    },
    dark: {
        // sunrise: 5am-8am
        dawn:    { primary: dark_primaryDawnColor, via: dark_dawnTransitionColor,    secondary: dark_secondaryDawnColor},
        // day: 8am-5pm
        day:     { primary: dark_primaryDayColor,  via: dark_dayTransitionColor,  secondary: dark_secondaryDayColor },
        // sunset: 5pm-8pm
        dusk:    { primary: dark_primaryDuskColor,  via: dark_duskTransitionColor,  secondary: dark_secondaryDuskColor },
        // night: 8pm-5am
        night:   { primary: dark_primaryNightColor,    via: dark_nightTransitionColor,   secondary: dark_secondaryNightColor },
    }
};

/**
 * Gets the correct, non-blended color palette based on theme and hour.
 * @param {'light' | 'dark'} theme - The current theme.
 * @param {number} hour - The current hour (0-23).
 * @returns The chosen color palette { primary, via, secondary }.
 */
export const getColorsForThemeAndTime = (theme: "dark" | "light", date: Date | number) => {
    const palette = timePalettes[theme];
    if (typeof date === 'number') { //if date is passed as a number, it means it's manually overridden - TODO refactor the whole manual handler to use dates so can simply pass a date
        const hour = date;
        if (hour >= 5 && hour < 8) return palette.dawn;
        if (hour >= 8 && hour < 17) return palette.day;
        if (hour >= 17 && hour < 21) return palette.dusk;
        return palette.night; // Default for hours 22:00 to 04:59
    }
    const cachedLocationString = localStorage.getItem("userLocation");
    if (cachedLocationString) {
        const cachedLocation : CachedLocation = JSON.parse(cachedLocationString);
        const location = cachedLocation.location
        const times = SunCalc.getTimes(new Date(),location.lat, location.lon)
        const sunriseMinutesFromMidnight = times.sunrise.getMinutes() + (times.sunrise.getHours() * 60);
        const sunsetMinutesFromMidnight = times.sunset.getMinutes() + (times.sunset.getHours() * 60);
        const currentMinutesFromMidnight = date.getMinutes() + (date.getHours() * 60);

        if (currentMinutesFromMidnight >= sunriseMinutesFromMidnight - twilightPeriodLength &&
        currentMinutesFromMidnight <= sunriseMinutesFromMidnight + twilightPeriodLength) {
            return palette.dawn;
        }

        if (currentMinutesFromMidnight >= sunriseMinutesFromMidnight + twilightPeriodLength &&
        currentMinutesFromMidnight <= sunsetMinutesFromMidnight - twilightPeriodLength) {
            return palette.day;
        }

        if (currentMinutesFromMidnight >= sunsetMinutesFromMidnight - twilightPeriodLength &&
        currentMinutesFromMidnight <= sunsetMinutesFromMidnight + twilightPeriodLength) {
            return palette.dusk;
        }
        return palette.night;
    }

    return palette.night; //as a fallback, return night palette
}
