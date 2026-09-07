---
package: rjm
name: git_ls_markdown
slug: git-ls-markdown
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# git_ls_markdown

## Definition — verbatim
(used, not defined)

> "def git_ls_markdown(repo_root: Path) -> list[str]:" — scripts/validation/check_adr_links.py:201

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_links.py | 201 | defined here | Helper function querying git ls-files to return tracked markdown file paths. |

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
`git_ls_markdown` is a Python helper function identifier in `check_adr_links.py` querying tracked repository markdown files rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
