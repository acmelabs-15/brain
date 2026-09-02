# Handoff Report — Work Unit `inv-addy-4`

## 1. Observation

All 17 assigned files in `sources/addy/` for work unit `inv-addy-4` were read in full from first line to last (satisfying METHOD.md R1):
1. `references/security-checklist.md` (11,881 bytes, 206 lines)
2. `references/accessibility-checklist.md` (5,206 bytes, 161 lines)
3. `references/definition-of-done.md` (3,798 bytes, 68 lines)
4. `.opencode/skills` (864 bytes stat / 10 bytes symlink pointing to `../skills/`)
5. `.agents/plugins/marketplace.json` (535 bytes, 23 lines)
6. `.claude/rules/skills-contributing.md` (988 bytes, 16 lines)
7. `.claude/commands/ship.md` (4,601 bytes, 73 lines)
8. `.claude/commands/constraints.md` (2,762 bytes, 33 lines)
9. `.claude/commands/code-simplify.md` (1,068 bytes, 23 lines)
10. `.claude/commands/build.md` (3,959 bytes, 45 lines)
11. `.claude/commands/plan.md` (805 bytes, 19 lines)
12. `.claude/commands/spec.md` (913 bytes, 18 lines)
13. `.claude/commands/review.md` (846 bytes, 17 lines)
14. `.claude/commands/test.md` (665 bytes, 20 lines)
15. `.claude/commands/webperf.md` (1,974 bytes, 33 lines)
16. `agents/code-reviewer.md` (3,995 bytes, 103 lines)
17. `agents/test-engineer.md` (3,275 bytes, 96 lines)

Total source size: 48,135 bytes (49,135 bytes with symlink stat).

### Existence & Cross-Reference Observations
- All referenced skills (`security-and-hardening`, `frontend-ui-engineering`, `planning-and-task-breakdown`, `incremental-implementation`, `shipping-and-launch`, `code-review-and-quality`, `code-simplification`, `documentation-and-adrs`, `observability-and-instrumentation`, `constraint-driven-development`, `test-driven-development`, `spec-driven-development`, `performance-optimization`, `browser-testing-with-devtools`, `debugging-and-error-recovery`, `doubt-driven-development`) exist under `sources/addy/skills/`.
- All referenced docs (`CONTRIBUTING.md`, `docs/skill-anatomy.md`, `docs/agents.md`) and referenced agents (`agents/security-auditor.md`, `agents/web-performance-auditor.md`) exist under `sources/addy/`.
- Command parity check: `bun scripts/validate-commands.js` was executed from `sources/addy` and exited with code `0`, confirming 9 commands across `.claude/commands/` (.md), `.gemini/commands/` (.toml), and `commands/` (.toml) share identical descriptions.
- Cross-file naming drift: `.claude/commands/plan.md` is named `plan.md` in Claude Code commands, but named `planning.toml` in `commands/` and `.gemini/commands/`.
- Cross-file content drift: `.claude/commands/plan.md:18-19` includes an overwrite guard ("If tasks/plan.md or tasks/todo.md already exists...") that is absent in `commands/planning.toml` and `.gemini/commands/planning.toml`.
- Cross-file severity contradiction: `.claude/commands/review.md:15` specifies 3 severity tiers (`Critical, Important, Suggestion`), whereas `agents/code-reviewer.md:51-57` and `skills/code-review-and-quality/SKILL.md` specify 4 severity tiers (`Critical, Required, Optional, Nit`).

---

## 2. Logic Chain

1. **Existence Verification**: We executed directory and file inspection for all paths referenced across all 17 files. Every internal link, rule target, skill reference, and persona target exists and is reachable.
2. **Defect Categorization (R5)**:
   - Found 1 `doc-drift` defect: `.claude/commands/plan.md:1` is named `plan.md` in Claude Code commands while `commands/planning.toml` and `.gemini/commands/planning.toml` use `planning.toml`, and `.claude/commands/plan.md:18-19` has overwrite guard instructions omitted from both TOML files.
   - Found 1 `cross-file-contradiction` defect: `.claude/commands/review.md:15` uses severity labels `Critical, Important, Suggestion`, while `agents/code-reviewer.md:49-57` uses `Critical, Required, Optional, Nit`.
3. **Execution Verification (R2)**:
   - There are no `.js`/`.sh` executable script files within these 17 files.
   - The validation script `scripts/validate-commands.js` covering the commands was executed with `bun` and verified to exit 0.
4. **Extraction Fidelity (R3, R4, R6)**:
   - All `Purpose` and `Concepts named` fields were extracted verbatim with exact `path:line` citations.
   - Terminology adheres to the `addy:*` namespace prefix.
   - Every named technique, framework, artifact, gate, role, checklist, and phase has been inventoried.

---

## 3. Caveats

No caveats. All 17 files have been fully inspected, cross-checked against other files in `sources/addy/`, and extracted into complete inventory entries and a work-unit report.

---

## 4. Conclusion

Below is the complete Work-Unit Report for `inv-addy-4` followed by the 17 complete, standalone Inventory Entries ready for persistence into `docs/analysis/inventory/addy/`.

---

### Work-Unit Report: `inv-addy-4`

```markdown
---
unit: inv-addy-4
phase: 1
package: addy
session: 004
subagent_returned: complete
---

# Unit inv-addy-4

## Files assigned
- [x] references/security-checklist.md
- [x] references/accessibility-checklist.md
- [x] references/definition-of-done.md
- [x] .opencode/skills
- [x] .agents/plugins/marketplace.json
- [x] .claude/rules/skills-contributing.md
- [x] .claude/commands/ship.md
- [x] .claude/commands/constraints.md
- [x] .claude/commands/code-simplify.md
- [x] .claude/commands/build.md
- [x] .claude/commands/plan.md
- [x] .claude/commands/spec.md
- [x] .claude/commands/review.md
- [x] .claude/commands/test.md
- [x] .claude/commands/webperf.md
- [x] agents/code-reviewer.md
- [x] agents/test-engineer.md

## Outputs produced
- `docs/analysis/inventory/addy/references-security-checklist-md.md` (11,881 bytes source)
- `docs/analysis/inventory/addy/references-accessibility-checklist-md.md` (5,206 bytes source)
- `docs/analysis/inventory/addy/references-definition-of-done-md.md` (3,798 bytes source)
- `docs/analysis/inventory/addy/opencode-skills.md` (864 bytes source)
- `docs/analysis/inventory/addy/agents-plugins-marketplace-json.md` (535 bytes source)
- `docs/analysis/inventory/addy/claude-rules-skills-contributing-md.md` (988 bytes source)
- `docs/analysis/inventory/addy/claude-commands-ship-md.md` (4,601 bytes source)
- `docs/analysis/inventory/addy/claude-commands-constraints-md.md` (2,762 bytes source)
- `docs/analysis/inventory/addy/claude-commands-code-simplify-md.md` (1,068 bytes source)
- `docs/analysis/inventory/addy/claude-commands-build-md.md` (3,959 bytes source)
- `docs/analysis/inventory/addy/claude-commands-plan-md.md` (805 bytes source)
- `docs/analysis/inventory/addy/claude-commands-spec-md.md` (913 bytes source)
- `docs/analysis/inventory/addy/claude-commands-review-md.md` (846 bytes source)
- `docs/analysis/inventory/addy/claude-commands-test-md.md` (665 bytes source)
- `docs/analysis/inventory/addy/claude-commands-webperf-md.md` (1,974 bytes source)
- `docs/analysis/inventory/addy/agents-code-reviewer-md.md` (3,995 bytes source)
- `docs/analysis/inventory/addy/agents-test-engineer-md.md` (3,275 bytes source)
- `docs/analysis/inventory/addy/_units/inv-addy-4.md`

## Scripts executed
- `bun scripts/validate-commands.js` from `sources/addy` (exit code: 0) — validated command description sync and parity across `.claude/commands/`, `.gemini/commands/`, and `commands/`.

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Slash commands in `.claude/commands/` serve as the top-level orchestration entry points that invoke underlying skills in `skills/` and delegate to specialist personas in `agents/`.
- `/ship` implements parallel fan-out across three personas (`code-reviewer`, `security-auditor`, `test-engineer`) in Phase A, followed by single-context synthesis in Phase B and Go/No-Go decision with rollback planning in Phase C.
- `/build` introduces the autonomous `/build auto` mode that collapses planning and implementation into an automated loop while preserving per-task TDD tests and atomic commits.
- Naming discrepancy between `.claude/commands/plan.md` and `commands/planning.toml` / `.gemini/commands/planning.toml` (handled by `NAME_MAP` in `validate-commands.js`).

## Blocked or uncertain
none

## Time and size
Approximate source read: ~12,200 tokens (48,135 bytes). Approximate output written: ~18,500 tokens.
```

