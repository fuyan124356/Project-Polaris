const STORAGE_KEY = "project-polaris-growth-os";

const DEFAULT_MASTER_CONTEXT = [
  "# MASTER_CONTEXT.md",
  "",
  "Identity: First-year vocational college student building toward a Technical Artist career in the game industry.",
  "Long-term goal: Become a UE-focused Technical Artist capable of joining studios like Tencent, NetEase, or miHoYo.",
  "Learning style: Task-driven, visual feedback, clear milestones, short execution loops.",
  "Core stack: Unreal Engine, C++, GitHub, technical art, English.",
  "AI collaboration rules: Be direct, practical, structured, and keep continuity across conversations."
].join("\n");

const DEFAULT_CURRENT_STATE = [
  "# CURRENT_STATE.md",
  "",
  "Current learning stage: Foundation building for Unreal Engine, C++, GitHub, and technical art workflow.",
  "Current project: UE Rain Room Scene.",
  "Current focus: Build room layout, setup lighting, render a 10-second scene.",
  "Next milestones: Finish a presentable scene render, commit progress to GitHub, and document lessons learned.",
  "Weekly review: Update this file with current progress, blockers, and next actions."
].join("\n");

const ZH_MASTER_CONTEXT = [
  "# MASTER_CONTEXT.md",
  "",
  "身份：一年级高职学生，正在走向游戏行业 Technical Artist 职业路径。",
  "长期目标：成为以 UE 为核心的技术美术，具备进入腾讯、网易、米哈游等游戏公司的能力。",
  "学习风格：任务驱动、视觉反馈、清晰里程碑、短执行闭环。",
  "核心技术栈：Unreal Engine、C++、GitHub、技术美术、英语。",
  "AI 协作规则：直接、实用、有结构，并在不同对话之间保持连续性。"
].join("\n");

const ZH_CURRENT_STATE = [
  "# CURRENT_STATE.md",
  "",
  "当前学习阶段：正在打 Unreal Engine、C++、GitHub 与技术美术工作流基础。",
  "当前项目：UE 雨中房间场景。",
  "当前焦点：搭建房间布局、设置灯光、渲染 10 秒场景。",
  "下一阶段里程碑：完成可展示的场景渲染，提交 GitHub，并记录复盘。",
  "每周更新：在这里更新当前进度、卡点和下一步行动。"
].join("\n");

