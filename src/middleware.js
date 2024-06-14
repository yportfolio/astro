import i18next from "i18next";
import fs from "node:fs/promises";

export async function onRequest(context, next) {
  const locale = context.cookies.get("rh_locale")?.value || "en";
  i18next.changeLanguage(locale, (err, _t) => {
    if (err) console.error("Change lang failed", err);
  });

  context.locals.head = await fs.readFile(
    `./chroming/${locale}/head.html`,
    "utf-8",
    (err, data) => {
      if (err) {
        console.error("Error reading the file:", err);
        return;
      }

      return data;
    }
  );

  context.locals.header = await fs.readFile(
    `./chroming/${locale}/header.html`,
    "utf-8",
    (err, data) => {
      if (err) {
        console.error("Error reading the file:", err);
        return;
      }

      return data;
    }
  );

  context.locals.footer = await fs.readFile(
    `./chroming/${locale}/footer.html`,
    "utf-8",
    (err, data) => {
      if (err) {
        console.error("Error reading the file:", err);
        return;
      }

      return data;
    }
  );
  // return a Response or the result of calling `next()`
  return next();
}
