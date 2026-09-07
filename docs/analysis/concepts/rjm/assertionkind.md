---
package: rjm
name: AssertionKind
slug: assertionkind
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md, sha256: c78ffe7b595e3503e943096d96075d95ee31b4e6051ae84f07721549cf829b38}
  - {path: scripts/eval/_eval_agent_types.py, sha256: 30e28546d4d1e89c23a330e6abba1b6ce9dd302924e96cef1dc134516b3b163a}
  - {path: scripts/eval/_run_persistence.py, sha256: facf65b38609c84ab0dd4019a46a231303183d928a8e43daa25d4f57de3c47c8}
  - {path: scripts/eval/_scoring_engine.py, sha256: f19eb353dc46e0c76c0a93c21866c66ec297781c644286cb9dcf8f5bf2537fd8}
  - {path: scripts/eval/eval-agent-vs-baseline.py, sha256: 125aa9162ed5d8589d0ba008960c74486cc1acddc43480d0e18f7e001db2c0a0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# AssertionKind

## Definition — verbatim
(used, not defined)

> "class AssertionKind(str, Enum):" — scripts/eval/_eval_agent_types.py:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md | 28 | defined here | Key type for polymorphic assertion dispatch in ScoringEngine. |
| scripts/eval/_eval_agent_types.py | 41 | defined here | Enum class defining assertion types (regex, verdict, etc.). |
| scripts/eval/_run_persistence.py | 50 | used here | Imported for serializing and deserializing assertion records. |
| scripts/eval/_scoring_engine.py | 3 | used here | Module header referencing Strategy pattern over AssertionKind. |
| scripts/eval/eval-agent-vs-baseline.py | 39 | used here | Imported to configure assertion evaluation dispatch. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: exit-code-mismatch, missing-path, script-bug

## Design notes
AssertionKind is an enumeration type identifier defining evaluation assertion varieties, classified as name-only per D-023.
