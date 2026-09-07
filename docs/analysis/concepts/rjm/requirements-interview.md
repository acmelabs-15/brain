---
package: rjm
name: requirements-interview
slug: requirements-interview
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md, sha256: bada92fac80c619ad829da39e28a6a11b87601aa8487d5f8cfd46edbb0d7637b}
  - {path: .claude/skills/requirements-interview/SKILL.md, sha256: 346b3ef376ecb63eeaaf31870494a19d3bf7ab00499526efb21084bdc76af4cc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# requirements-interview

## Definition — verbatim
> "name: requirements-interview" — .claude/skills/requirements-interview/SKILL.md:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md | 109 | uses | Step 2 specification process integrating Step 0 demand validation output. |
| .claude/skills/requirements-interview/SKILL.md | 2 | defines | Defines the adversarial grill-me interview skill walking the design tree. |

## Consumes
Problem statement, issue body, or Step 0 output block.

## Produces
Structured PRD with resolved design decisions and testable requirements.

## When applied
Executed as Step 2 of the specification pipeline or triggered by user commands ("interview me on this", "grill me on the requirements").

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An adversarial requirements elicitation skill implementing the grill-me pattern to walk design decision trees and surface dependent trade-offs before code is written, consuming validated Step 0 demand outputs.
