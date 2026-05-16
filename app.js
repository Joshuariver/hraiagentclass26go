/**
 * HR AI Agent Dev Process App - Core Logic (Routing & Rendering)
 */

document.addEventListener("DOMContentLoaded", () => {
    App.init();
});

const App = {
    init() {
        this.handleRoute();

        window.addEventListener("hashchange", () => {
            this.handleRoute();
        });

        document.getElementById("modal-close").addEventListener("click", () => this.closeModal());
        document.getElementById("modal-overlay").addEventListener("click", (event) => {
            if (event.target.id === "modal-overlay") this.closeModal();
        });
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") this.closeModal();
        });
    },

    handleRoute() {
        const hash = window.location.hash || "#/process";
        const root = document.getElementById("content-root");

        this.updateNavActive(hash);

        if (hash.startsWith("#/process")) {
            this.renderProcessView(root);
        } else if (hash.startsWith("#/workflow")) {
            this.renderStaticPage(root, "agentic-workflow");
        } else if (hash.startsWith("#/reasoning")) {
            this.renderStaticPage(root, "cognitive-reasoning");
        } else if (hash.startsWith("#/harness")) {
            this.renderStaticPage(root, "harness-engineering");
        } else if (hash.startsWith("#/environment")) {
            this.renderStaticPage(root, "environment");
        } else if (hash.startsWith("#/examples")) {
            this.renderStaticPage(root, "examples");
        } else {
            window.location.hash = "#/process";
        }
    },

    updateNavActive(hash) {
        const route = hash.split("?")[0];
        document.querySelectorAll(".nav-menu a").forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === route);
        });
    },

    renderProcessView(container) {
        const stages = AppData.processStages.map((stage) => this.renderStageCard(stage)).join("");

        container.innerHTML = `
            <div class="view-header">
                <h1>AI Agent Development Process</h1>
                <p class="subtitle">HR AI Agent를 구현하기 위한 7단계 개발 절차입니다.</p>
            </div>
            <div id="process-timeline" class="timeline-container">
                ${stages}
            </div>
        `;

        this.refreshIcons();
    },

    renderStageCard(stage) {
        const skillTags = stage.relatedSkills.map((skillId) => {
            const skill = AppData.skills[skillId];
            const label = skill ? skill.title : skillId;
            const missingClass = skill ? "" : " missing";

            return `
                <button class="skill-tag${missingClass}" type="button" onclick="App.showSkillModal('${skillId}')">
                    ${this.escapeHtml(label)}
                </button>
            `;
        }).join("");

        const prompts = stage.relatedPrompts.length > 0
            ? stage.relatedPrompts.map((promptId) => this.renderPromptCard(promptId)).join("")
            : `<p class="text-muted">연계된 프롬프트가 없습니다.</p>`;

        const activitiesList = (stage.activities || [])
            .map((a) => `<li>${this.escapeHtml(a)}</li>`).join("");
        const deliverablesList = (stage.deliverables || [])
            .map((d) => `<li>${this.escapeHtml(d)}</li>`).join("");
        const risksList = (stage.risks || [])
            .map((r) => `<li>${this.escapeHtml(r)}</li>`).join("");

        const detailMarkdownHtml = stage.detailMarkdown
            ? `<div class="stage-detail-markdown">${marked.parse(stage.detailMarkdown)}</div>`
            : "";

        const metaGrid = (stage.activities || stage.deliverables) ? `
            <div class="stage-meta-grid">
                ${stage.activities ? `
                <div class="detail-section">
                    <h4 class="detail-section-title">이 단계에서 할 일</h4>
                    <ul>${activitiesList}</ul>
                </div>` : ""}
                ${stage.deliverables ? `
                <div class="detail-section">
                    <h4 class="detail-section-title">산출물</h4>
                    <ul>${deliverablesList}</ul>
                </div>` : ""}
            </div>` : "";

        const hrExampleHtml = stage.hrExample ? `
            <div class="detail-section detail-section-example">
                <h4 class="detail-section-title">HR 예시</h4>
                <p>${this.escapeHtml(stage.hrExample)}</p>
            </div>` : "";

        const risksHtml = stage.risks ? `
            <div class="detail-section detail-section-risks">
                <h4 class="detail-section-title">주요 리스크</h4>
                <ul>${risksList}</ul>
            </div>` : "";

        const hasDetail = stage.detailMarkdown || stage.activities || stage.hrExample || stage.risks;
        const detailToggle = hasDetail ? `
            <button class="stage-detail-toggle" type="button" onclick="App.toggleStageDetail('${this.escapeHtml(stage.id)}')">
                <i data-lucide="chevron-down"></i>
                <span>상세 보기</span>
            </button>
            <div class="stage-detail" id="detail-${this.escapeHtml(stage.id)}" hidden>
                ${detailMarkdownHtml}
                ${metaGrid}
                ${hrExampleHtml}
                ${risksHtml}
            </div>` : "";

        return `
            <section class="stage-card" id="${this.escapeHtml(stage.id)}">
                <div class="stage-marker" aria-hidden="true"></div>
                <h2 class="stage-title">${this.escapeHtml(stage.title)}</h2>
                <p class="stage-desc">${this.escapeHtml(stage.shortSummary || stage.description)}</p>

                ${detailToggle}

                <div class="skill-section">
                    <span class="section-label">Related AI Skills</span>
                    <div class="skill-tags">
                        ${skillTags}
                    </div>
                </div>

                <div class="prompt-section">
                    <span class="section-label">Prompt Templates</span>
                    <div class="prompt-grid">
                        ${prompts}
                    </div>
                </div>
            </section>
        `;
    },

    toggleStageDetail(stageId) {
        const detail = document.getElementById(`detail-${stageId}`);
        const toggle = document.querySelector(`#${stageId} .stage-detail-toggle`);
        if (!detail || !toggle) return;

        const isHidden = detail.hasAttribute("hidden");
        if (isHidden) {
            detail.removeAttribute("hidden");
            toggle.querySelector("span").textContent = "접기";
            toggle.querySelector("i").setAttribute("data-lucide", "chevron-up");
        } else {
            detail.setAttribute("hidden", "");
            toggle.querySelector("span").textContent = "상세 보기";
            toggle.querySelector("i").setAttribute("data-lucide", "chevron-down");
        }
        this.refreshIcons();
    },

    renderPromptCard(promptId) {
        const prompt = AppData.prompts[promptId];

        if (!prompt) {
            return `
                <div class="prompt-card prompt-card-missing">
                    <div class="prompt-title">Missing prompt: ${this.escapeHtml(promptId)}</div>
                </div>
            `;
        }

        const purposeHtml = prompt.purpose
            ? `<p class="prompt-purpose">${this.escapeHtml(prompt.purpose)}</p>`
            : "";
        const usageNoteHtml = prompt.usageNote
            ? `<p class="prompt-usage-note">${this.escapeHtml(prompt.usageNote)}</p>`
            : "";

        return `
            <div class="prompt-card">
                <div class="prompt-card-header">
                    <span class="prompt-module-tag">${this.escapeHtml(prompt.module)}</span>
                    <button class="copy-btn" type="button" onclick="App.copyPrompt('${promptId}', this)" title="Copy prompt">
                        <i data-lucide="copy"></i>
                    </button>
                </div>
                <div class="prompt-title">${this.escapeHtml(prompt.title)}</div>
                ${purposeHtml}
                <pre class="prompt-content-preview">${this.escapeHtml(prompt.content)}</pre>
                ${usageNoteHtml}
            </div>
        `;
    },

    showSkillModal(skillId) {
        const skill = AppData.skills[skillId];
        const modalBody = document.getElementById("modal-body");
        const overlay = document.getElementById("modal-overlay");

        if (!skill) {
            modalBody.innerHTML = `
                <h2>${this.escapeHtml(skillId)}</h2>
                <p class="text-muted">이 스킬은 아직 data.js에 상세 정보가 등록되지 않았습니다.</p>
            `;
        } else {
            const summaryRow = skill.summary ? `
                <div class="modal-info-item modal-summary">
                    <p>${this.escapeHtml(skill.summary)}</p>
                </div>` : "";
            const conceptRow = skill.concept ? `
                <div class="modal-info-item">
                    <label>Concept</label>
                    <p>${this.escapeHtml(skill.concept)}</p>
                </div>` : "";
            const whenToUseRow = (skill.whenToUse || skill.useCase) ? `
                <div class="modal-info-item">
                    <label>When to Use</label>
                    <p>${this.escapeHtml(skill.whenToUse || skill.useCase)}</p>
                </div>` : "";
            const hrUseCaseRow = skill.hrUseCase ? `
                <div class="modal-info-item">
                    <label>HR Use Case</label>
                    <p>${this.escapeHtml(skill.hrUseCase)}</p>
                </div>` : "";
            const cautionRow = skill.caution ? `
                <div class="modal-info-item modal-caution">
                    <label>Caution</label>
                    <p>${this.escapeHtml(skill.caution)}</p>
                </div>` : "";
            const sourceRow = skill.sourceNote ? `
                <div class="modal-info-item">
                    <label>Source</label>
                    <p class="text-muted">${this.escapeHtml(skill.sourceNote)}</p>
                </div>` : "";

            modalBody.innerHTML = `
                <h2>${this.escapeHtml(skill.title)}</h2>
                ${summaryRow}
                ${conceptRow}
                ${whenToUseRow}
                ${hrUseCaseRow}
                ${cautionRow}
                ${sourceRow}
            `;
        }

        overlay.classList.add("active");
        this.refreshIcons();
    },

    closeModal() {
        document.getElementById("modal-overlay").classList.remove("active");
    },

    copyPrompt(promptId, buttonElement) {
        const prompt = AppData.prompts[promptId];
        if (!prompt) return;

        const originalInner = buttonElement.innerHTML;
        const markSuccess = () => {
            buttonElement.innerHTML = '<i data-lucide="check"></i>';
            buttonElement.classList.add("copied");
            this.refreshIcons();

            setTimeout(() => {
                buttonElement.innerHTML = originalInner;
                buttonElement.classList.remove("copied");
                this.refreshIcons();
            }, 1800);
        };

        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(prompt.content).then(markSuccess).catch(() => {
                this.copyWithFallback(prompt.content, markSuccess);
            });
        } else {
            this.copyWithFallback(prompt.content, markSuccess);
        }
    },

    copyWithFallback(text, onSuccess) {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "fixed";
        textarea.style.top = "-9999px";
        document.body.appendChild(textarea);
        textarea.select();

        try {
            document.execCommand("copy");
            onSuccess();
        } catch (error) {
            alert("복사에 실패했습니다. 프롬프트를 직접 선택해서 복사해 주세요.");
        } finally {
            document.body.removeChild(textarea);
        }
    },

    renderStaticPage(container, pageId) {
        const content = AppData.staticPages[pageId];

        if (!content) {
            container.innerHTML = "<h1>Page Not Found</h1>";
            return;
        }

        container.innerHTML = `
            <article class="markdown-body">
                ${marked.parse(content)}
            </article>
        `;

        this.refreshIcons();
    },

    refreshIcons() {
        if (window.lucide) {
            lucide.createIcons();
        }
    },

    escapeHtml(value) {
        return String(value)
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");
    }
};
