import { useState } from "react";

export default function App() {
    return <Clock />;
}

function Clock() {
    const [hours, setHours] = useState(12);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    function handleChange(hours: number, minutes: number, seconds: number) {
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
    }

    return (
        <div className="clock">
            <DigitalFace
                hours={hours}
                minutes={minutes}
                seconds={seconds}
                onChange={handleChange}
            />
            <AnalogFace hours={hours} minutes={minutes} seconds={seconds} />
        </div>
    );
}

type TimeFormat = "hour" | "minute" | "second";

type HandProps = {
    angle: number;
    format: TimeFormat;
};

function Hand({ angle, format }: HandProps) {
    return (
        <div
            className={`hand ${format}-hand`}
            style={{ transform: `rotate(${angle}deg)` }}
        />
    );
}

function timeToAngle(time: number, format: TimeFormat): number {
    const total = format === "hour" ? 12 : 60;
    return 360 * time / total;
}

type AnalogFaceProps = {
    hours: number;
    minutes: number;
    seconds: number;
};

function AnalogFace({ hours, minutes, seconds }: AnalogFaceProps) {
    return (
        <>
            <Hand angle={timeToAngle(hours, "hour")} format="hour" />
            <Hand angle={timeToAngle(minutes, "minute")} format="minute" />
            <Hand angle={timeToAngle(seconds, "second")} format="second" />
        </>
    );
}

type DigitalFaceProps = {
    onChange: (hours: number, minutes: number, seconds: number) => void;
    hours: number;
    minutes: number;
    seconds: number;
};

function DigitalFace({ onChange, hours, minutes, seconds }: DigitalFaceProps) {
    return (
        <form>
            <fieldset>
                <legend>Enter time</legend>
                <Digit
                    value={hours}
                    min={1}
                    max={12}
                    label="Hours"
                    onChange={(hours) => onChange(hours, minutes, seconds)}
                />
                <Digit
                    value={minutes}
                    min={0}
                    max={59}
                    label="Minutes"
                    onChange={(minutes) => onChange(hours, minutes, seconds)}
                />
                <Digit
                    value={seconds}
                    min={0}
                    max={59}
                    label="Seconds"
                    onChange={(seconds) => onChange(hours, minutes, seconds)}
                />
            </fieldset>
        </form>
    );
}

type DigitProps = {
    label: string;
    value: number;
    min: number;
    max: number;
    onChange: (newValue: number) => void;
};

function Digit({ label, value, min, max, onChange }: DigitProps) {
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const newValue = Number(event.target.value);
        console.log(newValue);
        if (newValue > max) return onChange(min);
        if (newValue < min) return onChange(max);
        onChange(newValue);
    }
    return (
        <label>
            <span>{label}:</span>
            <input
                type="number"
                value={value}
                onChange={handleChange}
            />
        </label>
    );
}
