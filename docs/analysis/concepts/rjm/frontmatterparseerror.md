---
package: rjm
name: FrontmatterParseError
slug: frontmatterparseerror
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# FrontmatterParseError

## Definition — verbatim
(used, not defined)

> "class FrontmatterParseError(ConfigError):" — scripts/validation/check_plugin_frontmatter_self_containment.py:160

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_plugin_frontmatter_self_containment.py | 160 | defined here | Exception raised when a markdown file's YAML frontmatter cannot be decoded or parsed. |

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
clean

## Design notes
`FrontmatterParseError` is a custom Python exception class in `check_plugin_frontmatter_self_containment.py` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
