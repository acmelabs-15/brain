---
package: rjm
name: SECONDARY soft signal
slug: secondary-soft-signal
kind: technique
package_phase: test
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

# SECONDARY soft signal

## Definition — verbatim
> "enumeration under `source: plugin` is only a SECONDARY soft signal, because" — .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:159

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md | 159 | defined here | Lower-confidence verification indicator demoted due to known Copilot CLI JSON omission bugs. |

## Consumes
JSON output from `skill list --json`.

## Produces
Secondary corroboration of plugin enumeration subject to known host omission bugs.

## When applied
Checked conditionally in tests without failing builds when host bugs suppress records.

## Sub-concepts
none

## Part of
signal-hierarchy

## Implementation status
defects: missing-path, doc-drift

## Design notes
The SECONDARY soft signal encompasses metadata inspections, such as querying `skill list --json` for `source: plugin` attributes. Because upstream GitHub Copilot CLI versions suffer from intermittent JSON record omission bugs despite successfully loading plugins, tests treat this signal as advisory rather than a blocking gating assertion.
