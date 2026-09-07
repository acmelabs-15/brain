---
package: rjm
name: Build Pipeline Impact
slug: build-pipeline-impact
kind: checklist
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/devops.md, sha256: ed8a0c2bfb875abe56ad4a25ed4e5f7708d3188bc2ed842a4d972c88dc5bcb61}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Build Pipeline Impact

## Definition — verbatim
> "### 1. Build Pipeline Impact" — .claude/skills/review/references/devops.md:97

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/devops.md | 97 | defined here | Review focus area checklist section evaluating changes to build processes, build scripts, and dependencies. |

## Consumes
Pull request diff modifying build scripts, package manifests, or toolchain dependencies.

## Produces
DevOps review findings assessing risks of broken builds, improper script modifications, or unmanaged build dependencies.

## When applied
During Stage-2 DevOps review when evaluating changes affecting compilation, packaging, or build scripts.

## Sub-concepts
none

## Part of
devops

## Implementation status
clean

## Design notes
A review focus area in rjm's DevOps review that evaluates the effect of changes on build processes, script execution, and build-time dependencies to prevent breaking downstream compilation.
