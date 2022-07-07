class Trie {
  constructor() {
    this.map = {};
    this.isTerminal = false;
    this.words = [];
  }

  insert(str) {
    let n = str.length;
    let root = this;
    for (let i = 0; i < n; i++) {
      if (!root.map[str[i]]) {
        root.map[str[i]] = new Trie();
      }
      root = root.map[str[i]];
      root.words.push(str);
    }
    root.isTerminal = true;
  }

  search(str) {
    let n = str.length;
    let root = this;
    for (let i = 0; i < n; i++) {
      if (!root.map[str[i]]) return [];
      root = root.map[str[i]];
    }
    return root.words;
  }
}
