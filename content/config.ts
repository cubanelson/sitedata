import { defineCollection, reference, z } from "astro:content";

const creations = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string().max(60),
      description: z.string().max(160).optional(),
      company: reference("companies"),
      choreographer: reference("choreographers"),
      premieredate: z.date(),
      language: z.enum(["en", "fr", "es"]),
      heroImage: z.object({
        url: image(),
        alt: z.string(),
      }),
      galleryImages: z.array(
        z.object({
          url: image(),
          alt: z.string(),
        })
      ),
      videos: z.array(
        z
          .object({
            url: z.string(),
            title: z.string(),
          })
          .optional()
      ),
      photographer: z.string().optional(),
      sponsors: z.array(reference("sponsors")).optional(),
      dancers: z.array(reference("dancers")).optional(),
      pressLink: z.string().optional(),
      downloadLink: z.string().optional(),
    }),
});
const dancers = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string().max(60, {
        message: "Title must be 60 characters or less.",
      }),
      role: z.string(),
      description: z.string().optional(),
      profileImage: z.object({
        url: image(),
        alt: z.string(),
      }),
      galleryImages: z
        .array(
          z.object({
            url: image(),
            alt: z.string(),
          })
        )
        .optional(),
      language: z.enum(["en", "fr", "es"]),
      creations: z.array(reference("creations")).optional(),
    }),
});

const companies = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      description: z.string(),
      url: z.string(),
      heroImage: z.object({
        url: image(),
        alt: z.string(),
      }),
      language: z.enum(["en", "fr", "es"]),
      galleryImages: z
        .array(
          z.object({
            url: image(),
            alt: z.string(),
          })
        )
        .optional(),
      videos: z.array(
        z.object({
          url: z.string(),
          title: z.string(),
        })
      ),
      creations: z.array(reference("creations")).optional(),
      pressLink: z.string().optional(),
      downloadLink: z.string().optional(),
    }),
});

const choreographers = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      name: z.string().max(60, {
        message: "Title must be 60 characters or less.",
      }),
      description: z.string().max(160, {
        message: "Description must be 160 characters or less.",
      }),
      role: z.string(),
      downloadLink: z.string(),
      video: z.string().optional(),
      creations: z.array(reference("creations")).optional(),
      heroImage: z.object({
        url: image(),
        alt: z.string(),
      }),
      language: z.enum(["en", "fr", "es"]),
      cv: z
        .array(
          z.object({
            company: z.string(),
            role: z.string(),
            date: z.string(),
            description: z.string(),
            shows: z.array(z.string()).optional(),
          })
        )
        .optional(),
    }),
});
const sponsors = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      url: z.string(),
      image: z.object({
        url: image(),
        alt: z.string(),
      }),
    }),
});

const pages = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      description: z.string(),
      language: z.enum(["en", "fr", "es"]),
      heroImage: z.object({
        url: image(),
        alt: z.string(),
      }),
    }),
});

const galleryImages = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      heroImage: z.object({
        url: image(),
        alt: z.string(),
      }),
      language: z.enum(["en", "fr", "es"]),
      gallery: z.array(
        z.object({
          title: z.string(),
          heroImage: z.object({
            url: image(),
            alt: z.string(),
          }),
          galleryImages: z.array(
            z.object({
              url: image(),
              alt: z.string(),
            })
          ),
        })
      ),
    }),
});
export const collections = {
  creations,
  dancers,
  companies,
  choreographers,
  sponsors,
  pages,
  galleryImages,
};
