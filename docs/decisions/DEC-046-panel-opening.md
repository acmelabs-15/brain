---
id: DEC-046
status: superseded by DEC-048 # proposed | accepted | superseded by DEC-NNN
kind: decision # architecture exactly when all three adr-test answers are true
adr-test:
  hard-to-reverse: false
  surprising: false
  real-trade-off: true
from: IDEA-015#12 # a row (IDEA-NNN#NN, SPEC-NNN#NN), an idea or spec (IDEA-NNN, SPEC-NNN), or user
evidence: [RES-072, RES-074] # the RES files this decision rests on
decided: 2026-11-21 by Peter
---
# DEC-046: The panel is closed by default and remembers

Peter decided that the views panel is closed by default; a user who wants it in every session sets a plugin option, in settings.json `pluginConfigs` or through `/config`, and a panel the user opens with the command opens again in the next session. The user opens it with `/brain-session`, also during a turn, or with a key bound to that command (RES-074); a command a mod registers runs without the plugin prefix (RES-072, the 2.1.330 type file), so `/brain:session` is not available that way. The agent chose, as cheap and reversible choices, the command's arguments (`status`, the default; `ideas`; `specs`; `phases SPEC-NNN`; `tasks IDEA-NNN` or `tasks SPEC-NNN`; an item ID for its detail view) and one `userConfig` field, `panel`, with the options `remember`, the default, and `always`. The views stay separate from IDEA-013's opening question; one Brain mod serves both (RES-072).
