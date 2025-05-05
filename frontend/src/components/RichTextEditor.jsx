import { useState, useEffect, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  quillFormats,
  quillModules,
  simpleQuillFormats,
  simpleQuillModules,
} from "../config/quillConfig";

const RichTextEditor = ({
  value,
  onChange,
  placeholder = "Metninizi giriniz...",
  height = "200px",
  simple = false,
  className = "",
  readOnly = false,
}) => {
  const [editorValue, setEditorValue] = useState(value || "");
  const quillRef = useRef(null);

  useEffect(() => {
    setEditorValue(value || "");
  }, [value]);

  const handleChange = (content) => {
    setEditorValue(content);
    if (onChange) {
      onChange(content);
    }
  };

  // Completely remove any image-related handlers
  const customModules = simple ? simpleQuillModules : quillModules;
  const formats = simple ? simpleQuillFormats : quillFormats;

  return (
    <div className={`rich-text-editor ${className}`}>
      <ReactQuill
        ref={quillRef}
        value={editorValue}
        onChange={handleChange}
        modules={customModules}
        formats={formats}
        placeholder={placeholder}
        readOnly={readOnly}
        style={{ height }}
      />
    </div>
  );
};

export default RichTextEditor;
