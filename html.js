const { readFileSync, writeFileSync, existsSync } = require("fs");
const { JSDOM } = require("jsdom");

const extractTags = ["input", "button", "a", "label", "select", "textarea"];
const tagsToRemove = [
  "style",
  "script",
  "link",
  "svg",
  "meta",
  "head",
  "noscript",
  "img",
];
const attrToKeep = ["aria-label", "placeholder", "href", "disabled", "id"];
const emptyTagsToKeep = ["input", "a", "button"];

function cleanHtml(html) {
  const dom = new JSDOM(html);
  const document = dom.window.document;

  // Remove specified tags
  document.querySelectorAll(tagsToRemove.join(",")).forEach((node) => {
    node.remove();
  });

  // Remove all attributes except those in attrToKeep
  document.querySelectorAll("*").forEach((node) => {
    [...node.attributes].forEach((attr) => {
      if (!attrToKeep.includes(attr.name)) {
        node.removeAttribute(attr.name);
      }
    });
  });

  // Recursively remove empty tags except those in emptyTagsToKeep
  function removeEmptyTags(element) {
    const children = Array.from(element.children);
    children.forEach((child) => {
      removeEmptyTags(child);
      if (
        !emptyTagsToKeep.includes(child.tagName.toLowerCase()) &&
        !child.hasChildNodes() &&
        !child.textContent.trim()
      ) {
        child.remove();
      }
    });
  }

  removeEmptyTags(document.body);

  //return document.body.innerHTML.replace(/<!--[\s\S]*?-->/g, '');

  let concatenatedInnerHtml = "";

  extractTags.forEach((tag) => {
    const elements = document.querySelectorAll(tag);
    elements.forEach((element) => {
      if (element.getAttribute("disabled") !== null) {
        return;
      }
      concatenatedInnerHtml +=
        element.outerHTML.replace(/<!--[\s\S]*?-->/g, "") + "\n";
    });
  });

  return concatenatedInnerHtml
    .replace(/<div>/g, "")
    .replace(/<span>/g, "")
    .replace(/<\/div>/g, "")
    .replace(/<\/span>/g, "");
}

for (let i = 1; i <= 20; i++) {
  if (!existsSync(`./video1/step${i}.md`) && existsSync(`./video1/html-raw-${i}.html`)) {
    writeFileSync(
      `./video1/html-input-${i}.html`,
      cleanHtml(readFileSync(`./video1/html-raw-${i}.html`).toString())
    );
    writeFileSync(
      `./video1/step${i}.md`,
      readFileSync("./prompt.md")
        .toString()
        .replace(
          "{{ADD CURRENT HTML STATE HERE}}",
          readFileSync(`./video1/html-input-${i}.html`)
        )
        .replace(
          "{{ADD TUTORIAL CONTENT HERE}}",
          readFileSync(`./video1/tutorial.md`)
        )
        .replace(
          "{{ADD PREVIOUS ACTIONS HERE}}",
          readFileSync(`./video1/actions.json`)
        )
    );
  }
}