---

### Inventory Entries (17 Files)

#### 1. `references/security-checklist.md`
```markdown
---
package: addy
path: references/security-checklist.md
type: doc
bytes: 11881
unit: inv-addy-4
---

# references/security-checklist.md

## Purpose — required, verbatim
> "# Security Checklist\n\nQuick reference for web application security. Use alongside the `security-and-hardening` skill." — references/security-checklist.md:1-3

## Design intent — required
Provides a comprehensive, actionable security reference and threat-modeling checklist for web application developers and AI/LLM engineers. It establishes baseline security hygiene covering threat modeling (STRIDE, trust boundaries, assets, abuse cases), pre-commit checks (secrets detection), authentication (password hashing, secure cookies, rate limiting), authorization (IDOR prevention, scoped API keys, JWT validation), input validation (allowlists, parameterized SQL, SSRF prevention), HTTP security headers, restrictive CORS configuration, data protection, dependency supply-chain security (package manager install-script gates and native policies for npm, pnpm, Yarn), AI/LLM application security (untrusted model output, prompt injection defense in code, context hygiene, tool scoping, bounded consumption), safe error handling, and mapped OWASP Top 10 + OWASP Top 10 for LLMs vulnerability/prevention matrices.

## Phase — required
`cross-phase`

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- skill `security-and-hardening` — references/security-checklist.md:3
- skill `spec-driven-development` — references/security-checklist.md:182

## Invoked by — required
- command `.claude/commands/ship.md` — .claude/commands/ship.md:35
- skill `skills/security-and-hardening/SKILL.md` — skills/security-and-hardening/SKILL.md:21

## Concepts named — required, verbatim
- `Security Checklist` — references/security-checklist.md:1 — defined here
- `security-and-hardening` — references/security-checklist.md:3 — used here
- `Threat Modeling` — references/security-checklist.md:7,21 — defined here
- `Trust boundaries` — references/security-checklist.md:25 — defined here
- `Assets` — references/security-checklist.md:26 — defined here
- `STRIDE` — references/security-checklist.md:27 — defined here
- `Spoofing` — references/security-checklist.md:27 — used here
- `Tampering` — references/security-checklist.md:27 — used here
- `Repudiation` — references/security-checklist.md:27 — used here
- `Info disclosure` — references/security-checklist.md:27 — used here
- `DoS` — references/security-checklist.md:27 — used here
- `Elevation` — references/security-checklist.md:27 — used here
- `Abuse cases` — references/security-checklist.md:28 — defined here
- `Pre-Commit Checks` — references/security-checklist.md:8,30 — defined here
- `Authentication` — references/security-checklist.md:9,36 — defined here
- `Authorization` — references/security-checklist.md:10,46 — defined here
- `IDOR` — references/security-checklist.md:49 — used here
- `Input Validation` — references/security-checklist.md:11,54 — defined here
- `allowlists` — references/security-checklist.md:57 — used here
- `denylists` — references/security-checklist.md:57 — used here
- `open redirect` — references/security-checklist.md:64 — used here
- `SSRF` — references/security-checklist.md:65,188 — used here
- `Security Headers` — references/security-checklist.md:12,67 — defined here
- `Content-Security-Policy` — references/security-checklist.md:70 — used here
- `Strict-Transport-Security` — references/security-checklist.md:71 — used here
- `X-Content-Type-Options` — references/security-checklist.md:72 — used here
- `X-Frame-Options` — references/security-checklist.md:73 — used here
- `X-XSS-Protection` — references/security-checklist.md:74 — used here
- `Referrer-Policy` — references/security-checklist.md:75 — used here
- `Permissions-Policy` — references/security-checklist.md:76 — used here
- `CORS Configuration` — references/security-checklist.md:13,79 — defined here
- `Data Protection` — references/security-checklist.md:14,94 — defined here
- `PII` — references/security-checklist.md:26,98,197 — used here
- `Dependency Security` — references/security-checklist.md:15,102 — defined here
- `installation boundary` — references/security-checklist.md:104 — defined here
- `Install-Script Gate` — references/security-checklist.md:115 — defined here
- `default-deny policy` — references/security-checklist.md:119 — used here
- `fail-closed enforcement` — references/security-checklist.md:119 — used here
- `Supply-chain hygiene` — references/security-checklist.md:141 — defined here
- `AI / LLM Security` — references/security-checklist.md:16,149 — defined here
- `Prompt injection` — references/security-checklist.md:154,196 — used here
- `Error Handling` — references/security-checklist.md:17,159 — defined here
- `OWASP Top 10` — references/security-checklist.md:18,175 — defined here
- `Broken Access Control` — references/security-checklist.md:179 — used here
- `Cryptographic Failures` — references/security-checklist.md:180 — used here
- `Injection` — references/security-checklist.md:181 — used here
- `Insecure Design` — references/security-checklist.md:182 — used here
- `spec-driven-development` — references/security-checklist.md:182 — used here
- `Security Misconfiguration` — references/security-checklist.md:183 — used here
- `Vulnerable Components` — references/security-checklist.md:184 — used here
- `Auth Failures` — references/security-checklist.md:185 — used here
- `Data Integrity Failures` — references/security-checklist.md:186 — used here
- `Logging Failures` — references/security-checklist.md:187 — used here
- `OWASP Top 10 for LLMs` — references/security-checklist.md:19,190 — defined here
- `OWASP GenAI Security Project` — references/security-checklist.md:192 — used here
- `LLM01` — references/security-checklist.md:196 — used here
- `LLM02` — references/security-checklist.md:197 — used here
- `LLM03` — references/security-checklist.md:198 — used here
- `LLM04` — references/security-checklist.md:199 — used here
- `LLM05` — references/security-checklist.md:200 — used here
- `LLM06` — references/security-checklist.md:201 — used here
- `LLM07` — references/security-checklist.md:202 — used here
- `LLM08` — references/security-checklist.md:203 — used here
- `LLM09` — references/security-checklist.md:204 — used here
- `LLM10` — references/security-checklist.md:205 — used here

## Structure
- `# Security Checklist` — line 1
- `## Table of Contents` — line 5
- `## Threat Modeling (Start Here)` — line 21
- `## Pre-Commit Checks` — line 30
- `## Authentication` — line 36
- `## Authorization` — line 46
- `## Input Validation` — line 54
- `## Security Headers` — line 67
- `## CORS Configuration` — line 79
- `## Data Protection` — line 94
- `## Dependency Security` — line 102
- `### Install-Script Gate` — line 115
- `## AI / LLM Security` — line 149
- `## Error Handling` — line 159
- `## OWASP Top 10 Quick Reference` — line 175
- `## OWASP Top 10 for LLMs Quick Reference` — line 190

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Exceptionally thorough breakdown of dependency lifecycle script security policies across package managers (npm 11/12, pnpm 10/11, Yarn 1/2/4).
- Integrates OWASP Top 10 for LLMs directly into the core security baseline, emphasizing prompt injection defense enforced in code rather than system prompts.

