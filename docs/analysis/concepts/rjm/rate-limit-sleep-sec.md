---
package: rjm
name: RATE_LIMIT_SLEEP_SEC
slug: rate-limit-sleep-sec
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-agents.py, sha256: 48eee5226245d9a269beecb305d41e7bdad5e7fd995e93a3da23d8c3c33bce4e}
  - {path: scripts/eval/eval-knowledge-integration.py, sha256: cb592498e314781566e1d645748d3885e0715382ee8a49446d0045cdfa3a733f}
  - {path: scripts/eval/eval-prompt-change.py, sha256: c47c10e18f0bd2da8a1854c46f1c8b9e805a25184fec0d9c9946b82457513136}
  - {path: scripts/eval/eval-reviewer-asymmetry.py, sha256: c7751b7daf8566fcc141421c962287c577ed89966f15bf95cb39ac32b26ced9b}
  - {path: scripts/eval/eval-rule-activation.py, sha256: df7d388d373dbae64564e5a3d6f5a58a8da5eb6a93ee7fdd47526ec38387de37}
  - {path: scripts/eval/eval-skill-overlap.py, sha256: df7052dcf1361e8df552ea9c4a15a3f720e7a3f3576d24b4ddddb7628045d026}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# RATE_LIMIT_SLEEP_SEC

## Definition — verbatim
> "RATE_LIMIT_SLEEP_SEC = 1.0" — scripts/eval/eval-agents.py:62

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-agents.py | 62 | defined here | Constant float defining a 1.0 second delay between API calls. |
| scripts/eval/eval-knowledge-integration.py | 45 | defined here | Constant float defining a 1.0 second delay between API calls. |
| scripts/eval/eval-prompt-change.py | 80 | defined here | Constant float defining a 1.0 second delay between API calls. |
| scripts/eval/eval-reviewer-asymmetry.py | 54 | defined here | Constant float defining a 1.0 second delay between API calls. |
| scripts/eval/eval-rule-activation.py | 82 | defined here | Constant float defining a 1.0 second delay between API calls. |
| scripts/eval/eval-skill-overlap.py | 97 | defined here | Constant float defining a 1.0 second delay between API calls. |

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
defects: missing-path, doc-drift, other

## Design notes
A constant configuration value defining the inter-call delay to avoid rate limiting across evaluation scripts, classified as `name-only` per D-023.
