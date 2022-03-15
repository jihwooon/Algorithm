package com.algorithem.java.recursion;

public class Code04 {


    public static void main(String[] args) {
        System.out.println(printChars("abc"));
    }

    public static String printChars(String str) {
        if(str.length() == 0) {
            return str;
        } else {
            System.out.println(str.charAt(0));
            printChars(str.substring(1));
        }

        return str;
    }
}
