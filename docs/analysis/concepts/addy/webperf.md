---
package: addy
name: "/webperf"
slug: webperf
kind: technique
package_phase: addy:Ship
implementation_in_scope: true
memo_inputs:
  - {path: .gemini/commands/webperf.toml, sha256: 5b08fc19bacdb0f9984e9225a2c7913cef51249c9472f51169efa5a83f53a60b}
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: external/code-review-and-quality.md, sha256: 9cd4e257b466f8e1700ef732f39b9dae5ac66573a0d022fdf67381796e011773}
  - {path: external/performance-optimization.md, sha256: d1fe0e9a06b111d8e6920adb8f275abf4f32a4c8bda25dcb38fa22c7814953ac}
  - {path: external/security-and-hardening.md, sha256: 47b655926f0b175781fed1412394deeb576f631554fad3bef4c73ac054e106f9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# /webperf

## Definition — verbatim
> "/webperf targets web applications specifically. Do not use it for utility libraries, CLIs, or server-only code with no browser-facing output." — .gemini/commands/webperf.toml:4

## Also called — verbatim
`webperf` — README.md:34

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/webperf.toml | 4 | defines | Command prompt definition targeting browser-facing web applications. |
| external/code-review-and-quality.md | 12 | references | Cited in external documentation sidebar as related review capability. |
| external/performance-optimization.md | 5 | references | Highlighted on external documentation page as primary command badge. |
| external/security-and-hardening.md | 12 | references | Cited in external documentation sidebar as related audit command. |
| README.md | 34 | defines | Listed in root README table as dedicated web performance audit command. |

## Consumes
Web application source code, diffs, live URLs, or performance artifacts (Lighthouse, PSI, CrUX, traces)

## Produces
Performance scorecard, ranked findings, positive observations, and concrete remediation recommendations

## When applied
Used specifically for web applications to audit frontend performance and Core Web Vitals; not used for CLIs or utility libraries.

## Sub-concepts
deep-mode, quick-mode, web-performance-auditor

## Part of
performance-optimization

## Implementation status
defects: doc-drift, orphan (external documentation pages external/performance-optimization.md, external/code-review-and-quality.md, external/security-and-hardening.md exhibit doc-drift and orphan status; command implementations are clean)

## Design notes
`/webperf` provides a focused audit workflow exclusively for browser-facing web applications. Because general launch commands can produce noisy reports on non-web projects, `/webperf` isolates web performance analysis under a single specialized persona operating in either Quick or Deep mode.
