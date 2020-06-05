function List () {
  // 节点
  let Node = function (element) {
    this.element = element
    this.next = null
  }
  // 初始头节点为 null
  let head = null
  
  // 链表长度
  let length = 0
  // 操作
  this.getList = function() {return head}
  this.search = function(list, element) {}
  this.append = function(element) {
    let node = new Node(element),
      p = head;

    if (!head) {
      head = node
    } else {
      // 遍历到链表尾结点
      while (p.next) {
        p = p.next
      }

      // 将新节点插入到尾结点后面
      p.next = node
    }
    length++
  }
  this.insert = function(position, element) {}
  this.remove = function(element){}
  this.isEmpty = function(){}
  this.size = function(){}
}

// 测试
let list = new List()
for(let i = 0; i < 5; i+=1) {
  list.append(i)
}