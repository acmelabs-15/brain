---
package: rjm
name: Accidental duplication
slug: accidental-duplication
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/golden-principles/references/design-dry-principle.md, sha256: 64a1c4d6a649c8223493fd2ee0bc7df70f1ce45dc32bdd08bb685df531359f0a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Accidental duplication

## Definition — verbatim
> "- **Accidental duplication**: Code looks similar but serves different purposes" — .claude/skills/golden-principles/references/design-dry-principle.md:62

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/golden-principles/references/design-dry-principle.md | 62 | defined here | Defined as an exception to DRY where code looks similar syntactically but serves different domain purposes. |

## Consumes
Syntactically identical or structurally similar code snippets originating from distinct domain concerns or bounded contexts.

## Produces
Independent code branches, decoupled models, and the avoidance of inappropriate shared abstractions.

## When applied
Evaluated when considering whether two similar code fragments represent genuine business knowledge redundancy or coincidental syntactic overlap.

## Sub-concepts
none

## Part of
when-not-to-dry

## Implementation status
defects: missing-path

## Design notes
Accidental duplication identifies a critical distinction in rjm between syntactic coincidence and semantic equivalence. Forcing two independent domain concepts to share an abstraction simply because their initial implementation shapes match creates artificial coupling; future domain changes to one inevitably break or complicate the other. Identifying accidental duplication justifies keeping code separate.
