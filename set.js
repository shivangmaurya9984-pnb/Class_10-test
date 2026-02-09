// SET SELECTION LOGIC

function selectSet(set) {
  // Safety check
  if (!set) {
    alert("Please select a valid set");
    return;
  }

  // Save selected set
  localStorage.setItem("selectedSet", set);

  // Go to instructions page
  window.location.href = "instructions.html";
}

// Optional: show selected subject (future use)
document.addEventListener("DOMContentLoaded", () => {
  const subject = localStorage.getItem("selectedSubject");
  if (subject) {
    console.log("Selected Subject:", subject);
  }
});
