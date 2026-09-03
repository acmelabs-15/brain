# Specification Mining & Inventory Report: `skills/code-review-and-quality/SKILL.md`

- **Work Unit**: `inv-addy-16`
- **Package**: `addy`
- **File**: `sources/addy/skills/code-review-and-quality/SKILL.md`
- **File Size**: 20,555 bytes (397 lines)
- **Target Inventory Entry**: `docs/analysis/inventory/addy/skills-code-review-and-quality-skill-md.md`
- **Analyst Role**: Spec Miner (`explorer_inv_addy_16_crq`)
- **Date**: 2026-09-03

---

## 1. Inventory Entry Specification (Template-Compliant)

```markdown
---
package: addy
path: skills/code-review-and-quality/SKILL.md
type: skill
bytes: 20555
unit: inv-addy-16
---

# skills/code-review-and-quality/SKILL.md

## Purpose — required, verbatim
> "Multi-dimensional code review with quality gates. Every change gets reviewed before merge — no exceptions. Review covers five axes: correctness, readability, architecture, security, and performance." — skills/code-review-and-quality/SKILL.md:10

## Design intent — required
Establishes an objective, multi-dimensional quality gate prior to code merge that counters superficial nitpicking, rubber-stamping ("LGTM"), and author-blindness. It enforces review across five concrete axes (correctness, readability, architecture, security, performance) anchored by an explicit "Approval Standard" (approve changes that definitely improve overall codebase health, even if imperfect). It defines actionable change-sizing limits (~100 lines good, ~1000 lines split), a taxonomy of named structural remedies (collapsing branches, typed models, explicit type boundaries, separating orchestration from business logic), severity-labelled findings (Critical, Required/no-prefix, Nit, Optional/Consider, FYI) with lead-with-what-matters ordering, multi-model review workflows, dead code hygiene, dependency discipline (one dependency bump per change, changelog and lockfile diff scrutiny), and presumptive blocker criteria. Without it, reviews become inconsistent, high-risk security/architectural flaws get buried under cosmetic comments, massive unreviewable diffs accumulate, and deferred technical debt ("I'll clean it up later") compounds permanently.

## Phase — required
addy:Review

Evidence:
- `sources/addy/README.md:264, 268`: Catalog section `### Review - Quality gates before merge` lists `[code-review-and-quality](skills/code-review-and-quality/SKILL.md)`.
- `sources/addy/README.md:367`: Directory tree lists `│   ├── code-review-and-quality/       #   Review`.
- `sources/addy/CLAUDE.md:25`: Lifecycle mapping places `code-review-and-quality` under `**Review:**`.
- `sources/addy/AGENTS.md:44`: Lifecycle Mapping lists `- REVIEW → code-review-and-quality`.
- `sources/addy-external/code-review-and-quality.md:5`: Displays breadcrumb `Skills / Review`, badge `Review phase`, and command `/review`.

## Inputs — required
- Code change candidate: staged changes, commits, PR diff, or branch to evaluate (`skills/code-review-and-quality/SKILL.md:16, 108-111, 305`)
- Feature specification, design document, or task requirements defining expected behavior (`skills/code-review-and-quality/SKILL.md:30, 148, 227, 311`)
- Test suite and automated test execution results (`skills/code-review-and-quality/SKILL.md:33, 154-162, 198, 341`)
- Verification story provided by author (build status, test pass logs, manual verification notes, UI before/after screenshots) (`skills/code-review-and-quality/SKILL.md:195-203, 340-344, 393`)
- Standing reference checklists:
  - `../../references/security-checklist.md` (`skills/code-review-and-quality/SKILL.md:351`)
  - `../../references/performance-checklist.md` (`skills/code-review-and-quality/SKILL.md:352`)
- Dependency artifacts (for dependency changes/upgrades):
  - `package.json` (`skills/code-review-and-quality/SKILL.md:297`)
  - Lockfile diffs (`skills/code-review-and-quality/SKILL.md:297, 298, 383, 394`)
  - Dependency changelogs and release/migration notes (`skills/code-review-and-quality/SKILL.md:294, 365, 382, 394`)
  - `npm audit` / vulnerability scan output (`skills/code-review-and-quality/SKILL.md:287, 300`)
