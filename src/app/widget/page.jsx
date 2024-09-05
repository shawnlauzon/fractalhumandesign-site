'use client'

import Script from 'next/script'
// import styles from './maia.module.css'

export default function WidgetPage() {
  return (
    <div>
      <Script src="https://widget.maiamechanics.com/js/app.js" />
      <mmi-widget
        id="mmi-app"
        // className={styles}
        apikey={process.env.NEXT_PUBLIC_MAIA_API_KEY}
      ></mmi-widget>
    </div>
  )
}
