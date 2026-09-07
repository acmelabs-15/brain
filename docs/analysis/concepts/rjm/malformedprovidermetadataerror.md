---
package: rjm
name: MalformedProviderMetadataError
slug: malformedprovidermetadataerror
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_copilot_cli_transcript.py, sha256: 32388d0fe4cce1e3b87186e6f46034bcb5dd1df806ceef6d70c75fdccc13c39e}
  - {path: scripts/eval/_eval_common.py, sha256: 68a26fff6cd877843cddfabd13608f4f1e8f30b0808e5e73888793b6dc811ad6}
  - {path: scripts/eval/_eval_errors.py, sha256: 4a9fd5efd9fcc6cea518d7abe5cf64c3dd31e1e0dabf0191d1ef00ed85a93dbf}
  - {path: scripts/eval/eval-agent-vs-baseline.py, sha256: 125aa9162ed5d8589d0ba008960c74486cc1acddc43480d0e18f7e001db2c0a0}
  - {path: scripts/eval/eval-agents.py, sha256: 48eee5226245d9a269beecb305d41e7bdad5e7fd995e93a3da23d8c3c33bce4e}
  - {path: scripts/eval/eval-knowledge-integration.py, sha256: cb592498e314781566e1d645748d3885e0715382ee8a49446d0045cdfa3a733f}
  - {path: scripts/eval/eval-model-panel.py, sha256: b545769f2aec9f5be0caec08bce6804bd0466c270e9f726fe42949b4a54cb8bb}
  - {path: scripts/eval/eval-oneshot-vs-shipped.py, sha256: 62ac458c5ee7b965983f33a0e1e246f63f3ad282ba8d2094dcb67e825c4e5f52}
  - {path: scripts/eval/eval-reviewer-asymmetry.py, sha256: c7751b7daf8566fcc141421c962287c577ed89966f15bf95cb39ac32b26ced9b}
  - {path: scripts/eval/eval-rule-activation.py, sha256: df7d388d373dbae64564e5a3d6f5a58a8da5eb6a93ee7fdd47526ec38387de37}
  - {path: scripts/eval/eval-skill-overlap.py, sha256: df7052dcf1361e8df552ea9c4a15a3f720e7a3f3576d24b4ddddb7628045d026}
  - {path: scripts/eval/eval_skill_router.py, sha256: 3aa5d1334db711e7d16cda841dd34bdde659def740f1f217a3ee4055d8a30b70}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# MalformedProviderMetadataError

## Definition — verbatim
(used, not defined)

> "class MalformedProviderMetadataError(RuntimeError):" — scripts/eval/_eval_errors.py:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_copilot_cli_transcript.py | 15 | used here | Imported to signal untruthful or corrupted model attribution metadata in session transcripts. |
| scripts/eval/_eval_common.py | 12 | used here | Re-exported to downstream evaluation modules to provide a unified exception identity. |
| scripts/eval/_eval_errors.py | 6 | defined here | Exception class raised when a provider returns metadata that cannot be recorded truthfully. |
| scripts/eval/eval_skill_router.py | 71 | used here | Handled to abort evaluation if router model metadata or provider response violates truthfulness invariants. |
| scripts/eval/eval-agent-vs-baseline.py | 49 | used here | Caught to trigger fail-fast exit on corrupt provider metadata during baseline sweeps. |
| scripts/eval/eval-agents.py | 54 | used here | Caught during agent sweeps to fail immediately if returned model attribution is malformed. |
| scripts/eval/eval-knowledge-integration.py | 37 | used here | Caught during knowledge integration evaluations to halt execution on corrupted provider metrics. |
| scripts/eval/eval-model-panel.py | 34 | used here | Monitored in child process stderr to detect corrupted model attribution during panel sweeps. |
| scripts/eval/eval-oneshot-vs-shipped.py | 31 | used here | Caught to halt one-shot evaluation if provider metadata integrity fails. |
| scripts/eval/eval-reviewer-asymmetry.py | 48 | used here | Handled to prevent distorted asymmetry ratios when provider metadata is corrupted. |
| scripts/eval/eval-rule-activation.py | 72 | used here | Caught to fail fast and avoid recording corrupted metadata in rule activation benchmark reports. |
| scripts/eval/eval-skill-overlap.py | 73 | used here | Caught during skill overlap matrix sweeps to flag corrupt provider telemetry. |

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
defects: doc-drift, orphan, exit-code-mismatch, script-bug, missing-path, other

## Design notes
`MalformedProviderMetadataError` is an evaluation exception type raised when provider metadata cannot be truthfully recorded, classified as `kind: name-only` per D-023.
