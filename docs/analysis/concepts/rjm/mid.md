---
package: rjm
name: Mid
slug: mid
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: AGENTS.md, sha256: a872352c2c57ff59c7db1238910b6685b800ab8a3e8fa9e37a76418d467df471}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Mid

## Definition — verbatim
> "**Mid**: `git rev-list --count HEAD ^origin/main` notice 10; alert 15 (advisory; issue #5233)" — AGENTS.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| AGENTS.md | 17 | defined here | Mid-session checkpoint monitoring unpushed commit counts against origin/main. |

## Consumes
Local git commit history relative to `origin/main`.

## Produces
Advisory notice at 10 commits or alert at 15 commits prompting branch review and synchronization.

## When applied
Evaluated mid-session during active development before creating pull requests.

## Sub-concepts
none

## Part of
gates

## Implementation status
clean

## Design notes
An advisory mid-session governance gate in rjm that checks commit accumulation against origin/main, alerting agents when local unpushed commits reach 10 or 15 to prevent unmanageably large, unmergeable diffs.
