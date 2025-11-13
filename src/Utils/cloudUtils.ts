import cloud_large_1 from '../assets/clouds/cloud_large_1.png';
import cloud_large_2 from '../assets/clouds/cloud_large_2.png';
import cloud_large_3 from '../assets/clouds/cloud_large_3.png';
import cloud_large_4 from '../assets/clouds/cloud_large_4.png';
import cloud_long_1 from '../assets/clouds/cloud_long_1.png';
import cloud_medium_1 from '../assets/clouds/cloud_medium_1.png';
import cloud_medium_2 from '../assets/clouds/cloud_medium_2.png';
import cloud_small_1 from '../assets/clouds/cloud_small_1.png';
import cloud_small_2 from '../assets/clouds/cloud_small_2.png';
import cloud_small_3 from '../assets/clouds/cloud_small_3.png';
import cloud_small_4 from '../assets/clouds/cloud_small_4.png';

//hardcoded image width so they can be spawned just off screen
const imageWidths: Record<string, number> = {
    [cloud_large_1]: 690,
    [cloud_large_2]: 452,
    [cloud_large_3]: 704,
    [cloud_large_4]: 725,
    [cloud_long_1]: 463,
    [cloud_medium_1]: 270,
    [cloud_medium_2]: 318,
    [cloud_small_1]: 97,
    [cloud_small_2]: 111,
    [cloud_small_3]: 133,
    [cloud_small_4]: 209,
}

export type CloudSizeType = "small" | "medium" | "large" | "long";
export type CloudSpeedType = "slow" | "medium" | "fast";
export type CloudType = "normal" | "stormy";

/**
 * Represents the data structure for cloud generation.
 *
 * @interface GeneratedCloudData
 *
 * @property {string} src - A string representing the source file for the cloud's visual asset.
 * @property {string} top - A string determining the top positioning of the cloud, in vh.
 * @property {number} duration - Duration in seconds for how long the cloud should move from one end of the screen to another.
 * @property {number} opacity - A numeric value representing the cloud's transparency level, ranging from 0 (completely transparent) to 1 (completely opaque).
 * @property {number} width - A numeric value specifying the width of the cloud in pixels.
 * @property {number} id - A unique numeric identifier for the cloud instance, used for distinguishing between multiple instances.
 */
export interface GeneratedCloudData {
    src: string;
    top: string;
    duration: number;
    opacity: number;
    width: number;
    id: number;
}

interface CloudSizeConfig {
    imagePool: string[];
    duration: {slow: [min: number, max: number], medium: [min: number, max: number], fast: [min: number, max: number]};
    opacity: {normal: [min: number, max: number], stormy: [min: number, max: number]};
}

const smallClouds = [cloud_small_1, cloud_small_2, cloud_small_3, cloud_small_4];
const mediumClouds = [cloud_medium_1, cloud_medium_2];
const largeClouds = [cloud_large_1, cloud_large_2, cloud_large_3, cloud_large_4];
const longClouds = [cloud_long_1];

function pickRandomCloud(clouds: string[]){
    return clouds[Math.floor(Math.random() * clouds.length)];
}

function randomBetween(min: number, max: number){
    return min + Math.random() * (max - min);
}
export const cloudConfig: Record<CloudSizeType, CloudSizeConfig> = {
    small: {
        imagePool: smallClouds,
        duration: {slow: [200, 250], medium: [160, 220], fast: [60, 130]},
        opacity: {normal: [0.6, 0.8], stormy: [0.9, 1.0]}
    },
    medium: {
        imagePool: mediumClouds,
        duration: {slow: [200, 250], medium: [160, 220], fast: [60, 130]},
        opacity: {normal: [0.6, 0.8], stormy: [0.9, 1.0]}
    },
    large: {
        imagePool: largeClouds,
        duration: {slow: [200, 250], medium: [160, 220], fast: [60, 130]},
        opacity: {normal: [0.6, 0.8], stormy: [0.9, 1.0]}
    },
    long: {
        imagePool: longClouds,
        duration: {slow: [200, 250], medium: [160, 220], fast: [60, 130]},
        opacity: {normal: [0.6, 0.8], stormy: [0.9, 1.0]}
    }
}
/**
 * Generates a single cloud with given props.
 * @param {CloudSizeType} cloudSize - Sets the size of the cloud
 * @param {CloudSpeedType} cloudSpeed - Sets the speed at which the cloud moves
 * @param {CloudType} cloudType - Sets the type of cloud
 */
export function generateCloud(cloudSize: CloudSizeType, cloudSpeed: CloudSpeedType, cloudType: CloudType): GeneratedCloudData{
    const config = cloudConfig[cloudSize]; //creates a config based on cloud size
    const source = pickRandomCloud(config.imagePool); //picks a random cloud from the image pool that is based on cloud size established in the config

    const [minDuration, maxDuration] = config.duration[cloudSpeed];
    const duration = randomBetween(minDuration, maxDuration);

    const [minOpacity, maxOpacity] = config.opacity[cloudType];
    const opacity = randomBetween(minOpacity, maxOpacity);

    const top = `${randomBetween(5, 50)}vh`;

    const width = imageWidths[source]; //get the width of the image to spawn the cloud at the very edge of the screen

    const id = Date.now() + Math.random() * 10000; //generate a pseudo random id.

    return {
        src: source,
        top,
        duration,
        opacity,
        width,
        id,
    }
}