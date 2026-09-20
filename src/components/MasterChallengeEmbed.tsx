'use client'

import { useCallback, useEffect, useRef } from 'react'
import Script from 'next/script'

export type MasterChallengeWidgetType =
  | 'spaces_overview'
  | 'space_details'
  | 'open_challenge'

declare global {
  interface Window {
    MCEmbedWidgetsSDK?: {
      init: (config: Record<string, unknown>) => void
    }
  }
}

const CONTAINER_ID = 'mc-embed-widget'
const SCRIPT_SRC = 'https://embed.masterchallenge.me/mc_embed_widgets.min.js'
const API_BASE = 'https://api.masterchallenge.me/api'
const OVERVIEW_PAGE = 'https://www.cssci.nl/overview'
const DETAIL_PAGE = 'https://www.cssci.nl/space-details'

type Props = {
  type: MasterChallengeWidgetType
}

/**
 * Master Challenge embed widget (Bram / Master Challenge docs).
 * Requires NEXT_PUBLIC_MASTERCHALLENGE_API_KEY + NEXT_PUBLIC_MASTERCHALLENGE_ORGANISATION_ID.
 */
export default function MasterChallengeEmbed({ type }: Props) {
  const initializedFor = useRef<string | null>(null)

  const initWidget = useCallback(() => {
    const apiKey = process.env.NEXT_PUBLIC_MASTERCHALLENGE_API_KEY
    const organisationId = process.env.NEXT_PUBLIC_MASTERCHALLENGE_ORGANISATION_ID

    if (!window.MCEmbedWidgetsSDK || !apiKey || !organisationId) return
    if (initializedFor.current === type) return

    initializedFor.current = type
    window.MCEmbedWidgetsSDK.init({
      containerId: CONTAINER_ID,
      apiBasePath: API_BASE,
      widgetOptions: {
        type,
        challengeSpaceOverviewPage: OVERVIEW_PAGE,
        columnCount: 3,
        hideChallengeSpaceOverviewFilters: false,
        challengeSpaceDetailPage: DETAIL_PAGE,
        styles: {
          primaryColor: '#d1d5db',
          secondaryColor: '#124240',
          buttonBorderRadius: '20px',
          filterLabelColor: 'black',
        },
      },
      organisationId,
      apiKey,
    })
  }, [type])

  useEffect(() => {
    initializedFor.current = null
    if (window.MCEmbedWidgetsSDK) {
      initWidget()
    }
  }, [initWidget])

  return (
    <>
      <div id={CONTAINER_ID} className="min-h-[480px] w-full" />
      <Script src={SCRIPT_SRC} strategy="afterInteractive" onLoad={initWidget} />
    </>
  )
}
