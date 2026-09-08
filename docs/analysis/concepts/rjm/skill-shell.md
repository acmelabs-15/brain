---
package: rjm
name: skill shell
slug: skill-shell
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/validate_skill_shells.py, sha256: 4cba79bf9cb3ec27fd8125379a925e1fa07b4225658f7c7efc102b3dbc88b0d9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# skill shell

## Definition — verbatim
> "invisible \"skill shell\": the catalog looks like the skill still exists (a dir is" — scripts/validation/validate_skill_shells.py:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/validate_skill_shells.py | 9 | defined here | Defined as an abandoned skill directory retaining git-tracked content but lacking a SKILL.md manifest. |

## Consumes
Tracked skill directories under `.claude/skills/` and `src/copilot-cli/skills/`.

## Produces
Validation reports detecting orphaned directories during skill integrity checks.

## When applied
Checked in validation pipelines (`checks_spec.py`) to prevent orphaned skill directories from miscounting catalogs.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A skill shell is an anti-pattern in rjm's skill hierarchy where a pruned or deleted skill directory retains git-tracked files without a `SKILL.md` manifest. This validator identifies and flags these phantom directories so they do not corrupt catalog indexing or portability audits.
