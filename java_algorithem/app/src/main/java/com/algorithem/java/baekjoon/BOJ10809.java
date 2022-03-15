package com.algorithem.java.baekjoon;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Scanner;

//https://st-lab.tistory.com/62
public class BOJ10809 {

    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        String S = bufferedReader.readLine();

        //알파벳 갯수
        int[] arr = new int[26];

        // 0 부터 arr길이만큼 하나씩 오르면 -1로 나온다.
        for(int i = 0; i < arr.length; i++) {
            arr[i] = -1;
        }

        for(int i = 0; i < S.length(); i++) {
            char ch = S.charAt(i);

            if(arr[ch - 'a'] == -1) {	// arr 원소 값이 -1 인 경우에만 초기화
                arr[ch - 'a'] = i;
            }
        }

        for(int val : arr) {	// 배열 출력
            System.out.print(val + " ");
        }
    }
}
