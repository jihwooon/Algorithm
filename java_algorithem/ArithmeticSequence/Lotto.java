//[?] 1부터 20까지의 정수 중 홀수의 합을 구하는 프로그램
// 1, 3, 5, 7, 9, ... => 등차수열

import java.util.Scanner;

/**
 * 독일 로또는 {1, 2, ..., 49}에서 수 6개를 고른다.
 * 로또 번호를 선택하는데 사용되는 가장 유명한 전략은 49가지 수 중 k(k>6)개의 수를 골라 집합 S를 만든 다음 그 수만 가지고 번호를 선택하는 것이다.
 * 예를 들어, k=8, S={1,2,3,5,8,13,21,34}인 경우 이 집합 S에서 수를 고를 수 있는 경우의 수는 총 28가지이다. ([1,2,3,5,8,13], [1,2,3,5,8,21], [1,2,3,5,8,34], [1,2,3,5,13,21], ..., [3,5,8,13,21,34])
 * 집합 S와 k가 주어졌을 때, 수를 고르는 모든 방법을 구하는 프로그램을 작성하시오.
 */
public class Lotto {

    static int N;
    static int [] arr;
    static boolean[] result;

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while(true) {
            N = scanner.nextInt();

            if(N==0) {
                break;
            }
            arr = new int[N];
            result = new boolean[];
            for(int i = 0; i < N; i++) {
                arr[i] = scanner.nextInt();
            }

            DFS(0,0);
            System.out.println();
        }


    }

    private static void DFS(int start, int depth) {
        if(depth == 6) {
            for(int i = 0; i<N; i++) {
                if(result[i]) {
                    System.out.println(arr[i] + " ");
                }
            }
            System.out.println();
        }

        for(int i = start; i<N; i++) {
            result[i] = true;
            DFS(i+1, depth+1);
            result[i] = false;
        }
    }

}
