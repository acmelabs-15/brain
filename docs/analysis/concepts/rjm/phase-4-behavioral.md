---
package: rjm
name: Phase 4: Behavioral
slug: phase-4-behavioral
kind: phase
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/doc-accuracy/SKILL.md, sha256: a01623b7716f524ef453a28f9eec5d414f53273557b76304d0c250563e82435d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Phase 4: Behavioral

## Definition — verbatim
> "Phase 4: Behavioral        (Sonnet agents, 3-7m) -> behavioral-findings.json" — .claude/skills/doc-accuracy/SKILL.md:70

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/doc-accuracy/SKILL.md | 70 | defined here | Fourth phase deploying LLM agents to verify documented behavior claims against actual code execution logic. |

## Consumes
Behavioral claims from claims.json and referenced source code implementation files.

## Produces
behavioral-findings.json detailing discrepancies between documented behavior and code logic.

## When applied
Executed after deterministic compilability verification passes or completes.

## Sub-concepts
none

## Part of
doc-accuracy

## Implementation status
defects: doc-drift

## Design notes
Phase 4: Behavioral deploys LLM agents to evaluate complex semantic claims where documentation describes runtime logic, algorithms, default behaviors, or error handling. Agents compare the documented claims against the actual implementation AST and control flow to uncover spec-vs-behavior mismatches that static analysis cannot detect.
