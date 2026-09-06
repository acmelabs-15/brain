---
package: addy
name: Chrome DevTools MCP
slug: chrome-devtools-mcp
kind: reference
package_phase: addy:Verify
implementation_in_scope: true
memo_inputs:
  - {path: .gemini/commands/test.toml, sha256: c54f004d67f9fd4f8a5c9ab753ef99d3dd3d12cdc304473ea61db8c8680fe84d}
  - {path: commands/test.toml, sha256: c54f004d67f9fd4f8a5c9ab753ef99d3dd3d12cdc304473ea61db8c8680fe84d}
  - {path: commands/webperf.toml, sha256: a7ff4a4ab3c3e20e22edb7582542264813f2c6c11c9687878f3ff9f6e5b529be}
  - {path: external/browser-testing-with-devtools.md, sha256: 5438d8b5154a91cee59d13be99fd577e09dac2956d9412f67fddaa15db287cbe}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Chrome DevTools MCP

## Definition — verbatim
> "For browser-related issues, also invoke browser-testing-with-devtools to verify with Chrome DevTools MCP." — commands/test.toml:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/test.toml | 18 | references | Prescribed as the MCP tool provider for browser verification. |
| commands/test.toml | 18 | references | Prescribed in test command prompt for runtime browser verification. |
| commands/webperf.toml | 13 | references | Listed as live measurement source for capturing performance traces. |
| external/browser-testing-with-devtools.md | 5 | references | Highlighted in external documentation page as browser testing tool provider. |

## Consumes
Configured Model Context Protocol server, Chromium browser instance, live web application URL

## Produces
Agent-accessible browser automation and inspection tools (DOM inspection, console logs, network capture, screenshots)

## When applied
Used whenever verifying frontend changes in a browser, auditing live web performance, or debugging client-side errors.

## Sub-concepts
chrome-devtools-mcp-cli

## Part of
browser-testing-with-devtools, webperf

## Implementation status
defects: doc-drift, orphan (external/browser-testing-with-devtools.md exhibits doc-drift and orphan status; core CLI usage is clean)

## Design notes
Chrome DevTools MCP serves as the protocol connection that allows coding agents to interact with a headless or visual browser. It turns the browser into an observable execution environment, enabling agents to verify UI changes, capture runtime metrics, and inspect network traffic.
