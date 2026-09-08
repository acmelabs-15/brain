---
package: rjm
name: Exit
slug: exit
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/dependency-auditor.shared.md, sha256: a503ea719663b26d307cf0d9a5a3205393fadbd44ef7daf6c59f76cd8cac867d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Exit

## Definition — verbatim
(used, not defined)

> "### Step 5: Exit" — templates/agents/dependency-auditor.shared.md:138

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/dependency-auditor.shared.md | 138 | defines | Section heading detailing CI exit code semantics (0, 1, 3) for dependency audit findings. |

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
clean

## Design notes
A process step heading defining exit code mappings in `templates/agents/dependency-auditor.shared.md` rather than an operational lifecycle concept.
