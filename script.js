// Add interactivity (optional)
document.querySelectorAll('.buttons a').forEach(btn => {
  btn.addEventListener('click', () => {
    console.log(`Navigating to ${btn.textContent}`);
  });
});
