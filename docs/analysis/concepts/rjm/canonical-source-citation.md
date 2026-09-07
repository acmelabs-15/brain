---
package: rjm
name: canonical-source citation
slug: canonical-source-citation
kind: technique
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

# canonical-source citation

## Definition — verbatim
> "### The mirror-claim rule (canonical-source citation)" — .claude/agents/implementer.md:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 35 | defined here | Specifies character-for-character quoting of canonical contracts in component docstrings on initial commit. |
| templates/agents/implementer.shared.md | 44 | defined here | Shared implementer template requiring canonical-source citations for mirrored code. |

## Consumes
File paths, line numbers, schemas, function signatures, regexes, and exit-code tables of canonical repository components.

## Produces
Character-for-character contract quotes and file citations in docstrings, commit messages, and review descriptions.

## When applied
Applied when authoring adapters, replica components, or compatibility layers that mirror an authoritative subsystem.

## Sub-concepts
none

## Part of
mirror-claim-rule, evidence-standards

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction

## Design notes
Canonical-source citation anchors claims directly to authoritative repository ground truth. By forcing authors to quote the exact regex, schema, or signature verbatim along with file and line citations, it eliminates ambiguity and allows reviewers to instantly verify contract fidelity.
