export default function App() {
    const options = [
        { label: "Red", value: "r" },
        { label: "Green", value: "g" },
        { label: "Blue", value: "b" },
    ];

    return (
        <RadioSet
            name="color"
            options={options}
            onChange={(value) => alert(value)}
        />
    );
}

type Option = {
    label: string;
    value: string;
};

type RadioSetProps = {
    name: string;
    options: Array<Option>;
    onChange: (value: string) => void;
};

function RadioSet({ name, options, onChange }: RadioSetProps) {
    return (
        <fieldset>
            {options.map(option => (
                <RadioInput
                    key={option.value}
                    name={name}
                    {...option}
                    onChange={onChange}
                />
            ))}
        </fieldset>
    );
}

type RadioInputProps = {
    name: string;
    value: string;
    label: string;
    onChange: (value: string) => void;
};

function RadioInput({ name, value, label, onChange }: RadioInputProps) {
    return (
        <label>
            {label}
            <input
                type="radio"
                name={name}
                value={value}
                onChange={() => onChange(value)}
            />
        </label>
    );
}
