import java.util.Scanner;

public class boj_9084 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int T = sc.nextInt();

        for (int tc = 1; tc <= T; tc++) {

            int N = sc.nextInt();

            int [] arr = new int[N+1];

            for (int n = 1; n <= N; n++) {
                arr[n] = sc.nextInt();
            }

            int M = sc.nextInt();

            int [] dp = new int[M+1];

            dp[0] = 1;

            for (int n = 1; n <= N; n++) {
                int coin = arr[n];

                for (int i = coin; i <= M; i++) {
                    dp[i] += dp[i-coin];
                }
            }
            System.out.println(dp[M]);
        }
    }
}
