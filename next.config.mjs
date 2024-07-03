import {build} from 'velite'

import {fileURLToPath} from 'node:url'
import createJiti from 'jiti'
const jiti = createJiti(fileURLToPath(import.meta.url))

jiti('./src/constants/env')

// Note that this approach uses top-level await, so it only supports next.config.mjs or ESM enabled.
const isDev = process.argv.indexOf('dev') !== -1
const isBuild = process.argv.indexOf('build') !== -1

if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
  process.env.VELITE_STARTED = '1'
  const {build} = await import('velite')
  await build({watch: isDev, clean: !isDev})
}

/** @type {import('next').NextConfig} */

const nextConfig = {}

export default nextConfig
