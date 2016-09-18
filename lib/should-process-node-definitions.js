'use strict';

function shouldProcessEveryNode(node) {
    return node.type !== 'text' || node.data.trim();
}

module.exports = {
    shouldProcessEveryNode: shouldProcessEveryNode
};
