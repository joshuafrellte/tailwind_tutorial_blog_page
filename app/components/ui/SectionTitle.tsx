type SectionTitleProps = {
    id?: "string"
    children: React.ReactNode;
}

export default function SectionTitle({ id, children }: SectionTitleProps) {
    return (
        <h2
            id={id}
            className="text-4xl font-semibold mt-10 mb-3"
        >
            {children}
        </h2>
    )
}