- User confirmation answers regarding dead code removal (`skills/code-review-and-quality/SKILL.md:237`)

## Outputs — required
- Categorized review findings document with exact file:line references and actionable fix recommendations (`skills/code-review-and-quality/SKILL.md:177-192`):
  - `Critical:` findings (blocks merge: security vulnerability, data loss, broken functionality) (`skills/code-review-and-quality/SKILL.md:184`)
  - `*(no prefix)*` / `Required:` findings (must address before merge) (`skills/code-review-and-quality/SKILL.md:183`)
  - `Nit:` findings (minor, optional: formatting, style preferences) (`skills/code-review-and-quality/SKILL.md:185`)
  - `Optional:` / `Consider:` findings (suggestions worth considering) (`skills/code-review-and-quality/SKILL.md:186`)
  - `FYI` findings (informational only: context for future reference) (`skills/code-review-and-quality/SKILL.md:187`)
- Named structural remedies proposing specific architectural reorganizations (`skills/code-review-and-quality/SKILL.md:88-102`)
- Presumptive blocker evaluations identifying structural degradation or unjustified size inflation (`skills/code-review-and-quality/SKILL.md:396`)
- Dead code inventory list requesting user authorization before deletion (`skills/code-review-and-quality/SKILL.md:231-248`)
- Change sizing recommendations and splitting strategy proposals (`skills/code-review-and-quality/SKILL.md:103-129`)
- Completed Review Checklist (`skills/code-review-and-quality/SKILL.md:304-348`)
- Final review verdict: `Approve — Ready to merge` or `Request changes — Issues must be addressed` (`skills/code-review-and-quality/SKILL.md:345-348`)

## Invokes — required
- skill security-and-hardening — skills/code-review-and-quality/SKILL.md:66, skills/code-review-and-quality/SKILL.md:300
- skill performance-optimization — skills/code-review-and-quality/SKILL.md:79
- reference ../../references/security-checklist.md — skills/code-review-and-quality/SKILL.md:351
- reference ../../references/performance-checklist.md — skills/code-review-and-quality/SKILL.md:352

