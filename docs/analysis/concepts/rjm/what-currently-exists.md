---
package: rjm
name: What Currently Exists
slug: what-currently-exists
kind: template
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/references/adr-template.md, sha256: b2e5e4d7d00674c28331639b8cc7d205f3ff649dcf12b20225a7f0a9997dd020}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# What Currently Exists

## Definition — verbatim
> "### What Currently Exists" — .claude/skills/adr-generator/references/adr-template.md:66

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/adr-template.md | 66 | defined here | Subsection of Prior Art Investigation in the canonical ADR template documenting existing structures, patterns, introduction dates, and authors. |

## Consumes
Codebase history, current architecture, and existing pattern documentation.

## Produces
An accurate, documented baseline of the existing system state prior to proposed modifications.

## When applied
Mandatory section under Prior Art Investigation when an ADR proposes changing existing systems or constraints.

## Sub-concepts
none

## Part of
adr-template

## Implementation status
clean

## Design notes
A required subsection of the Prior Art Investigation in rjm's canonical ADR template. When altering existing systems, it obligates authors to articulate what exists today, when it was introduced, and who originally designed it, ensuring proposed changes respect prior design history and avoid accidental regression.
