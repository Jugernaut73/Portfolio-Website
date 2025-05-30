import { defineType } from "sanity";

export const techType = defineType({
    name: "tech",
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
        validation: (Rule) => Rule.required(),
        },
        {
        name: "bgColor",
        title: "Background Color",
        type: "color",
        validation: (Rule) => Rule.required(),
        },
        {
        name: "description",
        title: "Description",
        type: "text",
        validation: (Rule) => Rule.required(),
        },
    ],
    preview: {
        select: {
            title: "name",
        },
    },
});