## Invoked by — required
- command commands/review.toml — commands/review.toml:4
- command commands/code-simplify.toml — commands/code-simplify.toml:21
- command .claude/commands/review.md — .claude/commands/review.md:5
- command .claude/commands/code-simplify.md — .claude/commands/code-simplify.md:22
- command .gemini/commands/review.toml — .gemini/commands/review.toml:4
- command .gemini/commands/code-simplify.toml — .gemini/commands/code-simplify.toml:21
- agent agents/code-reviewer.md — agents/code-reviewer.md:49, agents/code-reviewer.md:101
- skill skills/git-workflow-and-versioning/SKILL.md — skills/git-workflow-and-versioning/SKILL.md:113
- skill skills/doubt-driven-development/SKILL.md — skills/doubt-driven-development/SKILL.md:225
- skill skills/constraint-driven-development/SKILL.md — skills/constraint-driven-development/SKILL.md:10, skills/constraint-driven-development/SKILL.md:33, skills/constraint-driven-development/SKILL.md:307
- skill skills/using-agent-skills/SKILL.md — skills/using-agent-skills/SKILL.md:33, skills/using-agent-skills/SKILL.md:137, skills/using-agent-skills/SKILL.md:156, skills/using-agent-skills/SKILL.md:164, skills/using-agent-skills/SKILL.md:183
- reference references/definition-of-done.md — references/definition-of-done.md:35
- reference references/orchestration-patterns.md — references/orchestration-patterns.md:35
- doc README.md — README.md:56, README.md:268, README.md:367
- doc CLAUDE.md — CLAUDE.md:25
- doc AGENTS.md — AGENTS.md:29, AGENTS.md:44
- doc docs/getting-started.md — docs/getting-started.md:52, docs/getting-started.md:63, docs/getting-started.md:116
- doc docs/adoption-guide.md — docs/adoption-guide.md:42, docs/adoption-guide.md:82
- doc docs/agents.md — docs/agents.md:18
- doc docs/developer-onboarding.md — docs/developer-onboarding.md:107
- doc docs/gemini-cli-setup.md — docs/gemini-cli-setup.md:46, docs/gemini-cli-setup.md:69
- doc docs/cursor-setup.md — docs/cursor-setup.md:23, docs/cursor-setup.md:45, docs/cursor-setup.md:149, docs/cursor-setup.md:160, docs/cursor-setup.md:193
- doc docs/opencode-setup.md — docs/opencode-setup.md:119, docs/opencode-setup.md:162, docs/opencode-setup.md:172, docs/opencode-setup.md:232
- doc docs/copilot-setup.md — docs/copilot-setup.md:10, docs/copilot-setup.md:14
- doc docs/windsurf-setup.md — docs/windsurf-setup.md:15, docs/windsurf-setup.md:41
- doc docs/antigravity-setup.md — docs/antigravity-setup.md:56
- config evals/cases/code-review-and-quality.json — evals/cases/code-review-and-quality.json:2, evals/cases/code-review-and-quality.json:35
- config evals/cases/constraint-driven-development.json — evals/cases/constraint-driven-development.json:29
- script scripts/validate-reference-links-test.js — scripts/validate-reference-links-test.js:145
- external-doc sources/addy-external/code-review-and-quality.md — sources/addy-external/code-review-and-quality.md:1, sources/addy-external/code-review-and-quality.md:5, sources/addy-external/code-review-and-quality.md:8, sources/addy-external/code-review-and-quality.md:10, sources/addy-external/code-review-and-quality.md:12
- external-doc sources/addy-external/code-simplification.md — sources/addy-external/code-simplification.md:12
- external-doc sources/addy-external/security-and-hardening.md — sources/addy-external/security-and-hardening.md:12
- external-doc sources/addy-external/performance-optimization.md — sources/addy-external/performance-optimization.md:12

