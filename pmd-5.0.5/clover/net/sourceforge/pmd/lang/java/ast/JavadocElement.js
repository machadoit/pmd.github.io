var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":24,"id":11467,"methods":[{"el":14,"sc":2,"sl":10},{"el":18,"sc":2,"sl":16},{"el":23,"sc":2,"sl":20}],"name":"JavadocElement","sl":6}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_456":{"methods":[{"sl":10}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":11},{"sl":13}]},"test_77":{"methods":[{"sl":10}],"name":"testPmdOptions","pass":true,"statements":[{"sl":11},{"sl":13}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [456, 77], [456, 77], [], [456, 77], [], [], [], [], [], [], [], [], [], [], []]