## Context cost
11,881 bytes (~2,970 tokens).
```

---

#### 2. `references/accessibility-checklist.md`
```markdown
---
package: addy
path: references/accessibility-checklist.md
type: doc
bytes: 5206
unit: inv-addy-4
---

# references/accessibility-checklist.md

## Purpose — required, verbatim
> "# Accessibility Checklist\n\nQuick reference for WCAG 2.1 AA compliance. Use alongside the `frontend-ui-engineering` skill." — references/accessibility-checklist.md:1-3

## Design intent — required
Provides a quick, actionable accessibility reference and testing checklist targeting WCAG 2.1 AA compliance. It outlines essential UI verification requirements (keyboard navigation, screen reader support, visual contrast ratios, accessible form design, mobile touch target sizes), correct semantic HTML patterns versus anti-patterns (button vs. anchor distinction, explicit/implicit form labeling, dialog and live region roles), recommended testing tools (automated axe-core/pa11y, browser DevTools accessibility tree and Lighthouse, OS screen readers), ARIA live region policies (`polite` vs `assertive`), and common accessibility pitfalls with their direct remedies.

## Phase — required
`cross-phase`

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- skill `frontend-ui-engineering` — references/accessibility-checklist.md:3

## Invoked by — required
- command `.claude/commands/ship.md` — .claude/commands/ship.md:35
- skill `skills/frontend-ui-engineering/SKILL.md` — skills/frontend-ui-engineering/SKILL.md:22

## Concepts named — required, verbatim
- `Accessibility Checklist` — references/accessibility-checklist.md:1 — defined here
- `WCAG 2.1 AA` — references/accessibility-checklist.md:3 — used here
- `frontend-ui-engineering` — references/accessibility-checklist.md:3 — used here
- `Essential Checks` — references/accessibility-checklist.md:7,13 — defined here
- `Keyboard Navigation` — references/accessibility-checklist.md:15 — defined here
- `Screen Readers` — references/accessibility-checklist.md:24 — defined here
- `Visual` — references/accessibility-checklist.md:33 — defined here
- `Forms` — references/accessibility-checklist.md:40 — defined here
- `Content` — references/accessibility-checklist.md:48 — defined here
- `Common HTML Patterns` — references/accessibility-checklist.md:8,55 — defined here
- `Buttons vs. Links` — references/accessibility-checklist.md:57 — defined here
- `Form Labels` — references/accessibility-checklist.md:70 — defined here
- `ARIA Roles` — references/accessibility-checklist.md:87 — defined here
- `Accessible Lists` — references/accessibility-checklist.md:112 — defined here
- `Testing Tools` — references/accessibility-checklist.md:9,123 — defined here
- `axe-core` — references/accessibility-checklist.md:127 — used here
- `pa11y` — references/accessibility-checklist.md:128 — used here
- `Lighthouse` — references/accessibility-checklist.md:131 — used here
- `Accessibility tree` — references/accessibility-checklist.md:132 — used here
- `VoiceOver` — references/accessibility-checklist.md:135 — used here
- `NVDA` — references/accessibility-checklist.md:136 — used here
- `JAWS` — references/accessibility-checklist.md:136 — used here
- `Orca` — references/accessibility-checklist.md:137 — used here
- `ARIA Live Regions` — references/accessibility-checklist.md:10,140 — defined here
- `aria-live="polite"` — references/accessibility-checklist.md:143 — used here
- `aria-live="assertive"` — references/accessibility-checklist.md:144 — used here
- `Common Anti-Patterns` — references/accessibility-checklist.md:11,149 — defined here

## Structure
- `# Accessibility Checklist` — line 1
- `## Table of Contents` — line 5
- `## Essential Checks` — line 13
- `### Keyboard Navigation` — line 15
- `### Screen Readers` — line 24
- `### Visual` — line 33
- `### Forms` — line 40
- `### Content` — line 48
- `## Common HTML Patterns` — line 55
- `### Buttons vs. Links` — line 57
- `### Form Labels` — line 70
- `### ARIA Roles` — line 87
- `### Accessible Lists` — line 112
- `## Testing Tools` — line 123
- `## Quick Reference: ARIA Live Regions` — line 140
- `## Common Anti-Patterns` — line 149

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Provides clear anti-pattern comparison tables (`div` as button, color-only states, `tabindex > 0`).
- Directly integrated into `/ship` Phase B as the verification checklist for accessible interfaces.

## Context cost
5,206 bytes (~1,301 tokens).
```

---

#### 3. `references/definition-of-done.md`
```markdown
---
package: addy
path: references/definition-of-done.md
type: doc
bytes: 3798
unit: inv-addy-4
---

# references/definition-of-done.md

## Purpose — required, verbatim
> "# Definition of Done\n\nA standing, project-wide bar that every change must clear before it counts as done. Unlike acceptance criteria, which vary per task and answer \"did we build the right thing?\", the Definition of Done is the same every time and answers \"is this finished to our standard?\". Use it as the final gate in `planning-and-task-breakdown`, `incremental-implementation`, and `shipping-and-launch`." — references/definition-of-done.md:1-3

## Design intent — required
Codifies a standing, project-wide Definition of Done (DoD) quality bar that applies across every incremental change and release. It clearly demarcates the conceptual difference between task-specific acceptance criteria ("did we build the right thing?") and universal Definition of Done ("is this finished to our standard?"), establishing an invariant baseline across five key pillars: Correctness (runtime verification, test coverage, regressions), Quality (self-revealing code, no dead code, scoped diffs, linting/formatting), Integration (system compatibility, migrations, backward compatibility), Documentation (timeless docs, public APIs, ADRs), and Ship-readiness (security review, observability, rollback plan, human review gate).

## Phase — required
`cross-phase`

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- skill `planning-and-task-breakdown` — references/definition-of-done.md:3
- skill `incremental-implementation` — references/definition-of-done.md:3
- skill `shipping-and-launch` — references/definition-of-done.md:3,50,57
- skill `code-review-and-quality` — references/definition-of-done.md:35
- skill `code-simplification` — references/definition-of-done.md:35
- skill `documentation-and-adrs` — references/definition-of-done.md:44
- skill `security-and-hardening` — references/definition-of-done.md:48
- skill `observability-and-instrumentation` — references/definition-of-done.md:49

## Invoked by — required
- skill `skills/planning-and-task-breakdown/SKILL.md` — skills/planning-and-task-breakdown/SKILL.md:20
- skill `skills/incremental-implementation/SKILL.md` — skills/incremental-implementation/SKILL.md:20
- skill `skills/shipping-and-launch/SKILL.md` — skills/shipping-and-launch/SKILL.md:20

## Concepts named — required, verbatim
- `Definition of Done` — references/definition-of-done.md:1,3 — defined here
- `Acceptance Criteria` — references/definition-of-done.md:3,5,7 — defined here
- `planning-and-task-breakdown` — references/definition-of-done.md:3 — used here
- `incremental-implementation` — references/definition-of-done.md:3 — used here
- `shipping-and-launch` — references/definition-of-done.md:3,50,57 — used here
- `The Standing Checklist` — references/definition-of-done.md:17 — defined here
- `Correctness` — references/definition-of-done.md:21,55 — defined here
- `Quality` — references/definition-of-done.md:28,55 — defined here
- `five-axis review` — references/definition-of-done.md:35 — used here
- `code-review-and-quality` — references/definition-of-done.md:35 — used here
- `code-simplification` — references/definition-of-done.md:35 — used here
- `Integration` — references/definition-of-done.md:37,56 — defined here
- `Documentation` — references/definition-of-done.md:42,56 — defined here
- `documentation-and-adrs` — references/definition-of-done.md:44 — used here
- `Ship-readiness` — references/definition-of-done.md:47 — defined here
- `security-and-hardening` — references/definition-of-done.md:48 — used here
- `observability-and-instrumentation` — references/definition-of-done.md:49 — used here
- `Rollback path` — references/definition-of-done.md:50 — used here
- `How to Apply` — references/definition-of-done.md:53 — defined here
- `Red Flags` — references/definition-of-done.md:61 — defined here

