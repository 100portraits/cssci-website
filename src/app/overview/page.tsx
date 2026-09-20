import MasterChallengeEmbed from '@/components/MasterChallengeEmbed'

export const metadata = {
  title: 'Challenge Spaces | CSSci',
  description: 'Overview of CSSci Master Challenge spaces',
}

export default function OverviewPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <h1 className="mb-8 text-4xl font-bold text-gray-900 md:text-5xl">
          Challenge Spaces
        </h1>
        <MasterChallengeEmbed type="spaces_overview" />
      </section>
    </div>
  )
}
