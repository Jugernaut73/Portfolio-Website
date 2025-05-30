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
        name: "icon",
        title: "Icon",
        type: "image",
        options: {
            hotspot: true,
        },
        },
        {
        name: "link",
        title: "Link",
        type: "url",
        },
        {
        name: "startDate",
        title: "Start Date",
        type: "date",
        validation: (Rule) => Rule.required(),
        },
        {
        name: "endDate",
        title: "End Date",
        type: "date",
        },
    ],
    preview: {
        select: {
            title: "name",
        },
    },
});