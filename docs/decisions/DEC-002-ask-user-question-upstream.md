---
id: DEC-002
migrated: 0.8
decided: 2026-10-28
---
# DEC-002: ask-user-question is upstream's skill, copied as is

Decided 2026-10-28 by Peter.

`skills/ask-user-question/` holds `SKILL.md` and `references/` from
acmelabs-15/ask-user-question at `62d3b79`, byte for byte except three `metadata` lines.
`library` is `brain`, and `bun run version:sync` writes brain's version into
`library_version` and `version` at each release. The paragraph above the host table
also differs: it says to check which tool the session offers, then read that tool's
reference. Peter chose that fix for brain only. brain's rewrite under the
`question` module is gone, and so is its `agents/openai.yaml`. Upstream's
`skills/_artifacts/` folder is research, not skill, and stays out.

The files stay seeded, not vendored. brain owns them, and `bun run sync -- --check` does
not guard them. `upstream.json` pins `62d3b79`, and the lock records each file as seeded at
that commit, so `bun run sync -- --report` shows what upstream changes next.

`question:check` is retired from `bun run check` and CI. Its budgets measured the rewrite:
a description under 300 characters, `SKILL.md` under 250 lines, each reference under 120
lines, and no synonym from its list. Upstream's text fails 15 of them.
`spec/SPEC-question.md` is superseded.
