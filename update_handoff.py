import re

with open('docs/plan/sessions/003-inventory.md', 'r') as f:
    content = f.read()

# Update frontmatter
content = re.sub(r'units_completed: \[\]', 'units_completed: [inv-addy-3]', content)

# Append to "What was done"
content += "- `teamwork_preview` subagent successfully extracted inventory for `inv-addy-3` (3 files).\n"
content += "- Verified output with `coverage.ts` and `glossary-lint.ts`.\n"
content += "- Subagent updated `STATE.md` counts and manifest correctly.\n\n"

content += "## What the next session must know\n"
content += "- The `teamwork_preview` subagent is extremely capable and can perform end-to-end work unit processing, including state and manifest updates. Continue dispatching it using the exact prompt template established in Session 002 for subsequent `inv-addy-*` units.\n\n"

content += "## Blocked\n"
content += "none\n\n"

content += "## Next action\n"
content += "Claim `inv-addy-4` in `STATE.md` and dispatch the `teamwork_preview` subagent.\n\n"

content += "## For Peter\n"
content += "none\n"

with open('docs/plan/sessions/003-inventory.md', 'w') as f:
    f.write(content)
