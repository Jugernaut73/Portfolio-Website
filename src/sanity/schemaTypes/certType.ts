import { defineType } from "sanity";

export const certType = defineType({
    name: "certification",
    type: "document",
    fields: [
        {
        name: "name",
        title: "Name",
        type: "string",
        validation: (Rule) => Rule.required(),
        },
        {
        name: "company",
        title: "Company",
        type: "string",
        validation: (Rule) => Rule.required(),
        },
        {
        name: "icon",
        title: "Icon",
        type: "image",
        options: {
            hotspot: true,
        },
        validation: (Rule) => Rule.required(),
        },
        {
        name: "link",
        title: "Link",
        type: "url",
        },
        {
        name: "date",
        title: "Date",
        type: "date",
        validation: (Rule) => Rule.required(),
        },
    ],
    preview: {
        select: {
            title: "name",
        },
    },
});