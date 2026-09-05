---
package: matt
path: external/grill-me.md
type: external-doc
bytes: 348368
unit: inv-matt-15
deprecated: false
aliases: []
memo_inputs:
  - {path: external/grill-me.md, sha256: 8ef33c20bc9870b89757d0d6238d319381bb0b7afb299d3e4ef1f92d20dba1d3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# external/grill-me.md

## Purpose — required, verbatim
> "Align on an idea before committing to it." — external/grill-me.md:24

## Design intent — required
Serves as the public documentation, discoverability page, and orientation guide for the `grill-me` skill on Matt Pocock's AI Hero platform (`aihero.dev/skills-grill-me`). It solves the problem of high developer cognitive load in remembering and selecting user-invoked skills by providing a lightweight mental model for the skill's purpose (turning a loose, unformed idea into clear decisions before writing any code or plans), its operational boundaries (when to use `grill-me` vs. `grill-with-docs` vs. `wayfinder`), guidance on active steering vs. passive acquiescence during the inquiry loop, distinguishing grillable decisions from ungrillable UI/UX questions that require prototyping, and dynamic CLI installation instructions (`npx skills@latest add mattpocock/skills --skill=grill-me`). Without this page, developers exploring or installing Matt's skills catalog would lack human-facing documentation explaining why `grill-me` is intentionally stateless, how round-based questioning works, how to avoid drifting into the "dumb zone," and how to transition a sharpened idea into the build flow via `to-spec`.

## Phase — required
matt:Productivity Skills

## Inputs — required
- Initial loose concept or idea: "a feature, a product direction, a business call, a piece of writing" — external/grill-me.md:29
- Explicit slash command trigger by user: "You invoke this by typing <code class=\"ah-code-inline\">/grill-me</code>;" — external/grill-me.md:28
- Active steering and answers from user across questioning rounds: "Being active means steering. Push back on a question pitched beneath the fidelity you need. Say when the scope is drifting." — external/grill-me.md:40

## Outputs — required
- No files or persistent repo workspace: "It writes no files and leaves no workspace behind. The only thing it leaves is a sharper version of the idea, in your own head." — external/grill-me.md:26
- Enriched conversation context handed to spec synthesis: "Hand the same conversation straight to <a class=\"ah-prose-a\" href=\"/skills-to-spec\">to-spec</a>." — external/grill-me.md:64

## Invokes — required
- command /grill-me — external/grill-me.md:28
- skill grill-with-docs — external/grill-me.md:33
- skill wayfinder — external/grill-me.md:34
- skill prototype — external/grill-me.md:44
- file CLAUDE.md — external/grill-me.md:59
- skill to-spec — external/grill-me.md:64
- skill grilling — external/grill-me.md:69
- skill ask-matt — external/grill-me.md:70
- skill handoff — external/grill-me.md:24

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `grill-me` — external/grill-me.md:25 — defined here
- `loose idea` — external/grill-me.md:25 — defined here
- `rounds` — external/grill-me.md:25 — defined here
- `frontier` — external/grill-me.md:25 — defined here
- `stateless` — external/grill-me.md:26 — defined here
- `fresh conversation` — external/grill-me.md:28 — used here
- `grilling` — external/grill-me.md:30 — used here
- `stateful` — external/grill-me.md:33 — used here
- `plan mode` — external/grill-me.md:36 — used here
- `passivity` — external/grill-me.md:39 — defined here
- `ungrillable` — external/grill-me.md:44 — defined here
- `prototype` — external/grill-me.md:44 — used here
- `dumb zone` — external/grill-me.md:57 — defined here
- `context window` — external/grill-me.md:57 — used here
- `to-spec` — external/grill-me.md:64 — used here
- `grill-with-docs` — external/grill-me.md:69 — used here
- `primitive` — external/grill-me.md:69 — defined here
- `user-invoked front door` — external/grill-me.md:69 — defined here
- `ask-matt` — external/grill-me.md:70 — used here
- `Productivity Skills` — external/grill-me.md:5 — used here
- `skills` — external/grill-me.md:24 — used here

## Structure
- The /grill-me Skill
- What it does
- When to reach for it
- It's a conversation, not an interview
- Grillable and ungrillable
- It's working if
- Common questions
- Where it fits
- Related reading

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- orphan — "https://aihero.dev/skills-grill-me" — external/grill-me.md:1 — External documentation page snapshot hosted on aihero.dev, not loaded or executed by repository code in sources/matt/.
- doc-drift — "The /grill-me Skill" — external/grill-me.md:24 — Rendered external doc page includes an H1 heading ("The /grill-me Skill") and a dynamic install block ("npx skills@latest add mattpocock/skills --skill=grill-me"), both of which are omitted from the repo's markdown source file docs/productivity/grill-me.md per .agents/writing-docs.md:11 and .agents/install-block.md.

## Observations
- Dynamic CLI install block rendered on the live web page: "npx skills@latest add mattpocock/skills --skill=grill-me" — external/grill-me.md:24.
- Core interview dynamics: "Count rounds, not questions. Forty-six questions across four rounds is an ordinary session. It ends when the frontier is empty: every branch visited, nothing left silently assumed." — external/grill-me.md:55.
- Warning on user passivity: "The failure mode is <strong class=\"ah-prose-strong\">passivity</strong>: answering &quot;agreed, agreed, agreed&quot; for forty questions and coming out with a plan the agent wrote and you nodded at." — external/grill-me.md:39.
- Handling LLM context window saturation: "Very long sessions also drift into the <strong class=\"ah-prose-strong\"><a class=\"decoration-primary/40 underline-offset-4 hover:decoration-primary\" data-state=\"closed\" href=\"/ai-coding-dictionary/smart-zone\">dumb zone</a></strong>, where the <a class=\"decoration-primary/40 underline-offset-4 hover:decoration-primary\" data-state=\"closed\" href=\"/ai-coding-dictionary/context-window\">context window</a> is full enough that the questions get worse." — external/grill-me.md:57.
- Configuration for single-question mode: "When grilling, ask one question at a time." — external/grill-me.md:60.
- Seamless downstream pipeline transition: "Hand the same conversation straight to <a class=\"ah-prose-a\" href=\"/skills-to-spec\">to-spec</a>." — external/grill-me.md:64.

## Context cost
348368 bytes (~87,000 tokens as an entire HTML snapshot; substantive markdown content within it is ~6.5 KB, ~1500 tokens). Static web documentation snapshot, 0 loaded dependencies during agent execution.
