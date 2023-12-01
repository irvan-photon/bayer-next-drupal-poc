import { DrupalClient } from "next-drupal"

export const drupal = new DrupalClient(
  process.env.NEXT_PUBLIC_DRUPAL_BASE_URL,
  {
    apiPrefix: "/api",
    previewSecret: process.env.DRUPAL_PREVIEW_SECRET,
  }
)
