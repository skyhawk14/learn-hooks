class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

const LRUCache = function(cap) {
    this.cap = cap;
    this.count = 0;
    this.head = null;
    this.tail = null;
    this.cache = new Map();
    
    this.insert = function(key, value){
        const node = new Node(key, val);
        this.count++;
        this.cache.set(key, node);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
    };
        

}