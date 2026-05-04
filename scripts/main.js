const currentUrl = window.location.href;

const validationLinks = [
  {
    id: "profile-validator",
    url: `https://validator.w3.org/nu/?doc=${encodeURIComponent(currentUrl)}`
  },
  {
    id: "profile-wave",
    url: `https://wave.webaim.org/report#/${encodeURIComponent(currentUrl)}`
  }
];

validationLinks.forEach(({ id, url }) => {
  const link = document.getElementById(id);

  if (link) {
    link.href = url;
  }
});

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}
