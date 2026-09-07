---
package: rjm
name: internal overlay
slug: internal-overlay
kind: artifact
package_phase: cross-phase
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

# internal overlay

## Definition — verbatim
> "plus a local-only internal overlay, and dogfood both by installing them the way a" — .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:112

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md | 112 | defined here | Separate plugin bundle containing internal-only developer tooling and workflows. |

## Consumes
Items tagged `surface: internal` and build routing rules in `build_all.py`.

## Produces
`src/copilot-cli-internal` plugin package loaded locally by developers.

## When applied
Installed alongside the shipped base into `~/.copilot/installed-plugins/` for internal developer sessions.

## Sub-concepts
none

## Part of
dogfood-surface-separation

## Implementation status
defects: missing-path, doc-drift

## Design notes
The internal overlay provides a clean architectural solution for repository-internal tools and protocols without polluting the customer-shipped artifact. By packaging internal items as a secondary overlay plugin, engineers can leverage internal skills while keeping the public marketplace release lean and secure.
