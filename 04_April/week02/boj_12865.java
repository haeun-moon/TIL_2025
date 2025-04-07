import java.util.Scanner;

public class boj_12865 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        int K = sc.nextInt();

        int [][] map = new int[N+1][2];

        for (int n =1; n <= N; n++) {
            map[n][0] = sc.nextInt();
            map[n][1] = sc.nextInt();
        }

        int [] dp = new int[K+1];

        for (int n = 1; n <= N; n++) {
            int w = map[n][0];
            int v = map[n][1];

            for (int i = K; i >= 0; i--) {
                if (i + w <= K) {
                    dp[i + w] = Math.max(dp[i + w], dp[i] + v);
                }
            }
        }
        System.out.println(dp[K]);
    }
}
