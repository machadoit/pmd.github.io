var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":22,"id":52824,"methods":[{"el":17,"sc":5,"sl":10},{"el":21,"sc":5,"sl":19}],"name":"TokenEntryTest","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1876":{"methods":[{"sl":10}],"name":"testSimple","pass":true,"statements":[{"sl":12},{"sl":13},{"sl":14},{"sl":15},{"sl":16}]},"test_2110":{"methods":[{"sl":10}],"name":"testSimple","pass":true,"statements":[{"sl":12},{"sl":13},{"sl":14},{"sl":15},{"sl":16}]},"test_373":{"methods":[{"sl":10}],"name":"testSimple","pass":true,"statements":[{"sl":12},{"sl":13},{"sl":14},{"sl":15},{"sl":16}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [2110, 373, 1876], [], [2110, 373, 1876], [2110, 373, 1876], [2110, 373, 1876], [2110, 373, 1876], [2110, 373, 1876], [], [], [], [], [], []]