## Concepts named — required, verbatim
- `code-review-and-quality` — skills/code-review-and-quality/SKILL.md:2 — defined here
- `Multi-dimensional code review` — skills/code-review-and-quality/SKILL.md:10 — defined here
- `quality gates` — skills/code-review-and-quality/SKILL.md:10 — defined here
- `five axes` — skills/code-review-and-quality/SKILL.md:10 — defined here
- `The approval standard` — skills/code-review-and-quality/SKILL.md:12 — defined here
- `The Five-Axis Review` — skills/code-review-and-quality/SKILL.md:22 — defined here
- `Correctness` — skills/code-review-and-quality/SKILL.md:26 — defined here
- `Readability & Simplicity` — skills/code-review-and-quality/SKILL.md:36 — defined here
- `Architecture` — skills/code-review-and-quality/SKILL.md:51 — defined here
- `Security` — skills/code-review-and-quality/SKILL.md:64 — defined here
- `security-and-hardening` — skills/code-review-and-quality/SKILL.md:66 — used here
- `SQL queries parameterized` — skills/code-review-and-quality/SKILL.md:71 — used here
- `XSS` — skills/code-review-and-quality/SKILL.md:72 — used here
- `Performance` — skills/code-review-and-quality/SKILL.md:77 — defined here
- `performance-optimization` — skills/code-review-and-quality/SKILL.md:79 — used here
- `N+1 query` — skills/code-review-and-quality/SKILL.md:81 — used here
- `Structural Remedies` — skills/code-review-and-quality/SKILL.md:88 — defined here
- `typed model` — skills/code-review-and-quality/SKILL.md:92 — used here
- `explicit dispatcher` — skills/code-review-and-quality/SKILL.md:92 — used here
- `Separate orchestration from business logic` — skills/code-review-and-quality/SKILL.md:94 — defined here
- `canonical helper` — skills/code-review-and-quality/SKILL.md:96 — used here
- `type boundary` — skills/code-review-and-quality/SKILL.md:97 — used here
- `pass-through wrapper` — skills/code-review-and-quality/SKILL.md:98 — used here
- `Change Sizing` — skills/code-review-and-quality/SKILL.md:103 — defined here
- `file size` — skills/code-review-and-quality/SKILL.md:113 — defined here
- `diff size` — skills/code-review-and-quality/SKILL.md:113 — defined here
- `one change` — skills/code-review-and-quality/SKILL.md:115 — defined here
- `Splitting strategies` — skills/code-review-and-quality/SKILL.md:117 — defined here
- `Stack` — skills/code-review-and-quality/SKILL.md:121 — defined here
- `By file group` — skills/code-review-and-quality/SKILL.md:122 — defined here
- `Horizontal` — skills/code-review-and-quality/SKILL.md:123 — defined here
- `Vertical` — skills/code-review-and-quality/SKILL.md:124 — defined here
- `Separate refactoring from feature work` — skills/code-review-and-quality/SKILL.md:128 — defined here
- `Change Descriptions` — skills/code-review-and-quality/SKILL.md:130 — defined here
- `Review Process` — skills/code-review-and-quality/SKILL.md:140 — defined here
- `Understand the Context` — skills/code-review-and-quality/SKILL.md:142 — defined here
- `Review the Tests First` — skills/code-review-and-quality/SKILL.md:152 — defined here
- `Review the Implementation` — skills/code-review-and-quality/SKILL.md:164 — defined here
- `Categorize Findings` — skills/code-review-and-quality/SKILL.md:177 — defined here
- `Required` — skills/code-review-and-quality/SKILL.md:183 — defined here
- `Critical:` — skills/code-review-and-quality/SKILL.md:184 — defined here
- `Nit:` — skills/code-review-and-quality/SKILL.md:185 — defined here
- `Optional:` — skills/code-review-and-quality/SKILL.md:186 — defined here
- `Consider:` — skills/code-review-and-quality/SKILL.md:186 — defined here
- `FYI` — skills/code-review-and-quality/SKILL.md:187 — defined here
- `Lead with what matters` — skills/code-review-and-quality/SKILL.md:191 — defined here
- `Verify the Verification` — skills/code-review-and-quality/SKILL.md:193 — defined here
- `verification story` — skills/code-review-and-quality/SKILL.md:195 — defined here
- `Multi-Model Review Pattern` — skills/code-review-and-quality/SKILL.md:205 — defined here
- `Dead Code Hygiene` — skills/code-review-and-quality/SKILL.md:231 — defined here
- `Ask before deleting` — skills/code-review-and-quality/SKILL.md:237 — defined here
- `Review Speed` — skills/code-review-and-quality/SKILL.md:249 — defined here
- `Handling Disagreements` — skills/code-review-and-quality/SKILL.md:258 — defined here
- `Honesty in Review` — skills/code-review-and-quality/SKILL.md:269 — defined here
- `Sycophancy` — skills/code-review-and-quality/SKILL.md:276 — used here
- `Dependency Discipline` — skills/code-review-and-quality/SKILL.md:279 — defined here
- `npm audit` — skills/code-review-and-quality/SKILL.md:287 — used here
- `Prefer standard library and existing utilities over new dependencies` — skills/code-review-and-quality/SKILL.md:290 — defined here
- `Upgrading an existing dependency` — skills/code-review-and-quality/SKILL.md:292 — defined here
- `Semver` — skills/code-review-and-quality/SKILL.md:294 — used here
- `One dependency per change` — skills/code-review-and-quality/SKILL.md:295 — defined here
- `Let the tests decide` — skills/code-review-and-quality/SKILL.md:296 — defined here
- `transitive graph` — skills/code-review-and-quality/SKILL.md:297 — used here
- `lockfile` — skills/code-review-and-quality/SKILL.md:298 — used here
- `supply-chain risk` — skills/code-review-and-quality/SKILL.md:300 — used here
- `The Review Checklist` — skills/code-review-and-quality/SKILL.md:302 — defined here
- `Approve` — skills/code-review-and-quality/SKILL.md:346 — defined here
- `Request changes` — skills/code-review-and-quality/SKILL.md:347 — defined here
- `security-checklist` — skills/code-review-and-quality/SKILL.md:351 — used here
- `performance-checklist` — skills/code-review-and-quality/SKILL.md:352 — used here
- `Common Rationalizations` — skills/code-review-and-quality/SKILL.md:354 — defined here
- `Red Flags` — skills/code-review-and-quality/SKILL.md:368 — defined here
- `Verification` — skills/code-review-and-quality/SKILL.md:385 — defined here
- `Presumptive blockers` — skills/code-review-and-quality/SKILL.md:396 — defined here

