---
package: rjm
name: Generate-Agents.Common.psm1
slug: generate-agents-common-psm1
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

# Generate-Agents.Common.psm1

## Definition — verbatim
(used, not defined)

> "- `build/Generate-Agents.Common.psm1` - Restored `argument-hint` in field order array" — .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md:169

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md | 169 | used here | Cited in build system modifications as the PowerShell module where argument-hint was restored |

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
defects: missing-path

## Design notes
Generate-Agents.Common.psm1 is a legacy PowerShell build script module filename rather than an architectural lifecycle concept.
