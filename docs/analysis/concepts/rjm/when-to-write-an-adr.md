---
package: rjm
name: When to Write an ADR
slug: when-to-write-an-adr
kind: checklist
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/references/adr-best-practices.md, sha256: 62f0e939ebf8455bdf6f0ff1d882d21e551b1d1bcfc532a863ef80f68a0675f2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# When to Write an ADR

## Definition — verbatim
> "Write an ADR when:" — .claude/skills/adr-generator/references/adr-best-practices.md:79

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/adr-best-practices.md | 77 | defined here | Decision checklist enumerating conditions for authoring versus skipping an ADR. |

## Consumes
Proposed architectural decisions and their systemic impact.

## Produces
Determination whether formal architectural documentation is warranted.

## When applied
Consulted by engineers and agents when deciding whether to initiate ADR generation.

## Sub-concepts
none

## Part of
adr-lifecycle

## Implementation status
clean

## Design notes
A decision triage checklist in rjm providing criteria for when to document an architectural decision (multi-team impact, significant trade-offs, non-obvious choices) and when to skip documentation (temporary workarounds, low-risk conventions), preventing documentation bloat while ensuring high-consequence decisions are captured.
