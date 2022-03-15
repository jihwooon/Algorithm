package com.algorithem.java.recursion;

public class Code06 {
    public static void main(String[] args) {
        int [] data = {1,2,3,4,6,5,7};
        int result = sum(7,data);
        System.out.println(result);
    }

    public static int sum(int n, int [] data) {
        if (n <= 0) {
            return 0;
        } else {
            return sum(n-1, data) + data[n-1];
        }
    }
}
