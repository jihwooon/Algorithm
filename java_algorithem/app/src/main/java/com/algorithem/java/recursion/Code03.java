package com.algorithem.java.recursion;


public class Code03 {

    public static void main(String[] args) {

        length("abcdfg");
        System.out.println(length("abcdfbg"));

    }

    public static int length(String str) {
        if(str.equals(""))
            return 0;
        else
            return 1+length(str.substring(1));
    }
}
