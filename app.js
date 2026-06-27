const STORAGE_KEY = "project-polaris-growth-os";

const DEFAULT_STATE = {
  xp: 0,
  level: 1,
  skills: {
    UE: 0,
    "C++": 0,
    Art: 0,
    English: 0
  },
  tasks: [
    {
      id: makeId(),
      title: "Build UE room layout",
      skill: "UE",
      xp: 30,
      completed: false,
      createdAt: new Date().toISOString()
    },
    {
      id: makeId(),
      title: "Setup lighting",
      skill: "Art",
      xp: 25,
      completed: false,
      createdAt: new Date().toISOString()
    },
    {
      id: makeId(),
      title: "Render a 10-second scene",
      skill: "UE",
      xp: 35,
      completed: false,
      createdAt: new Date().toISOString()
    }
  ],
  project: {
    name: "UE Rain Room Scene",
    description: "Create a small rainy room environment in Unreal Engine with layout, lighting, camera movement, and a 10-second rendered showcase.",
    github: "#",
    progress: 0
  }
};

let state = loadState();

const elements = {
  levelValue: document.getElementById("levelValue"),
  xpLabel: document.getElementById("xpLabel"),
  xpBar: document.getElementById("xpBar"),
  todayProgressLabel: document.getElementById("todayProgressLabel"),
  todayProgressBar: document.getElementById("todayProgressBar"),
  focusLabel: document.getElementById("focusLabel"),
  completedCount: document.getElementById("completedCount"),
  taskForm: document.getElementById("taskForm"),
  taskTitleInput: document.getElementById("taskTitleInput"),
  taskSkillInput: document.getElementById("taskSkillInput"),
  taskXpInput: document.getElementById("taskXpInput"),
  taskList: document.getElementById("taskList"),
  skillsGrid: document.getElementById("skillsGrid"),
  projectName: document.getElementById("projectName"),
  projectDescription: document.getElementById("projectDescription"),
  githubLink: document.getElementById("githubLink"),
  projectProgressInput: document.getElementById("projectProgressInput"),
  projectProgressLabel: document.getElementById("projectProgressLabel"),
  projectProgressBar: document.getElementById("projectProgressBar"),
  resetDataBtn: document.getElementById("resetDataBtn")
};

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    return clone(DEFAULT_STATE);
  }

  try {
    const parsed = JSON.parse(saved);
    return {
      ...clone(DEFAULT_STATE),
      ...parsed,
      level: Number(parsed.level) || 1,
      skills: {
        ...clone(DEFAULT_STATE.skills),
        ...parsed.skills
      },
      project: {
        ...clone(DEFAULT_STATE.project),
        ...parsed.project
      },
      tasks: Array.isArray(parsed.tasks) ? parsed.tasks : clone(DEFAULT_STATE.tasks)
    };
  } catch {
    return clone(DEFAULT_STATE);
  }
}

