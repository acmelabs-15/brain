---
package: rjm
name: canonical-source-mirror.md
slug: canonical-source-mirror-md
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md, sha256: 14474578a6089b011c08d942a1df83bce2ec03802b99f5f91a2b98a3e10555cd}
  - {path: .claude/skills/review/scripts/validate_review_marker.py, sha256: 544dafe1234d93afd9cba8b65d80c67fd198918f7a44838a56528ed5256afd11}
  - {path: scripts/validation/check_canonical_citations.py, sha256: e4e5b8b622488dcc368c7dea8195de353e5b8a3325a9a07da0b9c67bccef3dd5}
  - {path: scripts/validation/check_citation_freshness.py, sha256: 2cabc79d74cce6a5aef3cdbb5db6b92d10164f69e0c58717646e8ca8fe68406a}
  - {path: scripts/validation/validate_agent_catalog.py, sha256: b5d78d816710a2c6fdc598425db8df567139033f76ea7c8fda36eaa10672c49c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# canonical-source-mirror.md

## Definition — verbatim
(used, not defined)

> "canonical-source-mirror.md" — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:98

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md | 98 | used here | Cited as architectural rule that shims claiming to mirror canonical hooks must not drift. |
| .claude/skills/review/scripts/validate_review_marker.py | 53 | used here | Referenced in comment explaining trailer key definition synchronization between writer and reader. |
| scripts/validation/check_canonical_citations.py | 4 | used here | Cited in docstring as the rule whose spirit is enforced by validating canonical path citations. |
| scripts/validation/check_citation_freshness.py | 5 | used here | Cited in docstring as prescribing the manual gate automated for added-line citations. |
| scripts/validation/validate_agent_catalog.py | 10 | used here | Referenced in module docstring establishing generator as single owner of contract. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
canonical-source-mirror.md is a rule documentation file name and reference path rather than an operational lifecycle concept, classified as name-only per D-023.
