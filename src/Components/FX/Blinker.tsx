type BlinkerProps = {
    size: 2 | 3 | 4;
    color: 'sky' | 'green' | 'red' | 'yellow';
    className?: string;
};

const sizeClasses = {
    2: 'h-2 w-2',
    3: 'h-3 w-3',
    4: 'h-4 w-4',
};

const colorClasses = {
    sky: 'bg-sky-500',
    green: 'bg-green-500',
    red: 'bg-red-500',
    yellow: 'bg-yellow-500',
};

export const Blinker = ({size, color, className = ''}:BlinkerProps) => {
    const classes = `
    ${sizeClasses[size]} 
    ${colorClasses[color]}
    animate-blink-blinker 
    rounded-full
    absolute 
    top-1.5 left-1.5
    ${className}
  `;

    return (
        <div className={classes}></div>
    );
};