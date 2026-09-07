---
package: rjm
name: command-chaining bypass
slug: command-chaining-bypass
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md, sha256: 664b46f110094bbed7c45aab168811441cde25fb9bfc05eaae862beca4c4e09c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# command-chaining bypass

## Definition — verbatim
(used, not defined)

> "This fixes the command-chaining bypass class tracked upstream in anthropics/claude-code#4956." — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:212-213

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md | 213 | used here | Vulnerability pattern where chained commands bypass permission matching via shell separators. |

## Consumes
Shell command execution requests and command-line parser tokenization logic.

## Produces
Security vulnerability scenarios or defensive separator splitting rules preventing unauthorized chained command execution.

## When applied
Evaluated during the design and security auditing of auto-approval rules and tool permission filters.

## Sub-concepts
none

## Part of
cross-harness-permission-surface-asymmetry

## Implementation status
defects: missing-path, doc-drift

## Design notes
Command-chaining bypass is a security vulnerability pattern wherein an agent or injected prompt appends unauthorized commands to an allowed executable string using shell separators. Recognizing and addressing this pattern ensures permission matchers split and evaluate each distinct command component.
