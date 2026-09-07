---
package: rjm
name: Structured requirements
slug: structured-requirements
kind: artifact
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

# Structured requirements

## Definition — verbatim
> "Problem, user stories, ontology, data model, integrations, failure modes, security, observability, acceptance criteria, out-of-scope, deferred, open questions" — .claude/skills/requirements-interview/SKILL.md:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/requirements-interview/SKILL.md | 39 | defines | Output table row defining structured requirements returned to caller and consumed by spec-generator. |

## Consumes
Resolved design tree branches and interview decisions.

## Produces
Structured PRD markdown returned in-memory to caller.

## When applied
Emitted at the conclusion of the requirements interview for consumption by `/spec` downstream steps.

## Sub-concepts
ears-syntax, branch-checklist, ontologyfragment

## Part of
requirements-interview

## Implementation status
clean

## Design notes
The structured intermediate PRD produced by the requirements-interview skill that captures user stories, ontology, constraints, and testable acceptance criteria before formalization into REQ, DESIGN, and TASK specifications.
