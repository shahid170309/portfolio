    /* =========================================
    MOBILE NAVIGATION
    ========================================= */

    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("open");

    });


    document.querySelectorAll("#navMenu a").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("open");

        });

    });


    /* =========================================
    SCROLL REVEAL ANIMATION
    ========================================= */

    const revealElements =
        document.querySelectorAll(".reveal");


    const revealObserver =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("active");

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });


    /* =========================================
    3D HERO CARD MOUSE EFFECT
    ========================================= */

    const coreCard =
        document.querySelector(".core-card");


    const heroVisual =
        document.querySelector(".hero-visual");


    if (coreCard && heroVisual) {

        heroVisual.addEventListener(
            "mousemove",
            event => {

                const rect =
                    heroVisual.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;
                    const projectGlow =
                    card.querySelector(".project-card-glow");

                if (projectGlow) {
                    projectGlow.style.left = `${x}px`;
                    projectGlow.style.top = `${y}px`;
}
                    const cardGlow =
                document.querySelector(".card-glow");

                if (cardGlow) {
                    cardGlow.style.left = `${x}px`;
                    cardGlow.style.top = `${y}px`;
                    const cardShine =
    document.querySelector(".card-shine");

if (cardShine) {

    const shineX =
        (x / rect.width) * 100;

    cardShine.style.left =
        `${shineX}%`;
}
    }


                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;

                const rotateX =
                        ((y - centerY) / centerY) * -14;

                    const rotateY =
                        ((x - centerX) / centerX) * 14;

                coreCard.style.transform =
                    `perspective(900px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    translateZ(35px)
                    scale(1.03)`;

            }
        );


        heroVisual.addEventListener(
            "mouseleave",
            () => {

                coreCard.style.transform =
        "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0) scale(1)";

            }
        );

    }


    /* =========================================
    PROJECT CARD TILT
    ========================================= */




    /* =========================================
    COPY EMAIL
    ========================================= */
    const copyButton =
        document.getElementById("copyEmail");

    if (copyButton) {

        copyButton.addEventListener(
            "click",
            async () => {

                const emailText =
                    document.getElementById("emailText");

                const email =
                    emailText.textContent;

                try {

                    await navigator.clipboard.writeText(
                        email
                    );

                    copyButton.textContent =
                        "Email Copied ✓";

                    setTimeout(() => {

                        copyButton.textContent =
                            "Copy Email";

                    }, 2000);

                } catch (error) {

                    copyButton.textContent =
                        "Copy Failed";

                }

            }
        );

    }

    /* =========================================
    CURRENT YEAR
    ========================================= */

    document.getElementById("year").textContent =
        new Date().getFullYear();


    /* =========================================
    ACTIVE NAVIGATION
    ========================================= */

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll(
            ".navbar nav a"
        );


    window.addEventListener(
        "scroll",
        () => {

            let current = "";

            sections.forEach(section => {

                const sectionTop =
                    section.offsetTop - 150;

                if (
                    window.scrollY >=
                    sectionTop
                ) {

                    current =
                        section.getAttribute("id");

                }

            });


            navLinks.forEach(link => {

                link.style.color = "";

                if (
                    link.getAttribute("href") ===
                    `#${current}`
                ) {

                    link.style.color =
                        "white";

                }

            });

        }
    );


    /* =========================================
    SMOOTH BUTTON FEEDBACK
    ========================================= */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(anchor => {

        anchor.addEventListener(
            "click",
            function(event) {

                const target =
                    document.querySelector(
                        this.getAttribute("href")
                    );

                if (!target) return;

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });
    /* =========================================
    LOAD PROFILE FROM SPRING BOOT API
    ========================================= */
    const API_BASE_URL = "https://portfolio-acxo.onrender.com";


    async function loadProfile() {

        try {

            const response = await fetch(`${API_BASE_URL}/api/profile`);

            if (!response.ok) {
                throw new Error("Failed to load profile");
            }

            const profiles = await response.json();

            if (!profiles || profiles.length === 0) {
                console.log("No profile data found");
                return;
            }

            const profile = profiles[0];

            console.log("Profile loaded:", profile);

            // Load Experience

    const experienceTimeline =
        document.getElementById("experienceTimeline");

    if (experienceTimeline) {

        try {

            const experienceResponse =
                await fetch(`${API_BASE_URL}/api/experience`);

            if (!experienceResponse.ok) {
                throw new Error("Failed to load experience");
            }

            const experiences =
                await experienceResponse.json();

            experienceTimeline.innerHTML = "";

            experiences.forEach((experience, index) => {

                const article =
                    document.createElement("article");

                article.className =
                    "timeline-item reveal";

                const startDate =
                    new Date(experience.startDate);

                const startText =
                    startDate.toLocaleDateString(
                        "en-US",
                        {
                            month: "short",
                            year: "numeric"
                        }
                    ).toUpperCase();

                let endText = "PRESENT";

                if (experience.endDate) {

                    const endDate =
                        new Date(experience.endDate);

                    endText =
                        endDate.toLocaleDateString(
                            "en-US",
                            {
                                month: "short",
                                year: "numeric"
                            }
                        ).toUpperCase();
                }

                article.innerHTML = `

                    <div class="timeline-dot"></div>

                    <div class="timeline-date">
                        ${startText} — ${endText}
                    </div>

                    <div class="timeline-content">

                        <p class="role">
                            ${experience.role || ""}
                        </p>

                        <h3>
                            ${experience.company || ""}
                        </h3>

                        <p>
                            ${experience.description || ""}
                        </p>

                    </div>

                `;

                experienceTimeline.appendChild(article);
                revealObserver.observe(article);

            });

        } catch (error) {

            console.error(
                "Error loading experience:",
                error
            );

            experienceTimeline.innerHTML =
                "<p>Unable to load experience.</p>";
        }
    }


                // Load Skills

    const skillsContainer =
        document.getElementById("skillsContainer");

    if (skillsContainer) {

        try {

            const skillsResponse =
                await fetch(`${API_BASE_URL}/api/skills`);

            if (!skillsResponse.ok) {
                throw new Error("Failed to load skills");
            }

            const skills =
                await skillsResponse.json();

            skillsContainer.innerHTML = "";

            const groupedSkills = {};

            skills.forEach(skill => {

                if (!groupedSkills[skill.category]) {
                    groupedSkills[skill.category] = [];
                }

                groupedSkills[skill.category].push(
                    skill.skillName
                );

            });

                    const categoryConfig = {

                "Programming": {
                    icon: "☕",
                    title: "Java",
                    featured: true
                },

                "Frameworks": {
                    icon: "◇",
                    title: "Spring Ecosystem"
                },
                "Persistence": {
                    icon: "◆",
                    title: "Persistence"
                },

                "Backend": {
                    icon: "⇄",
                    title: "Architecture"
                },

                "Database": {
                    icon: "▣",
                    title: "Databases"
                },

                "Build Tools": {
                    icon: "⚙",
                    title: "Build & Dependency"
                },

                "Development Tools": {
                    icon: "⌘",
                    title: "Development Tools"
                },

                "AI Tools": {
                    icon: "AI",
                    title: "AI Assisted Development"
                }

            };
            

            Object.keys(groupedSkills).forEach(category => {

                const config =
                    categoryConfig[category] || {
                        icon: "◆",
                        title: category
                    };

                const card =
                    document.createElement("div");

                card.className =
                    config.featured
                        ? "skill-card featured reveal"
                        : "skill-card reveal";

                const skillList =
                    groupedSkills[category]
                        .map(skill =>
                            `<span>${skill}</span>`
                        )
                        .join("");

                if (config.featured) {

                    card.innerHTML = `

                        <div class="skill-icon">
                            ${config.icon}
                        </div>

                        <h3>
                            ${config.title}
                        </h3>

                        <p>
                            Core backend expertise with
                            Java 8 and Java 21,
                            enterprise application
                            modernization and backend
                            development.
                        </p>

                        <div class="skill-level">
                            <span></span>
                        </div>

                        <small>
                            CORE EXPERTISE
                        </small>

                    `;

                } else {

                    card.innerHTML = `

                        <div class="skill-icon">
                            ${config.icon}
                        </div>

                        <h3>
                            ${config.title}
                        </h3>

                        <div class="skill-list">
                            ${skillList}
                        </div>

                    `;
                }

                skillsContainer.appendChild(card);

                revealObserver.observe(card);

            });

        } catch (error) {

            console.error(
                "Error loading skills:",
                error
            );

            skillsContainer.innerHTML =
                "<p>Unable to load skills.</p>";
        }
    }
        //Architecture

            const architectureFlow =
            document.getElementById("architectureFlow");

        if (architectureFlow) {

            try {

                const architectureResponse =
                    await fetch(`${API_BASE_URL}/api/architecture`);

                if (!architectureResponse.ok) {
                    throw new Error("Failed to load architecture");
                }

                const architecture =
                    await architectureResponse.json();

                architecture.sort(
                    (a, b) => a.stepNumber - b.stepNumber
                );

                architectureFlow.innerHTML = "";

                architecture.forEach((step, index) => {

                    const node =
                        document.createElement("div");

                    node.className =
                        index === 1
                            ? "arch-node active reveal"
                            : "arch-node reveal";

                    node.innerHTML = `
                        <small>${String(step.stepNumber).padStart(2, "0")}</small>
                        <strong>${step.component}</strong>
                        <span>${step.technology}</span>
                    `;

                    architectureFlow.appendChild(node);

                    revealObserver.observe(node);

                    if (index < architecture.length - 1) {

                        const connection =
                            document.createElement("div");

                        connection.className = "connection";
                        connection.textContent = "→";

                        architectureFlow.appendChild(connection);
                    }
                });

            } catch (error) {

                console.error(
                    "Architecture loading failed:",
                    error
                );
            }
        }
        // =========================================
    // LOAD PROJECTS
    // =========================================

    const projectsContainer =
        document.getElementById("projectsContainer");

    if (projectsContainer) {

        try {

            const projectsResponse =
                await fetch(`${API_BASE_URL}/api/projects`);

            if (!projectsResponse.ok) {
                throw new Error("Failed to load projects");
            }

            const projects =
                await projectsResponse.json();

            projectsContainer.innerHTML = "";

            projects.forEach((project, index) =>  {

                const card =
                    document.createElement("article");

                card.className =
                    "project-card reveal";

                const technologyList =
                    project.technologies
                        ? project.technologies
                            .split(",")
                            .map(tech => `<span>${tech.trim()}</span>`)
                            .join("")
                        : "";

                card.innerHTML = `
                <div class="project-card-glow"></div>
                        <span class="project-number">
                            ${String(index + 1).padStart(2, "0")}
                        </span>

                        <h3>${project.name}</h3>

                    <p>
                        ${project.description || ""}
                    </p>

                    <div class="tags">
        ${technologyList}
    </div>

    <div class="project-links">

        ${
            project.projectUrl
                ? `<a href="${project.projectUrl}"
                    target="_blank"
                    rel="noopener noreferrer">
                    View Project ↗
                </a>`
                : ""
        }

        ${
            project.githubUrl
                ? `<a href="${project.githubUrl}"
                    target="_blank"
                    rel="noopener noreferrer">
                    GitHub ↗
                </a>`
                : ""
        }

    </div>
                `;

                projectsContainer.appendChild(card);

    revealObserver.observe(card);

        card.addEventListener("mousemove", event => {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const rotateY =
                ((x / rect.width) - 0.5) * 24;

            const rotateX =
                ((y / rect.height) - 0.5) * -24;

            card.style.transform =
                `perspective(900px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateZ(25px)
                translateY(-8px)
                scale(1.02)`;
        });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });
            });

        } catch (error) {

            console.error(
                "Error loading projects:",
                error
            );

            projectsContainer.innerHTML =
                "<p>Unable to load projects.</p>";
        }
    }

    // =========================================
    // LOAD EDUCATION
    // =========================================
    const educationContainer =
        document.getElementById("educationContainer");

    if (educationContainer) {
        try {
            const educationResponse =
                await fetch(`${API_BASE_URL}/api/education`);

            if (!educationResponse.ok) {
                throw new Error("Failed to load education");
            }

            const education =
                await educationResponse.json();

            educationContainer.innerHTML = "";

            education
        .sort((a, b) => a.startYear - b.startYear)
        .forEach(item => {

                const card =
                    document.createElement("article");

                card.className = "education-card reveal";

                card.innerHTML = `
                    <h3>${item.degree || ""}</h3>

                    <h4>${item.institution || ""}</h4>

                    <p>
                        ${item.field || ""}
                    </p>

                    <span>
                        ${item.startYear} - ${item.endYear}
                    </span>
                `;

                educationContainer.appendChild(card);

                revealObserver.observe(card);
            });

        } catch (error) {
            console.error(
                "Error loading education:",
                error
            );

            educationContainer.innerHTML =
                "<p>Unable to load education.</p>";
        }
    }


    // =========================================
    // LOAD CERTIFICATIONS
    // =========================================
    const certificationsContainer =
        document.getElementById("certificationsContainer");

    if (certificationsContainer) {
        try {
            const certificationsResponse =
                await fetch(`${API_BASE_URL}/api/certifications`);

            if (!certificationsResponse.ok) {
                throw new Error("Failed to load certifications");
            }

            const certifications =
                await certificationsResponse.json();

            certificationsContainer.innerHTML = "";

            certifications.forEach((certification, index) => {

                const card =
                    document.createElement("div");

                card.className =
                    "cert-card reveal";

                card.innerHTML = `
                    <span>
                        ${String(index + 1).padStart(2, "0")}
                    </span>

                    <h3>
                        ${certification.name || ""}
                    </h3>

                    ${
                        certification.issuer
                            ? `<p>${certification.issuer}</p>`
                            : ""
                    }
                `;

                certificationsContainer.appendChild(card);

                revealObserver.observe(card);
            });

        } catch (error) {

            console.error(
                "Error loading certifications:",
                error
            );

            certificationsContainer.innerHTML =
                "<p>Unable to load certifications.</p>";
        }
    }
            const emailText =
                document.getElementById("emailText");

            const phoneText =
                document.getElementById("phoneText");

            const contactEmail =
                document.getElementById("contactEmail");

            const contactPhone =
                document.getElementById("contactPhone");

            const emailButton =
                document.getElementById("emailButton");


            if (emailText && profile.email) {
                emailText.textContent = profile.email;
            }

            if (phoneText && profile.phone) {
                phoneText.textContent = profile.phone;
            }


            // Email link
            if (contactEmail && profile.email) {
                contactEmail.href =
                    `mailto:${profile.email}`;
            }


            // Phone link
            if (contactPhone && profile.phone) {
                contactPhone.href =
                    `tel:${profile.phone.replace(/\s+/g, "")}`;
            }


            // Email button
            if (emailButton && profile.email) {
                emailButton.href =
                    `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`;
                emailButton.target = "_blank";
            }
        
            // Hero description
            const heroDescription =
                document.querySelector(".hero-description");

            if (heroDescription) {
                heroDescription.textContent = profile.summary;
            }
            // Profile card information
                const profileName = document.querySelector(".profile-info h3");
                const profileRole = document.querySelector(".profile-info p");
                const profileTitle = document.querySelector(".profile-info span");

                if (profileName) {
                    profileName.textContent = profile.name;
                }

                if (profileRole) {
                    profileRole.textContent = "Lead Engineer";
                }

                if (profileTitle) {
                    profileTitle.textContent = "Java Backend Developer";
                }

            // Profile image
            const profileImages =
                document.querySelectorAll(".profile-image");

            profileImages.forEach(image => {
                if (profile.profileImageUrl) {
                    image.src = profile.profileImageUrl;
                }
            });

        } catch (error) {

            console.error(
                "Error loading profile:",
                error
            );

        }
    }

    loadProfile();