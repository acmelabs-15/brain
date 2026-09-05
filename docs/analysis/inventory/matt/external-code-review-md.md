---
package: matt
path: external/code-review.md
type: external-doc
bytes: 359558
unit: inv-matt-11
deprecated: false
aliases: []
memo_inputs:
  - {path: external/code-review.md, sha256: 1c9c0d7d352d7c5d0f51a406007e349c392ea24427fbf2a5352934eaead4dd75}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# external/code-review.md

## Purpose — required, verbatim
> "Review a diff against your standards and against the spec." — external/code-review.md:2

## Design intent — required
`code-review` provides an automated, two-axis review of code changes against a nominated fixed point (`<fixed-point>...HEAD`). It explicitly separates verification into two non-merged dimensions: the Standards axis (ensuring the code conforms to repository-documented coding conventions and a baseline of twelve Fowler code smells) and the Spec axis (ensuring the diff implements the originating issue or specification without omissions or scope creep). By isolating each axis in its own sub-agent and refusing to blend or rank verdicts across them, the design prevents syntactic and convention compliance from masking semantic failure, or vice versa. Without it, automated reviews in agent workflows risk devolving into generic bug-hunting or superficial linter passes that fail to catch deviations from repository-specific standards or the originating specification.

## Phase — required
matt:The Main Flow ("The Main Flow" — external/code-review.md:5; "is the review step at the tail of the build chain:" — external/code-review.md:69)

## Inputs — required
- Target diff fixed point: "&lt;fixed-point&gt;...HEAD" — external/code-review.md:59 ("and a fixed point you name" — external/code-review.md:25: commit SHA, branch, tag, `main`, `HEAD~5`)
- Originating specification or issue reference:
  - "Issue references in the commit messages" — external/code-review.md:35
  - "A path you pass in as an argument." — external/code-review.md:36
  - "docs/agents/issue-tracker.md" — external/code-review.md:40
- Documented coding standards and guidelines:
  - "CODING_STANDARDS.md" — external/code-review.md:32
  - "CONTRIBUTING.md" — external/code-review.md:32
  - "smell baseline" — external/code-review.md:44 (twelve Fowler code smells from *Refactoring* ch. 3)

## Outputs — required
- Two independent review reports presented side by side:
  - "## Standards" — external/code-review.md:63
  - "## Spec" — external/code-review.md:63
- Closing summary:
  - "worst issue per axis" — external/code-review.md:65
  - "refuses to name a single winner across them" — external/code-review.md:26
  - "no spec available" — external/code-review.md:40 (when no specification is located)

## Invokes — required
none

## Invoked by — required
orphan (external web documentation page; not invoked by any in-scope file)

## Concepts named — required, verbatim
- `code-review` — external/code-review.md:25 — defined here
- `Standards` — external/code-review.md:25 — defined here
- `Spec` — external/code-review.md:25 — defined here
- `sub-agent` — external/code-review.md:25 — used here
- `The Main Flow` — external/code-review.md:5 — used here
- `fixed point` — external/code-review.md:30 — used here
- `smell baseline` — external/code-review.md:44 — defined here
- `Fowler code smells` — external/code-review.md:44 — used here
- `Refactoring` — external/code-review.md:44 — used here
- `Mysterious Name` — external/code-review.md:44 — used here
- `Duplicated Code` — external/code-review.md:44 — used here
- `Feature Envy` — external/code-review.md:44 — used here
- `Data Clumps` — external/code-review.md:44 — used here
- `Primitive Obsession` — external/code-review.md:44 — used here
- `Repeated Switches` — external/code-review.md:44 — used here
- `Shotgun Surgery` — external/code-review.md:44 — used here
- `Divergent Change` — external/code-review.md:44 — used here
- `Speculative Generality` — external/code-review.md:44 — used here
- `Message Chains` — external/code-review.md:44 — used here
- `Middle Man` — external/code-review.md:44 — used here
- `Refused Bequest` — external/code-review.md:44 — used here
- `primary source` — external/code-review.md:43 — used here
- `scope creep` — external/code-review.md:42 — used here
- `three-dot` — external/code-review.md:59 — used here
- `merge-base` — external/code-review.md:59 — used here
- `tdd` — external/code-review.md:29 — used here
- `implement` — external/code-review.md:29 — used here
- `improve-codebase-architecture` — external/code-review.md:29 — used here
- `diagnosing-bugs` — external/code-review.md:29 — used here
- `setup-matt-pocock-skills` — external/code-review.md:40 — used here
- `ask-matt` — external/code-review.md:75 — used here
- `confirmation bias` — external/code-review.md:51 — used here
- `ticket` — external/code-review.md:26 — used here
- `spec` — external/code-review.md:25 — used here
- `session` — external/code-review.md:50 — used here
- `harness` — external/code-review.md:47 — used here
- `context` — external/code-review.md:47 — used here
- `issue-tracker.md` — external/code-review.md:40 — used here
- `CODING_STANDARDS.md` — external/code-review.md:32 — used here
- `CONTRIBUTING.md` — external/code-review.md:32 — used here
- `to-spec` — external/code-review.md:72 — used here
- `to-tickets` — external/code-review.md:72 — used here
- `grill-with-docs` — external/code-review.md:69 — used here

## Structure
- "The /code-review Skill" — external/code-review.md:24 (h1)
- "What it does" — external/code-review.md:24 (h2)
- "When to reach for it" — external/code-review.md:27 (h2)
- "Prerequisites" — external/code-review.md:31 (h2)
- "The two axes" — external/code-review.md:41 (h2)
- "Common questions" — external/code-review.md:45 (h2)
- "It&#x27;s working if" — external/code-review.md:60 (h2)
- "Where it fits" — external/code-review.md:68 (h2)
- "Related reading" — external/code-review.md:75 (h2)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- orphan: "https://aihero.dev/skills-code-review" — external/code-review.md:1 — external documentation snapshot is not referenced or invoked by any file in the source repository.
- other: "This is the most reported problem with the skill, and it is not fixed." — external/code-review.md:47 — documented open collision where the skill shadows Claude Code's built-in /code-review command hunting diff bugs.
- other: "Known open bug, reproduced by several people and in more than one harness." — external/code-review.md:49 — sub-agent prompts do not forbid delegation, allowing sub-agents to rediscover the skill and recursively spawn up to 50-plus agents.
- doc-drift: external doc provides troubleshooting documentation on collisions and sub-agent recursion that is missing from the in-repo skill definition "Review the changes since a fixed point" — skills/engineering/code-review/SKILL.md:3.

## Observations
- The page is an HTML snapshot of `https://aihero.dev/skills-code-review` fetched 2026-09-05, built using Next.js with Tailwind CSS styling (`ah-prose-*`).
- Details the install command via the skills CLI: `npx skills@latest add mattpocock/skills --skill=code-review` (external/code-review.md:24).
- Distinguishes this skill from Claude Code's built-in `/code-review` (bug hunting vs spec/standards compliance) and notes the shadowing behavior.
- Details the 12 Fowler code smells from *Refactoring* ch. 3 used as the baseline: Mysterious Name, Duplicated Code, Feature Envy, Data Clumps, Primitive Obsession, Repeated Switches, Shotgun Surgery, Divergent Change, Speculative Generality, Message Chains, Middle Man, Refused Bequest (external/code-review.md:44).
- Highlights that sub-agent outputs are hypotheses requiring verification, warning against infinite review loops due to lack of convergence guarantee ("There is no convergence guarantee." — external/code-review.md:57).

## Context cost
359558 bytes (~89890 tokens at 4 bytes/token). Follows 0 invoked files. Total: 359558 bytes (~89890 tokens).