## Structure
- `# Definition of Done` — line 1
- `## Definition of Done vs. Acceptance Criteria` — line 5
- `## The Standing Checklist` — line 17
- `### Correctness` — line 21
- `### Quality` — line 28
- `### Integration` — line 37
- `### Documentation` — line 42
- `### Ship-readiness` — line 47
- `## How to Apply` — line 53
- `## Red Flags` — line 61

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Clearly separates task-specific scope ("Did we build this thing?") from invariant project floor ("Is it ready?").
- Tiered enforcement: task-level (Correctness + Quality), feature-level (Integration + Documentation), release-level (Full checklist + ship readiness).

## Context cost
3,798 bytes (~950 tokens).
```

---

#### 4. `.opencode/skills`
```markdown
---
package: addy
path: .opencode/skills
type: file
bytes: 864
unit: inv-addy-4
---

# .opencode/skills

## Purpose — required, verbatim
> `(no explicit purpose statement)` — symlink pointing to `../skills/`

## Design intent — required
Provides a filesystem symlink pointing from `.opencode/skills` to `../skills/` to enable seamless integration with the OpenCode CLI / IDE ecosystem. It allows OpenCode's skill loader to locate all 27 repository skills directly within its expected configuration path without duplicating skill directories.

## Phase — required
`none`

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- directory `skills/` — (symlink target)

## Invoked by — required
- doc `docs/opencode-setup.md` — docs/opencode-setup.md:1

## Concepts named — required, verbatim
- `OpenCode` — used here

## Structure
- `(symlink: skills -> ../skills/)`

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Enables zero-copy discovery for OpenCode tools by mapping `.opencode/skills` to the canonical `skills/` directory.

## Context cost
10 bytes symlink / 864 bytes directory stat (~3 tokens).
```

---

#### 5. `.agents/plugins/marketplace.json`
```markdown
---
package: addy
path: .agents/plugins/marketplace.json
type: config
bytes: 535
unit: inv-addy-4
---

# .agents/plugins/marketplace.json

## Purpose — required, verbatim
> `(no explicit purpose statement)` — .agents/plugins/marketplace.json:1-22

## Design intent — required
Provides the plugin marketplace catalog entry for Google Antigravity / Gemini CLI. It defines the plugin package metadata including package name (`agent-skills`), display name (`Agent Skills`), version (`0.6.8`), description ("Production-grade engineering skills covering every phase of software development: spec, plan, build, verify, review, and ship."), local source path (`./`), installation policy (`AVAILABLE`), authentication policy (`ON_INSTALL`), and category (`Productivity`).

## Phase — required
`none`

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- doc `docs/antigravity-setup.md` — docs/antigravity-setup.md:1
- doc `docs/gemini-cli-setup.md` — docs/gemini-cli-setup.md:1

## Concepts named — required, verbatim
- `agent-skills` — .agents/plugins/marketplace.json:2,8 — defined here
- `Agent Skills` — .agents/plugins/marketplace.json:4 — defined here
- `AVAILABLE` — .agents/plugins/marketplace.json:16 — used here
- `ON_INSTALL` — .agents/plugins/marketplace.json:17 — used here
- `Productivity` — .agents/plugins/marketplace.json:19 — used here

## Structure
- JSON object defining plugin marketplace catalog registration metadata.

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Mirror of `.claude-plugin/marketplace.json` tailored for Google Antigravity / Gemini CLI tooling.

## Context cost
535 bytes (~134 tokens).
```

---

#### 6. `.claude/rules/skills-contributing.md`
```markdown
---
package: addy
path: .claude/rules/skills-contributing.md
type: doc
bytes: 988
unit: inv-addy-4
---

# .claude/rules/skills-contributing.md

## Purpose — required, verbatim
> "description: Anti-duplication guardrail for adding or changing skills" — .claude/rules/skills-contributing.md:2

## Design intent — required
Acts as an automated Claude Code rule and anti-duplication guardrail triggered whenever changes touch `skills/**`. It prevents catalog bloat and duplication by requiring agents and contributors to check existing skills and open pull requests before proposing a new skill, to prefer extending existing skills over creating near-duplicates, and to adhere to `docs/skill-anatomy.md` while referencing other skills rather than copying content.

## Phase — required
`none`

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- doc `CONTRIBUTING.md` — .claude/rules/skills-contributing.md:11,15
- doc `docs/skill-anatomy.md` — .claude/rules/skills-contributing.md:13

## Invoked by — required
- Claude Code rule engine matching `skills/**` path pattern

## Concepts named — required, verbatim
- `Anti-duplication guardrail` — .claude/rules/skills-contributing.md:2 — defined here
- `Adding or changing a skill` — .claude/rules/skills-contributing.md:7 — defined here
- `pre-flight checks` — .claude/rules/skills-contributing.md:11 — used here
- `CONTRIBUTING.md` — .claude/rules/skills-contributing.md:11,15 — used here
- `skill-anatomy.md` — .claude/rules/skills-contributing.md:13 — used here

## Structure
- Frontmatter (description, paths) — lines 1–5
- `# Adding or changing a skill` — line 7

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Automatically active in Claude Code sessions touching skill directories to protect repository architecture from redundant skill proliferation.

## Context cost
988 bytes (~247 tokens).
```

---

#### 7. `.claude/commands/ship.md`
```markdown
---
package: addy
path: .claude/commands/ship.md
type: command
bytes: 4601
unit: inv-addy-4
---

# .claude/commands/ship.md

## Purpose — required, verbatim
> "description: Run the pre-launch checklist via parallel fan-out to specialist personas, then synthesize a go/no-go decision" — .claude/commands/ship.md:2

## Design intent — required
Defines the `/ship` slash command orchestrating pre-launch quality gates through a parallel fan-out architecture across three specialist personas (`code-reviewer`, `security-auditor`, `test-engineer`). It establishes a three-phase lifecycle: Phase A spawns all three personas in parallel (single turn); Phase B merges and reconciles findings in the main agent context across code quality, security, performance, accessibility, infrastructure, and documentation; Phase C produces a structured Go/No-Go decision with mandatory blockers, recommended fixes, acknowledged risks, and an actionable rollback plan with trigger conditions, procedures, and recovery time objectives (RTO). It also defines persona resolution precedence, subagent delegation constraints, and criteria for skipping fan-out on minimal diffs (≤2 files, <50 lines, non-critical paths).

## Phase — required
`addy:Ship`

## Inputs — required
- Staged changes, git diff, or recent commits
- Harness subagent / Agent tool execution capability

## Outputs — required
- Structured Ship Decision report (`## Ship Decision: GO | NO-GO`) with Blockers, Recommended fixes, Acknowledged risks, Rollback plan, and embedded specialist reports

## Invokes — required
- skill `shipping-and-launch` (`agent-skills:shipping-and-launch`) — .claude/commands/ship.md:5
- agent `code-reviewer` — .claude/commands/ship.md:15,26,32,33,34,61
- agent `security-auditor` — .claude/commands/ship.md:16,26,33,62
- agent `test-engineer` — .claude/commands/ship.md:17,26,63
- reference `references/orchestration-patterns.md` — .claude/commands/ship.md:24
- reference `references/accessibility-checklist.md` — .claude/commands/ship.md:35

## Invoked by — required
- Entry point slash command `/ship`
- agent `agents/code-reviewer.md` — agents/code-reviewer.md:101
- agent `agents/test-engineer.md` — agents/test-engineer.md:94

