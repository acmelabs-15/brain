---
package: addy
name: browser-testing-with-devtools
slug: browser-testing-with-devtools
kind: technique
package_phase: addy:Verify
implementation_in_scope: true
memo_inputs:
  - {path: .gemini/commands/test.toml, sha256: c54f004d67f9fd4f8a5c9ab753ef99d3dd3d12cdc304473ea61db8c8680fe84d}
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: commands/test.toml, sha256: c54f004d67f9fd4f8a5c9ab753ef99d3dd3d12cdc304473ea61db8c8680fe84d}
  - {path: evals/cases/browser-testing-with-devtools.json, sha256: 0d670cbe54814c4cc1dbc8eb8aa1d5233a2130493b85eb69488dd2e8e3c7f8bf}
  - {path: external/debugging-and-error-recovery.md, sha256: 609cad09179de130e4d22459bc24cd857cad8ec084733dc6f2a6d526cbdbead3}
  - {path: skills/test-driven-development/SKILL.md, sha256: 440fb3c9b76f4f1b0b564dfbaec19d370beab0167a3e2ab048ce59c5a865ecef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# browser-testing-with-devtools

## Definition — verbatim
> "## Browser Testing with DevTools" — skills/test-driven-development/SKILL.md:312

## Also called — verbatim
`browser-testing-with-devtools` — skills/test-driven-development/SKILL.md:341

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/test.toml | 18 | applies | Invoked in Gemini CLI /test command for browser runtime verification. |
| commands/test.toml | 18 | applies | Invoked in Claude Code /test command for browser runtime verification with DevTools. |
| evals/cases/browser-testing-with-devtools.json | 2 | applies | Target skill in evals test suite measuring browser runtime verification. |
| external/debugging-and-error-recovery.md | 12 | references | Referenced in external documentation sidebar as complementary skill. |
| README.md | 261 | references | Documented in root README under browser testing capabilities. |
| skills/test-driven-development/SKILL.md | 312 | defines | Core section defining runtime browser debugging workflow and tool matrix. |
| skills/test-driven-development/SKILL.md | 341 | references | Cross-references standalone skill for full setup and security boundary details. |

## Consumes
Live local web server or URL, Chrome DevTools MCP server, browser events, DOM state

## Produces
Runtime verification evidence: screenshots, console error logs, network traces, computed CSS inspections

## When applied
When verifying frontend UI behavior, debugging layout or rendering issues, or confirming clean console output.

## Sub-concepts
chrome-devtools-mcp

## Part of
test-driven-development

## Implementation status
defects: doc-drift (external/browser-testing-with-devtools.md exhibits 6-part anatomy drift and orphan status; external/debugging-and-error-recovery.md doc-drift)

## Design notes
Browser testing with DevTools gives AI agents runtime eyes into the browser environment. By inspecting the actual DOM, network requests, console errors, and rendering output through Chrome DevTools MCP, it catches runtime visual, network, and integration flaws that static unit tests cannot detect.
