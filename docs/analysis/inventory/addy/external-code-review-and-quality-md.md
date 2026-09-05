---
package: addy
path: external/code-review-and-quality.md
type: doc
bytes: 26687
unit: inv-addy-15
aliases: []
memo_inputs:
  - {path: external/code-review-and-quality.md, sha256: 9cd4e257b466f8e1700ef732f39b9dae5ac66573a0d022fdf67381796e011773}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/code-review-and-quality.md

## Purpose — required, verbatim
> "Conducts multi-axis code review across correctness, readability, architecture, security, and performance. Change sizing (~100 lines), severity labels (Critical/Required/Optional/Nit), review speed norms, and splitting strategies." — external/code-review-and-quality.md:5

## Design intent — required
Provides an external web documentation entry point for the `code-review-and-quality` skill on the `skills.addy.ie` site, articulating the skill's purpose, installation commands (via `npx skills add`), structural anatomy, triggering conditions, and related review-phase tooling. Without this external landing page, developers discovering or installing the skill package outside git repositories lack a web-accessible summary of the five-axis review approach, CLI installation instructions, and contextual navigation within the Addy agent-skills review phase.

## Phase — required
addy:Review

## Inputs — required
- Trigger condition: "Before merging any change." — external/code-review-and-quality.md:5
- Change sizing target: "~100 lines" — external/code-review-and-quality.md:5
- Target skill source link: `skills/code-review-and-quality/SKILL.md` — external/code-review-and-quality.md:10

## Outputs — required
none

## Invokes — required
- skill code-review-and-quality — external/code-review-and-quality.md:5
- command /review — external/code-review-and-quality.md:5
- skill code-simplification — external/code-review-and-quality.md:12
- command /code-simplify — external/code-review-and-quality.md:12
- skill security-and-hardening — external/code-review-and-quality.md:12
- skill performance-optimization — external/code-review-and-quality.md:12
- command /webperf — external/code-review-and-quality.md:12

## Invoked by — required
none

## Concepts named — required, verbatim
- `code-review-and-quality` — external/code-review-and-quality.md:5 — used here
- `Review phase` — external/code-review-and-quality.md:5, 12 — used here
- `/review` — external/code-review-and-quality.md:5, 12 — used here
- `multi-axis code review` — external/code-review-and-quality.md:5 — used here
- `correctness` — external/code-review-and-quality.md:5 — used here
- `readability` — external/code-review-and-quality.md:5 — used here
- `architecture` — external/code-review-and-quality.md:5 — used here
- `security` — external/code-review-and-quality.md:5 — used here
- `performance` — external/code-review-and-quality.md:5 — used here
- `Change sizing` — external/code-review-and-quality.md:5 — used here
- `severity labels` — external/code-review-and-quality.md:5 — used here
- `Critical` — external/code-review-and-quality.md:5 — used here
- `Required` — external/code-review-and-quality.md:5 — used here
- `Optional` — external/code-review-and-quality.md:5 — used here
- `Nit` — external/code-review-and-quality.md:5 — used here
- `review speed norms` — external/code-review-and-quality.md:5 — used here
- `splitting strategies` — external/code-review-and-quality.md:5 — used here
- `skills CLI` — external/code-review-and-quality.md:6 — used here
- `anatomy` — external/code-review-and-quality.md:9 — defined here
- `Overview` — external/code-review-and-quality.md:10 — used here
- `When to Use` — external/code-review-and-quality.md:10 — used here
- `Process` — external/code-review-and-quality.md:10 — used here
- `Rationalizations` — external/code-review-and-quality.md:10 — used here
- `Red Flags` — external/code-review-and-quality.md:10 — used here
- `Verification` — external/code-review-and-quality.md:10 — used here
- `SKILL.md` — external/code-review-and-quality.md:10 — used here
- `code-simplification` — external/code-review-and-quality.md:12 — used here
- `/code-simplify` — external/code-review-and-quality.md:12 — used here
- `Chesterton’s Fence` — external/code-review-and-quality.md:12 — used here
- `Rule of 500` — external/code-review-and-quality.md:12 — used here
- `security-and-hardening` — external/code-review-and-quality.md:12 — used here
- `OWASP Top 10` — external/code-review-and-quality.md:12 — used here
- `performance-optimization` — external/code-review-and-quality.md:12 — used here
- `/webperf` — external/code-review-and-quality.md:12 — used here
- `Measure-first` — external/code-review-and-quality.md:12 — used here
- `Core Web Vitals` — external/code-review-and-quality.md:12 — used here
- `bundle analysis` — external/code-review-and-quality.md:12 — used here
- `N+1 fixes` — external/code-review-and-quality.md:12 — used here
- `full lifecycle` — external/code-review-and-quality.md:14 — used here
- `The lifecycle` — external/code-review-and-quality.md:15 — used here
- `Loop engineering` — external/code-review-and-quality.md:15 — used here

## Structure
- "code-review-and-quality" — external/code-review-and-quality.md:5
- "Install just this skill" — external/code-review-and-quality.md:5
- "How this skill is structured" — external/code-review-and-quality.md:8
- "Review phase" — external/code-review-and-quality.md:12
- "More in the Review phase" — external/code-review-and-quality.md:12
- "Product" — external/code-review-and-quality.md:15
- "Setup" — external/code-review-and-quality.md:15
- "Resources" — external/code-review-and-quality.md:15

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · external/code-review-and-quality.md:9 · Page asserts "Every skill follows the same anatomy" specifying six standardized sections (01 Overview to 06 Verification), but skills/code-review-and-quality/SKILL.md implements 19 specialized sections (such as The Five-Axis Review, Structural Remedies, and Multi-Model Review Pattern).

## Observations
- External documentation web snapshot generated via Astro (`data-astro-cid-*`) representing the public catalog entry at `https://skills.addy.ie/skills/code-review-and-quality/`.
- Documents skill distribution via the Vercel open `skills` CLI using `npx skills add addyosmani/agent-skills --skill code-review-and-quality` (or pack installation `npx skills add addyosmani/agent-skills`).
- Embeds the skill into the `Review` phase taxonomy alongside sibling skills `code-simplification`, `security-and-hardening`, and `performance-optimization`.
- Links directly to the `/review` slash command badge and repository skill source on GitHub (`skills/code-review-and-quality/SKILL.md`).
- Contains interactive client-side components (clipboard copy buttons for CLI commands, responsive navigation drawer) and telemetry (`netlify-rum-container`).

## Context cost
26,687 bytes (~6,672 tokens). As an external web landing page, it is loaded over HTTP by users or browser agents rather than injected into coding agent conversation windows.