## Structure
- Code Review and Quality (line 6)
- Overview (line 8)
- When to Use (line 14)
- The Five-Axis Review (line 22)
  - 1. Correctness (line 26)
  - 2. Readability & Simplicity (line 36)
  - 3. Architecture (line 51)
  - 4. Security (line 64)
  - 5. Performance (line 77)
- Structural Remedies (line 88)
- Change Sizing (line 103)
- Change Descriptions (line 130)
- Review Process (line 140)
  - Step 1: Understand the Context (line 142)
  - Step 2: Review the Tests First (line 152)
  - Step 3: Review the Implementation (line 164)
  - Step 4: Categorize Findings (line 177)
  - Step 5: Verify the Verification (line 193)
- Multi-Model Review Pattern (line 205)
- Dead Code Hygiene (line 231)
- Review Speed (line 249)
- Handling Disagreements (line 258)
- Honesty in Review (line 269)
- Dependency Discipline (line 279)
- The Review Checklist (line 302)
- See Also (line 349)
- Common Rationalizations (line 354)
- Red Flags (line 368)
- Verification (line 385)

## Scripts — required if type is script or the skill ships scripts
none — type is skill and no scripts are shipped or inlined.

## Defects — required
- doc-drift — commands/review.toml:14, .claude/commands/review.md:15, and .gemini/commands/review.toml:14 instruct "Categorize findings as Critical, Important, or Suggestion", contradicting skills/code-review-and-quality/SKILL.md:181-188 which establishes the severity taxonomy as `*(no prefix)*` (Required), `Critical:`, `Nit:`, `Optional: / Consider:`, and `FYI`.
- doc-drift — README.md:268 describes severity labels parenthetically as `(Nit/Optional/FYI)`, omitting `Critical` and `Required` which are the two merge-blocking categories defined in skills/code-review-and-quality/SKILL.md:181-184.
- doc-drift — agents/code-reviewer.md:101 states "Invoke via: /review (single-perspective review) or /ship (parallel fan-out alongside security-auditor and test-engineer)", but commands/review.toml:4, .claude/commands/review.md:5, and .gemini/commands/review.toml:4 directly invoke the `code-review-and-quality` skill rather than delegating to the `code-reviewer` agent persona.
- doc-drift — references/orchestration-patterns.md:35 describes `/review → code-reviewer (with code-review-and-quality skill) → report`, which contradicts the actual command implementations in commands/review.toml that invoke the skill directly without a persona wrapper.
- internal-contradiction — skills/code-review-and-quality/SKILL.md:181-188 defines required findings as having `*(no prefix)*`, whereas the example prompt in line 228 instructs the agent to "Flag any issues as Critical, Required, Optional, or Nit", using `Required` as an explicit prefix label instead of omitting the prefix.
- cross-file-contradiction — skills/code-review-and-quality/SKILL.md:113 specifies that around 1000 total lines in a single file is an inspection signal to extract helpers, whereas skills/code-simplification/SKILL.md:25 sets "The Rule of 500: Any file over 500 lines is a refactoring candidate... 500 lines is a warning, 1000 lines is a crisis."

