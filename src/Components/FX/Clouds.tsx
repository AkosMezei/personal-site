import {Cloud} from "./Cloud";

type CloudProps = {
    data:any[]; //arr of cloud objects
}

export const Clouds = ({data} : CloudProps) => {
    return (
        <div className="absolute inset-0 overflow-hidden">
            {data.map((cloud) => (
                <Cloud
                    //remember to always use real keys when animating multiple things from now on, spent a whole entire day trying to debug clouds popping in while all I had to do was using a pregenerated key
                    key={cloud.id}
                    {...cloud} // Pass all properties from the data object
                />
            ))}
        </div>
    );
};