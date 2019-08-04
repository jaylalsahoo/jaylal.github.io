class Node {
    constructor(value ,next=null){
     this.value= value;
     this.next=null;
    }
  toString(){
      return this.value;
  }
}

class LinkedList {
    constructor(){
        this.head=null;
        this.tail=null;
    }

    append(value){
     let newNode = new Node(value);
     if(!this.tail){
         this.head=newNode;
         this.tail =newNode;
     } else {
         this.tail.next = newNode;
         this.tail= newNode;
     }
    }
    prepend(value){
        let newNode = new Node(value);
      if(!this.head){
          this.head=newNode;
          this.tail=newNode;
      } else {
          newNode.next =this.head;
          this.head= newNode;

      }
    }

    search(value){
        let currentNode =this.head;
        while(currentNode){
            if(currentNode.value ===value){
                return currentNode;
            }
            currentNode =currentNode.next;
        }
        return null;
    }
    delete(value){
    let currentNode =this.head;
        if(!currentNode) { return null; }
        if(currentNode.value === value) {
            currentNode=  currentNode.next;
            return;
        }
        while(currentNode.next){
        if(currentNode.next.value === value){
            currentNode.next = currentNode.next.next;
            break;
        }
        currentNode= currentNode.next;
        }
        if(this.tail.value === value){
           this.tail = currentNode;
        }
    }
    print() {
        let currentNode =this.head;
        let values =[];
        while(currentNode){
         values.push(currentNode.toString());
         currentNode=currentNode.next;
        }
        console.log(values);
    }
}

let l = new LinkedList();
l.append(100);
l.append(200);
l.print();
l.prepend(300);
l.print();
l.search(100);
l.print();
l.delete(100);
l.print();
