---
package: rjm
name: schemaVersion
slug: schemaversion
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md, sha256: 372fb931a8c30981245b40f2f1c4e4e6b9f02ec57dc06bb7afafa88e9cf8f2fd}
  - {path: .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md, sha256: d4d4d47d8635f0c96a17abe1ff50382189eea4aab68a7a7e39bf691d033c6e0a}
  - {path: .claude/skills/software-engineering-library/references/data-intensive-applications.md, sha256: 849c17929d9fcbfb67cd80bfaf45d998ed1def423b7783192cf7e3dbe997cb51}
  - {path: scripts/eval/_run_rollup_core.py, sha256: 7b724d731f03e48a368c4833f20009d8afbd8265de0771c03c225831de8bcbe6}
  - {path: scripts/eval/examples/e2e-delivery-fixtures.json, sha256: b4cfa4a94ba048652e53a1e8b9fc021f704c4e43273e9a40ec5723dfc8afd874}
  - {path: scripts/metrics/kill_criteria.py, sha256: df07f1498c8f0ffe5579934dc3331a3e5de5d023fd502207bfb31cb7ea8dc686}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# schemaVersion

## Definition — verbatim
> "Version the envelope, not just the payload. A `schemaVersion` field on every persisted document and event makes future migrations diagnosable." — .claude/skills/software-engineering-library/references/data-intensive-applications.md:101

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md | 193 | used here | Required in platform specification YAML to declare generator schema compatibility. |
| .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md | 48 | used here | Mandated under AC-1 as a mandatory integer field on fixture JSON documents. |
| .claude/skills/software-engineering-library/references/data-intensive-applications.md | 101 | defined here | Stated as an architectural principle requiring envelope versioning on all persisted events. |
| scripts/eval/_run_rollup_core.py | 16 | used here | Cited in design comments noting that adding fields would bump schemaVersion across write paths. |
| scripts/eval/examples/e2e-delivery-fixtures.json | 2 | defined here | Declared at the root of evaluation fixture JSON files to version document structure. |
| scripts/metrics/kill_criteria.py | 29 | defined here | Included in drift event JSON lines to enable diagnosable schema migrations. |

## Consumes
Serialized data models, JSON/YAML envelopes, and event structures.

## Produces
Explicit integer version tagging enabling backward- and forward-compatible migrations.

## When applied
Attached to the root envelope of every persisted document, evaluation fixture, and telemetry event stream.

## Sub-concepts
none

## Part of
data-intensive-applications

## Implementation status
clean

## Design notes
`schemaVersion` is an architectural convention across rjm requiring all persisted records, telemetry streams, and test fixtures to include an integer version field in their root envelope. This enforces disciplined schema evolution, enabling consumers to detect breaking format changes and migrate historical logs without silent failures.
