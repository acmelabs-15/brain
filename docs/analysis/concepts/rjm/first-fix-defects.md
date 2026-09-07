---
package: rjm
name: first-fix defects
slug: first-fix-defects
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-empirical-probe-toolkit/references/provenance.md, sha256: 56a5414b5d3dd24132335dade19bf3a3294921a141558e38b8c1069f345a6e82}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# first-fix defects

## Definition — verbatim
(used, not defined)

> "| #2205 probe story, first-fix defects |" — .claude/skills/ai-agents-empirical-probe-toolkit/references/provenance.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-empirical-probe-toolkit/references/provenance.md | 11 | used here | Cited in the provenance verification table referencing PR #2205 where initial fix attempts failed to eliminate underlying defects. |

## Consumes
Incident reports, pull request reviews, and post-fix regressions.

## Produces
Empirical probe requirements and multi-cycle verification tests.

## When applied
Analyzed during post-incident reviews when an initial remediation fails to resolve a problem completely.

## Sub-concepts
none

## Part of
ai-agents-empirical-probe-toolkit

## Implementation status
defects: doc-drift

## Design notes
An empirical failure pattern where the initial patch applied to address a production issue introduces secondary bugs or fails to resolve the underlying failure. This incident pattern demonstrated the necessity of empirical probe testing rather than trusting single-pass fixes.
