---
package: addy
name: Quick mode
slug: quick-mode
kind: technique
package_phase: addy:Verify
implementation_in_scope: true
memo_inputs:
  - {path: .gemini/commands/webperf.toml, sha256: 5b08fc19bacdb0f9984e9225a2c7913cef51249c9472f51169efa5a83f53a60b}
  - {path: agents/web-performance-auditor.md, sha256: 0928b1cf8103262a364bce0c1fc689a918852e2275441f1b2e687adfa1e607e9}
  - {path: commands/webperf.toml, sha256: a7ff4a4ab3c3e20e22edb7582542264813f2c6c11c9687878f3ff9f6e5b529be}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Quick mode

## Definition — verbatim
> "Quick mode — default when none of the above are available. Scan source code for structural anti-patterns and label every finding as `potential impact`." — commands/webperf.toml:16

## Also called — verbatim
`Quick mode` — agents/web-performance-auditor.md:12

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/webperf.toml | 16 | defines | Default audit mode in Gemini CLI scanning source code for anti-patterns. |
| agents/web-performance-auditor.md | 12 | defines | Persona operating mode executing static heuristic code analysis. |
| commands/webperf.toml | 16 | defines | Default operating mode definition for static code inspection in /webperf. |

## Consumes
Web application source files, UI components, or commit diffs without runtime measurement data

## Produces
A prioritized list of structural performance findings labelled as potential impact, with metrics marked not measured

## When applied
Activated by default whenever no runtime measurement artifacts or live browser testing integrations are available.

## Sub-concepts
potential-impact

## Part of
webperf, web-performance-auditor

## Implementation status
clean

## Design notes
Quick mode provides rapid heuristic performance scanning when empirical artifacts are unavailable. By strictly tagging findings as potential impact and marking unmeasured metrics as `not measured`, Quick mode preserves analytical honesty and prevents agents from fabricating quantitative performance scores.
