---
package: rjm
name: least privilege
slug: least-privilege
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-040-skill-frontmatter-standardization.md, sha256: d88fb7a689fdf3807c1acf3bceb30b2504cf982966d8b28f440ce3b2fe0fcb93}
  - {path: .claude/skills/threat-modeling/SKILL.md, sha256: a4ed722e2a09f53130a86c1f42db100ac87f504c85e0198e726a5c40cfdbbb62}
  - {path: .claude/skills/threat-modeling/references/security-defense-in-depth.md, sha256: a4cb2852432f3f7a68fbe3bd3a5e80fca548f87c0803c6b05665ca98e72f614d}
  - {path: .claude/skills/threat-modeling/references/security-owasp-top-10.md, sha256: c84e707337731a44229ec09a5a162f88474a205262ad3a0ef9041b6ae9899533}
  - {path: .claude/skills/threat-modeling/references/security-zero-trust.md, sha256: d85765e15d48f30562264cd967c18952978ab3f76ff0c35fe846048d1888dc26}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# least privilege

## Definition — verbatim
> "Apply principle of least privilege:" — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:223

## Also called — verbatim
> "- [Least Privilege](security-least-privilege.md): Foundation principle of Zero Trust" — .claude/skills/threat-modeling/references/security-zero-trust.md:98

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-040-skill-frontmatter-standardization.md | 223 | defined here | Mandated in tool restrictions (allowed-tools) so skills declare only the minimal tools required. |
| .claude/skills/threat-modeling/references/security-defense-in-depth.md | 78 | used here | Layered security pattern minimizing blast radius across architecture components. |
| .claude/skills/threat-modeling/references/security-owasp-top-10.md | 103 | used here | Cited as the foundational mitigation pattern against OWASP A01 Broken Access Control. |
| .claude/skills/threat-modeling/references/security-zero-trust.md | 98 | used here | Identified as the cornerstone principle underpinning Zero Trust architecture. |
| .claude/skills/threat-modeling/SKILL.md | 435 | used here | Reference guide mapping permission scoping patterns to security mitigation recommendations. |

## Consumes
Analysis of required tool permissions, execution scopes, and security risk profiles.

## Produces
Restricted `allowed-tools` declarations and granular access controls that minimize blast radius.

## When applied
When declaring agent or skill capabilities, configuring tool restrictions, or designing security boundaries.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
The principle of least privilege in rjm enforces that every agent, skill, and tool invocation is granted only the absolute minimum permissions required to perform its function. In skill frontmatter, this is implemented through `allowed-tools`, ensuring read-only skills cannot invoke destructive shell commands or file edits.
