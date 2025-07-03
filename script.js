
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  document.documentElement.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
}

window.addEventListener('DOMContentLoaded', async () => {
  const blogList = document.getElementById('blog-list');
  if (!blogList) return;
  const files = ["ai-in-ivf.md", "healthcare-gcc.md", "pnl-leadership.md"];
  blogList.innerHTML = '';
  for (const file of files) {
    const res = await fetch('posts/' + file);
    const text = await res.text();
    const title = text.match(/title:\s*(.*)/)[1];
    const date = text.match(/date:\s*(.*)/)[1];
    const summary = text.match(/summary:\s*(.*)/)[1];
    blogList.innerHTML += `<article><h2>${title}</h2><p><em>${date}</em></p><p>${summary}</p></article>`;
  }
});