## Concepts named — required, verbatim
- `fan-out orchestrator` — .claude/commands/ship.md:7 — defined here
- `shipping-and-launch` — .claude/commands/ship.md:5 — used here
- `go/no-go decision` — .claude/commands/ship.md:2,7 — defined here
- `rollback plan` — .claude/commands/ship.md:7,55,70 — defined here
- `Phase A — Parallel fan-out` — .claude/commands/ship.md:9 — defined here
- `code-reviewer` — .claude/commands/ship.md:15,26,32,33,34,61 — used here
- `five-axis review` — .claude/commands/ship.md:15 — used here
- `security-auditor` — .claude/commands/ship.md:16,26,33,62 — used here
- `test-engineer` — .claude/commands/ship.md:17,26,63 — used here
- `Agent Teams` — .claude/commands/ship.md:24 — used here
- `Persona resolution` — .claude/commands/ship.md:26 — defined here
- `Phase B — Merge in main context` — .claude/commands/ship.md:28 — defined here
- `Code Quality` — .claude/commands/ship.md:32 — defined here
- `Security` — .claude/commands/ship.md:33 — defined here
- `Performance` — .claude/commands/ship.md:34 — defined here
- `Accessibility` — .claude/commands/ship.md:35 — defined here
- `Infrastructure` — .claude/commands/ship.md:36 — defined here
- `Documentation` — .claude/commands/ship.md:37 — defined here
- `Phase C — Decision and rollback` — .claude/commands/ship.md:39 — defined here
- `Ship Decision: GO | NO-GO` — .claude/commands/ship.md:44 — defined here
- `Blockers` — .claude/commands/ship.md:46 — defined here
- `Recommended fixes` — .claude/commands/ship.md:49 — defined here
- `Acknowledged risks` — .claude/commands/ship.md:52 — defined here
- `Trigger conditions` — .claude/commands/ship.md:56 — defined here
- `Rollback procedure` — .claude/commands/ship.md:57 — defined here
- `Recovery time objective` — .claude/commands/ship.md:58 — defined here
- `blast radius` — .claude/commands/ship.md:72 — used here

## Structure
- Frontmatter (description) — lines 1–3
- Skill invocation statement — line 5
- Intro & fan-out orchestration concept — line 7
- `## Phase A — Parallel fan-out` — line 9
- `## Phase B — Merge in main context` — line 28
- `## Phase C — Decision and rollback` — line 39
- `## Rules` — line 66

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Mandatory single-turn parallel invocation for Phase A subagents.
- Mandatory rollback plan (triggers, procedure, RTO) required for any GO decision.
- Subagents are isolated; merging occurs strictly in the orchestrator's main context.

## Context cost
4,601 bytes (~1,150 tokens).
```

---

#### 8. `.claude/commands/constraints.md`
```markdown
---
package: addy
path: .claude/commands/constraints.md
type: command
bytes: 2762
unit: inv-addy-4
---

# .claude/commands/constraints.md

## Purpose — required, verbatim
> "description: Define and enforce this project's quality bar — interview, sane defaults, CONSTRAINTS.md" — .claude/commands/constraints.md:2

## Design intent — required
Defines the `/constraints` slash command for establishing, ratcheting, and guarding project-specific engineering constraints and quality floors. It detects existing tools and configs automatically without redundant interrogation, conducts a bounded interview (max 4 questions with intelligent defaults), writes an actionable `CONSTRAINTS.md` file specifying enforced and measured-only metrics with reasons and expiring exceptions, provisions standard tooling commands (Semgrep, gitleaks, osv-scanner, axe-core, Lighthouse, size-limit, dependency-cruiser, Stryker) mapped to `check:fast`, `check:task`, and `check:full`, places checks strategically by runtime cost (edit loop vs. task end vs. CI), instructs Claude via `CLAUDE.md` never to weaken constraints, and provides subcommands (`check`, `guard`, `ratchet`) to prevent regression.

## Phase — required
`addy:Plan`

## Inputs — required
- `$ARGUMENTS` (`check`, `guard`, `ratchet`, or empty)
- `package.json`, `pyproject.toml`, `go.mod`, test runners, lint configs, coverage output, CI workflows

## Outputs — required
- `CONSTRAINTS.md` at repository root
- Package scripts in `package.json` (`check:fast`, `check:task`, `check:full`)
- Instruction in `CLAUDE.md` referencing `CONSTRAINTS.md`

## Invokes — required
- skill `constraint-driven-development` (`agent-skills:constraint-driven-development`) — .claude/commands/constraints.md:5

## Invoked by — required
- Entry point slash command `/constraints`

## Concepts named — required, verbatim
- `constraint-driven-development` — .claude/commands/constraints.md:5 — used here
- `Detect first` — .claude/commands/constraints.md:11 — defined here
- `Interview` — .claude/commands/constraints.md:13 — defined here
- `CONSTRAINTS.md` — .claude/commands/constraints.md:2,19,21,25 — defined here
- `Floor section` — .claude/commands/constraints.md:19 — defined here
- `exceptions table` — .claude/commands/constraints.md:19 — defined here
- `Semgrep` — .claude/commands/constraints.md:21 — used here
- `gitleaks` — .claude/commands/constraints.md:21 — used here
- `osv-scanner` — .claude/commands/constraints.md:21 — used here
- `axe-core` — .claude/commands/constraints.md:21 — used here
- `Lighthouse` — .claude/commands/constraints.md:21 — used here
- `size-limit` — .claude/commands/constraints.md:21 — used here
- `dependency-cruiser` — .claude/commands/constraints.md:21 — used here
- `Stryker` — .claude/commands/constraints.md:21 — used here
- `check:fast` — .claude/commands/constraints.md:21 — defined here
- `check:task` — .claude/commands/constraints.md:21 — defined here
- `check:full` — .claude/commands/constraints.md:21 — defined here
- `edit loop` — .claude/commands/constraints.md:23 — defined here
- `/constraints check` — .claude/commands/constraints.md:30 — defined here
- `/constraints guard` — .claude/commands/constraints.md:31 — defined here
- `/constraints ratchet` — .claude/commands/constraints.md:32 — defined here

## Structure
- Frontmatter (description) — lines 1–3
- Skill invocation statement — line 5
- Setup workflow steps (1–7) — lines 9–28
- `Sub-commands:` — line 29

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Enforces cost-tiered execution: edit loop (seconds), task end (<90s), review/CI (heavy suites).
- Explicit rule against aspirational constraints: dimensions without concrete CLI tools are dropped rather than invented.

## Context cost
2,762 bytes (~690 tokens).
```

---

#### 9. `.claude/commands/code-simplify.md`
```markdown
---
package: addy
path: .claude/commands/code-simplify.md
type: command
bytes: 1068
unit: inv-addy-4
---

# .claude/commands/code-simplify.md

## Purpose — required, verbatim
> "description: Simplify code for clarity and maintainability — reduce complexity without changing behavior" — .claude/commands/code-simplify.md:2

## Design intent — required
Defines the `/code-simplify` slash command for reducing code complexity while strictly preserving functional behavior. It guides an agent through scoping recent changes, studying project conventions and callers, identifying specific structural code smells (deep nesting, long functions, nested ternaries, generic names, duplication, dead code), applying refactorings incrementally with immediate test execution after each step, and rolling back upon test failure.

## Phase — required
`addy:Build`

## Inputs — required
- `CLAUDE.md` and project conventions
- Target code (recent changes or specified scope) and test suite

## Outputs — required
- Refactored, simplified code with passing tests and clean diff

## Invokes — required
- skill `code-simplification` (`agent-skills:code-simplification`) — .claude/commands/code-simplify.md:5
- skill `code-review-and-quality` — .claude/commands/code-simplify.md:22

## Invoked by — required
- Entry point slash command `/code-simplify`

## Concepts named — required, verbatim
- `code-simplification` — .claude/commands/code-simplify.md:5 — used here
- `guard clauses` — .claude/commands/code-simplify.md:13 — used here
- `extracted helpers` — .claude/commands/code-simplify.md:13 — used here
- `code-review-and-quality` — .claude/commands/code-simplify.md:22 — used here

## Structure
- Frontmatter (description) — lines 1–3
- Skill invocation statement — line 5
- Simplification workflow (steps 1–6) — lines 7–21
- Failure / review guidance — lines 22–23

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Mandates running test suites after each atomic simplification step and reverting immediately on failure.

