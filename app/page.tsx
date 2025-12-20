import Image from "next/image";
import TailwindLogo from "../public/Tailwind_CSS_Logo.png"

export default function Home() {
  return (
    <>
      <header className="text-blue-100">
        <nav className="fixed w-full flex justify-around items-center bg-blue-950 pt-5 pb-5 shadow-md">
           <div className="flex items-center gap-1.5">
            <Image className="h-5 w-9 object-contain" src={TailwindLogo} alt="Tailwind"></Image>
            <h1 className="text-xl font-bold">tailwindcss</h1>
          </div> 
          <ul className='flex gap-7'>
            <li><a href="#setup">Setup</a></li>
            <li><a href="#utility">Utility</a></li>
            <li><a href="#layout">Layout</a></li>
            <li><a href="#responsive">Responsive</a></li>
          </ul>
        </nav>
        <section className="text-center text-blue-100 bg-blue-900 pt-24 pb-16">
          <h1 className="text-5xl font-bold mt-6 mb-6">Get Started with Tailwind</h1>
          <p>A utility-first CSS framework</p>
          <p>Style directly in your HTML/JSX</p>
        </section>
      </header>

      <main className=" bg-blue-100 text-blue-950">
        <section>
          <h2 id="setup" className="text-3xl">Setup</h2>
          <ol className="list-decimal pl-6">
            <li>Install Node.js</li>
            <li>
              <p>Initialize npm (if no package.json)</p>  
              <code className="bg-blue-950 text-white pl-1 pr-1 rounded-sm">npm init -y</code>
            </li>
            <li>
              <p>Install Tailwind and required tools</p>
              <code className="bg-blue-950 text-white pl-1 pr-1 rounded-sm">npm install -D tailwindcss postcss autoprefixer</code>
            </li>
            <li>
              <p>Generate config files</p>
              <code className="bg-blue-950 text-white pl-1 pr-1 rounded-sm">npx tailwindcss init -p</code>
            </li>
            <li>
              <p>Configure <code className="bg-blue-950 text-white pl-1 pr-1 rounded-sm">tailwind.config.js</code> <code className="bg-blue-950 text-white pl-1 pr-1 rounded-sm">content</code> paths (so Tailwind knows where to scan your files)</p>
            </li>
            <li>
              <p>Add Tailwind directives to your CSS file</p>
              <div className="bg-blue-950 w-fit rounded-sm p-1">
                <code className="bg-blue-950 text-white">@tailwind base;<br></br></code>
                <code className="bg-blue-950 text-white">@tailwind components;<br></br></code>
                <code className="bg-blue-950 text-white">@tailwind utilities;</code>
              </div>
            </li>
            <li>
              <p>Run the dev server</p>
              <code className="bg-blue-950 text-white pl-1 pr-1 rounded-sm">npm run dev</code>
            </li>

            <li>You can now use Tailwind utility classes in your markup!</li>
          </ol>
        </section>

        <section>
          <h2 id="utility" className="text-3xl">Utility Classes</h2>
          <p>One class = One style</p>
          <p>Multiple classes componse a design</p>
        </section>

        <section>
          <h2 id="layout" className="text-3xl">Layout</h2>
          <h3 className="text-xl">Flex</h3>
          <h3 className="text-xl">Grid</h3>
        </section>

        <section>
          <h2 id="responsive" className="text-3xl">Responsive Design</h2>
          
        </section>

        <section>
          <h2 id="" className="text-3xl">Wrapping Up</h2>

        </section>
      </main>

      <footer className="bg-blue-900 text-blue-100 text-center pt-5 pb-5">
        Copyright &copy; {new Date().getFullYear()} Joshua Frell Te
      </footer>
    </>
  );
}
