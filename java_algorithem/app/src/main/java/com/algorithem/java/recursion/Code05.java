package com.algorithem.java.recursion;

public class Code05 {

    public static void main(String[] args) {
        //System.out.println(printCharReverse("1234"));
    }

    public static void printCharReverse(String str) {
        if(str.length() == 0) {
        }
        else {
            printCharReverse(str.substring(1));
            System.out.println(str.charAt(0));
        }

    }
}
