---
package: rjm
path: .agents/architecture/ADR-065-orchestrator-as-router.md
type: agent
bytes: 10286
unit: inv-rjm-24
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-065-orchestrator-as-router.md, sha256: 6a3ba03173f31558031822da39be98be2a5f8335c4f4e9dfb530f7f9255b3c13}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-065-orchestrator-as-router.md

## Purpose — required, verbatim
> "The orchestrator is a deterministic router with a retry policy. It is not a supervisor." — .agents/architecture/ADR-065-orchestrator-as-router.md:58-59

## Design intent — required
Architectural decision record operationalizing the conceptual thesis from "LLMs as Ghosts not Animals" by stripping anthropomorphic managerial and supervisory framing from orchestrator prompts. Recognizes that LLMs lack persistent cross-call identity or continuous supervision loops (relying strictly on context concatenation). Mandates four binding rules: removing supervisor vocabulary via CI lint checks, requiring an explicit `success_criterion` frontmatter schema on all sub-agents (machine-checkable signals or justified human-judgment), logging structured routing records (`input_id`, `chosen_agent`, `reason`), and moving retry behavior into code with an `N=3` cap embedding prior failure feedback.

## Phase — required
cross-phase

## Inputs — required
- Orchestrator agent definitions (`templates/agents/orchestrator*.md` and agents declaring `role: orchestrator`) — .agents/architecture/ADR-065-orchestrator-as-router.md:41-42
- Sub-agent declarations in frontmatter lacking explicit success criteria — .agents/architecture/ADR-065-orchestrator-as-router.md:43-44
- Philosophical concept document `wiki/concepts/AI Strategy/LLMs as Ghosts not Animals.md` — .agents/architecture/ADR-065-orchestrator-as-router.md:27

## Outputs — required
- CI lint specification banning manager and supervisor vocabulary in orchestrator definitions — .agents/architecture/ADR-065-orchestrator-as-router.md:61-65
- Frontmatter schema for sub-agents requiring `success_criterion` (`kind`, `value`, `rationale`) — .agents/architecture/ADR-065-orchestrator-as-router.md:80-85
- Structured routing decision record schema (`input_id`, `chosen_agent`, `reason`) for run logs — .agents/architecture/ADR-065-orchestrator-as-router.md:87-90
- Code-level retry policy specification (`N=3` retries, embedding failure signals, visible exhaustion) — .agents/architecture/ADR-065-orchestrator-as-router.md:92-96

## Invokes — required
- doc LLMs as Ghosts not Animals.md — .agents/architecture/ADR-065-orchestrator-as-router.md:27
- template orchestrator — .agents/architecture/ADR-065-orchestrator-as-router.md:41
- reference ADR-013 — .agents/architecture/ADR-065-orchestrator-as-router.md:104
- reference ADR-033 — .agents/architecture/ADR-065-orchestrator-as-router.md:104
- reference ADR-010 — .agents/architecture/ADR-065-orchestrator-as-router.md:104
- reference ADR-051 — .agents/architecture/ADR-065-orchestrator-as-router.md:107
- reference ADR-057 — .agents/architecture/ADR-065-orchestrator-as-router.md:110
- reference ADR-059 — .agents/architecture/ADR-065-orchestrator-as-router.md:209

## Invoked by — required
- doc readme — .agents/architecture/README.md:173

## Concepts named — required, verbatim
- `supervision loop` — .agents/architecture/ADR-065-orchestrator-as-router.md:29 — defined here
- `context concatenation` — .agents/architecture/ADR-065-orchestrator-as-router.md:30 — defined here
- `success_criterion` — .agents/architecture/ADR-065-orchestrator-as-router.md:43 — defined here
- `deterministic router` — .agents/architecture/ADR-065-orchestrator-as-router.md:58 — defined here
- `retry policy` — .agents/architecture/ADR-065-orchestrator-as-router.md:58 — defined here
- `Machine-checkable` — .agents/architecture/ADR-065-orchestrator-as-router.md:70 — defined here
- `Human-judgment with rationale` — .agents/architecture/ADR-065-orchestrator-as-router.md:73 — defined here
- `Routing decisions` — .agents/architecture/ADR-065-orchestrator-as-router.md:87 — defined here
- `synthesis-panel frontmatter standard` — .agents/architecture/ADR-065-orchestrator-as-router.md:107 — used here
- `prompt behavioral evaluation` — .agents/architecture/ADR-065-orchestrator-as-router.md:110 — used here
- `deterministic gates` — .agents/architecture/ADR-065-orchestrator-as-router.md:114 — used here

## Structure
- # ADR-065: Orchestrator Is a Deterministic Router and Retry Policy, Not a Supervisor
- ## Status
- ## Date
- ## Context
- ### What Currently Exists
- ### Why Change Now
- ## Decision
- ## Prior Art Investigation
- ## Rationale
- ### Alternatives Considered
- ### Trade-offs
- ## Consequences
- ### Positive
- ### Negative
- ### Neutral
- ## Impact on Dependent Components
- ## Implementation Notes
- ## Related Decisions
- ## References

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · `.agents/architecture/ADR-065-orchestrator-as-router.md:27` · References non-existent path `wiki/concepts/AI Strategy/LLMs as Ghosts not Animals.md`.
- `missing-path` · `.agents/architecture/ADR-065-orchestrator-as-router.md:214` · References non-existent path `wiki/concepts/AI Strategy/LLMs as Ghosts not Animals.md`.

## Observations
Introduces foundational AI systems discipline by stripping anthropomorphic illusions ("ghosts not animals") from agent architecture. Displaces vague prompt-level supervision with code-enforced deterministic routing, structured logging, and programmatic retries embedding failure feedback. Introduces explicit `success_criterion` schema with a `human-judgment` rationale escape hatch to accommodate non-regex tasks without faking verification.

## Context cost
10286 bytes (~2571 tokens). Lean, highly focused architecture decision record establishing routing contracts.
