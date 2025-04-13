function insertButton() {
  const h1 = document.querySelector("h1");
  const problem_title = h1.querySelector("#problem_title");
  if (!h1 || document.querySelector("#re-solve-btn")) return;

  const btn = document.createElement("button");
  btn.id = "re-solve-btn";
  btn.innerText = "다시 풀기";

  const number = window.location.pathname.split("/").pop();
  const title = problem_title.innerText.trim();

  chrome.storage.local.get({ problems: [] }, (data) => {
    const exists = data.problems.some((p) => p.number === number);
    if (exists) {
      btn.classList.add("saved");
      btn.innerText = "❌ 삭제하기";
    }
  });

  btn.onclick = () => {
    chrome.storage.local.get({ problems: [] }, (data) => {
      const exists = data.problems.some((p) => p.number === number);
      let updated;
      if (exists) {
        updated = data.problems.filter((p) => p.number !== number);
        btn.innerText = "다시 풀기";
        btn.classList.remove("saved");
        alert("삭제되었습니다!");
      } else {
        const now = new Date().toISOString();
        updated = [...data.problems, { number, title, date: now }];
        btn.innerText = "❌ 삭제하기";
        btn.classList.add("saved");
        alert("저장되었습니다!");
      }
      chrome.storage.local.set({ problems: updated });
    });
  };

  h1.appendChild(btn);
}

insertButton();
