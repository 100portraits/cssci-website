import { PortableText, PortableTextComponents } from '@portabletext/react'

const components: PortableTextComponents = {
  block: {
    normal: ({children}: any) => <p className="mb-4 leading-relaxed">{children}</p>,
    h1: ({children}: any) => <h1 className="text-3xl font-bold mb-4 mt-6">{children}</h1>,
    h2: ({children}: any) => <h2 className="text-2xl font-bold mb-4 mt-6">{children}</h2>,
    h3: ({children}: any) => <h3 className="text-xl font-bold mb-3 mt-4">{children}</h3>,
    h4: ({children}: any) => <h4 className="text-lg font-semibold mb-2 mt-3">{children}</h4>,
    blockquote: ({children}: any) => (
      <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-gray-700">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({children}: any) => <strong className="font-semibold">{children}</strong>,
    em: ({children}: any) => <em className="italic">{children}</em>,
    underline: ({children}: any) => <span className="underline">{children}</span>,
    code: ({children}: any) => (
      <code className="bg-muted px-1 py-0.5 rounded text-sm font-mono">{children}</code>
    ),
    link: ({value, children}: any) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
      return (
        <a 
          href={value?.href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className="text-primary underline hover:text-secondary transition-colors"
        >
          {children}
        </a>
      )
    },
  },
  list: {
    bullet: ({children}: any) => <ul className="list-disc list-inside mb-4 space-y-1">{children}</ul>,
    number: ({children}: any) => <ol className="list-decimal list-inside mb-4 space-y-1">{children}</ol>,
  },
  listItem: {
    bullet: ({children}: any) => <li className="ml-4">{children}</li>,
    number: ({children}: any) => <li className="ml-4">{children}</li>,
  },
}

interface PortableTextContentProps {
  value: any
  className?: string
}

export default function PortableTextContent({ value, className = '' }: PortableTextContentProps) {
  if (!value) return null
  
  return (
    <div className={`prose prose-lg text-gray-600 max-w-none ${className}`}>
      <PortableText value={value} components={components} />
    </div>
  )
}