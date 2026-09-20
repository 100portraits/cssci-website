import MasterChallengeEmbed from '@/components/MasterChallengeEmbed'

export const metadata = {
  title: 'Challenge Space Details | CSSci',
  description: 'Details for a CSSci Master Challenge space',
}

export default function SpaceDetailsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <MasterChallengeEmbed type="space_details" />
      </section>
    </div>
  )
}
