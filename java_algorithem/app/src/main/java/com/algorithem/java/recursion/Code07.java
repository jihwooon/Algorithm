package com.algorithem.java.recursion;

import java.util.Scanner;

public class Code07 {

    public static void main(String[] args) {

    }

    public void readFrom(int n, int [] data, Scanner in) {
        if(n == 0) {
            return;
        } else {
            readFrom(n-1, data, in);
            data[n-1] = in.nextInt();
        }
    }
}
