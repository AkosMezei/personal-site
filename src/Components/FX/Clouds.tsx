import {Cloud, type CloudProps} from "./Cloud";

/**
 * Represents the properties for Clouds.
 *
 * This type is used to specify data containing an array of cloud objects.
 *
 * @typedef {Object} CloudsProps
 * @property {CloudProps[]} data - An array of cloud objects.
 */
type CloudsProps = {
    data:CloudProps[];
}

export const Clouds = ({data} : CloudsProps) => {
    return (
        <div className="absolute inset-0 overflow-hidden">
            {data.map((cloud, index) => (
                <Cloud
                    //remember to always use real keys when animating multiple things from now on, spent a whole entire day trying to debug clouds popping in while all I had to do was using a pregenerated key
                    key={index}
                    {...cloud} // Pass all properties from the data object
                />
            ))}
        </div>
    );
};