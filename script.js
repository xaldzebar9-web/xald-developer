"use strict";

console.log("XALD@ DEVELOPER is ready!");

function runHTML() {
  const code = document.getElementById("code").value;
  const preview = document.getElementById("preview");

  preview.srcdoc = code;
}

function clearCode() {
  document.getElementById("code").value = "";
  document.getElementById("preview").srcdoc = "";
}

function saveCode() {
  const code = document.getElementById("code").value;
  const file = new Blob([code], { type: "text/html" });
  const url = URL.createObjectURL(file);

  const link = document.createElement("a");
  link.href = url;
  link.download = "my-project.html";
  link.click();

  URL.revokeObjectURL(url);
}

window.runHTML = runHTML;
window.clearCode = clearCode;
window.saveCode = saveCode;
