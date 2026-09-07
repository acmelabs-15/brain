---
package: rjm
name: Per-Harness Emission
slug: per-harness-emission
kind: pattern
package_phase: rjm:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-072-jtbd-plugin-architecture.md, sha256: dd3585a127093a7612362aaf1737c13379ef32d464af6f14b6151f87364c8052}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Per-Harness Emission

## Definition — verbatim
> "ADR-072: JTBD-Based Plugin Architecture with Per-Harness Emission" — .agents/architecture/ADR-072-jtbd-plugin-architecture.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-072-jtbd-plugin-architecture.md | 12 | defined here | Proposed in ADR-072 as a multi-target code generation strategy across AI developer harnesses |

## Consumes
Canonical source templates or Claude-canonical artifact trees.

## Produces
Target-specific emitted artifacts formatted for Claude Code, GitHub Copilot CLI, Cursor, and Codex CLI.

## When applied
Executed during build and release generation pipelines.

## Sub-concepts
asymmetric

## Part of
jtbd-based-plugin-architecture

## Implementation status
defects: missing-path

## Design notes
Per-Harness Emission is a code generation pattern in rjm where capabilities authored once in canonical source definitions are automatically compiled into the specific file formats, configuration schemas, and directory layouts required by different host harnesses (Claude Code, Copilot CLI, Cursor, Codex).
