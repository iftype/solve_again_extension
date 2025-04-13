chrome.storage.local.get({ problems: [] }, (data) => {
  const list = document.getElementById("list");
  data.problems.forEach((p) => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `<a href="https://www.acmicpc.net/problem/${
      p.number
    }" target="_blank">${p.number} - ${p.title}</a><br><span>${new Date(
      p.date
    ).toLocaleString()}</span>`;
    list.appendChild(div);
  });
});
