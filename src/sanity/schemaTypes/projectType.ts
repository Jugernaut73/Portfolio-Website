import { defineType } from "sanity";

export const projectType = defineType({
    name: "project",
    type: "document",
    fields: [
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
        name: "technologies",
        title: "Technologies",
        type: "array",
        of: [{ type: "string" }],
        validation: (Rule) => Rule.required(),
        },
    ],
    preview: {
        select: {
            title: "name",
        },
    },
});