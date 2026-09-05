---
package: rjm
path: .claude/agents/debug.md
type: agent
bytes: 2839
unit: inv-rjm-65
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/agents/debug.md, sha256: 1ca17664f5023678bd614250d7725069bdfeb96b441ef8818dd96b2c83f388fc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/agents/debug.md

## Purpose — required, verbatim
> "Debug your application to find and fix a bug. Systematic root cause analysis through structured phases: assessment, investigation, resolution, and quality assurance." — .claude/agents/debug.md:3

## Design intent — required
A disciplined troubleshooting agent that performs systematic root cause analysis and resolution for application bugs across four structured phases (problem assessment, investigation, resolution, quality assurance). It enforces evidence-based debugging, requiring concrete reproduction steps before proposing or applying minimal, pattern-compliant code fixes and regression test updates, preventing guesswork and unintended regressions.

## Phase — required
rjm:test

## Inputs — required
- Bug description, error message, or unexpected behavior via `argument-hint` ("Describe the bug, error message, or unexpected behavior to investigate") — .claude/agents/debug.md:6.
- Stack traces, error logs, codebase structure, and recent changes — .claude/agents/debug.md:34.
- Test execution outputs and reproduction run logs — .claude/agents/debug.md:36.
- Variable states, data flows, and control logic via code execution tracing — .claude/agents/debug.md:40.

## Outputs — required
- Documented reproduction steps and failure verification — .claude/agents/debug.md:36.
- Prioritized root-cause hypotheses and verification plan — .claude/agents/debug.md:42.
- Targeted code fixes following existing code patterns — .claude/agents/debug.md:46.
- Regression tests added or updated — .claude/agents/debug.md:52.
- Final debugging report summarizing the fix, root cause, and preventive measures — .claude/agents/debug.md:54.

## Invokes — required
- agent implementer — .claude/agents/debug.md:69
- agent analyst — .claude/agents/debug.md:70
- agent qa — .claude/agents/debug.md:71
- agent security — .claude/agents/debug.md:72

## Invoked by — required
- agent debug — docs/agent-catalog.md:23
- agent debug — .agents/AGENT-SYSTEM.md:837

## Concepts named — required, verbatim
- `debug` — .claude/agents/debug.md:2 — defined here
- `executor` — .claude/agents/debug.md:5 — used here
- `Style Guide Compliance` — .claude/agents/debug.md:11 — defined here
- `Systematic Bug Hunter` — .claude/agents/debug.md:30 — defined here
- `Problem Assessment` — .claude/agents/debug.md:32 — defined here
- `Investigation` — .claude/agents/debug.md:38 — defined here
- `Resolution` — .claude/agents/debug.md:44 — defined here
- `Quality Assurance` — .claude/agents/debug.md:50 — defined here
- `Debugging Guidelines` — .claude/agents/debug.md:56 — defined here
- `Handoff Options` — .claude/agents/debug.md:65 — defined here

## Structure
- # Debug Agent — .claude/agents/debug.md:9
- ## Style Guide Compliance — .claude/agents/debug.md:11
- ## Core Identity — .claude/agents/debug.md:28
- ## Phase 1: Problem Assessment — .claude/agents/debug.md:32
- ## Phase 2: Investigation — .claude/agents/debug.md:38
- ## Phase 3: Resolution — .claude/agents/debug.md:44
- ## Phase 4: Quality Assurance — .claude/agents/debug.md:50
- ## Debugging Guidelines — .claude/agents/debug.md:56
- ## Handoff Options — .claude/agents/debug.md:65

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Variant relation: shares 88% of distinct lines with `templates/agents/debug.shared.md` (ledger V17; divergence card created).
- Model selection: configured with Anthropic Opus (`model: opus`) to support deep hypothesis generation and root cause analysis across complex failure modes.
- Sequential phase discipline: mandates completing problem assessment and reproduction before attempting code resolution, preventing unverified fixes.

## Context cost
2839 bytes (approx. 710 tokens).
