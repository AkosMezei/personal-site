export type WeatherCategory = 'clear' | 'cloudy' | 'stormy';

const STORMY_CODES = [
    1063, 1066, 1069, 1072, 1087, 1114, 1117, 1150, 1153, 1168, 1171,
    1180, 1183, 1186, 1189, 1192, 1195, 1198, 1201, 1204, 1207, 1210,
    1213, 1216, 1219, 1222, 1225, 1237, 1240, 1243, 1246, 1249, 1252,
    1255, 1258, 1261, 1264, 1273, 1276, 1279, 1282,
];

const CLOUDY_CODES = [1003, 1006, 1009, 1030, 1135, 1147];

/**
 * Takes a weather condition code from WeatherAPI and maps it to one
 * of our three simplified categories.
 * @param code The numerical weather condition code.
 * @returns The corresponding WeatherCategory ('clear', 'cloudy', or 'stormy').
 */

export function mapWeatherCodeToCategory(code: number): WeatherCategory {
    if (STORMY_CODES.includes(code)) {
        return 'stormy';
    }
    if (CLOUDY_CODES.includes(code)) {
        return 'cloudy';
    }
    // If it's not stormy or cloudy, it must be clear (code 1000).
    // This also acts as a safe default.
    return 'clear';
}