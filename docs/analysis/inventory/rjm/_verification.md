# Phase 1V Inventory Verification: Package `rjm`

- **Verifier:** Phase 1V Inventory Verifiers (Adversarial Reviewer Contract, METHOD.md §6.4)
- **Date:** 2026-09-06
- **Sample Size:** 175 source files (~15% sample across 4 verification parts)
- **Evaluation Standard:** METHOD.md §4 checklist, §5 Phase 1V question: *"does any file contain a named concept, invocation, produced artifact, or defect that its inventory entry omits?"*

---

## 1. Executive Summary & Overall Verdict

**Overall Verdict:** **FAIL (Omissions and Defects Found)**

The adversarial verification pass across the four parts of package `rjm` identified omissions, graph inconsistencies, and defects requiring remediation:

1. **METHOD §2.4(a) Deduplication Violation:**
   - `docs/analysis/inventory/rjm/scripts-maintenance---init---py.md` was written as a separate card for an exact 0-byte duplicate alias of `scripts/progress/py.typed`. The canonical card `scripts-progress-py-typed.md` already claims it under `aliases:`. Per §2.4(a), no separate entry may be written for an alias.
2. **Missing `verified:` Frontmatter Line:**
   - `scripts-eval-eval-agent-vs-baseline-py.md` and `scripts-github-core-recovery-manifest-py.md` omitted the required `verified:` line in YAML frontmatter.
3. **Card Frontmatter Type Misclassification:**
   - `.claude/skills/steering-matcher/get_applicable_steering.py` (`claude-skills-steering-matcher-get-applicable-steering-py.md`) has frontmatter `type: skill` instead of `type: script`.
4. **Omitted Invocation Inconsistencies:**
   - In `docs/workflow-commands.md`: omitted `agent decision-critic` (line 59) and five invoked skills (`execution-plans`, `code-qualities-assessment`, `security-scan`, `golden-principles`, `taste-lints`).
   - In `.claude/agents/qa.md`: omitted `agent orchestrator` from `## Invokes` (lines 804, 810).
   - In `working-with-legacy-code.md`: omitted `reference enterprise-patterns.md` (line 156).
   - In `external_signal_gate.py`: omitted `script quality_gate_agents` (line 59) and misclassified imported variable `REPOSITORY_ROOT` as a script instead of module `path_utils` (lines 50, 61).
   - In `normalize_line_endings.py`, `push_ref_staleness.py`, and `validate_skill_shells.py`: omitted `command git` from `## Invokes`.
5. **Omitted Defects (Missing Paths & Orphan Annotations):**
   - Unflagged `missing-path` defects to `wiki/concepts/...` in `claude-skills-analyze-references-quality-boy-scout-rule-md.md`, `prometheus-recording-rules.md`, and `bitter-lesson-llms.md`.
   - Cards with `Invoked by: orphan` omitting the `orphan` defect under `## Defects`: `check_pr_merge_state.py`, `collect_metrics_and_report.py`, `establish_ai_review_deadline.py`, `require_job_results.py`, `spec_prepare_context.py`.
   - Redundant placement / orphan defect in `steering-matcher/get_applicable_steering.py` at skill root vs `scripts/get_applicable_steering.py`.
6. **Omitted Named Concepts:**
   - `README.md`: omitted 6 diagram lifecycle phases (`DEFINE`, `PLAN`, `BUILD`, `VERIFY`, `REVIEW`, `SHIP`) and scenario agent roles (`implementer`, `qa`, `security`, `architect`, `analyst`, `devops`, `independent-thinker`, `high-level-advisor`, `roadmap`).
   - `docs/workflow-commands.md`: finding severities (`Critical`, `Important`, `Suggestion`), PR types (`CODE`, `WORKFLOW`, `CONFIG`, `DOCS`, `MIXED`), and legacy numbered commands (`/0-init` through `/4-security`).
   - `claude-agents-security-md.md`: `STRIDE` (line 719), `OWASP Agentic Top 10` / `ASI01` (line 191).
   - `claude-skills-threat-modeling-skill-md.md`: `Residual Risk` (lines 272, 371), mitigation taxonomy (`Mitigate`, `Accept`, `Transfer`, `Eliminate`).
   - Saliency omissions in `cynefin-deep-dive.md`, `design-pit-of-success.md`, `explainers-and-intents.md`, `hybrid-memory-architecture.md`, `diagnosis-and-actions.md`, `changelog.md`, `working-with-legacy-code.md`, `generate_threat_matrix.py`.

