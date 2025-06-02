import { defineQuery } from "next-sanity";

export const TECH_QUERY =
defineQuery(`*[_type == "tech"] | order(pos desc) {
  pos,
  name,
  icon,
  bgColor { hex },
  description
}`)

export const PROJECT_QUERY =
defineQuery(`*[_type == "project"] | order(pos desc) {
  pos,
  name,
  image,
  techStack,
  gitLink,
  webLink
}`)

export const CERT_QUERY =
defineQuery(`*[_type == "certification"] | order(startDate desc) {
  name,
  company,
  icon,
  link,
  date
}`)