## Context cost
1,068 bytes (~267 tokens).
```

---

#### 10. `.claude/commands/build.md`
```markdown
---
package: addy
path: .claude/commands/build.md
type: command
bytes: 3959
unit: inv-addy-4
---

# .claude/commands/build.md

## Purpose — required, verbatim
> "description: Implement tasks incrementally — build, test, verify, commit. Add \"auto\" to run the whole plan in one approved pass." — .claude/commands/build.md:2

## Design intent — required
Defines the `/build` slash command for executing task implementation plans either incrementally (one slice at a time) or autonomously (`/build auto` / `all`). In single-task mode, it executes the strict TDD loop (RED test -> GREEN code -> regression check -> build verification -> atomic commit). In autonomous mode, it verifies a formal spec exists (`SPEC.md`), ensures a clean git baseline, generates `tasks/plan.md` if needed, secures an unambiguous human approval checkpoint, and executes every task in dependency order with scoped atomic commits per task. It enforces safety gates: stopping and escalating to `debugging-and-error-recovery` on broken builds and to `doubt-driven-development` on high-risk, irreversible operations.

## Phase — required
`addy:Build`

## Inputs — required
- `$ARGUMENTS` (`auto`, `all`, or empty)
- `SPEC.md`, `docs/SPEC.md`, or `spec/*`
- `tasks/plan.md`, `tasks/todo.md`
- Git working tree status

## Outputs — required
- Implemented code and tests
- Atomic per-task git commits
- Task status updates in `tasks/plan.md` / `tasks/todo.md`
- Final execution summary

## Invokes — required
- skill `incremental-implementation` (`agent-skills:incremental-implementation`) — .claude/commands/build.md:5
- skill `test-driven-development` (`agent-skills:test-driven-development`) — .claude/commands/build.md:5
- skill `planning-and-task-breakdown` (`agent-skills:planning-and-task-breakdown`) — .claude/commands/build.md:33
- skill `debugging-and-error-recovery` (`agent-skills:debugging-and-error-recovery`) — .claude/commands/build.md:37,44
- skill `doubt-driven-development` (`agent-skills:doubt-driven-development`) — .claude/commands/build.md:39

## Invoked by — required
- Entry point slash command `/build`

## Concepts named — required, verbatim
- `incremental-implementation` — .claude/commands/build.md:5 — used here
- `test-driven-development` — .claude/commands/build.md:5 — used here
- `/build` — .claude/commands/build.md:9,14 — defined here
- `/build auto` — .claude/commands/build.md:10,27,41 — defined here
- `RED` — .claude/commands/build.md:20,35 — used here
- `GREEN` — .claude/commands/build.md:21,35 — used here
- `clean baseline` — .claude/commands/build.md:32 — defined here
- `planning-and-task-breakdown` — .claude/commands/build.md:33 — used here
- `Single checkpoint` — .claude/commands/build.md:34 — defined here
- `preparatory commit` — .claude/commands/build.md:34 — defined here
- `dependency order` — .claude/commands/build.md:35 — used here
- `debugging-and-error-recovery` — .claude/commands/build.md:37,44 — used here
- `doubt-driven-development` — .claude/commands/build.md:39 — used here

## Structure
- Frontmatter (description) — lines 1–3
- Skill invocation statement — line 5
- `## Modes` — line 7
- `## Default: one task` — line 14
- `## Autonomous: the whole plan (/build auto)` — line 27

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Prohibits `git add -A` during autonomous runs; each task commit must stage only touched files and task checklist updates to maintain clean rollback capability.
- Mandates a formal spec file (`SPEC.md`, `docs/SPEC.md`, or `spec/*`) before autonomous execution can begin.

## Context cost
3,959 bytes (~990 tokens).
```

---

#### 11. `.claude/commands/plan.md`
```markdown
---
package: addy
path: .claude/commands/plan.md
type: command
bytes: 805
unit: inv-addy-4
---

# .claude/commands/plan.md

## Purpose — required, verbatim
> "description: Break work into small verifiable tasks with acceptance criteria and dependency ordering" — .claude/commands/plan.md:2

## Design intent — required
Defines the `/plan` slash command for decomposing specifications into dependency-ordered, vertically sliced engineering tasks. It operates in read-only plan mode, mapping component dependency graphs, defining explicit acceptance criteria and verification steps per task, establishing phase checkpoints, and persisting plans to `tasks/plan.md` and `tasks/todo.md` with overwrite protection for incomplete work.

## Phase — required
`addy:Plan`

## Inputs — required
- `SPEC.md` or equivalent specification
- Codebase context

## Outputs — required
- `tasks/plan.md` (detailed task plan)
- `tasks/todo.md` (actionable task checklist)

## Invokes — required
- skill `planning-and-task-breakdown` (`agent-skills:planning-and-task-breakdown`) — .claude/commands/plan.md:5

## Invoked by — required
- Entry point slash command `/plan`

## Concepts named — required, verbatim
- `planning-and-task-breakdown` — .claude/commands/plan.md:5 — used here
- `plan mode` — .claude/commands/plan.md:9 — defined here
- `dependency graph` — .claude/commands/plan.md:10 — used here
- `vertical slice` — .claude/commands/plan.md:11 — used here
- `acceptance criteria` — .claude/commands/plan.md:12 — used here
- `checkpoints` — .claude/commands/plan.md:13 — used here
- `tasks/plan.md` — .claude/commands/plan.md:16,18 — defined here
- `tasks/todo.md` — .claude/commands/plan.md:16,18 — defined here

## Structure
- Frontmatter (description) — lines 1–3
- Skill invocation statement — line 5
- Plan workflow (steps 1–6) — lines 7–15
- Output file specification and overwrite protection — lines 16–19

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · `.claude/commands/plan.md:1` · Command is named `plan.md` in `.claude/commands/` but `planning.toml` in `commands/` and `.gemini/commands/`, and `.claude/commands/plan.md:18-19` includes an overwrite guard omitted from both TOML variants.

## Observations
- Emphasizes vertical slicing ("one complete path per task, not horizontal layers").

## Context cost
805 bytes (~201 tokens).
```

---

#### 12. `.claude/commands/spec.md`
```markdown
---
package: addy
path: .claude/commands/spec.md
type: command
bytes: 913
unit: inv-addy-4
---

# .claude/commands/spec.md

## Purpose — required, verbatim
> "description: Start spec-driven development — write a structured specification before writing code" — .claude/commands/spec.md:2

## Design intent — required
Defines the `/spec` slash command initiating spec-driven development. It engages the user in a clarifying interview (objective, users, core features, acceptance criteria, tech stack, constraints, guardrails), structures multi-capability features into modular capability maps (module IDs, dependency direction, build order), and produces a structured `SPEC.md` covering objectives, commands, project structure, code style, testing strategy, and execution boundaries.

## Phase — required
`addy:Define`

## Inputs — required
- User requirements and project context

## Outputs — required
- `SPEC.md` at project root

## Invokes — required
- skill `spec-driven-development` (`agent-skills:spec-driven-development`) — .claude/commands/spec.md:5

## Invoked by — required
- Entry point slash command `/spec`

## Concepts named — required, verbatim
- `spec-driven-development` — .claude/commands/spec.md:2,5 — used here
- `capability map` — .claude/commands/spec.md:15 — defined here
- `SPEC.md` — .claude/commands/spec.md:17 — defined here

## Structure
- Frontmatter (description) — lines 1–3
- Skill invocation statement — line 5
- Discovery interview areas (1–4) — lines 7–12
- Specification generation and capability decomposition — lines 13–16
- Output location and confirmation — line 17

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Proposes a capability map (module IDs, dependency direction, build order) for complex multi-feature requests prior to modular specification.

## Context cost
913 bytes (~228 tokens).
```

---

#### 13. `.claude/commands/review.md`
```markdown
---
package: addy
path: .claude/commands/review.md
type: command
bytes: 846
unit: inv-addy-4
---

