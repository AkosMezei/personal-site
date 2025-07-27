import {Cloud} from "./Cloud";

type CloudProps = {
    data:any[]; //arr of cloud objects
    filter:string;
}

export const Clouds = ({data, filter} : CloudProps) => {
    return (
        <div className="absolute inset-0 overflow-hidden">
            {data.map((cloud, index) => (
                <Cloud
                    key={index}
                    {...cloud} // Pass all properties from the data object
                    filter={filter} // Pass down the weather-based filter
                />
            ))}
        </div>
    );
};