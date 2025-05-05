export const quillModules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link"],
    [{ color: [] }],
    ["clean"],
  ],
};

export const quillFormats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "list",
  "bullet",
  "link",
  "align",
  "color",
];

export const simpleQuillModules = {
  toolbar: [["bold", "italic", "underline"], ["link"], ["clean"]],
};

export const simpleQuillFormats = ["bold", "italic", "underline", "link"];

// Remove the quillModulesWithImages since we don't need it
