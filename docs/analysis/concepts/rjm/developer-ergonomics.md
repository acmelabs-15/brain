---
package: rjm
name: developer ergonomics
slug: developer-ergonomics
kind: technique
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/dx-review/SKILL.md, sha256: 3318726b8ddca8d9ea852f25f38bfe20f3d918858d954e5c462358e95db1d435}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# developer ergonomics

## Definition — verbatim
> "| `evaluate developer ergonomics` | Full audit, emphasis on API/CLI |" — .claude/skills/dx-review/SKILL.md:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/dx-review/SKILL.md | 13 | defines | Defined as an audit trigger and evaluation lens prioritizing API, CLI, and SDK ergonomic design. |

## Consumes
CLI `--help` outputs, flag designs, API endpoint structures, request/response payloads, and SDK type definitions.

## Produces
Ergonomic quality scores (0-10), usability defect notes, and interface consistency observations.

## When applied
Evaluated during Step 2 of dx-review when testing the intuitiveness and consistency of command-line tools and programming interfaces.

## Sub-concepts
none

## Part of
dx-review

## Implementation status
defects: orphan

## Design notes
An analytical lens within rjm's dx-review skill that examines how intuitive, discoverable, and predictable a product's developer interfaces are. It scrutinizes flag naming, parameter shapes, and type clarity to reduce developer cognitive load.
