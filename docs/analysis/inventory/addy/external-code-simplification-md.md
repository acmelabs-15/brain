---
package: addy
path: external/code-simplification.md
type: external-doc
bytes: 26320
unit: inv-addy-16
deprecated: false
aliases: []
memo_inputs:
  - {path: external/code-simplification.md, sha256: 91567ad5289ace67907b96afacbbf6f462f776f6f74cd5b9ffc87e02148bbabf}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# external/code-simplification.md

## Purpose — required, verbatim
> "Simplifies code for clarity. Chesterton’s Fence, the Rule of 500 - reduce complexity while preserving exact behavior when code has accumulated unnecessary weight." — external/code-simplification.md:5

## Design intent — required
This external documentation page serves as the public catalog entry and landing page for the `code-simplification` skill on Addy's documentation website (`skills.addy.ie`). It communicates the skill's positioning within the Review phase, provides one-click and CLI installation commands (`npx skills add`) for human developers and agents, summarizes the core principles (Chesterton's Fence, Rule of 500) and triggering condition ("Code works but is harder to read or maintain than it should be"), and outlines the universal 6-part skill anatomy (Overview, When to Use, Process, Rationalizations, Red Flags, Verification) before linking to the full `SKILL.md` in the GitHub repository. Without it, external discoverability, installation guidance via the skills CLI, and high-level structural orientation for human developers and agent consumers browsing the public catalog would be lost.

## Phase — required
addy:Review
> "Review phase" — external/code-simplification.md:5

## Inputs — required
As an external documentation page, this artifact is statically generated from repository metadata and `skills/code-simplification/SKILL.md`. When read by an agent or user, it consumes:
- Target codebase or component needing readability improvement: "Code works but is harder to read or maintain than it should be." — external/code-simplification.md:5
- User invocation via slash command "/code-simplify" — external/code-simplification.md:5 or installation command "npx skills add addyosmani/agent-skills --skill code-simplification" — external/code-simplification.md:8.
No runtime arguments or files are processed directly by this static HTML page.

## Outputs — required
none (static HTML documentation page; produces no files, decisions, or code artifacts)

## Invokes — required
- command /code-simplify — external/code-simplification.md:5
- skill code-simplification — external/code-simplification.md:8
- command /review — external/code-simplification.md:12
- skill code-review-and-quality — external/code-simplification.md:12
- skill security-and-hardening — external/code-simplification.md:12
- skill performance-optimization — external/code-simplification.md:12
- command /webperf — external/code-simplification.md:12

## Invoked by — required
orphan — external documentation page hosted at "https://skills.addy.ie/skills/code-simplification/" — external/code-simplification.md:1; not invoked or referenced by any in-scope file within the repository.

## Concepts named — required, verbatim
- `Chesterton’s Fence` — external/code-simplification.md:5 — used here
- `Rule of 500` — external/code-simplification.md:5 — used here
- `Review` — external/code-simplification.md:5 — used here
- `skills CLI` — external/code-simplification.md:6 — used here
- `Overview` — external/code-simplification.md:10 — used here
- `When to Use` — external/code-simplification.md:10 — used here
- `Process` — external/code-simplification.md:10 — used here
- `Rationalizations` — external/code-simplification.md:10 — used here
- `Red Flags` — external/code-simplification.md:10 — used here
- `Verification` — external/code-simplification.md:10 — used here

## Structure
Section headings in document order (verbatim from HTML article body and structure):
- `code-simplification` — external/code-simplification.md:5
- `Install just this skill` — external/code-simplification.md:5
- `How this skill is structured` — external/code-simplification.md:8
- `Review phase` — external/code-simplification.md:12
- `More in the Review phase` — external/code-simplification.md:12
- `code-review-and-quality` — external/code-simplification.md:12
- `security-and-hardening` — external/code-simplification.md:12
- `performance-optimization` — external/code-simplification.md:12
- `Product` — external/code-simplification.md:15
- `Setup` — external/code-simplification.md:15
- `Resources` — external/code-simplification.md:15

## Scripts — required if type is script or the skill ships scripts
none (external documentation page; contains no executable scripts)

## Defects — required
- doc-drift: "Every skill follows the same anatomy" — external/code-simplification.md:9 asserts a 6-part anatomy, but skills/code-simplification/SKILL.md includes additional major sections ("The Five Principles" — skills/code-simplification/SKILL.md:30 and "Language-Specific Guidance" — skills/code-simplification/SKILL.md:187) not reflected in the web template.
- internal-contradiction: Header badge labels skill command as "/code-simplify" — external/code-simplification.md:5, whereas the sidebar metadata table lists "Command" — external/code-simplification.md:12 as "/review" — external/code-simplification.md:12.
- orphan: "https://skills.addy.ie/skills/code-simplification/" — external/code-simplification.md:1 is an external web page with no incoming references from any in-scope file in the repository.

## Observations
- Universal anatomy declaration: The page documents a standardized 6-section structure for agent skills: "Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads." — external/code-simplification.md:9.
- Skills CLI packaging: Installation instructions provide dual commands via the Vercel-labs skills CLI: "npx skills add addyosmani/agent-skills --skill code-simplification" — external/code-simplification.md:8 for this individual skill and "npx skills add addyosmani/agent-skills" — external/code-simplification.md:8 for the complete pack.
- Astro static generation: The page was compiled using Astro with scoped attributes (`data-astro-cid-*`) and embeds Netlify RUM monitoring at "https://skills.addy.ie/skills/code-simplification/" — external/code-simplification.md:1.
- Unit inv-addy-16 companion item: The unit-facts file also lists `external/constraint-driven-development.md` as `external-doc (unavailable)` (absent in this checkout). Per METHOD.md §1.1, unavailable external pages require no inventory card and are recorded on the card of the unit file. It is not referenced in `external/code-simplification.md`.

## Context cost
- File size: 26,320 bytes (20 lines).
- Loaded dependencies: references in-repo skill file `skills/code-simplification/SKILL.md` (13,545 bytes).
- Total context cost: 39,865 bytes (~9,966 tokens).
