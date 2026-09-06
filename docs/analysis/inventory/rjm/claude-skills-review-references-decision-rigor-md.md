---
package: rjm
path: .claude/skills/review/references/decision-rigor.md
type: reference
bytes: 10750
unit: inv-rjm-151
in_scope_via: .claude/skills/review/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/review/references/decision-rigor.md, sha256: acaa1778a6530d256a2996600af0674cd8f187af1f7777bf47df70e977233dcb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/review/references/decision-rigor.md

## Purpose — required, verbatim
> "You are reviewing a pull request for the quality of the reasoning behind a decision, not just the code that implements it." — .claude/skills/review/references/decision-rigor.md:10

## Design intent — required
Evaluates the quality of technical reasoning, trade-offs, and evidence in PRs staging Architectural Decision Records (ADRs) or design reviews. It ensures that load-bearing assumptions are stated explicitly, factual claims are substantiated, viable alternatives are documented and evaluated, survivorship and evidence bias are examined, failure modes are anticipated via a pre-mortem perspective, and the system design adheres to Gall's Law (starting simple and evolving rather than big-bang complexity). Without this review axis, architectural decisions could be merged with unexamined assumptions, hidden trade-offs, or unverified claims, shifting the heavy cognitive and technical cost of refuting flawed choices onto future maintainers.

## Phase — required
rjm:review

## Inputs — required
- Pull request diff prepended with `CONTEXT_MODE: [full|summary|partial]` header — .claude/skills/review/references/decision-rigor.md:14
- Staged Architectural Decision Record (`ADR-*.md` file) or design-review document — .claude/skills/review/references/decision-rigor.md:45
- PR description arguing for non-obvious technical choice with alternatives, trade-offs, or evidence — .claude/skills/review/references/decision-rigor.md:45

## Outputs — required
- Decision Quality Assessment table rating criteria (Assumptions Explicit, Claims Verifiable, Alternatives Considered, Bias Examined, Failure Modes Named, Starts Simple) 1-5 and overall score out of 5 — .claude/skills/review/references/decision-rigor.md:98-109
- Findings table with Severity, Category, Finding, Location (`file:line`), and Recommendation — .claude/skills/review/references/decision-rigor.md:111-115
- Specific rigor recommendations — .claude/skills/review/references/decision-rigor.md:117-119
- Human-readable Verdict (`VERDICT: [PASS|WARN|CRITICAL_FAIL]`, `MESSAGE: [Brief explanation]`) — .claude/skills/review/references/decision-rigor.md:129-132
- Fenced JSON output matching inline schema (`verdict`, `message`, `agent: "decision-rigor"`, `timestamp`, `findings` array) — .claude/skills/review/references/decision-rigor.md:147-163
- Parseable final verdict line matching regex — .claude/skills/review/references/decision-rigor.md:188-192

## Invokes — required
- skill decision-critic — .claude/skills/review/references/decision-rigor.md:51
- skill pre-mortem — .claude/skills/review/references/decision-rigor.md:52
- reference critical-thinking-survivorship-bias.md — .claude/skills/review/references/decision-rigor.md:53
- reference decision-pre-committed-metrics.md — .claude/skills/review/references/decision-rigor.md:54
- reference mental-models-galls-law.md — .claude/skills/review/references/decision-rigor.md:55

## Invoked by — required
- skill review — .claude/skills/review/SKILL.md:29