function saveState() {
  syncLevel();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function clone(value) {
  if (typeof structuredClone === "function") {
    return structuredClone(value);
  }

  return JSON.parse(JSON.stringify(value));
}

function makeId() {
  if (window.crypto && typeof window.crypto.randomUUID === "function") {
    return window.crypto.randomUUID();
  }

  return `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function getLevel() {
  return Math.floor(state.xp / 100) + 1;
}

function syncLevel() {
  state.level = getLevel();
}

function getCurrentLevelXp() {
  return state.xp % 100;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function render() {
  syncLevel();
  renderDashboard();
  renderTasks();
  renderSkills();
  renderProject();
  saveState();
}

function renderDashboard() {
  const completedTasks = state.tasks.filter((task) => task.completed).length;
  const totalTasks = state.tasks.length;
  const completionPercent = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);
  const levelXp = getCurrentLevelXp();

  elements.levelValue.textContent = state.level;
  elements.xpLabel.textContent = `${levelXp} / 100 XP`;
  elements.xpBar.style.width = `${levelXp}%`;
  elements.todayProgressLabel.textContent = `${completedTasks} / ${totalTasks} tasks`;
  elements.todayProgressBar.style.width = `${completionPercent}%`;
  elements.focusLabel.textContent = state.project.name;
  elements.completedCount.textContent = completedTasks;
}

function renderTasks() {
  elements.taskList.innerHTML = "";

  state.tasks.forEach((task) => {
    const item = document.createElement("article");
    item.className = `task-item${task.completed ? " completed" : ""}`;

    const checkButton = document.createElement("button");
    checkButton.className = `check-button${task.completed ? " done" : ""}`;
    checkButton.type = "button";
    checkButton.textContent = task.completed ? "OK" : "";
    checkButton.setAttribute("aria-label", task.completed ? "Task completed" : "Complete task");
    checkButton.addEventListener("click", () => toggleTask(task.id));

    const content = document.createElement("div");
    const title = document.createElement("span");
    title.className = "task-title";
    title.textContent = task.title;

    const meta = document.createElement("div");
    meta.className = "task-meta";
    meta.textContent = `${task.xp} XP reward`;

    content.append(title, meta);

    const skill = document.createElement("span");
    skill.className = "skill-pill";
    skill.textContent = task.skill;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.type = "button";
    deleteButton.textContent = "X";
    deleteButton.setAttribute("aria-label", "Delete task");
    deleteButton.addEventListener("click", () => deleteTask(task.id));

    item.append(checkButton, content, skill, deleteButton);
    elements.taskList.appendChild(item);
  });
}

function renderSkills() {
  elements.skillsGrid.innerHTML = "";

  Object.entries(state.skills).forEach(([skill, value]) => {
    const card = document.createElement("article");
    card.className = "card skill-card";

    const header = document.createElement("header");
    const title = document.createElement("h3");
    title.textContent = skill;

    const score = document.createElement("span");
    score.className = "skill-score";
    score.textContent = `${value}/100`;

    const track = document.createElement("div");
    track.className = "progress-track";

    const fill = document.createElement("div");
    fill.className = "progress-fill";
    fill.style.width = `${value}%`;

    header.append(title, score);
    track.appendChild(fill);
    card.append(header, track);
    elements.skillsGrid.appendChild(card);
  });
}

function renderProject() {
  const progress = clamp(Number(state.project.progress) || 0, 0, 100);

  elements.projectName.textContent = state.project.name;
  elements.projectDescription.textContent = state.project.description;
  elements.githubLink.href = state.project.github || "#";
  elements.projectProgressInput.value = progress;
  elements.projectProgressLabel.textContent = `${progress}%`;
  elements.projectProgressBar.style.width = `${progress}%`;
}

function toggleTask(taskId) {
  const task = state.tasks.find((item) => item.id === taskId);

  if (!task || task.completed) {
    return;
  }

  task.completed = true;
  state.xp += task.xp;
  state.skills[task.skill] = clamp((state.skills[task.skill] || 0) + Math.ceil(task.xp / 2), 0, 100);
  state.project.progress = clamp(state.project.progress + 10, 0, 100);
  render();
}

function deleteTask(taskId) {
  state.tasks = state.tasks.filter((task) => task.id !== taskId);
  render();
}

function addTask(event) {
  event.preventDefault();

  const title = elements.taskTitleInput.value.trim();
  const skill = elements.taskSkillInput.value;
  const xp = clamp(Number(elements.taskXpInput.value) || 25, 5, 100);

  if (!title) {
    return;
  }

  state.tasks.unshift({
    id: makeId(),
    title,
    skill,
    xp,
    completed: false,
    createdAt: new Date().toISOString()
  });

  elements.taskForm.reset();
  elements.taskSkillInput.value = "UE";
  elements.taskXpInput.value = "25";
  render();
}

function updateProjectProgress(event) {
  state.project.progress = clamp(Number(event.target.value) || 0, 0, 100);
  render();
}

function resetData() {
  const shouldReset = window.confirm("Reset PROJECT POLARIS data?");

  if (!shouldReset) {
    return;
  }

  state = clone(DEFAULT_STATE);
  render();
}

function setActiveNav() {
  const hash = window.location.hash || "#dashboard";

  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.toggle("active", item.getAttribute("href") === hash);
  });
}

elements.taskForm.addEventListener("submit", addTask);
elements.projectProgressInput.addEventListener("input", updateProjectProgress);
elements.resetDataBtn.addEventListener("click", resetData);
window.addEventListener("hashchange", setActiveNav);

setActiveNav();
render();
