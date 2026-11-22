---
id: DEC-048
status: accepted # proposed | accepted | superseded by DEC-NNN
kind: decision # architecture exactly when all three adr-test answers are true
adr-test:
  hard-to-reverse: false
  surprising: false
  real-trade-off: true
from: IDEA-015#12 # a row (IDEA-NNN#NN, SPEC-NNN#NN), an idea or spec (IDEA-NNN, SPEC-NNN), or user
evidence: [RES-072, RES-074] # the RES files this decision rests on
decided: 2026-11-21 by Peter
---
# DEC-048: The panel command is /brain:session

Peter decided that the command that opens the views panel is `/brain:session`, for consistency with every other Brain command and skill, and that the rest of DEC-046 stands, so this record replaces it whole: the panel is closed by default; a user who wants it in every session sets the plugin option `panel` to `always`, in settings.json `pluginConfigs` or through `/config`; a panel the user opens with the command opens again in the next session (`remember`, the default); the user can bind a key to the command, which also works during a turn; and the views stay separate from IDEA-013's opening question, in the same Brain mod. The agent's argument form stays: `status` (the default), `ideas`, `specs`, `phases SPEC-NNN`, `tasks IDEA-NNN` or `tasks SPEC-NNN`, or an item ID. A command a mod registers cannot hold a colon and runs with no plugin prefix (RES-072), so how the mod serves `/brain:session` is IDEA-015#29; if no way works, the name returns to Peter.
