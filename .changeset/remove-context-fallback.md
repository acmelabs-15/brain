---
"@acmelabs/brain": minor
---

**Breaking:** brain no longer reads `CONTEXT.md` in place of `GLOSSARY.md`, as 0.9.0 announced. A repo that keeps its glossary only in a root `CONTEXT.md` or `CONTEXT-MAP.md` now has no glossary that brain's skills read. To keep it, run setup-brain and say yes to the glossary rename: its `--rename-glossary` moves the file to `GLOSSARY.md` or `GLOSSARY-MAP.md` with `git mv`, so the file keeps its history. The same run rewrites `docs/agents/domain.md`, which no longer names `CONTEXT.md` in place of `GLOSSARY.md`.
