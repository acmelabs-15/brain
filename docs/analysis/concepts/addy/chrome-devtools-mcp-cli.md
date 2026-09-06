---
package: addy
name: Chrome DevTools MCP CLI
slug: chrome-devtools-mcp-cli
kind: reference
package_phase: addy:Verify
implementation_in_scope: true
memo_inputs:
  - {path: .gemini/commands/webperf.toml, sha256: 5b08fc19bacdb0f9984e9225a2c7913cef51249c9472f51169efa5a83f53a60b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Chrome DevTools MCP CLI

## Definition — verbatim
> "from the Chrome DevTools MCP CLI" — .gemini/commands/webperf.toml:9

## Also called — verbatim
`Chrome DevTools MCP CLI` — agents/web-performance-auditor.md:25

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/webperf.toml | 9 | references | Documented as an on-demand CLI option to generate Lighthouse audit reports. |

## Consumes
Node.js runtime, npx toolchain, target web URL

## Produces
Lighthouse JSON audit report files and structured CLI tool output

## When applied
Used when the executing agent harness lacks a live Chrome DevTools MCP server, enabling local CLI execution of browser audit tools.

## Sub-concepts
none

## Part of
chrome-devtools-mcp, deep-mode

## Implementation status
clean

## Design notes
The Chrome DevTools MCP CLI provides a fallback command-line interface to browser auditing tools. By supporting ad-hoc execution via `npx -p chrome-devtools-mcp chrome-devtools <tool>`, it enables Deep mode audits even when persistent MCP server integrations are unavailable.
