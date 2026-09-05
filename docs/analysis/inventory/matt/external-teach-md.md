---
package: matt
path: external/teach.md
type: external-doc
bytes: 373585
unit: inv-matt-26
deprecated: false
aliases: []
memo_inputs:
  - {path: external/teach.md, sha256: 9ae46342a2459bccd5cfe0b07502a43b2fd3dd1d8a18b84f0d9b2dc553dad96b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# external/teach.md

## Purpose — required, verbatim
> "Learn a topic across many sessions that build on each other." — external/teach.md:24

## Design intent — required
Serves as the public documentation, discoverability page, and orientation guide for the `teach` skill on Matt Pocock's AI Hero platform (`aihero.dev/skills-teach`). It solves the problem of high developer cognitive load in understanding how long-form, multi-session learning works in an agent workflow, distinguishing `teach` (which builds a dedicated standing workspace with persistent files, structured HTML lessons, vetted resources, and learning records) from ad-hoc in-session explanations or other skills like `wait-what`, `grill-me`, `research`, or `handoff`. It establishes core pedagogical concepts such as prioritizing storage strength over fleeting fluency through retrieval practice, spacing, and interleaving, setting boundaries (one mission per dedicated directory, separate from active working projects), documenting workspace anatomy (`MISSION.md`, `RESOURCES.md`, `lessons/*.html`, `reference/*.html`, `learning-records/*.md`, `assets/*`, `NOTES.md`), addressing common user pain points and bugs (such as path resolution issues, session continuity, hallucination risks, quiz answer positions, and missing knowledge assessment), and providing CLI installation instructions (`npx skills@latest add mattpocock/skills --skill=teach`). Without this page, developers exploring Matt's skills catalog would lack a human-oriented mental model of how to use an AI agent as a structured tutor rather than an untrusted oracle, and how to maintain long-term learning state across independent sessions.

## Phase — required
matt:Productivity Skills

## Inputs — required
- User slash command invocation: "You invoke this by typing <code class=\"ah-code-inline\">/teach</code>;" — external/teach.md:28
- Multi-session continuation command: "Common practice is to open a fresh session in the workspace and say <code class=\"ah-code-inline\">/teach next lesson for &lt;topic&gt;</code>." — external/teach.md:48
- Initial interview on learning goals and mission when `MISSION.md` is missing: "Everything else hangs off it; if it is missing, the first thing <code class=\"ah-code-inline\">teach</code> does is interview you until it isn&#x27;t" — external/teach.md:34
- Mission grounding: "The <strong class=\"ah-prose-strong\">mission</strong> (the concrete real-world reason you want this) grounds every lesson; without it the lessons drift abstract and nothing decides what comes next." — external/teach.md:38
- Vetted resources: "The vetted sources it teaches from, split into Knowledge and Wisdom (communities)" — external/teach.md:34
- User learning records and ZPD: "From the mission and the learning records, <code class=\"ah-code-inline\">teach</code> picks the next lesson inside your <strong class=\"ah-prose-strong\">zone of proximal development</strong>: challenging enough to take effort, not so far ahead that it stops being learnable." — external/teach.md:38
- Prior knowledge and user gap corrections: "Two things help: state your prior knowledge and your gaps in the first message, and correct the level out loud when a lesson misses, because the correction becomes a learning record and steers the next one." — external/teach.md:54
- Shared assets and components: "The agent reads <code class=\"ah-code-inline\">assets/</code> before authoring a lesson and builds from what is there" — external/teach.md:43
- User preferences: "Your stated teaching preferences" — external/teach.md:34

## Outputs — required
- Standing teaching workspace: "<code class=\"ah-code-inline\">teach</code> turns the directory you run it in into a standing teaching workspace" — external/teach.md:25
- Mission specification file `MISSION.md`: "<code class=\"ah-code-inline\">MISSION.md</code>" — external/teach.md:34
- Curated resource bibliography `RESOURCES.md`: "<code class=\"ah-code-inline\">RESOURCES.md</code>" — external/teach.md:34
- Structured lesson documents `lessons/*.html`: "The numbered lessons: the primary unit of teaching" — external/teach.md:34
- Self-contained lesson artifact: "A <strong class=\"ah-prose-strong\">lesson</strong> is one self-contained HTML file, short enough to finish in a sitting, tied to the mission, giving one tangible win." — external/teach.md:41
- Reusable cheat-sheets and algorithms in `reference/*.html`: "Compressed cheat-sheets, algorithms, glossaries: the documents you actually return to" — external/teach.md:34
- Extracted essence of lessons: "So the compressed essence of a lesson (the syntax table, the algorithm, the pose sequence, the glossary) belongs in <code class=\"ah-code-inline\">reference/</code>, not buried in the lesson that introduced it." — external/teach.md:42
- Learning assessment logs in `learning-records/*.md`: "ADR-style notes on what you have demonstrably learned, used to decide what to teach next" — external/teach.md:34
- Reusable components and stylesheets in `assets/*`: "Reusable components, starting with a shared stylesheet, so the lessons look like one course" — external/teach.md:34
- User notes in `NOTES.md`: "Your stated teaching preferences" — external/teach.md:34
- Assessment gates and interactive drills: "A quiz is a gate, not a formality: one user reported saying &quot;thanks a lot&quot; and being told the drill was still live." — external/teach.md:39

## Invokes — required
- command /teach — external/teach.md:28
- skill wait-what — external/teach.md:30
- skill grill-me — external/teach.md:30
- skill research — external/teach.md:30
- skill handoff — external/teach.md:30
- skill ask-matt — external/teach.md:74
- file MISSION.md — external/teach.md:34
- file RESOURCES.md — external/teach.md:34
- file NOTES.md — external/teach.md:34
- file GLOSSARY-FORMAT.md — external/teach.md:35
- file MISSION-FORMAT.md — external/teach.md:46
- file SKILL.md — external/teach.md:35

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `teach` — external/teach.md:25 — defined here
- `standing teaching workspace` — external/teach.md:25 — defined here
- `sessions` — external/teach.md:25 — used here
- `parametric knowledge` — external/teach.md:26 — used here
- `stateful` — external/teach.md:26 — used here
- `RESOURCES.md` — external/teach.md:26 — defined here
- `agent` — external/teach.md:28 — used here
- `MISSION.md` — external/teach.md:34 — defined here
- `lessons` — external/teach.md:34 — defined here
- `reference` — external/teach.md:34 — defined here
- `learning-records` — external/teach.md:34 — defined here
- `assets` — external/teach.md:34 — defined here
- `NOTES.md` — external/teach.md:34 — defined here
- `GLOSSARY-FORMAT.md` — external/teach.md:35 — used here
- `storage strength` — external/teach.md:37 — defined here
- `fluency` — external/teach.md:37 — defined here
- `desirable difficulty` — external/teach.md:37 — defined here
- `retrieval practice` — external/teach.md:37 — used here
- `spacing` — external/teach.md:37 — used here
- `interleaving` — external/teach.md:37 — used here
- `working memory` — external/teach.md:37 — used here
- `mission` — external/teach.md:38 — defined here
- `zone of proximal development` — external/teach.md:38 — defined here
- `wisdom` — external/teach.md:39 — defined here
- `gate` — external/teach.md:39 — used here
- `drill` — external/teach.md:39 — defined here
- `lesson` — external/teach.md:41 — defined here
- `primary source` — external/teach.md:41 — used here
- `components` — external/teach.md:43 — defined here
- `shared stylesheet` — external/teach.md:43 — defined here
- `MISSION-FORMAT.md` — external/teach.md:46 — used here
- `grounding machinery` — external/teach.md:50 — defined here
- `knowledge-assessment` — external/teach.md:54 — used here
- `reasoning effort` — external/teach.md:60 — used here
- `harness` — external/teach.md:60 — used here
- `reach-for-it-anytime standalone` — external/teach.md:73 — defined here
- `handoff` — external/teach.md:74 — used here
- `research` — external/teach.md:74 — used here
- `ask-matt` — external/teach.md:74 — used here
- `Productivity Skills` — external/teach.md:5 — used here

## Structure
- The /teach Skill
- What it does
- When to reach for it
- Prerequisites
- Storage strength, not fluency
- Lessons, references and components
- Common questions
- It's working if
- Where it fits
- Related reading

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- orphan — "https://aihero.dev/skills-teach" — external/teach.md:1 — External documentation page snapshot hosted on aihero.dev, not loaded or executed by repository code in sources/matt/.
- doc-drift — "The /teach Skill" — external/teach.md:24 — Rendered external doc page includes an H1 heading ("The /teach Skill") and a dynamic install block ("npx skills@latest add mattpocock/skills --skill=teach"), both of which are omitted from the repo's markdown source file docs/productivity/teach.md per .agents/writing-docs.md:11 and .agents/install-block.md.
- doc-drift — "GLOSSARY-FORMAT.md" — external/teach.md:35 — External documentation notes that the skill ships GLOSSARY-FORMAT.md that SKILL.md no longer links to (issue #559), resulting in drift between the skill specification and shipped template assets.
- missing-path — "assets/" — external/teach.md:46 — Open bug #377 documented on the page where relative path ambiguity causes skills to write files into ~/.claude/skills instead of the user's workspace directory.

## Observations
- Dynamic CLI installation command on live web page: "npx skills@latest add mattpocock/skills --skill=teach" — external/teach.md:24.
- Core pedagogical model: "The word to think with is <strong class=\"ah-prose-strong\">storage strength</strong>: long-term retention, as opposed to <strong class=\"ah-prose-strong\">fluency</strong>, the in-the-moment recall that feels like mastery while you are reading and is gone a week later. <code class=\"ah-code-inline\">teach</code> builds the former through desirable difficulty: retrieval practice, spacing, interleaving." — external/teach.md:37.
- Grounding vs LLM parametric knowledge: "It does not teach from what the <a class=\"decoration-primary/40 underline-offset-4 hover:decoration-primary\" data-state=\"closed\" href=\"/ai-coding-dictionary/model\">model</a> already knows. <a class=\"decoration-primary/40 underline-offset-4 hover:decoration-primary\" data-state=\"closed\" href=\"/ai-coding-dictionary/parametric-knowledge\">Parametric knowledge</a> is treated as untrusted: before it teaches, it goes and finds high-trust resources, records them in <code class=\"ah-code-inline\">RESOURCES.md</code>, and cites them inside every lesson." — external/teach.md:26.
- Composition pattern with handoff and grilling: "Its one real neighbour is <a class=\"ah-prose-a\" href=\"/skills-handoff\">handoff</a>, through the composition Matt named as the answer to &quot;what do I do if I&#x27;m being grilled about something I don&#x27;t understand?&quot;: don&#x27;t stop the grilling to learn: <code class=\"ah-code-inline\">/handoff</code> to a teaching workspace, learn it there with <code class=\"ah-code-inline\">/teach</code>, then go back and pick up where you left off." — external/teach.md:74.
- Lesson structure and component reuse: "A <strong class=\"ah-prose-strong\">lesson</strong> is one self-contained HTML file, short enough to finish in a sitting, tied to the mission, giving one tangible win. It cites its sources, recommends one <a class=\"decoration-primary/40 underline-offset-4 hover:decoration-primary\" data-state=\"closed\" href=\"/ai-coding-dictionary/primary-source\">primary source</a> to go and read yourself, and links to sibling lessons and reference documents." — external/teach.md:41.
- Bug report on quiz answer position bias: "Confirmed by several people, on Sonnet, on Opus and on GLM, and still unfixed." — external/teach.md:52.
- Bug report on relative path resolution: "A real, open bug (<a href=\"https://github.com/mattpocock/skills/issues/377\" rel=\"noopener noreferrer\" target=\"_blank\" class=\"ah-prose-a\">#377</a>)." — external/teach.md:46.

## Context cost
373585 bytes (~93,000 tokens as an entire HTML snapshot; substantive markdown content within it is ~6.8 KB, ~1600 tokens). Static web documentation snapshot, 0 loaded dependencies during agent execution.
