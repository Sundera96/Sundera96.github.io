const skills = [
  /**
   * Languages Section
   */
  { name: "Java", level: 5, tags: ["all", "languages"] },
  { name: "JavaScript", level: 4.5, tags: ["all", "languages"] },
  { name: "Python", level: 4, tags: ["all", "languages"] },
  { name: "C++", level: 3.5, tags: ["all", "languages"] },
  { name: "C#", level: 3.5, tags: ["all", "languages"] },
  { name: "HTML+CSS", level: 3.5, tags: ["all", "languages"] },
  { name: "SQL", level: 4.5, tags: ["all", "languages"] },

  /**
   *
   * Databases Section
   */
  { name: "Postgres", level: 4.5, tags: ["all", "databases"] },
  { name: "MongoDB", level: 4.5, tags: ["all", "databases"] },
  { name: "MySQL", level: 4, tags: ["all", "databases"] },

  /**
   * Tools Section
   */
  { name: "Git", level: 4, tags: ["all", "tools"] },
  { name: "Maven", level: 4.5, tags: ["all", "tools"] },
  { name: "NPM", level: 4.5, tags: ["all", "tools"] },
  { name: "AWS", level: 4, tags: ["all", "tools"] },
  { name: "Docker", level: 4, tags: ["all", "tools"] },
  { name: "GCP", level: 3.5, tags: ["all", "tools"] },
  { name: "Splunk", level: 3.5, tags: ["all", "tools"] },

  /**
   * Framework Section
   */
  { name: "Collections", level: 5, tags: ["all", "frameworks"] },
  { name: "Concurrency (Java)", level: 5, tags: ["all", "frameworks"] },
  { name: "NIO (Java)", level: 4, tags: ["all", "frameworks"] },
  { name: "Spring/Spring Boot", level: 5, tags: ["all", "frameworks"] },
  { name: "Hibernate", level: 5, tags: ["all", "frameworks"] },
  { name: "Jax-RS", level: 5, tags: ["all", "frameworks"] },
  { name: "FastAPI", level: 4, tags: ["all", "frameworks"] },
  { name: "gRPC", level: 3.5, tags: ["all", "frameworks"] },
  { name: "Spark", level: 4, tags: ["all", "frameworks"] },
  { name: "React", level: 4, tags: ["all", "frameworks"] },
  { name: "Spring Security", level: 4, tags: ["all", "frameworks"] },
  { name: "Spring Cloud", level: 4, tags: ["all", "frameworks"] },
];

function createSkillBar(skill) {
  const percentage = (skill.level / 5) * 100;
  return `
        <div class="skill-bar">
            <span class="skill-name">${skill.name}</span>
            <div class="progress">
                <div class="progress-bar" style="width: ${percentage}%"></div>
            </div>
            <span class="skill-level">${skill.level}/5</span>
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", function () {
  showTab("all");
});

function showTab(tabId) {
  console.log("Showing tab:", tabId);
  // Remove active class from all tab buttons
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.remove("active");
  });

  // Add active class to the clicked tab button
  document
    .querySelector(`.tab-button[onclick="showTab('${tabId}')"]`)
    .classList.add("active");

  // Hide all tab contents
  document.querySelectorAll(".tab-content").forEach((content) => {
    content.classList.remove("active");
    content.innerHTML = "";
  });

  // Show selected tab content and populate it with relevant skills
  const selectedTabContent = document.getElementById(tabId);
  selectedTabContent.classList.add("active");

  const sortedSkills = skills
    .filter((skill) => skill.tags.includes(tabId))
    .sort((a, b) => {
      if (b.level !== a.level) {
        return b.level - a.level; // Sort by level descending
      }
      return a.name.localeCompare(b.name); // Sort by name ascending
    });

  sortedSkills.forEach((skill) => {
    if (skill.tags.includes(tabId)) {
      selectedTabContent.innerHTML += createSkillBar(skill);
    }
  });
}
