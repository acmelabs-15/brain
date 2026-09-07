---
package: rjm
name: prettier
slug: prettier
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-043-scoped-tool-execution.md, sha256: 9a4be43328cc6530b1b24cac28beba3ffa57f0eb559fbaa872864d8f002798a4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# prettier

## Definition — verbatim
(used, not defined)

> "| **prettier** | `git diff --name-only --diff-filter=d HEAD '*.{json,yaml,yml}'` | If adopted |" — .agents/architecture/ADR-043-scoped-tool-execution.md:90

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-043-scoped-tool-execution.md | 90 | used here | Listed in the tool scoping table as a potential formatter for JSON/YAML files. |

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
defects: missing-path, internal-contradiction

## Design notes
prettier is an external code and markup formatting utility identifier rather than an agent lifecycle concept per D-023.
