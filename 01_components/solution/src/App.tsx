export default function App() {
    return (
        <>
            <Field
                name={"username"}
                label={"Username"}
                type="number"
            />
            <SubmitButton color="red" backgroundColor="blue">
                Submit
            </SubmitButton>
        </>
    );
}

type FieldProps = {
    name: string;
    label: string;
    type?: string;
    placeholder?: string;
    value?: string;
};

function Field({ name, label, type = "text", placeholder, value }: FieldProps) {
    return (
        <label>
            {label}
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
            />
        </label>
    );
}

type SubmitButtonProps = {
    color: string;
    backgroundColor: string;
    children: React.ReactNode;
};

function SubmitButton({ color, backgroundColor, children }: SubmitButtonProps) {
    return (
        <button
            type="submit"
            style={{ color, backgroundColor }}
        >
            {children}
        </button>
    );
}
