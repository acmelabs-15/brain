---
package: rjm
name: mirror-claim rule
slug: mirror-claim-rule
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# mirror-claim rule

## Definition — verbatim
> "### The mirror-claim rule (canonical-source citation)" — .claude/agents/implementer.md:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 35 | defined here | Mandates that any claim asserting code matches or mirrors an existing component must cite the canonical source verbatim. |
| templates/agents/implementer.shared.md | 44 | defined here | Shared implementer template defining the mirror-claim verification rule. |

## Consumes
Assertions in docstrings, comments, or PR text claiming alignment, symmetry, or compatibility with existing components.

## Produces
Pre-commit Level 1 verification requirements and verbatim contract quotes embedded in docstrings.

## When applied
Triggered whenever an agent asserts that a component 'matches', 'mirrors', is 'aligned with', or behaves the 'same as' an existing artifact.

## Sub-concepts
canonical-source-citation, mirror-obligation

## Part of
evidence-standards

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction

## Design notes
A governance rule designed to eliminate drift between parallel implementations or contracts. Whenever code claims to mirror an existing behavior, the mirror-claim rule compels the author to open the canonical source, verify it with Level 1 tools, quote the contract character-for-character, and document any intentional divergences.
