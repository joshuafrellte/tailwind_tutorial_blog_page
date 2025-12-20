import SectionTitle from "../ui/SectionTitle";

export default function SetupSection() {
    return (
        <section className="mb-12">
          <SectionTitle id="setup">Setup</SectionTitle>
          <ol className="list-decimal pl-6">
            <li className="mt-2">Install Node.js</li>
            <li className="mt-2">
              <p>Initialize npm (if no package.json)</p>  
              <code className="bg-blue-950 text-white pl-1 pr-1 rounded-sm">npm init -y</code>
            </li>
            <li className="mt-2">
              <p>Install Tailwind and required tools</p>
              <code className="bg-blue-950 text-white pl-1 pr-1 rounded-sm">npm install -D tailwindcss postcss autoprefixer</code>
            </li>
            <li className="mt-2">
              <p>Generate config files</p>
              <code className="bg-blue-950 text-white pl-1 pr-1 rounded-sm">npx tailwindcss init -p</code>
            </li>
            <li className="mt-2">
              <p>Configure <code className="bg-blue-950 text-white pl-1 pr-1 rounded-sm">tailwind.config.js</code> <code className="bg-blue-950 text-white pl-1 pr-1 rounded-sm">content</code> paths (so Tailwind knows where to scan your files)</p>
            </li>
            <li className="mt-2">
              <p>Add Tailwind directives to your CSS file</p>
              <div className="bg-blue-950 w-fit rounded-sm p-1">
                <code className="bg-blue-950 text-white">@tailwind base;<br></br></code>
                <code className="bg-blue-950 text-white">@tailwind components;<br></br></code>
                <code className="bg-blue-950 text-white">@tailwind utilities;</code>
              </div>
            </li>
            <li className="mt-2">
              <p>Run the dev server</p>
              <code className="bg-blue-950 text-white pl-1 pr-1 rounded-sm">npm run dev</code>
            </li>

            <li className="mt-2">You can now use Tailwind utility classes in your markup!</li>
          </ol>
        </section>
    )
}