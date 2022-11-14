/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_SERVER_ENDPOINT: string
  readonly VITE_API_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
