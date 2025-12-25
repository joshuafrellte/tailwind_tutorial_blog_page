import CodeBlock from "../ui/CodeBlock"
import SectionTitle from "../ui/SectionTitle"

const utilityClassesExample = `<div className="text-cyan-300 w-fit p-6 my-4 bg-blue-950 rounded-2xl">
  <h2 className="text-lg font-semibold mb-2">Card Title</h2>
  <p className="text-white">This is a simple Tailwind card.</p>
  <p className="text-amber-200">Look below for the code.</p>
</div>
`
   
export default function UtilityClassesSection() {
     return (
        <section className="flex flex-col gap-3 mb-12">
          <SectionTitle>Utility Classes</SectionTitle>
          <p>One class = One style</p>
          <p>Multiple classes componse a design.</p>
          <div className="text-cyan-300 w-fit p-6 my-4 bg-blue-950 rounded-2xl">
          <h2 className="text-lg font-semibold mb-2">Card Title</h2>
            <p className="text-white">This is a simple Tailwind card.</p>
            <p className="text-amber-200">Look below for the code.</p>
          </div>
          <CodeBlock>{utilityClassesExample}</CodeBlock>
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
    )
}