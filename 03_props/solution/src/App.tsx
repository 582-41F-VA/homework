export default function App() {
    return (
        <>
            <Field name={"name"} label={"Name"} placeholder={"Bob"} />
            <Field name={"email"} label={"Email"} />
            <Field name={"password"} label={"Password"} value={"abc123"} />
            <SubmitButton />
            <SubmitButton color={"red"} backgroundColor={"orange"} />
        </>
    );
}

type SubmitButtonProps = {
    color?: string;
    backgroundColor?: string;
};

function SubmitButton(
    { color = "black", backgroundColor = "inherit" }: SubmitButtonProps,
) {
    return <button style={{ color, backgroundColor }}>Submit</button>;
}

type FieldProps = {
    name: string;
    label: string;
    type?: string;
    placeholder?: string;
    value?: string;
};

function Field(
    { name, label, type = "text", placeholder = "", value }: FieldProps,
) {
    return (
        <label>
            {label}
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
            />
        </label>
    );
}