## Observations
- High-leverage concept: "The Approval Standard" (line 12) shifts reviewer posture from stylistic perfectionism to continuous improvement: approve code that definitely improves codebase health, even if imperfect.
- Named Structural Remedies (lines 88-102) provide a concrete vocabulary for refactoring suggestions (e.g., "Collapse duplicate branches", "Make type boundary explicit", "Separate orchestration from business logic", "Delete pass-through wrapper").
- Anti-sycophancy rule: "Honesty in Review" (lines 269-278) explicitly warns that sycophancy is an agent failure mode in reviews and forbids rubber-stamping ("LGTM") or softening real bugs into minor concerns.
- Presumptive blockers heuristic (line 396): Establishes clear criteria for when architectural issues block merge vs when they are merely advisory.
- Dependency Discipline (lines 279-300): Unusually rigorous guidance mandating one dependency upgrade per PR, lockfile diff review, changelog analysis over semver trust, and letting tests decide.
- Multi-Model Review Pattern (lines 205-230): Specifically outlines multi-agent / multi-model workflows (Model A writes, Model B reviews, Model A addresses feedback, Human decides).

## Context cost
- File size: 20,555 bytes (~5,140 tokens).
- When loaded with referenced external checklists:
  - `references/security-checklist.md`: 4,924 bytes (~1,230 tokens)
  - `references/performance-checklist.md`: 12,637 bytes (~3,160 tokens)
  - Total composite context cost: 38,116 bytes (~9,530 tokens).
