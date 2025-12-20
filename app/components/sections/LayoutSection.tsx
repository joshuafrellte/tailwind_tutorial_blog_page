import CodeBlock from "../ui/CodeBlock"
import SectionTitle from "../ui/SectionTitle"

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

export default function LayoutSection() {
    return (
        <section className="flex flex-col gap-3 mb-12">
            <SectionTitle id="layout">Layout</SectionTitle>
            <h3 className="text-2xl font-semibold my-1">Flex</h3>
            <nav className="flex items-center justify-between p-4 bg-blue-500 text-white">
                <div className="font-bold">Logo</div>
                <ul className="flex space-x-4">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <CodeBlock>{flexExample}</CodeBlock>
            <ul className="list-disc pl-6 mt-3 mb-8">
                <li><code className="bg-blue-950 text-white pl-1 pr-1 rounded-sm">flex</code> turns container elementinto a flexbox</li>
                <li><code className="bg-blue-950 text-white pl-1 pr-1 rounded-sm">items-center</code> centers items vertically</li>
                <li><code className="bg-blue-950 text-white pl-1 pr-1 rounded-sm">justify-between</code> adds space between every item</li>
            </ul>
            <h3 className="text-2xl font-semibold my-1">Grid</h3>
            <div className="text-amber-100 grid grid-cols-3 gap-4 p-4">
                <div className="bg-gray-400 p-4">Column 1</div>
                <div className="bg-gray-600 p-4">Column 2</div>
                <div className="bg-gray-600 p-4">Column 3</div>
            </div>
            <CodeBlock>{gridExample}</CodeBlock>
            <ul className="list-disc pl-6 my-3">
                <li><code className="bg-blue-950 text-white pl-1 pr-1 rounded-sm">grid</code> turns container element into a grid</li>
                <li><code className="bg-blue-950 text-white pl-1 pr-1 rounded-sm">grid-cols-3</code> sets the grid container to have 3 columns</li>
                <li><code className="bg-blue-950 text-white pl-1 pr-1 rounded-sm">gap-4</code> sets a gap of 16px between every grid item</li>
            </ul>
        </section>
    )
}