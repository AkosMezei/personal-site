/**
 * @File - hook to generate an array of semi-randomized clouds based on weather type
 */

import {WeatherCategory} from "../Utils/weatherUtils.ts";
import {CloudSpeedType, CloudType, generateCloud, GeneratedCloudData} from "../Utils/cloudUtils.ts"
import {useEffect, useState} from "react";

//min inclusive max exclusive
function randomBetween(min: number, max: number){
    return Math.floor(min + Math.random() * (max - min));
}

//region Cloud helper functions

/**
 * Generates a cloud with the specified speed and size.
 *
 * @param {CloudSpeedType} speed - The speed at which the cloud will move.
 * @return {Cloud} A cloud with the provided speed and normal settings. - cloudType is currently unused, holdover from when stormy clouds had a stormy type to hue shift them to darker variants
 */

function generateSmallCloud(speed:CloudSpeedType){
    return generateCloud("small", speed, "normal")
}

function generateMediumCloud(speed:CloudSpeedType, type:CloudType = "normal"){
    return generateCloud("medium", speed, type)
}

function generateLargeCloud(speed:CloudSpeedType, type:CloudType = "normal"){
    return generateCloud("large", speed, type)
}

function generateLongCloud(speed:CloudSpeedType, type:CloudType = "normal"){
    return generateCloud("long", speed, type)
}

//endregion

/**
 * Generates and manages cloud data based on the specified weather category.
 *
 * @param {WeatherCategory} weatherCategory - The current weather category determining the type, quantity, and speed of clouds to generate.
 *                                           Possible values are "clear", "cloudy", or "stormy".
 *
 * @return {GeneratedCloudData[]} An array of generated cloud data objects based on the weather category.
 */
export function useCloudGenerator(weatherCategory:WeatherCategory) {
    const [clouds, setClouds] = useState<GeneratedCloudData[]>([])
    useEffect(() => {
        const minClearClouds = 3;
        const maxClearClouds = 6;

        const minCloudyClouds = 6;
        const maxCloudyClouds = 15;

        const minStormyClouds = 15;
        const maxStormyClouds = 25;

        switch (weatherCategory) {
            case "clear":
            {
                const totalNumberOfClouds = randomBetween(minClearClouds, maxClearClouds)
                const currentClouds = []
                while(currentClouds.length <= totalNumberOfClouds){ //generate min-max small clouds
                    currentClouds.push(generateSmallCloud("slow"))
                }
                setClouds(currentClouds)
                break;
            }
            case "cloudy":
            {
                const totalNumberOfClouds = randomBetween(minCloudyClouds, maxCloudyClouds)
                const currentClouds = []
                while(currentClouds.length <= totalNumberOfClouds){ //generate min-max clouds, mediums being twice the number of smalls or longs, or roughly the same as smalls+longs
                    currentClouds.push(generateSmallCloud("medium"))
                    currentClouds.push(generateMediumCloud("medium"))
                    currentClouds.push(generateMediumCloud("medium"))
                    currentClouds.push(generateLongCloud("medium"))
                }
                setClouds(currentClouds)
                break;
            }
            case "stormy":
            {
                const totalNumberOfClouds = randomBetween(minStormyClouds, maxStormyClouds)
                const currentClouds = []
                while(currentClouds.length <= totalNumberOfClouds){ //generate min-max clouds, at a 2:3:1 ratio of medium, large, long, with a mix of speeds
                    currentClouds.push(generateMediumCloud("fast"))
                    currentClouds.push(generateMediumCloud("medium"))
                    currentClouds.push(generateLargeCloud("slow"))
                    currentClouds.push(generateLargeCloud("slow"))
                    currentClouds.push(generateLargeCloud("medium"))
                    currentClouds.push(generateLongCloud("medium"))

                }
                setClouds(currentClouds)
                break;
            }
        }
    }, [weatherCategory]);
    return clouds;
}