---

## 2. Summary Table of Actionable Findings

| Card | Category | Finding |
|---|---|---|
| `scripts-maintenance---init---py.md` | §2.4(a) Dedupe | Separate card for exact 0-byte alias of `scripts/progress/py.typed`. Must be deleted. |
| `scripts-eval-eval-agent-vs-baseline-py.md` | Frontmatter | Missing `verified:` line in frontmatter. |
| `scripts-github-core-recovery-manifest-py.md` | Frontmatter | Missing `verified:` line in frontmatter. |
| `claude-skills-steering-matcher-get-applicable-steering-py.md` | Frontmatter / Defects | `type: skill` instead of `type: script`. Omitted misplaced file / orphan defect. |
| `docs-workflow-commands-md.md` | Invokes / Concepts | Missing `agent decision-critic` and 5 skills from Invokes; missing severities, PR types, legacy commands from Concepts. |
| `readme-md.md` | Concepts | Missing 6 lifecycle phases (`DEFINE`, `PLAN`, `BUILD`, `VERIFY`, `REVIEW`, `SHIP`) and scenario roles. |
| `claude-agents-qa-md.md` | Invokes | Missing `agent orchestrator` (lines 804, 810). |
| `claude-agents-security-md.md` | Concepts | Missing `STRIDE` (line 719), `OWASP Agentic Top 10` / `ASI01` (line 191). |
| `claude-skills-analyze-references-quality-boy-scout-rule-md.md` | Defects | Missing `missing-path` defect to `wiki/concepts/Mental Models/Boy Scout Rule.md`. |
| `claude-skills-observability-references-prometheus-recording-rules-md.md` | Defects | Missing `missing-path` defect to `wiki/concepts/Observability/Prometheus Recording Rules.md`. |
| `claude-skills-programming-advisor-references-bitter-lesson-llms-md.md` | Defects | Missing `missing-path` defect to `wiki/concepts/AI Strategy/The Bitter Lesson of Building with LLMs.md`. |
| `claude-skills-software-engineering-library-references-working-with-legacy-code-md.md` | Invokes / Concepts | Missing `reference enterprise-patterns.md` (line 156); missing concepts `AGENTS.md floor`, `enterprise-patterns.md`. |
| `claude-skills-threat-modeling-skill-md.md` | Concepts | Missing `Residual Risk`, `Mitigate`, `Accept`, `Transfer`, `Eliminate`. |
| `scripts-ci-check-pr-merge-state-py.md` | Defects | Missing `orphan` defect line in `## Defects`. |
| `scripts-ci-collect-metrics-and-report-py.md` | Defects | Missing `orphan` defect line in `## Defects`. |
| `scripts-ci-establish-ai-review-deadline-py.md` | Defects | Missing `orphan` defect line in `## Defects`. |
| `scripts-ci-require-job-results-py.md` | Invoked by / Defects | Lists out-of-scope `.github/workflows/` instead of `orphan`; missing `orphan` defect line. |
| `scripts-ci-spec-prepare-context-py.md` | Invoked by / Defects | Lists out-of-scope files instead of `orphan`; missing `orphan` defect line. |
| `scripts-normalize-line-endings-py.md` | Invokes | Missing `command git` (line 24). |
| `scripts-quality-gate-external-signal-gate-py.md` | Invokes | Missing `script quality_gate_agents`; misclassified `REPOSITORY_ROOT` instead of `path_utils`. |
| `scripts-quality-gate-spec-external-signal-gate-py.md` | Invokes | Misclassified `REPOSITORY_ROOT` instead of `path_utils`. |
| `scripts-validation-push-ref-staleness-py.md` | Invokes | Missing `command git` (line 117). |
| `scripts-validation-validate-skill-shells-py.md` | Invokes | Missing `command git` (line 82). |
| `agents-analysis-claude-code-plugin-marketplaces-md.md` | Concepts | Missing `pluginRoot` (line 82), `PostToolUse` (line 205). |

---

## 3. Remediation Required

Per METHOD.md §5:
- Re-run / remediate affected inventory cards to address all omissions and defects.
- Remove redundant duplicate card `scripts-maintenance---init---py.md`.
