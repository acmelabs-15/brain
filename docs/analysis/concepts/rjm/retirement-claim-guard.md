---
package: rjm
name: Retirement-claim guard
slug: retirement-claim-guard
kind: gate
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-skill-overlap.py, sha256: df7052dcf1361e8df552ea9c4a15a3f720e7a3f3576d24b4ddddb7628045d026}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Retirement-claim guard

## Definition — verbatim
> "# Retirement-claim guard (Issue #2676)" — scripts/eval/eval-skill-overlap.py:261

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-skill-overlap.py | 261 | defined here | Heading and documentation defining the safety gate preventing unverified skill prune or fold retirement claims. |

## Consumes
Candidate skill pair names, claimed verdict string, and parsed or on-disk matrix.json report.

## Produces
Validation status or authorized recommendation text, dropping claims whose verdict does not match the cited report.

## When applied
Enforced prior to emitting any automated follow-up issue containing skill prune or fold recommendations.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, other

## Design notes
A safety gate established under Issue #2676 requiring automated issue generators to validate claimed retirement verdicts against machine-readable evaluation reports before proposing skill deletions or merges. By dropping claims on mismatch, it prevents hallucinated or inaccurate retirement recommendations from creating erroneous pull requests or issues.
