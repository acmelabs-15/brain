---
package: rjm
name: CO-PRIMARY signal
slug: co-primary-signal
kind: technique
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md, sha256: 2e49561b59500f4a4b6d417dfc94da905bdb2eb57a996e3070193904150cd40d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# CO-PRIMARY signal

## Definition — verbatim
> "CO-PRIMARY signal is `skill list` succeeding with no loader warning. Skill" — .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:158

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md | 158 | defined here | Co-equal verification signal: successful skill list command execution without harness loader warnings. |

## Consumes
CLI command execution (`skill list`) and stderr output stream.

## Produces
Verification that skill manifests parsed cleanly without syntax or routing warnings.

## When applied
Evaluated alongside the primary hook signal in end-to-end plugin smoke tests.

## Sub-concepts
none

## Part of
signal-hierarchy

## Implementation status
defects: missing-path, doc-drift

## Design notes
The CO-PRIMARY signal pairs with the primary hook execution check by validating that `skill list` completes without loader warnings. This ensures that the plugin's skill definitions are structurally sound and parseable by the host runtime.
