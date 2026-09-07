---
package: rjm
name: Adversarial Coverage Checklist
slug: adversarial-coverage-checklist
kind: checklist
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/critic.md, sha256: 85eae67441c3b6177c92a7fb6bd6f6c99687130bebb27e39b1202727f879808a}
  - {path: templates/agents/critic.shared.md, sha256: 94cb41e3be663986453b13a24ae2df6f2036eeae38c7a07ef94499b76c457419}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Adversarial Coverage Checklist

## Definition — verbatim
> "For every changed function, walk this checklist before you score the diff. Each item is a place where the implementer's tests, on the same model and same context, will tend to be silent." — .claude/agents/critic.md:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/critic.md | 40 | defines | Section heading and 6-point checklist targeting typical test omissions in diffs. |
| templates/agents/critic.shared.md | 44 | defines | Shared template specification of the 6-point adversarial test coverage checklist. |

## Consumes
Code diffs, modified functions, and accompanying unit/integration tests.

## Produces
Audit findings exposing edge cases, error paths, and side effects omitted by author tests.

## When applied
Evaluated by the critic for every changed function before scoring a code diff.

## Sub-concepts
none

## Part of
critic

## Implementation status
defects: missing-path

## Design notes
A targeted verification checklist operationalizing reviewer asymmetry for code diffs by focusing on failure modes and boundary conditions that author-written tests routinely miss.
