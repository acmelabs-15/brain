---
package: rjm
name: Branch Checklist
slug: branch-checklist
kind: checklist
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/requirements-interview/SKILL.md, sha256: 346b3ef376ecb63eeaaf31870494a19d3bf7ab00499526efb21084bdc76af4cc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Branch Checklist

## Definition — verbatim
> "## Branch Checklist" — .claude/skills/requirements-interview/SKILL.md:62

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/requirements-interview/SKILL.md | 62 | defines | Heading and ordered sequence of eight decision domains to walk during requirements interview. |

## Consumes
Design tree and problem scope.

## Produces
Recorded decisions and confirmed recommendations across all eight branches.

## When applied
Walked in order during requirements interview; skip a branch only with explicit justification.

## Sub-concepts
none

## Part of
requirements-interview

## Implementation status
clean

## Design notes
An ordered eight-area checklist (user stories, ontology, data model, integrations, failure modes, security, observability, scope boundaries) ensuring requirements interviews systematically interrogate all system dimensions before implementation.
