---
package: rjm
name: Skill Shell Detection
slug: skill-shell-detection
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/pre_pr_sequence.py, sha256: d485d238eadb8460ddeba05d06d352d2f8586addf3723d2bedd2c510f1cf49d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Skill Shell Detection

## Definition — verbatim
> "Skill Shell Detection" — scripts/validation/pre_pr_sequence.py:307

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 307 | defined here | Pre-PR gate detecting skill directories that contain tracked files but lack an entrypoint SKILL.md. |

## Consumes
Skill directory structures and tracked files under .claude/skills/.

## Produces
Pass/fail gate verdict identifying orphaned skill shell directories.

## When applied
Executed during the pre-PR validation sequence.

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
clean

## Design notes
Skill Shell Detection is a structural gate (Issue #2677) detecting skill directories that have tracked files but no entrypoint SKILL.md. It prevents invisible, half-pruned skills from distorting the catalog and leaving unmaintained scripts in the repository.
