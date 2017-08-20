import tl = require('vsts-task-lib/task')
tl.debug("Starting PicklesDoc build step");
tl.getPathInput("featureDirectory", true, true);