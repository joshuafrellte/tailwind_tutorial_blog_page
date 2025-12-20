import CodeBlock from "../ui/CodeBlock"
import SectionTitle from "../ui/SectionTitle"

const responsiveExample = `<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
  <div className="bg-white p-6 rounded shadow">Card 1</div>
  <div className="bg-white p-6 rounded shadow">Card 2</div>
  <div className="bg-white p-6 rounded shadow">Card 3</div>
</div>
`

export default function ResponsiveDesignSection() {
    return (
        <section className="flex flex-col gap-3 mb-12">
          <SectionTitle id="responsive">Responsive Design</SectionTitle>
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
          <CodeBlock>{responsiveExample}</CodeBlock>
          <ul className="list-disc pl-6 my-3">
            <li><code className="bg-blue-950 text-white pl-1 pr-1 rounded-sm">md:grid-cols-2</code> sets the number of grid columns to 2 at medium screen view</li>
            <li><code className="bg-blue-950 text-white pl-1 pr-1 rounded-sm">lg:grid-cols-3</code> sets the number of grid columns to 3 at large screen view</li>
          </ul>
        </section>
    )
}