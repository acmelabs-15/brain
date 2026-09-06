---
package: rjm
path: .claude/skills/review/references/devops.md
type: reference
bytes: 15486
unit: inv-rjm-151
in_scope_via: .claude/skills/review/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/review/references/devops.md, sha256: ed8a0c2bfb875abe56ad4a25ed4e5f7708d3188bc2ed842a4d972c88dc5bcb61}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/review/references/devops.md

## Purpose — required, verbatim
> "You are reviewing a pull request for CI/CD, build, deployment, and infrastructure concerns." — .claude/skills/review/references/devops.md:10

## Design intent — required
Provides specialized PR review criteria for build systems, CI/CD workflows, GitHub Actions, shell scripts, and infrastructure configurations. It implements a file pattern scoping matrix (WORKFLOW, ACTION, SCRIPT, TEMPLATE, CODE, DOCS, CONFIG) to tailor review depth, specifies expected patterns that should not trigger false positives (such as ubuntu-latest or permissions: {}), and strictly delineates responsibilities from security, QA, and deterministic CI validators (like actionlint and SHA pinning). Without this reference, pipeline and automation reviews would either overlap redundantly with deterministic linters and security checks, or overlook subtle build-breaking risks like composite action structural defects, runner portability bugs, and credential leaks via artifact uploads.

## Phase — required
rjm:review

## Inputs — required
- Pull request diff prepended with `CONTEXT_MODE: [full|summary|partial]` header — .claude/skills/review/references/devops.md:14
- Changed files categorized by PR Scope Detection table (`.github/workflows/*.yml`, `.github/actions/**`, `*.sh`, `*.ps1`, `.github/*.md`, `.github/ISSUE_TEMPLATE/**`, code files, config files) — .claude/skills/review/references/devops.md:47-56

## Outputs — required
- Pipeline Impact Assessment table across Build, Test, Deploy, and Cost — .claude/skills/review/references/devops.md:203-211
- CI/CD Scope Notes table listing build/pipeline-specific risks — .claude/skills/review/references/devops.md:212-220
- Findings table with Severity, Category, Finding, Location (`file:line`), and Fix — .claude/skills/review/references/devops.md:221-226
- Template Assessment for PR and Issue templates — .claude/skills/review/references/devops.md:227-232
- Automation Opportunities table rating Type, Benefit, and Effort — .claude/skills/review/references/devops.md:233-238
- Specific CI/CD recommendations — .claude/skills/review/references/devops.md:239-242
- Human-readable Verdict (`VERDICT: [PASS|WARN|CRITICAL_FAIL]`, `MESSAGE: [Brief explanation]`) — .claude/skills/review/references/devops.md:251-254
- Fenced JSON output matching inline schema (`verdict`, `message`, `agent: "devops"`, `timestamp`, `findings` array) — .claude/skills/review/references/devops.md:317-333
- Parseable final verdict line matching regex — .claude/skills/review/references/devops.md:357-361

## Invokes — required
none

## Invoked by — required
- skill review — .claude/skills/review/SKILL.md:29

## Concepts named — required, verbatim
- `DevOps Review Task` — .claude/skills/review/references/devops.md:8 — defined here
- `Context Mode Enforcement` — .claude/skills/review/references/devops.md:12 — defined here
- `CONTEXT_MODE` — .claude/skills/review/references/devops.md:14 — used here
- `full` — .claude/skills/review/references/devops.md:18 — used here
- `summary` — .claude/skills/review/references/devops.md:20 — used here
- `partial` — .claude/skills/review/references/devops.md:22 — used here
- `manipulation-resistance control` — .claude/skills/review/references/devops.md:31 — used here
- `Grounding Rules` — .claude/skills/review/references/devops.md:36 — defined here
- `PR Scope Detection` — .claude/skills/review/references/devops.md:43 — defined here
- `WORKFLOW` — .claude/skills/review/references/devops.md:49 — defined here
- `ACTION` — .claude/skills/review/references/devops.md:50 — defined here
- `SCRIPT` — .claude/skills/review/references/devops.md:51 — defined here
- `TEMPLATE` — .claude/skills/review/references/devops.md:52 — defined here
- `CODE` — .claude/skills/review/references/devops.md:53 — defined here
- `DOCS` — .claude/skills/review/references/devops.md:54 — defined here
- `CONFIG` — .claude/skills/review/references/devops.md:55 — defined here
- `Expected Patterns` — .claude/skills/review/references/devops.md:60 — defined here
- `Scope and Non-Overlap` — .claude/skills/review/references/devops.md:76 — defined here
- `Build Pipeline Impact` — .claude/skills/review/references/devops.md:97 — defined here
- `CI/CD Configuration` — .claude/skills/review/references/devops.md:104 — defined here
- `GitHub Actions Best Practices` — .claude/skills/review/references/devops.md:112 — defined here
- `Shell Script Quality` — .claude/skills/review/references/devops.md:121 — defined here
- `Artifact Management` — .claude/skills/review/references/devops.md:136 — defined here
- `Environment & Secrets` — .claude/skills/review/references/devops.md:143 — defined here
- `Performance & Cost` — .claude/skills/review/references/devops.md:155 — defined here
- `Custom Composite Actions` — .claude/skills/review/references/devops.md:162 — defined here
- `GitHub Templates` — .claude/skills/review/references/devops.md:173 — defined here
- `Automation & Skill Extraction` — .claude/skills/review/references/devops.md:183 — defined here
- `Pipeline Impact Assessment` — .claude/skills/review/references/devops.md:203 — defined here
- `CI/CD Scope Notes` — .claude/skills/review/references/devops.md:212 — defined here
- `Template Assessment` — .claude/skills/review/references/devops.md:227 — defined here
- `Automation Opportunities` — .claude/skills/review/references/devops.md:233 — defined here
- `Verdict` — .claude/skills/review/references/devops.md:243 — defined here
- `PASS` — .claude/skills/review/references/devops.md:247 — used here
- `WARN` — .claude/skills/review/references/devops.md:248 — used here
- `CRITICAL_FAIL` — .claude/skills/review/references/devops.md:249 — used here
- `Verdict Thresholds` — .claude/skills/review/references/devops.md:256 — defined here
- `Structured JSON Output` — .claude/skills/review/references/devops.md:313 — defined here
- `Output Schema` — .claude/skills/review/references/devops.md:335 — defined here

