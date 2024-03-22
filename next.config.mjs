/** @type {import('next').NextConfig} */
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const stylesPath = path.join(__dirname, 'src', 'styles')

const nextConfig = {
  sassOptions: {
    includePaths: [stylesPath],
    prependData: `@use 'variables' as *;
    @use 'mixins' as *;`,
  },
}

export default nextConfig