# .claude/commands/review.md

## Purpose — required, verbatim
> "description: Conduct a five-axis code review — correctness, readability, architecture, security, performance" — .claude/commands/review.md:2

## Design intent — required
Defines the `/review` slash command for evaluating changes across five structural quality axes: Correctness, Readability, Architecture, Security, and Performance. It delegates to specialist security and performance skills where appropriate, categorizes findings into a three-tier severity hierarchy (Critical, Important, Suggestion), and outputs a structured review with concrete `file:line` citations and actionable remediation guidance.

## Phase — required
`addy:Review`

## Inputs — required
- Current staged changes or recent commits

## Outputs — required
- Structured review report with severity classifications and `file:line` fix recommendations

## Invokes — required
- skill `code-review-and-quality` (`agent-skills:code-review-and-quality`) — .claude/commands/review.md:5
- skill `security-and-hardening` — .claude/commands/review.md:12
- skill `performance-optimization` — .claude/commands/review.md:13

## Invoked by — required
- Entry point slash command `/review`
- agent `agents/code-reviewer.md` — agents/code-reviewer.md:101

## Concepts named — required, verbatim
- `five-axis code review` — .claude/commands/review.md:2,7 — defined here
- `code-review-and-quality` — .claude/commands/review.md:5 — used here
- `Correctness` — .claude/commands/review.md:9 — defined here
- `Readability` — .claude/commands/review.md:10 — defined here
- `Architecture` — .claude/commands/review.md:11 — defined here
- `Security` — .claude/commands/review.md:12 — defined here
- `security-and-hardening` — .claude/commands/review.md:12 — used here
- `Performance` — .claude/commands/review.md:13 — defined here
- `performance-optimization` — .claude/commands/review.md:13 — used here
- `Critical` — .claude/commands/review.md:15 — defined here
- `Important` — .claude/commands/review.md:15 — defined here
- `Suggestion` — .claude/commands/review.md:15 — defined here

## Structure
- Frontmatter (description) — lines 1–3
- Skill invocation statement — line 5
- Five axes checklist (1–5) — lines 7–14
- Severity categories and output structure — lines 15–17

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `cross-file-contradiction` · `.claude/commands/review.md:15` · Uses severity labels `Critical, Important, Suggestion`, whereas `agents/code-reviewer.md:51-57` and `skills/code-review-and-quality/SKILL.md` define the four-tier scheme `Critical, Required, Optional, Nit`.

## Observations
- Single-perspective review entry point complementing the multi-agent `/ship` fan-out.

## Context cost
846 bytes (~212 tokens).
```

---

#### 14. `.claude/commands/test.md`
```markdown
---
package: addy
path: .claude/commands/test.md
type: command
bytes: 665
unit: inv-addy-4
---

# .claude/commands/test.md

## Purpose — required, verbatim
> "description: Run TDD workflow — write failing tests, implement, verify. For bugs, use the Prove-It pattern." — .claude/commands/test.md:2

## Design intent — required
Defines the `/test` slash command for executing test-driven development workflows for new features and bug fixes. For new capabilities, it enforces RED-GREEN-REFACTOR cycles. For bug fixes, it enforces the Prove-It pattern (writing a reproducing test that fails before implementing the fix and verifying regression passes), with optional delegation to `browser-testing-with-devtools` for web/UI issues.

## Phase — required
`addy:Verify`

## Inputs — required
- Target feature requirements, bug descriptions, or codebase

## Outputs — required
- Automated tests (unit, integration, or E2E)
- Implementation fixes and regression test results

## Invokes — required
- skill `test-driven-development` (`agent-skills:test-driven-development`) — .claude/commands/test.md:5
- skill `browser-testing-with-devtools` (`agent-skills:browser-testing-with-devtools`) — .claude/commands/test.md:19

## Invoked by — required
- Entry point slash command `/test`
- agent `agents/test-engineer.md` — agents/test-engineer.md:94

## Concepts named — required, verbatim
- `TDD workflow` — .claude/commands/test.md:2 — defined here
- `test-driven-development` — .claude/commands/test.md:5 — used here
- `Prove-It pattern` — .claude/commands/test.md:2,12 — defined here
- `browser-testing-with-devtools` — .claude/commands/test.md:19 — used here
- `Chrome DevTools MCP` — .claude/commands/test.md:19 — used here

## Structure
- Frontmatter (description) — lines 1–3
- Skill invocation statement — line 5
- New features workflow (1–3) — lines 7–10
- Bug fixes workflow / Prove-It pattern (1–5) — lines 12–17
- Browser testing invocation — lines 19–20

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Direct integration of the Prove-It pattern for bug reproduction into the test command.

## Context cost
665 bytes (~166 tokens).
```

---

#### 15. `.claude/commands/webperf.md`
```markdown
---
package: addy
path: .claude/commands/webperf.md
type: command
bytes: 1974
unit: inv-addy-4
---

# .claude/commands/webperf.md

## Purpose — required, verbatim
> "description: Run a web performance audit via the web-performance-auditor persona" — .claude/commands/webperf.md:2

## Design intent — required
Defines the `/webperf` slash command for auditing web application performance via the `web-performance-auditor` persona. It establishes two operational modes: Deep mode (consuming Lighthouse JSON reports, PageSpeed Insights, Chrome User Experience Report CrUX APIs, DevTools traces, or live Chrome DevTools MCP tools) and Quick mode (static code scanning for performance anti-patterns labeled as `potential impact`), providing a structured performance scorecard, ranked findings, positive observations, and proactive recommendations.

## Phase — required
`addy:Review`

## Inputs — required
- Target files, components, or diff
- Performance artifacts: Lighthouse JSON, PSI JSON, CrUX API responses, DevTools performance traces, or live URL

## Outputs — required
- Comprehensive Web Performance Audit report with scorecard, ranked findings, positive observations, and recommendations

## Invokes — required
- agent `web-performance-auditor` — .claude/commands/webperf.md:2,21

## Invoked by — required
- Entry point slash command `/webperf`

## Concepts named — required, verbatim
- `webperf` — .claude/commands/webperf.md:5 — defined here
- `web-performance-auditor` — .claude/commands/webperf.md:2,21 — used here
- `Deep mode` — .claude/commands/webperf.md:9 — defined here
- `Quick mode` — .claude/commands/webperf.md:17 — defined here
- `Lighthouse` — .claude/commands/webperf.md:10,11,15,24 — used here
- `PageSpeed Insights` — .claude/commands/webperf.md:11 — used here
- `CrUX` — .claude/commands/webperf.md:11,12,24 — used here
- `DevTools performance trace` — .claude/commands/webperf.md:13 — used here
- `chrome-devtools MCP` — .claude/commands/webperf.md:10,14,15 — used here
- `scorecard` — .claude/commands/webperf.md:28 — defined here
- `potential impact` — .claude/commands/webperf.md:17 — defined here

## Structure
- Frontmatter (description) — lines 1–3
- Scope restriction — line 5
- `## Determine the mode` — line 7
- `## Run the audit` — line 19
- `## Output` — line 30

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Explicitly scopes its usage to web applications with browser-facing output.
- Details local CLI fallback commands (`npx -p chrome-devtools-mcp chrome-devtools <tool>`).

## Context cost
1,974 bytes (~494 tokens).
```

---

#### 16. `agents/code-reviewer.md`
```markdown
---
package: addy
path: agents/code-reviewer.md
type: agent
bytes: 3995
unit: inv-addy-4
---

# agents/code-reviewer.md

## Purpose — required, verbatim
> "description: Senior code reviewer that evaluates changes across five dimensions — correctness, readability, architecture, security, and performance. Use for thorough code review before merge." — agents/code-reviewer.md:3

