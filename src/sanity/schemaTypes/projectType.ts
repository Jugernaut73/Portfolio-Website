import { defineType } from "sanity";

export const projectType = defineType({
    name: "project",
    type: "document",
    fields: [
        {
        name: "pos",
        title: "Position",
        type: "number",
        validation: (Rule) => Rule.required(),
        },
        {
        name: "name",
        title: "Name",
        type: "string",
        validation: (Rule) => Rule.required(),
        },
        {
        name: "image",
        title: "Image",
        type: "image",
        options: {
            hotspot: true,
        },
        validation: (Rule) => Rule.required(),
        },
        {
        name: "techStack",
        title: "Tech Stack",
        type: "array",
        of: [{ type: "string" }],
        validation: (Rule) => Rule.required(),
        },
        {
        name: "gitLink",
        title: "GitHub",
        type: "url",
        },
        {
        name: "webLink",
        title: "Website",
        type: "url",
        },
    ],
    preview: {
        select: {
            title: "name",
        },
    },
});