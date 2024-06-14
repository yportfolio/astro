import fs from "node:fs/promises";

async function chroming() {
  const supportedLangs = ["en", "zh_CN", "ja", "ko", "fr"];

  supportedLangs.map(async (locale) => {
    // Fetch all resources concurrently
    try {
      const [headRes, headerRes, footerRes] = await Promise.all([
        fetch(`https://access.redhat.com/services/primer/head/${locale}`),
        fetch(`https://access.redhat.com/services/primer/header/${locale}`),
        fetch(`https://access.redhat.com/services/primer/footer/${locale}`),
      ]);

      // Parse the responses
      const head = await headRes.text();
      const header = await headerRes.text();
      const footer = await footerRes.text();

      // console.log("head", head);
      // console.log("header", header);
      // console.log("footer", footer);

      fs.writeFile(`./chroming/${locale}/head.html`, head, "utf-8");
      fs.writeFile(`./chroming/${locale}/header.html`, header, "utf-8");
      fs.writeFile(`./chroming/${locale}/footer.html`, footer, "utf-8");
    } catch (error) {
      console.error("Failed to fetch resources:", error);
    }
  });
}

await chroming();
