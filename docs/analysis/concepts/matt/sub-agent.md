---
package: matt
name: sub-agent
slug: sub-agent
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/code-review.md, sha256: 124f2e73633621d31e199b6e3ccf05df0fca692c79080f1ebf1222688e098dd0}
  - {path: docs/productivity/grilling.md, sha256: 5bd89a79cfc03e2a105e5da59da598e0834cf55df9c029daca950e98d3ff76f1}
  - {path: external/code-review.md, sha256: 1c9c0d7d352d7c5d0f51a406007e349c392ea24427fbf2a5352934eaead4dd75}
  - {path: external/grilling.md, sha256: a7f0caf032b3ef6b5155abce4f2a3fe6b5ecb72b5f977bb7d88dc112ed72b384}
  - {path: skills/engineering/codebase-design/DESIGN-IT-TWICE.md, sha256: 8e740bf98446dbd4dfdc132ac4346d9a7eedaf93de6a495889171cf7f99f16bd}
  - {path: skills/engineering/improve-codebase-architecture/SKILL.md, sha256: d1ac25511a936ff4250a48dbcefda363837d6bb9321b3cba73df99fa37270a75}
  - {path: skills/productivity/grilling/SKILL.md, sha256: 10ff989e7498b23b5acb49d5048f11dcd906757d2f79c5cdf8a00001381296f2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# sub-agent

## Definition — verbatim
(used, not defined)
> "Each axis runs in its own [sub-agent](https://www.aihero.dev/ai-coding-dictionary/subagent) so neither sees the other's reasoning." — docs/engineering/code-review.md:3

## Also called — verbatim
`Subagent` — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:14
`subagents` — docs/engineering/ask-matt.md:36

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/code-review.md | 3 | used here | Explains that review axes run in dedicated sub-agents to isolate context and prevent reasoning cross-contamination. |
| docs/productivity/grilling.md | 29 | used here | Mentions using sub-agents to explore peripheral questions without derailing the main interview. |
| external/code-review.md | 25 | used here | External catalog documentation on code review sub-agent isolation. |
| external/grilling.md | 35 | used here | External documentation describing sub-agent exploration during inquiry. |
| skills/engineering/codebase-design/DESIGN-IT-TWICE.md | 3 | used here | Describes dispatching sub-agents to design alternative architectural approaches independently. |
| skills/engineering/improve-codebase-architecture/SKILL.md | 27 | used here | Details using sub-agents to survey disparate codebase modules concurrently. |
| skills/productivity/grilling/SKILL.md | 26 | used here | Recommends spawning sub-agents for factual lookups during active grilling rounds. |

## Consumes
A self-contained task prompt and isolated context window.

## Produces
An analytical report or concrete artifact returned to the parent agent.

## When applied
When executing parallel analyses (such as dual-axis reviews or multi-option designs) where context cross-pollution must be avoided.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: script-bug (recursive sub-agent loops where spawned sub-agents invoked code review again)

## Design notes
The hyphenated variant term used in matt describing child agent processes dispatched to perform bounded, parallel tasks in pristine context windows. Sub-agents are critical in code review and design-it-twice workflows where evaluating distinct perspectives requires mutual blindness between reasoning streams.
