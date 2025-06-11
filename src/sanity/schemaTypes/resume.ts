import { defineType } from "sanity";

export const resume = defineType({
    name: "resume",
    type: "document",
    fields: [
        {
        name: "file",
        title: "Resume PDF",
        type: "file",
        validation: (Rule) => Rule.required(),
        },
    ],
    preview: {
        select: {
            title: "name",
        },
    },
});