```

---

## 2. Features Discovered Table

| # | Category | Feature | Description | Inputs | Outputs | Error Behavior | Discovered Via |
|---|----------|---------|-------------|--------|---------|----------------|----------------|
| 1 | Quality Gate | Approval Standard | Approves code that definitely improves codebase health even if imperfect; prohibits blocking over personal authoring style | Proposed change, project conventions | Approval verdict (`Approve — Ready to merge`) | Blocks merge if change degrades health or breaks invariants | `SKILL.md:12` |
| 2 | Review Axis | Correctness Assessment | Evaluates spec adherence, boundary values, error paths, test adequacy, race conditions, and off-by-one errors | Spec/requirements, diff, test suite | Correctness findings | Flags Critical or Required findings on failure | `SKILL.md:26-35` |
| 3 | Review Axis | Readability & Simplicity Assessment | Evaluates naming, control flow, cognitive load, lines-to-value ratio, dead code, and bolting conditionals onto unrelated flows | Source diff | Readability findings, simplification proposals | Flags design smells and complexity traps | `SKILL.md:36-50` |
| 4 | Review Axis | Architectural Assessment | Evaluates pattern alignment, module boundaries, duplication, dependency flow, type boundary explicitness, and logic leakage | System design, diff | Architectural findings, refactoring suggestions | Flags presumptive blockers if complexity is relocated | `SKILL.md:51-63` |
| 5 | Review Axis | Security Assessment | Evaluates input sanitization, secret management, auth checks, parameterization, XSS encoding, and boundary validation | Untrusted inputs, boundaries | Security findings, vulnerability flags | Blocks merge (`Critical:`) on security vulnerabilities | `SKILL.md:64-76` |
| 6 | Review Axis | Performance Assessment | Evaluates N+1 queries, unbounded loops/fetching, async operations, UI re-renders, pagination, hot-path allocations | Hot paths, query patterns | Performance findings, bottleneck warnings | Flags Required or Optional optimization items | `SKILL.md:77-87` |
| 7 | Structural Remedy | Named Structural Remedies | Proposes explicit restructuring patterns: typed model/dispatcher, collapsing branches, separating orchestration, explicit type boundary | Structural smell identified | Actionable named remedy | Prevents vague "this is complex" comments | `SKILL.md:88-102` |
| 8 | Sizing & Splitting | Change Sizing & Splitting Strategies | Enforces ~100 line target, ~300 line single logical change, ~1000 line split; provides 4 splitting strategies (Stack, By file group, Horizontal, Vertical) | Change diff size, file size | Decomposition plan / split recommendations | Flags ~1000 line changes as "Too large. Split it." | `SKILL.md:103-129` |
| 9 | Version Control | Standalone Change Descriptions | Mandates short imperative first line and body explaining what changed, why, context, decisions, and shortcomings | Change context, bug/doc links | Commit / PR description | Rejects anti-patterns ("Fix bug", "Fix build") | `SKILL.md:130-139` |
| 10 | Workflow | Five-Step Review Process | Standardized review sequence: 1. Context → 2. Tests first → 3. Implementation → 4. Categorize findings → 5. Verify verification | PR/diff, tests, verification story | Structured review report | Enforces reading tests and spec before diff | `SKILL.md:140-204` |
| 11 | Finding Taxonomy | Severity-Labelled Taxonomy | Categorizes comments into `*(no prefix)*` (Required), `Critical:`, `Nit:`, `Optional: / Consider:`, `FYI` | Review observations | Prefixed review findings | Distinguishes merge-blockers from cosmetic nits | `SKILL.md:177-190` |
| 12 | Leverage | Lead With What Matters | Orders findings by leverage: correctness & security first, structural regressions second, cosmetic nits last | Unsorted findings | Prioritized findings list | Prevents burying structural issues under nits | `SKILL.md:191-192` |
| 13 | Verification | Verification Story Audit | Checks author verification story: tests executed, build success, manual testing, UI screenshots, before/after comparison | Author test/build evidence | Verification audit verdict | Flags unverified claims or missing test runs | `SKILL.md:193-204` |
| 14 | Orchestration | Multi-Model Review Pattern | Asymmetric review workflow: Model A writes, Model B reviews for correctness/architecture, Model A revises, Human decides | Multi-agent task setup | High-assurance verified code | Catches single-model blind spots | `SKILL.md:205-230` |
| 15 | Code Hygiene | Dead Code Hygiene | Identifies unreachable code/constants and prompts user explicitly before deletion ("Ask before deleting") | Refactored codebase | Dead code removal prompt | Prevents silent or accidental deletion | `SKILL.md:231-248` |
| 16 | Team Norms | Review Speed Norms | Establishes responsiveness cadence (respond within 1 business day max; prioritize fast feedback over final approval) | Review requests | Fast iteration cycles | Prevents blocking engineering teammates | `SKILL.md:249-257` |
| 17 | Governance | Disagreement Resolution Hierarchy | Strict priority: 1. Technical facts/data > 2. Style guides > 3. Software design principles > 4. Codebase consistency | Disputed review feedback | Objective resolution | Disallows "I'll clean it up later" excuses | `SKILL.md:258-268` |
| 18 | Ethics | Honesty & Anti-Sycophancy | Prohibits rubber-stamping ("LGTM") and softening bugs; mandates quantifying problems and graceful override acceptance | Critical observations | Direct, uncompromised review comments | Counters model sycophancy | `SKILL.md:269-278` |
| 19 | Supply Chain | Dependency Discipline & Upgrades | Rules for adding deps (prefer stdlib) and upgrading (one dep per change, changelog review, lockfile diff review, tests decide) | `package.json`, lockfile, changelog | Isolated dependency change | Prevents bulk bump breakages and supply chain attacks | `SKILL.md:279-301` |
| 20 | Template | Standard Review Checklist | Markdown review checklist covering Context, Correctness, Readability, Architecture, Security, Performance, Verification, Verdict | PR/change metadata | Checkbox review report | Prevents skipping quality dimensions | `SKILL.md:302-348` |
| 21 | Anti-Pattern | Rationalizations & Red Flags | Exhaustive tables of common rationalizations ("It works", "Clean up later", "AI code is fine") and explicit red flags | Reviewer/author attitudes | Red flag warnings | Blocks release when red flags are present | `SKILL.md:354-384` |
| 22 | Gate Enforcement | Presumptive Blockers | Presumptive blocking rules for structural relocation, file size boundary overflow, shared module pollution, and silent fallbacks | Structural diff | Required change escalation | Blocks merge if structure is actively worsened | `SKILL.md:396` |

---

## 3. Edge Cases & Behavioral Matrix Table

| # | Feature | Input / Condition | Observed / Documented Behavior | Authoritative Citation |
|---|---------|-------------------|--------------------------------|------------------------|
| 1 | Approval Standard | Change improves overall health but is not how reviewer would write it | Reviewer MUST approve the change; do not block over personal authoring preferences | `SKILL.md:12` |
| 2 | Correctness | Tests pass, but tests only assert implementation details or omit edge cases | Review fails Step 2 ("Review the Tests First"); reviewer flags missing regression coverage | `SKILL.md:33, 158` |
| 3 | Readability | New conditional added to handle a special case inside an existing unrelated flow | Reviewer flags as design smell (not a cosmetic nit); mandates pushing logic into helper or policy | `SKILL.md:48` |
| 4 | Architecture | Refactor rearranges code but reader must still hold identical number of concepts | Refactor is rejected ("complexity relocation"); reviewer demands restructuring that eliminates branches/modes | `SKILL.md:60, 363` |
| 5 | Architecture | Feature-specific logic added to a shared utility or package | Reviewer rejects placement; mandates keeping logic in owning layer and surfaces as presumptive blocker | `SKILL.md:61, 95, 396` |
| 6 | Change Sizing | PR diff contains 1,200 lines of code across multiple features | Flagged as "Too large. Split it."; reviewer proposes one of four splitting strategies (Stack, Group, Horiz, Vert) | `SKILL.md:110, 117-125` |
| 7 | Change Sizing | PR contains automated refactoring or complete file deletions with 2,000 lines | Acceptable exception; reviewer verifies high-level intent rather than scrutinizing every deleted line | `SKILL.md:126` |
| 8 | Change Sizing | PR combines a refactor of existing code with a new feature addition | Mandates separating into two PRs: submit refactor first, then feature change | `SKILL.md:128` |
| 9 | File Sizing | Small 20-line diff added to a file that is already 1,100 lines long | Reviewer asks author to decompose and extract helpers *first* before adding more logic | `SKILL.md:113, 379` |
| 10 | Severity Labeling | Reviewer has 1 architectural flaw and 10 cosmetic style preferences | Reviewer leads with the structural flaw; structural flaw *is* the review; cosmetic nits must not bury it | `SKILL.md:191` |
| 11 | Dead Code | Unreachable function identified during refactor | Reviewer lists function explicitly and asks user confirmation ("Ask before deleting"); does not delete silently | `SKILL.md:237-247` |
| 12 | Disagreements | Author argues "I will clean this up in a subsequent PR" | Reviewer rejects deferred cleanup; requires cleanup before merge or formal bug filing with self-assignment | `SKILL.md:267, 360, 377` |
| 13 | Dependencies | Dependabot / developer submits a single PR upgrading 15 packages ("bump deps") | Reviewer rejects bulk PR; mandates 1 dependency per PR, changelog review, and lockfile diff verification | `SKILL.md:292-298, 366, 382` |
| 14 | Dependencies | Dependency upgrade passes installation but has no tests covering its usage | Reviewer flags coverage gap as the primary finding; requires adding behavioral tests before upgrade merges | `SKILL.md:296` |
| 15 | Supply Chain | High-severity vulnerability discovered in `npm audit` | Reviewer halts review and delegates triage to `security-and-hardening` skill | `SKILL.md:300` |
| 16 | Invariant Handling | Code introduces `try/catch` with a silent fallback that masks an unclear invariant | Reviewer flags as presumptive blocker; demands making type/state boundary explicit | `SKILL.md:62, 396` |

---

## 4. Verification and Execution Evidence

1. **Static Analysis & File Integrity**:
   - `sources/addy/skills/code-review-and-quality/SKILL.md` was read in full (lines 1–397, 20,555 bytes).
   - Validated that no `scripts/` or `references/` directories exist within `sources/addy/skills/code-review-and-quality/`.
   - Validated that all target references (`../../references/security-checklist.md`, `../../references/performance-checklist.md`) exist on disk at `sources/addy/references/`.

2. **Eval Framework Execution**:
   - Ran `bun scripts/run-evals.js` from `sources/addy/`.
   - Result: Exited with code `0`.
   - Output: `Running skill evals across 25 skills, 25 case files. 136 checks passed — 0 error(s), 0 warning(s). trigger rank-1 rate: 86% (72/84 positive prompts rank their skill first). PASSED.`
   - Confirmed `evals/cases/code-review-and-quality.json` passes automated trigger and structural routing evaluations.