## Concepts named — required, verbatim
- `Decision Rigor Review Task` — .claude/skills/review/references/decision-rigor.md:8 — defined here
- `Context Mode Enforcement` — .claude/skills/review/references/decision-rigor.md:12 — defined here
- `CONTEXT_MODE` — .claude/skills/review/references/decision-rigor.md:14 — used here
- `full` — .claude/skills/review/references/decision-rigor.md:18 — used here
- `summary` — .claude/skills/review/references/decision-rigor.md:20 — used here
- `partial` — .claude/skills/review/references/decision-rigor.md:22 — used here
- `manipulation-resistance control` — .claude/skills/review/references/decision-rigor.md:31 — used here
- `Grounding Rules` — .claude/skills/review/references/decision-rigor.md:36 — defined here
- `ADR` — .claude/skills/review/references/decision-rigor.md:45 — used here
- `decision-critic` — .claude/skills/review/references/decision-rigor.md:51 — used here
- `pre-mortem` — .claude/skills/review/references/decision-rigor.md:52 — used here
- `survivorship-bias` — .claude/skills/review/references/decision-rigor.md:53 — used here
- `pre-committed-metrics` — .claude/skills/review/references/decision-rigor.md:54 — used here
- `Gall's Law` — .claude/skills/review/references/decision-rigor.md:55 — used here
- `Assumptions and Claims` — .claude/skills/review/references/decision-rigor.md:59 — defined here
- `Alternatives Considered` — .claude/skills/review/references/decision-rigor.md:65 — defined here
- `Survivorship and Evidence Bias` — .claude/skills/review/references/decision-rigor.md:71 — defined here
- `Failure Modes` — .claude/skills/review/references/decision-rigor.md:77 — defined here
- `Brandolini's law` — .claude/skills/review/references/decision-rigor.md:81 — used here
- `Reversibility` — .claude/skills/review/references/decision-rigor.md:83 — defined here
- `Start Simple` — .claude/skills/review/references/decision-rigor.md:88 — defined here
- `YAGNI` — .claude/skills/review/references/decision-rigor.md:91 — used here
- `big-bang cutover` — .claude/skills/review/references/decision-rigor.md:92 — used here
- `Decision Quality Assessment` — .claude/skills/review/references/decision-rigor.md:98 — defined here
- `Overall Decision Rigor Score` — .claude/skills/review/references/decision-rigor.md:109 — defined here
- `Verdict` — .claude/skills/review/references/decision-rigor.md:121 — defined here
- `PASS` — .claude/skills/review/references/decision-rigor.md:125 — used here
- `WARN` — .claude/skills/review/references/decision-rigor.md:126 — used here
- `CRITICAL_FAIL` — .claude/skills/review/references/decision-rigor.md:127 — used here
- `Critical Failure Triggers` — .claude/skills/review/references/decision-rigor.md:134 — defined here
- `Structured JSON Output` — .claude/skills/review/references/decision-rigor.md:143 — defined here
- `Output Schema` — .claude/skills/review/references/decision-rigor.md:165 — defined here

## Structure
- `# Decision Rigor Review Task` — .claude/skills/review/references/decision-rigor.md:8
- `## Context Mode Enforcement (REQUIRED)` — .claude/skills/review/references/decision-rigor.md:12
- `## Grounding Rules` — .claude/skills/review/references/decision-rigor.md:36
- `## When This Axis Applies` — .claude/skills/review/references/decision-rigor.md:43
- `## Reference Material` — .claude/skills/review/references/decision-rigor.md:47
- `## Analysis Focus Areas` — .claude/skills/review/references/decision-rigor.md:57
- `### 1. Assumptions and Claims` — .claude/skills/review/references/decision-rigor.md:59
- `### 2. Alternatives Considered` — .claude/skills/review/references/decision-rigor.md:65
- `### 3. Survivorship and Evidence Bias` — .claude/skills/review/references/decision-rigor.md:71
- `### 4. Failure Modes (Pre-Mortem Lens)` — .claude/skills/review/references/decision-rigor.md:77
- `### 5. Reversibility` — .claude/skills/review/references/decision-rigor.md:83
- `### 6. Start Simple (Gall's Law Lens)` — .claude/skills/review/references/decision-rigor.md:88
- `## Output Requirements` — .claude/skills/review/references/decision-rigor.md:94
- `### Decision Quality Assessment` — .claude/skills/review/references/decision-rigor.md:98
- `### Findings` — .claude/skills/review/references/decision-rigor.md:111
- `### Recommendations` — .claude/skills/review/references/decision-rigor.md:117
- `### Verdict` — .claude/skills/review/references/decision-rigor.md:121
- `## Critical Failure Triggers` — .claude/skills/review/references/decision-rigor.md:134
- `## Structured JSON Output` — .claude/skills/review/references/decision-rigor.md:143
- `## Output Schema` — .claude/skills/review/references/decision-rigor.md:165

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Integrates mental models and decision heuristics: Brandolini's law (cost of refuting unexamined assertions), Gall's law (complex systems must evolve from working simple systems), survivorship bias, and pre-mortem prospective hindsight.
- Defines a manipulation-resistance control via `CONTEXT_MODE` header: forbids `PASS` when context is `summary` or `partial` to prevent hiding architectural changes behind diff statistics.
- Strict verdict threshold: an irreversible choice without alternatives or an unevidenced benefit claim triggers automatic `CRITICAL_FAIL`.
- Ships dual output contracts: a human-readable markdown section with a 1-5 Decision Quality Assessment table, followed by a structured JSON block matching `.agents/schemas/pr-quality-gate-output.schema.json`.

## Context cost
10750 bytes (~2688 tokens). Pure prompt reference that can invoke `decision-critic` and `pre-mortem` skills and load 3 related reference files.
