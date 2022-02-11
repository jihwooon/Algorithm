import java.util.LinkedList;

public class HashTable {
    class Node {
        String Key;
        String value;
        public Node(String key,String value) {
            this.Key = key;
            this.value = value;
        }
        String value() {
            return value;

        }
        void value(String value) {
            this.value = value;

        }
    }

    LinkedList<Node>[] data;
    HashTable(int size) {
        this.data = new LinkedList[size];
    }
    int getHashCode(String key) {
        int hashcode = 0;
        for(char c : key.toCharArray()) {
            
        }

    }
}


class Test {
    public static void main (String[] args) {


    }

}