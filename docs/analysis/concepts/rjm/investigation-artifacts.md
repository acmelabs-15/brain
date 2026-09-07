---
package: rjm
name: Investigation artifacts
slug: investigation-artifacts
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CONTRIBUTING.md, sha256: 09a1205b99939ad49462139c47ccd0ef1a4a191fc70839a1f532016a1ee66ffa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Investigation artifacts

## Definition — verbatim
> "**Investigation artifacts** (allowlist for investigation-only exemption):" — CONTRIBUTING.md:714

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTRIBUTING.md | 714 | defined here | Defined as the explicit allowlist of staged artifact directories eligible for the investigation-only QA validation exemption. |

## Consumes
Research discoveries, analysis notes, session logs, learning extractions, memory updates, and security assessments.

## Produces
Committed exploratory and diagnostic records across designated directories (`.agents/sessions/`, `.agents/analysis/`, `.agents/retrospective/`, `.serena/memories/`, `.agents/security/`).

## When applied
Evaluated by the pre-commit QA validation hook when a session contains research changes and claims `SKIPPED: investigation-only`.

## Sub-concepts
none

## Part of
automated-quality-gates

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
Investigation artifacts form an allowlisted class of research, diagnostic, and reflective files in rjm that are exempt from mandatory executable QA test evidence (ADR-034). By formalizing this exemption allowlist, rjm permits agents to commit analysis, retrospect, and memory updates cleanly without forcing meaningless dummy test executions.
