// =====================
// ELEMENT SELECTORS
// =====================
const form = document.getElementById("customerForm");
const customerList = document.getElementById("customerList");

// Sidebar
const dashboardBtn = document.getElementById("dashboardBtn");
const leadsBtn = document.getElementById("leadsBtn");
const logoutBtn = document.getElementById("logoutBtn");

const dashboardSection = document.getElementById("dashboardSection");
const leadsSection = document.getElementById("leadsSection");

// Login
const loginPage = document.getElementById("loginPage");
const loginBtn = document.getElementById("loginBtn");
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");

// Activity
const activityList = document.getElementById("activityList");

// =====================
// STATE VARIABLES
// =====================
let total = 0;
let newLeads = 0;
let contacted = 0;
let converted = 0;

// =====================
// LOGIN CHECK
// =====================
if (localStorage.getItem("loggedIn") === "true") {
  loginPage.style.display = "none";
}

// =====================
// LOGIN
// =====================
loginBtn.addEventListener("click", () => {
  if (
    loginEmail.value === "admin@crm.com" &&
    loginPassword.value === "admin123"
  ) {
    localStorage.setItem("loggedIn", "true");
    loginPage.style.display = "none";
    addActivity("🔐 Admin logged in");
  } else {
    alert("Invalid credentials (Demo)");
  }
});

// =====================
// LOGOUT
// =====================
logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("loggedIn");
  loginPage.style.display = "flex";
  addActivity("🚪 Admin logged out");
});

// =====================
// DASHBOARD UPDATE
// =====================
function updateDashboard() {
  document.getElementById("totalCount").innerText = total;
  document.getElementById("newCount").innerText = newLeads;
  document.getElementById("contactedCount").innerText = contacted;
  document.getElementById("convertedCount").innerText = converted;

  let rate = total > 0 ? Math.round((converted / total) * 100) : 0;
  document.getElementById("conversionRate").innerText = rate + "%";
  document.getElementById("ringPercent").innerText = rate + "%";

  // Ring animation
  const circle = document.querySelector(".ring .progress");
  const circumference = 314;
  const offset = circumference - (rate / 100) * circumference;
  circle.style.strokeDashoffset = offset;

  // Insight logic
  const insight = document.getElementById("insightText");

  if (total === 0) {
    insight.innerText = "No leads yet. Start adding leads to see insights.";
  } else if (converted === 0) {
    insight.innerText =
      "⚠️ No leads converted yet. Try following up with contacted leads.";
  } else if (rate < 40) {
    insight.innerText =
      "📉 Conversion is low. Improve follow-ups to increase conversion.";
  } else {
    insight.innerText =
      "📈 Great job! Your lead conversion rate is healthy.";
  }
}

// =====================
// RECENT ACTIVITY
// =====================
function addActivity(message) {
  if (activityList.querySelector(".empty")) {
    activityList.innerHTML = "";
  }

  const li = document.createElement("li");
  li.textContent = message;
  activityList.prepend(li);
}

// =====================
// ADD CUSTOMER
// =====================
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${name}</td>
    <td>${email}</td>
    <td>${phone}</td>
    <td>
      <select class="status New" data-prev="New">
        <option value="New">New</option>
        <option value="Contacted">Contacted</option>
        <option value="Converted">Converted</option>
      </select>
    </td>
    <td>
      <button class="delete-btn">Delete</button>
    </td>
  `;

  customerList.appendChild(row);

  total++;
  newLeads++;
  updateDashboard();
  addActivity(`➕ Lead "${name}" added`);

  form.reset();
});

// =====================
// DELETE CUSTOMER
// =====================
customerList.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    const row = e.target.closest("tr");
    const status = row.querySelector(".status").value;

    total--;
    if (status === "New") newLeads--;
    if (status === "Contacted") contacted--;
    if (status === "Converted") converted--;

    row.remove();
    updateDashboard();
    addActivity("🗑️ Lead deleted");
  }
});

// =====================
// STATUS CHANGE
// =====================
customerList.addEventListener("change", function (e) {
  if (e.target.classList.contains("status")) {
    const prev = e.target.getAttribute("data-prev");
    const curr = e.target.value;

    if (prev === "New") newLeads--;
    if (prev === "Contacted") contacted--;
    if (prev === "Converted") converted--;

    if (curr === "New") newLeads++;
    if (curr === "Contacted") contacted++;
    if (curr === "Converted") converted++;

    e.target.classList.remove("New", "Contacted", "Converted");
    e.target.classList.add(curr);
    e.target.setAttribute("data-prev", curr);

    updateDashboard();
    addActivity(`🔄 Lead status changed to "${curr}"`);
  }
});

// =====================
// SIDEBAR NAVIGATION
// =====================
dashboardBtn.addEventListener("click", () => {
  dashboardSection.style.display = "block";
  leadsSection.style.display = "none";

  dashboardBtn.classList.add("active");
  leadsBtn.classList.remove("active");
});

leadsBtn.addEventListener("click", () => {
  dashboardSection.style.display = "none";
  leadsSection.style.display = "block";

  leadsBtn.classList.add("active");
  dashboardBtn.classList.remove("active");
});