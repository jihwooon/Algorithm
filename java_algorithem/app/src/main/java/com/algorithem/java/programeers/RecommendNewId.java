package com.algorithem.java.programeers;

public class RecommendNewId {

    public String solution(String new_id) {

        //Step 1
        new_id = replaceLowerCase(new_id);

        //Step 2
        new_id =removeSpecialCharacter(new_id);

        //Step 3

        //Step 4

        //Step 5

        //Step 6

        //Step 7

        return "";
    }

    String replaceLowerCase(String new_id) {
        return new_id.toLowerCase();
    }

    public String removeSpecialCharacter(String new_id) {

        for (char s : new_id.toCharArray()) {
            System.out.println(s);
        }

        return null;
    }

    public static void main(String[] args) {

    }
}

