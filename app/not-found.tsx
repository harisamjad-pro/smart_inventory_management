import Link from 'next/link'
import React from 'react'

export default function Custom404() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>We could not find the page you were looking for.</p>
      <Link href="/">
        Go back to Home
      </Link>
    </div>
  )
}
