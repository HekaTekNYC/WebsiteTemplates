CMS.registerPreviewStyle("/admin/styles.css") // Optional: Custom styles

CMS.registerPreviewTemplate("blog", entry => {
  const title = entry.getIn(["data", "title"]) || "No title"
  const description = entry.getIn(["data", "description"]) || ""
  const image = entry.getIn(["data", "image"]) || ""
  const body = entry.getIn(["data", "body"]) || ""

  // Create the preview HTML
  return `
    <div style="padding: 20px; max-width: 600px; border: 1px solid #ddd;">
      ${
        image
          ? `<img src="${image}" alt="Blog Post Image" style="width: 100%; height: auto; border-radius: 8px;">`
          : ""
      }
      <h2>${title}</h2>
      <p>${description || body.slice(0, 150) + "..."}</p>
    </div>
  `
})