const COPY = {
  en: {
    brandTitle: "Growth OS",
    dashboard: "Dashboard",
    tasks: "Tasks",
    skills: "Skills",
    projects: "Projects",
    aiMemory: "AI Memory",
    careerTrack: "TA Career Track",
    skillLine: "UE / C++ / Art / English",
    topEyebrow: "Daily execution cockpit",
    topTitle: "Build visible progress today.",
    translate: "中文",
    reset: "Reset Data",
    level: "LEVEL",
    xpProgression: "XP progression",
    xpHint: "Every completed task moves the system forward.",
    today: "Today",
    focus: "Focus",
    projectHint: "Default production project",
    completed: "Completed",
    completedHint: "Tasks finished in this save",
    taskSystem: "Task system",
    dailyMissions: "Daily Missions",
    addTaskPlaceholder: "Add a new task",
    addTask: "Add Task",
    skillSystem: "Skill system",
    growthMap: "Growth Map",
    projectSystem: "Project system",
    productionBoard: "Production Board",
    activeProject: "Active UE project",
    githubPlaceholder: "GitHub Placeholder",
    projectProgress: "Project Progress",
    continuityLayer: "Continuity Layer",
    memoryIntro: "AI Memory helps different AI models continue the same long-term journey by preserving goals, current learning state, and collaboration rules so each new conversation can start with context.",
    cardA: "Card A",
    cardB: "Card B",
    masterDescription: "Long-term identity, goals, learning style, career direction and AI collaboration rules. Updated only occasionally.",
    currentDescription: "Current learning stage, current projects, current focus and next milestones. Updated weekly.",
    export: "Export",
    workflow: "Workflow",
    workflowMaster: "MASTER_CONTEXT",
    workflowCurrent: "CURRENT_STATE",
    workflowConversation: "New AI Conversation",
    workflowUnderstands: "AI immediately understands the user.",
    xpReward: "XP reward",
    taskCompleted: "Task completed",
    completeTask: "Complete task",
    deleteTask: "Delete task",
    resetConfirm: "Reset PROJECT POLARIS data?"
  },
  zh: {
    brandTitle: "成长操作系统",
    dashboard: "仪表盘",
    tasks: "任务",
    skills: "技能",
    projects: "项目",
    aiMemory: "AI 记忆",
    careerTrack: "TA 职业路径",
    skillLine: "UE / C++ / 美术 / 英语",
    topEyebrow: "每日执行驾驶舱",
    topTitle: "今天做出看得见的进步。",
    translate: "English",
    reset: "重置数据",
    level: "等级",
    xpProgression: "XP 进度",
    xpHint: "每完成一个任务，系统都会向前推进。",
    today: "今日",
    focus: "焦点",
    projectHint: "默认制作项目",
    completed: "已完成",
    completedHint: "当前存档中完成的任务",
    taskSystem: "任务系统",
    dailyMissions: "每日任务",
    addTaskPlaceholder: "添加一个新任务",
    addTask: "添加任务",
    skillSystem: "技能系统",
    growthMap: "成长地图",
    projectSystem: "项目系统",
    productionBoard: "制作看板",
    activeProject: "当前 UE 项目",
    githubPlaceholder: "GitHub 占位链接",
    projectProgress: "项目进度",
    continuityLayer: "连续性层",
    memoryIntro: "AI 记忆帮助不同 AI 模型接续同一条长期成长路线，保留长期目标、当前学习状态和协作规则，让每次新对话都能带着上下文开始。",
    cardA: "卡片 A",
    cardB: "卡片 B",
    masterDescription: "长期身份、目标、学习风格、职业方向和 AI 协作规则。只需要偶尔更新。",
    currentDescription: "当前学习阶段、当前项目、当前焦点和下一阶段里程碑。建议每周更新。",
    export: "导出",
    workflow: "工作流",
    workflowMaster: "MASTER_CONTEXT",
    workflowCurrent: "CURRENT_STATE",
    workflowConversation: "新的 AI 对话",
    workflowUnderstands: "AI 立即理解用户。",
    xpReward: "XP 奖励",
    taskCompleted: "任务已完成",
    completeTask: "完成任务",
    deleteTask: "删除任务",
    resetConfirm: "重置 PROJECT POLARIS 数据？"
  }
};

