export default function CodeBlock({ children }: { children: string }) {
    return (
        <pre className="text-wrap bg-blue-950 text-blue-100 p-4 rounded-sm ">
            <code>{children}</code>
        </pre>
    )
}