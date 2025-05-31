import { defineQuery } from "next-sanity";

export const TECH_QUERY =
defineQuery(`*[_type == "tech"] | order(pos desc) {
  pos,
  name,
  icon,
  bgColor { hex },
  description
}`)