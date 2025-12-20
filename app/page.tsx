import Image from "next/image";
import TailwindLogo from "../public/Tailwind_CSS_Logo.png"

export default function Home() {
  const utilityClassesExample = `<div className="text-cyan-300 w-fit p-6 my-4 bg-blue-950 rounded-2xl">
  <h2 className="text-lg font-semibold mb-2">Card Title</h2>
  <p className="text-white">This is a simple Tailwind card.</p>
  <p className="text-amber-200">Look below for the code.</p>
</div>`

  const flexExample = `<nav class="flex items-center justify-between p-4 bg-blue-500 text-white">
  <div class="font-bold">Logo</div>
  <ul class="flex space-x-4">
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
</nav>
`

  const gridExample = `<div class="text-amber-100 grid grid-cols-3 gap-4 p-4">
  <div class="bg-gray-400 p-4">Column 1</div>
  <div class="bg-gray-600 p-4">Column 2</div>
  <div class="bg-gray-600 p-4">Column 3</div>
</div>
`

  const responsiveExample = `<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
  <div className="bg-white p-6 rounded shadow">Card 1</div>
  <div className="bg-white p-6 rounded shadow">Card 2</div>
  <div className="bg-white p-6 rounded shadow">Card 3</div>
</div>
`

  
  return (
    <>
      <header className="text-blue-100">
        <nav className="fixed w-full flex flex-column flex-wrap gap-4 justify-around items-center bg-blue-950 pt-5 pb-5 shadow-md md:flex-row">
           <div className="flex items-center gap-1.5">
            <Image className="h-5 w-9 object-contain" src={TailwindLogo} alt="Tailwind"></Image>
            <h1 className="text-xl font-bold">tailwindcss</h1>
          </div> 
          <ul className='flex gap-7 lg:gap-16'>
            <li><a href="#setup">Setup</a></li>
            <li><a href="#utility">Utility</a></li>
            <li><a href="#layout">Layout</a></li>
            <li><a href="#responsive">Responsive</a></li>
          </ul>
        </nav>
        <section className="text-center text-blue-100 bg-blue-900 pt-36 pb-16  md:pt-28 lg:pb-30 ">
          <h1 className="text-5xl font-bold mt-6 mb-6 lg:text-7xl">Get Started with Tailwind</h1>
          <p>A utility-first CSS framework</p>
          <p>Style directly in your HTML/JSX</p>
        </section>
      </header>

      <main className=" bg-blue-100 text-blue-950 px-6 py-6 sm:px-16 md:px-28 lg:px-60 ">
        <section className="mb-6">
          <h2 id="setup" className="text-3xl font-semibold">Setup</h2>
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

        <section className="mb-6">
          <h2 id="utility" className="text-3xl font-semibold mb-2">Utility Classes</h2>
          <p>One class = One style</p>
          <p>Multiple classes componse a design</p>
          <div className="text-cyan-300 w-fit p-6 my-4 bg-blue-950 rounded-2xl">
          <h2 className="text-lg font-semibold mb-2">Card Title</h2>
            <p className="text-white">This is a simple Tailwind card.</p>
            <p className="text-amber-200">Look below for the code.</p>
          </div>
          <pre className="text-wrap bg-blue-950 text-blue-100 p-4 rounded-sm ">
            <code>{utilityClassesExample}</code>
          </pre>
          <ul className="list-disc pl-6 my-3">
            <li><code className="bg-blue-950 text-white pl-1 pr-1 rounded-sm">text-cyan-300</code> sets text color to cyan with a shade value of 300 (can be set 50-950)</li>
            <li><code className="bg-blue-950 text-white pl-1 pr-1 rounded-sm">bg-blue-950</code> sets background color to a dark blue</li>
            <li><code className="bg-blue-950 text-white pl-1 pr-1 rounded-sm">p-6</code> sets padding of element to 24px</li>
            <li><code className="bg-blue-950 text-white pl-1 pr-1 rounded-sm">my-4</code> sets vertical margin of element to 16px</li>
            <li><code className="bg-blue-950 text-white pl-1 pr-1 rounded-sm">text-lg</code> sets font size to 18px</li>
            <li><code className="bg-blue-950 text-white pl-1 pr-1 rounded-sm">font-semibold</code> sets font weight to semibold</li>
          </ul>
          
          <p>Together, these classes form a design.</p>
        </section>

        <section className="mb-6">
          <h2 id="layout" className="text-3xl font-semibold mb-2">Layout</h2>
          <h3 className="text-xl font-semibold my-1">Flex</h3>
          <nav className="flex items-center justify-between p-4 bg-blue-500 text-white">
            <div className="font-bold">Logo</div>
            <ul className="flex space-x-4">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
          <pre className="text-wrap bg-blue-950 text-blue-100 p-4 rounded-sm ">
            <code>{flexExample}</code>
          </pre>
          <ul className="list-disc pl-6 my-3">
            <li><code className="bg-blue-950 text-white pl-1 pr-1 rounded-sm">flex</code> turns container elementinto a flexbox</li>
            <li><code className="bg-blue-950 text-white pl-1 pr-1 rounded-sm">items-center</code> centers items vertically</li>
            <li><code className="bg-blue-950 text-white pl-1 pr-1 rounded-sm">justify-between</code> adds space between every item</li>
          </ul>
          <h3 className="text-xl font-semibold my-1">Grid</h3>
          <div className="text-amber-100 grid grid-cols-3 gap-4 p-4">
            <div className="bg-gray-400 p-4">Column 1</div>
            <div className="bg-gray-600 p-4">Column 2</div>
            <div className="bg-gray-600 p-4">Column 3</div>
          </div>
          <pre className="text-wrap bg-blue-950 text-blue-100 p-4 rounded-sm ">
            <code>{gridExample}</code>
          </pre>
          <ul className="list-disc pl-6 my-3">
            <li><code className="bg-blue-950 text-white pl-1 pr-1 rounded-sm">grid</code> turns container element into a grid</li>
            <li><code className="bg-blue-950 text-white pl-1 pr-1 rounded-sm">grid-cols-3</code> sets the grid container to have 3 columns</li>
            <li><code className="bg-blue-950 text-white pl-1 pr-1 rounded-sm">gap-4</code> sets a gap of 16px between every grid item</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 id="responsive" className="text-3xl font-semibold mb-2">Responsive Design</h2>
          <p>
            Tailwind is <b>mobile-first</b>. You can add breakpoints using prefixes:{' '}
            <code className="bg-blue-950 text-white pl-1 pr-1 rounded-sm">sm:</code>,{' '}
            <code className="bg-blue-950 text-white pl-1 pr-1 rounded-sm">md:</code>,{' '}
            <code className="bg-blue-950 text-white pl-1 pr-1 rounded-sm">lg:</code>,{' '}
            <code className="bg-blue-950 text-white pl-1 pr-1 rounded-sm">xl:</code>,{' '}
            <code className="bg-blue-950 text-white pl-1 pr-1 rounded-sm">2xl:</code>.
          </p>
          <p>Try stretching or squeezing the window and observe what happens to the cards.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            <div className="bg-white p-6 rounded shadow">Card 1</div>
            <div className="bg-white p-6 rounded shadow">Card 2</div>
            <div className="bg-white p-6 rounded shadow">Card 3</div>
          </div>
          <pre className="text-wrap bg-blue-950 text-blue-100 p-4 rounded-sm ">
            <code>{responsiveExample}</code>
          </pre>
          <ul className="list-disc pl-6 my-3">
            <li><code className="bg-blue-950 text-white pl-1 pr-1 rounded-sm">md:grid-cols-2</code> sets the number of grid columns to 2 at medium screen view</li>
            <li><code className="bg-blue-950 text-white pl-1 pr-1 rounded-sm">lg:grid-cols-3</code> sets the number of grid columns to 3 at large screen view</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 id="" className="text-3xl font-semibold mb-2">Wrapping Up</h2>
          <p>Tailwind enables <b>rapid development</b> by allowing developers to style webpages within the same file. With its fine-tuned presets, it allows for <b>high customizability</b> while maintaining <b>design consistency</b>. <b>Responsive</b> design is made easier using prefixes, avoiding complex media queries. Lastly but not the least, you don't have to name classes anymore!</p>
        </section>
      </main>

      <footer className="bg-blue-950 text-blue-100 text-center pt-7 pb-7">
        Copyright &copy; {new Date().getFullYear()} Joshua Frell Te
      </footer>
    </>
  );
}
