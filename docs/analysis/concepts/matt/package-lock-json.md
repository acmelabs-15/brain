---
package: matt
name: package-lock.json
slug: package-lock-json
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/misc/setup-pre-commit/SKILL.md, sha256: c9819d7f1e3b198064edc1faa3154224ed67395e9f07f5d3cea4b67cf0a11a98}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# package-lock.json

## Definition — verbatim
(used, not defined)
> "Check for `package-lock.json` (npm), `pnpm-lock.yaml` (pnpm), `yarn.lock` (yarn), `bun.lockb` (bun). Use whichever is present. Default to npm if unclear." — skills/misc/setup-pre-commit/SKILL.md:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/misc/setup-pre-commit/SKILL.md | 19 | used here | Inspected to detect npm as the repository's active package manager. |

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
clean

## Design notes
Node package manager lockfile name inspected to determine the project package manager; recorded as a name-only file identifier rather than an engineering lifecycle concept.