## Design intent — required
Defines the `code-reviewer` specialist persona (Staff Engineer) for conducting comprehensive pre-merge code reviews. It establishes a five-dimension review framework (Correctness, Readability, Architecture, Security, Performance), defines a standardized four-tier severity classification system (Critical, Required, Optional, Nit), enforces strict review etiquette (review tests first, mandatory praise/positive observation, specific fix recommendations for Critical/Required issues, no approval with Critical bugs), provides a structured markdown output template with review summary, verdict (`APPROVE` | `REQUEST CHANGES`), and verification story, and sets clear compositional boundaries (invoked directly, via `/review`, or via `/ship` fan-out; forbidden from sub-delegating to other personas).

## Phase — required
`addy:Review`

## Inputs — required
- Code changes, pull request diff, or modified files
- Associated tests and specifications

## Outputs — required
- Structured Review Summary report with Verdict (`APPROVE` | `REQUEST CHANGES`), Critical Issues, Required Changes, Optional suggestions, Nits, What's Done Well, and Verification Story

## Invokes — required
- skill `code-review-and-quality` — agents/code-reviewer.md:49
- doc `docs/agents.md` — agents/code-reviewer.md:102

## Invoked by — required
- command `.claude/commands/ship.md` — .claude/commands/ship.md:15
- command `.claude/commands/review.md` — (referenced conceptually)

## Concepts named — required, verbatim
- `code-reviewer` — agents/code-reviewer.md:2,101 — defined here
- `Senior Code Reviewer` — agents/code-reviewer.md:6 — defined here
- `Staff Engineer` — agents/code-reviewer.md:8 — defined here
- `Review Framework` — agents/code-reviewer.md:10 — defined here
- `Correctness` — agents/code-reviewer.md:14 — defined here
- `Readability` — agents/code-reviewer.md:20 — defined here
- `Architecture` — agents/code-reviewer.md:26 — defined here
- `Security` — agents/code-reviewer.md:33 — defined here
- `Performance` — agents/code-reviewer.md:40 — defined here
- `code-review-and-quality` — agents/code-reviewer.md:49 — used here
- `Critical` — agents/code-reviewer.md:51,68,93,94 — defined here
- `Required` — agents/code-reviewer.md:53,71,93 — defined here
- `Optional` — agents/code-reviewer.md:55,74 — defined here
- `Nit` — agents/code-reviewer.md:57,77 — defined here
- `Review Output Template` — agents/code-reviewer.md:59 — defined here
- `Review Summary` — agents/code-reviewer.md:62 — defined here
- `Verdict` — agents/code-reviewer.md:64 — defined here
- `APPROVE` — agents/code-reviewer.md:64,94 — defined here
- `REQUEST CHANGES` — agents/code-reviewer.md:64 — defined here
- `What's Done Well` — agents/code-reviewer.md:80,95 — defined here
- `Verification Story` — agents/code-reviewer.md:83 — defined here
- `security-auditor` — agents/code-reviewer.md:101,102 — used here
- `test-engineer` — agents/code-reviewer.md:101,102 — used here

## Structure
- Frontmatter (name, description) — lines 1–4
- `# Senior Code Reviewer` & persona definition — lines 6–8
- `## Review Framework` (5 dimensions) — lines 10–46
- `## Output Format` (severity definitions) — lines 47–58
- `## Review Output Template` — lines 59–88
- `## Rules` (rules 1–6) — lines 89–97
- `## Composition` — lines 98–103

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `cross-file-contradiction` · `agents/code-reviewer.md:49-57` · Uses 4-tier severity `Critical, Required, Optional, Nit` matching `code-review-and-quality` skill, while `.claude/commands/review.md:15` uses 3-tier severity `Critical, Important, Suggestion`.

## Observations
- Mandates including at least one positive observation ("specific praise motivates good practices").
- Strict orchestration rule: personas must report findings without delegating to peer personas.

## Context cost
3,995 bytes (~999 tokens).
```

---

#### 17. `agents/test-engineer.md`
```markdown
---
package: addy
path: agents/test-engineer.md
type: agent
bytes: 3275
unit: inv-addy-4
---

# agents/test-engineer.md

## Purpose — required, verbatim
> "description: QA engineer specialized in test strategy, test writing, and coverage analysis. Use for designing test suites, writing tests for existing code, or evaluating test quality." — agents/test-engineer.md:3

## Design intent — required
Defines the `test-engineer` specialist persona (QA Engineer) dedicated to test strategy, test writing, and coverage analysis. It establishes a multi-level testing methodology (unit vs. integration vs. E2E), specifies the Prove-It pattern for bug reproduction, provides standard BDD/TDD test writing patterns (Arrange-Act-Assert, descriptive specification naming), defines essential scenario coverage categories (happy path, empty input, boundary values, error paths, concurrency), defines a structured test coverage analysis template with prioritized test recommendations (Critical, High, Medium, Low), and enforces isolation rules (invoked directly, via `/test`, or via `/ship` fan-out; reporting findings without sub-delegating).

## Phase — required
`addy:Verify`

## Inputs — required
- Code under test, interfaces, error reports, or test suites

## Outputs — required
- Test suites, unit/integration/E2E test files
- Test Coverage Analysis reports with prioritized recommendations

## Invokes — required
- doc `docs/agents.md` — agents/test-engineer.md:95

## Invoked by — required
- command `.claude/commands/ship.md` — .claude/commands/ship.md:17
- command `.claude/commands/test.md` — (referenced conceptually)

## Concepts named — required, verbatim
- `test-engineer` — agents/test-engineer.md:2,94 — defined here
- `Test Engineer` — agents/test-engineer.md:6 — defined here
- `QA Engineer` — agents/test-engineer.md:8 — defined here
- `Analyze Before Writing` — agents/test-engineer.md:12 — defined here
- `Test at the Right Level` — agents/test-engineer.md:20 — defined here
- `Unit test` — agents/test-engineer.md:23,28 — defined here
- `Integration test` — agents/test-engineer.md:24 — defined here
- `E2E test` — agents/test-engineer.md:25,28 — defined here
- `Prove-It Pattern` — agents/test-engineer.md:30,93 — defined here
- `Write Descriptive Tests` — agents/test-engineer.md:37 — defined here
- `Arrange → Act → Assert` — agents/test-engineer.md:42 — used here
- `Cover These Scenarios` — agents/test-engineer.md:47 — defined here
- `Happy path` — agents/test-engineer.md:53 — defined here
- `Empty input` — agents/test-engineer.md:54 — defined here
- `Boundary values` — agents/test-engineer.md:55 — defined here
- `Error paths` — agents/test-engineer.md:56 — defined here
- `Concurrency` — agents/test-engineer.md:57 — defined here
- `Test Coverage Analysis` — agents/test-engineer.md:64 — defined here
- `Priority` — agents/test-engineer.md:74 — defined here
- `code-reviewer` — agents/test-engineer.md:94 — used here
- `security-auditor` — agents/test-engineer.md:94 — used here

## Structure
- Frontmatter (name, description) — lines 1–4
- `# Test Engineer` & role definition — lines 6–8
- `## Approach` (sections 1–5) — lines 10–58
- `## Output Format` (Test Coverage Analysis) — lines 59–80
- `## Rules` (rules 1–7) — lines 81–90
- `## Composition` — lines 91–96

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Clear hierarchy of test levels ("Test at the lowest level that captures the behavior. Don't write E2E tests for things unit tests can cover").
- Test assertion philosophy ("A test that never fails is as useless as a test that always fails").

## Context cost
3,275 bytes (~819 tokens).
```

---

## 5. Verification Method

To independently verify the completeness and correctness of this investigation:
1. **File Read Verification**: Inspect each of the 17 source files under `sources/addy/` against the verbatim extracts in the inventory entries.
2. **Existence Checks**: Run `ls -d` on all cited paths to verify there are no missing dependencies.
3. **Command Validation**: Run `bun scripts/validate-commands.js` from `sources/addy` to verify command parity and description consistency.
4. **Coverage Check**: Run `bun scripts/synthesis/coverage.ts` to ensure zero empty required inventory fields.
