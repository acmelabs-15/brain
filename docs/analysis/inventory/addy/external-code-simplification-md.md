---
package: addy
path: external/code-simplification.md
type: doc
bytes: 26320
unit: inv-addy-16
aliases: []
memo_inputs:
  - {path: external/code-simplification.md, sha256: 91567ad5289ace67907b96afacbbf6f462f776f6f74cd5b9ffc87e02148bbabf}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/code-simplification.md

## Purpose — required, verbatim
> "Simplifies code for clarity. Chesterton’s Fence, the Rule of 500 - reduce complexity while preserving exact behavior when code has accumulated unnecessary weight." — external/code-simplification.md:5

## Design intent — required
Provides an external web documentation entry point for the `code-simplification` skill on the `skills.addy.ie` site, articulating the skill's purpose, installation commands (via `npx skills add`), structural anatomy, triggering conditions, and related review-phase tooling. Without this external landing page, developers discovering or installing the skill package outside git repositories lack a web-accessible summary of the simplification methodology, CLI installation instructions, and contextual navigation within the Addy agent-skills review phase.

## Phase — required
addy:Review

## Inputs — required
- Trigger condition: "Code works but is harder to read or maintain than it should be." — external/code-simplification.md:5
- Target skill source link: `skills/code-simplification/SKILL.md` — external/code-simplification.md:10
- Installation command: "npx skills add addyosmani/agent-skills --skill code-simplification" — external/code-simplification.md:8

## Outputs — required
none

## Invokes — required
- skill code-simplification — external/code-simplification.md:5
- command /code-simplify — external/code-simplification.md:5
- command /review — external/code-simplification.md:12
- skill code-review-and-quality — external/code-simplification.md:12
- skill security-and-hardening — external/code-simplification.md:12
- skill performance-optimization — external/code-simplification.md:12
- command /webperf — external/code-simplification.md:12

## Invoked by — required
none

## Concepts named — required, verbatim
- `code-simplification` — external/code-simplification.md:5 — defined here
- `Review phase` — external/code-simplification.md:5, 12 — used here
- `/code-simplify` — external/code-simplification.md:5 — used here
- `Chesterton’s Fence` — external/code-simplification.md:5 — used here
- `Rule of 500` — external/code-simplification.md:5 — used here
- `refactoring` — external/code-simplification.md:5 — used here
- `quality` — external/code-simplification.md:5 — used here
- `skills CLI` — external/code-simplification.md:6 — used here
- `anatomy` — external/code-simplification.md:9 — defined here
- `Overview` — external/code-simplification.md:10 — used here
- `When to Use` — external/code-simplification.md:10 — used here
- `Process` — external/code-simplification.md:10 — used here
- `Rationalizations` — external/code-simplification.md:10 — used here
- `Red Flags` — external/code-simplification.md:10 — used here
- `Verification` — external/code-simplification.md:10 — used here
- `SKILL.md` — external/code-simplification.md:10 — used here
- `/review` — external/code-simplification.md:12 — used here
- `code-review-and-quality` — external/code-simplification.md:12 — used here
- `Five-axis review` — external/code-simplification.md:12 — used here
- `~100-line change sizing` — external/code-simplification.md:12 — used here
- `severity labels` — external/code-simplification.md:12 — used here
- `review-speed norms` — external/code-simplification.md:12 — used here
- `security-and-hardening` — external/code-simplification.md:12 — used here
- `OWASP Top 10` — external/code-simplification.md:12 — used here
- `auth patterns` — external/code-simplification.md:12 — used here
- `secrets` — external/code-simplification.md:12 — used here
- `dependency auditing` — external/code-simplification.md:12 — used here
- `performance-optimization` — external/code-simplification.md:12 — used here
- `/webperf` — external/code-simplification.md:12 — used here
- `Measure-first` — external/code-simplification.md:12 — used here
- `Core Web Vitals` — external/code-simplification.md:12 — used here
- `bundle analysis` — external/code-simplification.md:12 — used here
- `N+1 fixes` — external/code-simplification.md:12 — used here
- `full lifecycle` — external/code-simplification.md:14 — used here
- `The lifecycle` — external/code-simplification.md:15 — used here
- `Loop engineering` — external/code-simplification.md:15 — used here

## Structure
- "code-simplification" — external/code-simplification.md:5
- "Install just this skill" — external/code-simplification.md:5
- "How this skill is structured" — external/code-simplification.md:8
- "Review phase" — external/code-simplification.md:12
- "More in the Review phase" — external/code-simplification.md:12
- "Product" — external/code-simplification.md:15
- "Setup" — external/code-simplification.md:15
- "Resources" — external/code-simplification.md:15

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · external/code-simplification.md:9 · Page asserts "Every skill follows the same anatomy" specifying six standardized sections (01 Overview to 06 Verification), but skills/code-simplification/SKILL.md implements eight sections (Overview, When to Use, The Five Principles, The Simplification Process, Language-Specific Guidance, Common Rationalizations, Red Flags, Verification), omitting "The Five Principles" and "Language-Specific Guidance" from the web template's anatomy list.
- internal-contradiction · external/code-simplification.md:5, 12 · Page header displays badge for slash command `/code-simplify` (line 5) whereas the Review phase sidebar card lists `Command /review` (line 12) for this skill's detail page.
- cross-file-contradiction · external/code-simplification.md:5, 12 · External page assigns `code-simplification` to the `Review phase` (`addy:Review`), whereas the repository slash command `.claude/commands/code-simplify.md:27` and `.gemini/commands/code-simplify.toml:1` associate code simplification with the Build phase (`addy:Build`).

## Observations
- External documentation web snapshot generated via Astro (`data-astro-cid-*`) representing the public catalog entry at `https://skills.addy.ie/skills/code-simplification/`.
- Documents standalone skill installation via the Vercel open `skills` CLI using `npx skills add addyosmani/agent-skills --skill code-simplification` or entire pack installation via `npx skills add addyosmani/agent-skills`.
- Integrates the skill into the `Review` phase taxonomy alongside sibling review skills `code-review-and-quality`, `security-and-hardening`, and `performance-optimization`.
- Mentions key heuristics in its summary metadata: "Chesterton’s Fence" (understand before touching) and "the Rule of 500" (automate refactorings touching over 500 lines).
- Links directly to the `/code-simplify` command badge and the canonical skill definition on GitHub (`skills/code-simplification/SKILL.md`).
- As noted in unit facts and METHOD.md §1.1, sibling external doc `external/constraint-driven-development.md` is unavailable (absent from checkout) and requires no card.

## Context cost
26,320 bytes (~6,580 tokens). As an external web landing page, it is accessed over HTTP by developers or browser-based agents rather than loaded directly into standard coding agent prompt contexts.
