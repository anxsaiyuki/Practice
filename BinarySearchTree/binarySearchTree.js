var BinaryTree = function(val) {
	this.tree = new Node(val);
  return this;
}

BinaryTree.prototype.addValue = function(val) {
	this.tree.addNode(val);
}

var Node = function(val) {
	this.val = val;
	this.left = null
  this.right = null
  return this;
}

Node.prototype.addNode = function(val) {
	if (this.val < val) {
  	//Left
    if (this.left == null) {
    	this.left = new Node(val);
    } else {
    	this.left.addNode(val)
    }
  } else {
  	//Right
    if (this.right == null) {
    	this.right = new Node(val);
    } else {
    	this.right.addNode(val)
    }
  }
}

var b = new BinaryTree(5);
console.log(b);
b.addValue(6);