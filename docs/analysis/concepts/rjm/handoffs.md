---
package: rjm
name: handoffs
slug: handoffs
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md, sha256: fab4fd29cb1f15e766538ad34b57cf500baf6b46175233c0e265b28024a3e76a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# handoffs

## Definition — verbatim
(used, not defined)

> "Previously supported fields (`model`, `handoffs`, `argument-hint`) are now rejected as \"unsupported.\"" — .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md | 36 | used here | Cited as a Copilot CLI frontmatter parameter rejected by the 0.0.398+ regression. |

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
defects: missing-path, doc-drift

## Design notes
A YAML frontmatter parameter for Copilot CLI agents defining agent-to-agent delegation transitions, representing an agent interface field rather than an autonomous lifecycle concept per D-023.