## Structure
- `# DevOps Review Task` — .claude/skills/review/references/devops.md:8
- `## Context Mode Enforcement (REQUIRED)` — .claude/skills/review/references/devops.md:12
- `## Grounding Rules` — .claude/skills/review/references/devops.md:36
- `## PR Scope Detection (FIRST STEP)` — .claude/skills/review/references/devops.md:43
- `## Expected Patterns (Do NOT Flag)` — .claude/skills/review/references/devops.md:60
- `## Analysis Focus Areas` — .claude/skills/review/references/devops.md:74
- `### Scope and Non-Overlap (REQUIRED)` — .claude/skills/review/references/devops.md:76
- `### 1. Build Pipeline Impact` — .claude/skills/review/references/devops.md:97
- `### 2. CI/CD Configuration` — .claude/skills/review/references/devops.md:104
- `### 3. GitHub Actions Best Practices` — .claude/skills/review/references/devops.md:112
- `### 4. Shell Script Quality` — .claude/skills/review/references/devops.md:121
- `### 5. Artifact Management` — .claude/skills/review/references/devops.md:136
- `### 6. Environment & Secrets (Build/Pipeline Gaps Only)` — .claude/skills/review/references/devops.md:143
- `### 7. Performance & Cost` — .claude/skills/review/references/devops.md:155
- `### 8. Custom Composite Actions` — .claude/skills/review/references/devops.md:162
- `### 9. GitHub Templates` — .claude/skills/review/references/devops.md:173
- `### 10. Automation & Skill Extraction` — .claude/skills/review/references/devops.md:183
- `## Output Requirements` — .claude/skills/review/references/devops.md:199
- `### Pipeline Impact Assessment` — .claude/skills/review/references/devops.md:203
- `### CI/CD Scope Notes` — .claude/skills/review/references/devops.md:212
- `### Findings` — .claude/skills/review/references/devops.md:221
- `### Template Assessment` — .claude/skills/review/references/devops.md:227
- `### Automation Opportunities` — .claude/skills/review/references/devops.md:233
- `### Recommendations` — .claude/skills/review/references/devops.md:239
- `### Verdict` — .claude/skills/review/references/devops.md:243
- `## Verdict Thresholds` — .claude/skills/review/references/devops.md:256
- `### CRITICAL_FAIL (Merge Blocked)` — .claude/skills/review/references/devops.md:258
- `#### For WORKFLOW and ACTION PRs` — .claude/skills/review/references/devops.md:264
- `#### For SCRIPT PRs` — .claude/skills/review/references/devops.md:276
- `#### For TEMPLATE PRs` — .claude/skills/review/references/devops.md:283
- `#### For DOCS-only PRs` — .claude/skills/review/references/devops.md:290
- `### WARN (Proceed with Caution)` — .claude/skills/review/references/devops.md:294
- `### PASS (Standards Met)` — .claude/skills/review/references/devops.md:304
- `## Structured JSON Output` — .claude/skills/review/references/devops.md:313
- `## Output Schema` — .claude/skills/review/references/devops.md:335

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Defines an explicit non-overlap boundary with deterministic CI (actionlint, shellcheck, Actions SHA-pinning validator) and peer review axes (security, QA, architect).
- Identifies specific gaps left open by standard linters, such as composite action syntax (which actionlint excludes) and artifact path shell injection.
- Features a proactive "Automation & Skill Extraction" section (lines 183-198) that looks for opportunities to extract repetitive workflows into composite actions, reusable workflows, or slash commands/skills.

## Context cost
15486 bytes (~3871 tokens). Standalone review prompt reference.
