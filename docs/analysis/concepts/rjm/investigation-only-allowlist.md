---
package: rjm
name: investigation-only allowlist
slug: investigation-only-allowlist
kind: artifact
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-change-control/SKILL.md, sha256: f8f0c4123832af7d146b3fd9b057b5886f1eb103bbaa48514c118bf478b9bcb2}
  - {path: scripts/modules/investigation_allowlist.py, sha256: bece828fc1a3860637801df5a97f8bf2f55baf516c426bea4298ee629f946785}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# investigation-only allowlist

## Definition — verbatim
> "Shared investigation-only allowlist for ADR-034 QA exemption." — scripts/modules/investigation_allowlist.py:1

## Also called — verbatim
> "Investigation allowlist" — .claude/skills/ai-agents-change-control/references/provenance.md:11

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-change-control/SKILL.md | 41 | defined here | Names scripts/modules/investigation_allowlist.py as the single source of truth for the 8 allowed investigation path patterns. |
| scripts/modules/investigation_allowlist.py | 1 | defined here | used here | Module docstring defining the shared allowlist module consumed by validation scripts for ADR-034 QA exemptions. |

## Consumes
Path strings from changed files in pull requests.

## Produces
Boolean verdicts and pattern lists determining whether PR files qualify for QA exemption.

## When applied
Invoked during session validation, PR linting, and claim verification.

## Sub-concepts
none

## Part of
investigation-only

## Implementation status
clean

## Design notes
The investigation-only allowlist is the shared Python module (investigation_allowlist.py) defining the eight permissible path patterns under ADR-034, serving as the executable single source of truth.
