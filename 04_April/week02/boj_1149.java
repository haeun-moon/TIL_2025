import java.util.Scanner;

public class boj_1149 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();

        int [][] map = new int[N+1][3];

        for (int n = 1; n <= N; n++) {
            map[n][0] = sc.nextInt();
            map[n][1] = sc.nextInt();
            map[n][2] = sc.nextInt();
        }

        int [][] dp = new int[N+1][3];

        dp[1][0] = map[1][0];
        dp[1][1] = map[1][1];
        dp[1][2] = map[1][2];

        for (int i = 2; i <= N; i++) {
            dp[i][0] = Math.min(map[i][0] + dp[i-1][1], map[i][0] + dp[i-1][2]);
            dp[i][1] = Math.min(map[i][1] + dp[i-1][0], map[i][1] + dp[i-1][2]);
            dp[i][2] = Math.min(map[i][2] + dp[i-1][0], map[i][2] + dp[i-1][1]);
        }

        System.out.println(Math.min(dp[N][0], Math.min(dp[N][1], dp[N][2])));
    }
}
