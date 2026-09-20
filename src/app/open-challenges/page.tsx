import MasterChallengeEmbed from '@/components/MasterChallengeEmbed'

export const metadata = {
  title: 'Open a Challenge | CSSci',
  description: 'Submit an open challenge for the CSSci Master Challenge',
}

export default function OpenChallengesPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <h1 className="mb-8 text-4xl font-bold text-gray-900 md:text-5xl">
          Open a Challenge
        </h1>
        <MasterChallengeEmbed type="open_challenge" />
      </section>
    </div>
  )
}