const DEFAULT_STATE = {
  xp: 0,
  level: 1,
  language: "en",
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
  },
  aiMemory: {
    masterContext: DEFAULT_MASTER_CONTEXT,
    currentState: DEFAULT_CURRENT_STATE
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
  masterContextInput: document.getElementById("masterContextInput"),
  currentStateInput: document.getElementById("currentStateInput"),
  exportMasterBtn: document.getElementById("exportMasterBtn"),
  exportCurrentBtn: document.getElementById("exportCurrentBtn"),
  translateBtn: document.getElementById("translateBtn"),
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
      language: parsed.language === "zh" ? "zh" : "en",
      skills: {
        ...clone(DEFAULT_STATE.skills),
        ...parsed.skills
      },
      project: {
        ...clone(DEFAULT_STATE.project),
        ...parsed.project
      },
      aiMemory: {
        ...clone(DEFAULT_STATE.aiMemory),
        ...parsed.aiMemory
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

function currentCopy() {
  return COPY[state.language === "zh" ? "zh" : "en"];
}

function text(key) {
  return currentCopy()[key] || COPY.en[key] || key;
}

function setText(selector, value) {
  const element = document.querySelector(selector);

  if (element) {
    element.textContent = value;
  }
}

function applyLanguage() {
  const labels = currentCopy();

  document.documentElement.lang = state.language === "zh" ? "zh-CN" : "en";
  document.title = state.language === "zh" ? "PROJECT POLARIS - 成长操作系统" : "PROJECT POLARIS - Growth OS";

  setText(".brand h1", labels.brandTitle);
  setText('a[href="#dashboard"]', labels.dashboard);
  setText('a[href="#tasks"]', labels.tasks);
  setText('a[href="#skills"]', labels.skills);
  setText('a[href="#projects"]', labels.projects);
  setText('a[href="#ai-memory"]', labels.aiMemory);
  setText(".student-card strong", labels.careerTrack);
  setText(".student-card p", labels.skillLine);
  setText(".topbar .eyebrow", labels.topEyebrow);
  setText(".topbar h2", labels.topTitle);
  setText("#translateBtn", labels.translate);
  setText("#resetDataBtn", labels.reset);
  setText(".level-ring small", labels.level);
  setText(".hero-info .eyebrow", labels.xpProgression);
  setText(".hero-info .muted", labels.xpHint);
  setText("#tasks .section-header .eyebrow", labels.taskSystem);
  setText("#tasks .section-header h2", labels.dailyMissions);
  setText("#taskForm button", labels.addTask);
  setText("#skills .section-header .eyebrow", labels.skillSystem);
  setText("#skills .section-header h2", labels.growthMap);
  setText("#projects .section-header .eyebrow", labels.projectSystem);
  setText("#projects .section-header h2", labels.productionBoard);
  setText(".project-main .eyebrow", labels.activeProject);
  setText("#githubLink", labels.githubPlaceholder);
  setText('label[for="projectProgressInput"] span', labels.projectProgress);
  setText("#ai-memory .section-header .eyebrow", labels.aiMemory);
  setText("#ai-memory .section-header h2", labels.continuityLayer);
  setText(".memory-intro p", labels.memoryIntro);
  setText(".memory-cards .memory-card:nth-child(1) .eyebrow", labels.cardA);
  setText(".memory-cards .memory-card:nth-child(2) .eyebrow", labels.cardB);
  setText(".memory-cards .memory-card:nth-child(1) .memory-description", labels.masterDescription);
  setText(".memory-cards .memory-card:nth-child(2) .memory-description", labels.currentDescription);
  setText("#exportMasterBtn", labels.export);
  setText("#exportCurrentBtn", labels.export);
  setText(".workflow-card .eyebrow", labels.workflow);
  setText(".workflow .workflow-step:nth-child(1)", labels.workflowMaster);
  setText(".workflow .workflow-step:nth-child(3)", labels.workflowCurrent);
  setText(".workflow .workflow-step:nth-child(5)", labels.workflowConversation);
  setText(".workflow .workflow-step:nth-child(7)", labels.workflowUnderstands);

  elements.taskTitleInput.placeholder = labels.addTaskPlaceholder;

  const todayCard = elements.todayProgressLabel.closest(".stat-card");
  const focusCard = elements.focusLabel.closest(".stat-card");
  const completedCard = elements.completedCount.closest(".stat-card");

  todayCard.querySelector(".eyebrow").textContent = labels.today;
  focusCard.querySelector(".eyebrow").textContent = labels.focus;
  focusCard.querySelector(".muted").textContent = labels.projectHint;
  completedCard.querySelector(".eyebrow").textContent = labels.completed;
  completedCard.querySelector(".muted").textContent = labels.completedHint;
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
  renderAiMemory();
  applyLanguage();
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
  elements.todayProgressLabel.textContent = state.language === "zh" ? `${completedTasks} / ${totalTasks} 个任务` : `${completedTasks} / ${totalTasks} tasks`;
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
    checkButton.setAttribute("aria-label", task.completed ? text("taskCompleted") : text("completeTask"));
    checkButton.addEventListener("click", () => toggleTask(task.id));

    const content = document.createElement("div");
    const title = document.createElement("span");
    title.className = "task-title";
    title.textContent = task.title;

    const meta = document.createElement("div");
    meta.className = "task-meta";
    meta.textContent = `${task.xp} ${text("xpReward")}`;

    content.append(title, meta);

    const skill = document.createElement("span");
    skill.className = "skill-pill";
    skill.textContent = task.skill;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.type = "button";
    deleteButton.textContent = "X";
    deleteButton.setAttribute("aria-label", text("deleteTask"));
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

function renderAiMemory() {
  elements.masterContextInput.value = state.aiMemory.masterContext;
  elements.currentStateInput.value = state.aiMemory.currentState;
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

function updateAiMemory() {
  state.aiMemory.masterContext = elements.masterContextInput.value;
  state.aiMemory.currentState = elements.currentStateInput.value;
  saveState();
}

function translateDefaultContent(targetLanguage) {
  const taskTitlePairs = [
    ["Build UE room layout", "搭建 UE 房间布局"],
    ["Setup lighting", "设置灯光"],
    ["Render a 10-second scene", "渲染 10 秒场景"]
  ];
  const englishProjectName = "UE Rain Room Scene";
  const chineseProjectName = "UE 雨中房间场景";
  const englishProjectDescription = DEFAULT_STATE.project.description;
  const chineseProjectDescription = "在 Unreal Engine 中制作一个小型雨中房间环境，包含布局、灯光、镜头运动和 10 秒渲染展示。";

  state.tasks.forEach((task) => {
    taskTitlePairs.forEach(([englishTitle, chineseTitle]) => {
      if (targetLanguage === "zh" && task.title === englishTitle) {
        task.title = chineseTitle;
      }

      if (targetLanguage === "en" && task.title === chineseTitle) {
        task.title = englishTitle;
      }
    });
  });

  if (targetLanguage === "zh" && state.project.name === englishProjectName) {
    state.project.name = chineseProjectName;
  }

  if (targetLanguage === "en" && state.project.name === chineseProjectName) {
    state.project.name = englishProjectName;
  }

  if (targetLanguage === "zh" && state.project.description === englishProjectDescription) {
    state.project.description = chineseProjectDescription;
  }

  if (targetLanguage === "en" && state.project.description === chineseProjectDescription) {
    state.project.description = englishProjectDescription;
  }

  if (targetLanguage === "zh" && state.aiMemory.masterContext === DEFAULT_MASTER_CONTEXT) {
    state.aiMemory.masterContext = ZH_MASTER_CONTEXT;
  }

  if (targetLanguage === "en" && state.aiMemory.masterContext === ZH_MASTER_CONTEXT) {
    state.aiMemory.masterContext = DEFAULT_MASTER_CONTEXT;
  }

  if (targetLanguage === "zh" && state.aiMemory.currentState === DEFAULT_CURRENT_STATE) {
    state.aiMemory.currentState = ZH_CURRENT_STATE;
  }

  if (targetLanguage === "en" && state.aiMemory.currentState === ZH_CURRENT_STATE) {
    state.aiMemory.currentState = DEFAULT_CURRENT_STATE;
  }
}

function toggleLanguage() {
  const nextLanguage = state.language === "zh" ? "en" : "zh";

  state.language = nextLanguage;
  translateDefaultContent(nextLanguage);
  render();
}

function exportMemoryFile(filename, content) {
  const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function resetData() {
  const shouldReset = window.confirm(text("resetConfirm"));

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
elements.masterContextInput.addEventListener("input", updateAiMemory);
elements.currentStateInput.addEventListener("input", updateAiMemory);
elements.exportMasterBtn.addEventListener("click", () => exportMemoryFile("MASTER_CONTEXT.md", state.aiMemory.masterContext));
elements.exportCurrentBtn.addEventListener("click", () => exportMemoryFile("CURRENT_STATE.md", state.aiMemory.currentState));
elements.translateBtn.addEventListener("click", toggleLanguage);
elements.resetDataBtn.addEventListener("click", resetData);
window.addEventListener("hashchange", setActiveNav);

setActiveNav();
render();
