---
package: rjm
name: strict-parse
slug: strict-parse
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md, sha256: 3b2836c032a358fad40abda517f2abf08797f77014d08c8f2cf00b4b52a01c7b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# strict-parse

## Definition — verbatim
> "surfaces: the duplicate guard's paired-quote alternation, and the strict-parse" — .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md:78

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md | 78 | used here | Path tested in round 12 to verify rejection of invalid, duplicate, or array-rooted verdicts. |

## Consumes
Model response payloads.

## Produces
Strictly validated JSON data structures without applying heuristic recovery.

## When applied
Evaluated as the primary validation path before fallback or salvage mechanisms.

## Sub-concepts
none

## Part of
rule-audit-parser-forensics

## Implementation status
defects: doc-drift

## Design notes
The parser execution path that requires full-payload JSON compliance, rejecting malformed, duplicate, or out-of-spec verdicts before they reach aggregation.
