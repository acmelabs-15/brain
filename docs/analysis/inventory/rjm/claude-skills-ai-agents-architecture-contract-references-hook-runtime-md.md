---
package: rjm
path: .claude/skills/ai-agents-architecture-contract/references/hook-runtime.md
type: reference
bytes: 1772
unit: inv-rjm-80
in_scope_via: .claude/skills/ai-agents-architecture-contract/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/ai-agents-architecture-contract/references/hook-runtime.md, sha256: 06fc119a6a241adf7232d6c63dec88aa1ba97f64cfe8c90c6f90af25319a837a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/ai-agents-architecture-contract/references/hook-runtime.md

## Purpose — required, verbatim
> "The WHY behind the Phase 3 hook-runtime tables. SKILL.md keeps the two operative tables (registration split, failure policy per family) so you can act; this reference carries the rationale and the dispatcher's version history, which you consult when you need to justify or change the policy." — .claude/skills/ai-agents-architecture-contract/references/hook-runtime.md:3

## Design intent — required
Explains the historical and architectural rationale behind the hook runtime design in the ai-agents package: specifically why failure policies are partitioned per hook family rather than globally uniform, and why a consolidated single dispatcher per event was designed for Copilot CLI (ADR-068). Without this reference, contributors and agents would lack the rationale for why shipped guards must fail closed and loud after issue #2205 while observer hooks follow event contracts, potentially misinterpreting the split architecture as accidental technical debt.

## Phase — required
cross-phase

## Inputs — required
Architecture decision records (ADR-008, ADR-033, ADR-035, ADR-066, ADR-071, ADR-068), incident history (issue #2205 33-day silent failure incident), and issue #3218 verification.

## Outputs — required
none

## Invokes — required
- skill agent-harness-reference — .claude/skills/ai-agents-architecture-contract/references/hook-runtime.md:3

## Invoked by — required
- skill ai-agents-architecture-contract — .claude/skills/ai-agents-architecture-contract/SKILL.md:91

## Concepts named — required, verbatim
`Hook Runtime` — .claude/skills/ai-agents-architecture-contract/references/hook-runtime.md:1 — defined here
`hook-runtime tables` — .claude/skills/ai-agents-architecture-contract/references/hook-runtime.md:3 — used here
`registration split` — .claude/skills/ai-agents-architecture-contract/references/hook-runtime.md:3 — used here
`failure policy` — .claude/skills/ai-agents-architecture-contract/references/hook-runtime.md:3 — used here
`failure policy is per family, not global` — .claude/skills/ai-agents-architecture-contract/references/hook-runtime.md:7 — defined here
`fail loud` — .claude/skills/ai-agents-architecture-contract/references/hook-runtime.md:9 — used here
`fail-open` — .claude/skills/ai-agents-architecture-contract/references/hook-runtime.md:9 — used here
`host event contract` — .claude/skills/ai-agents-architecture-contract/references/hook-runtime.md:9 — used here
`SessionStart` — .claude/skills/ai-agents-architecture-contract/references/hook-runtime.md:9 — used here
`one dispatcher per event` — .claude/skills/ai-agents-architecture-contract/references/hook-runtime.md:11 — defined here
`ADR-068` — .claude/skills/ai-agents-architecture-contract/references/hook-runtime.md:11 — used here
`dispatcher` — .claude/skills/ai-agents-architecture-contract/references/hook-runtime.md:13 — used here
`PermissionRequest` — .claude/skills/ai-agents-architecture-contract/references/hook-runtime.md:13 — used here
`expansion seam` — .claude/skills/ai-agents-architecture-contract/references/hook-runtime.md:13 — used here
`matcher union` — .claude/skills/ai-agents-architecture-contract/references/hook-runtime.md:13 — used here
`parity tests` — .claude/skills/ai-agents-architecture-contract/references/hook-runtime.md:13 — used here

## Structure
# Hook Runtime: Split Rationale and Dispatcher Origin — .claude/skills/ai-agents-architecture-contract/references/hook-runtime.md:1
## Why failure policy is per family, not global — .claude/skills/ai-agents-architecture-contract/references/hook-runtime.md:7
## Why one dispatcher per event (ADR-068) — .claude/skills/ai-agents-architecture-contract/references/hook-runtime.md:11

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Clear separation of operative guidance from historical justification: operative tables live in SKILL.md while the 33-day failure incident (#2205) and Copilot CLI 1.0.57-era dispatcher origins are preserved here as justification.

## Context cost
1772 bytes, ~450 tokens.
